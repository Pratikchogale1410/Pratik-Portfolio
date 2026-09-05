import { NextResponse } from "next/server";
import { getSiteData } from "@/lib/cms/store";

export async function GET() {
  try {
    const data = await getSiteData();
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Failed to load site data." }, { status: 500 });
  }
}
