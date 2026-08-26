import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { requireAdmin } from "@/lib/cms/require-admin";
import { getSiteData, saveSiteData } from "@/lib/cms/store";
import type { CmsMediaItem } from "@/lib/cms/types";

const ALLOWED = new Set(["image/png", "image/jpeg", "image/jpg", "image/webp", "image/svg+xml"]);
const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const form = await request.formData();
    const file = form.get("file");
    const kind = String(form.get("kind") || "other") as CmsMediaItem["kind"];

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    if (!ALLOWED.has(file.type)) {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "File too large. Max 5MB." }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const ext =
      file.type === "image/png"
        ? "png"
        : file.type === "image/webp"
          ? "webp"
          : file.type === "image/svg+xml"
            ? "svg"
            : "jpg";

    const filename = `${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, filename), bytes);

    const url = `/uploads/${filename}`;
    const item: CmsMediaItem = {
      id: `media-${randomUUID()}`,
      url,
      filename: file.name || filename,
      type: file.type,
      size: file.size,
      kind: ["logo", "profile", "project", "other"].includes(kind) ? kind : "other",
      createdAt: new Date().toISOString(),
    };

    const site = await getSiteData();
    site.media = [item, ...site.media];
    if (item.kind === "logo") site.personalInfo.logoUrl = item.url;
    if (item.kind === "profile") site.personalInfo.profileImage = item.url;
    await saveSiteData(site);

    return NextResponse.json({ item, data: site, message: "Upload successful" });
  } catch (error) {
    console.error("Upload failed", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const body = await request.json();
    const id = String(body?.id || "");
    if (!id) return NextResponse.json({ error: "Missing media id." }, { status: 400 });

    const site = await getSiteData();
    const target = site.media.find((item) => item.id === id);
    site.media = site.media.filter((item) => item.id !== id);

    if (target?.url && site.personalInfo.logoUrl === target.url) site.personalInfo.logoUrl = "";
    if (target?.url && site.personalInfo.profileImage === target.url) {
      site.personalInfo.profileImage = "/images/profile.jpg";
    }

    await saveSiteData(site);
    return NextResponse.json({ data: site, message: "Media deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete media." }, { status: 500 });
  }
}
