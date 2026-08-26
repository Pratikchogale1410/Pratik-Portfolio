import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/cms/require-admin";
import { getSiteData, saveSiteData } from "@/lib/cms/store";
import type { CmsSiteData } from "@/lib/cms/types";

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const data = await getSiteData();
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Failed to load site data." }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    const body = await request.json();
    const data = body?.data as CmsSiteData | undefined;
    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const saved = await saveSiteData(data);
    return NextResponse.json({ data: saved, message: "Changes saved successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to save site data." }, { status: 500 });
  }
}
