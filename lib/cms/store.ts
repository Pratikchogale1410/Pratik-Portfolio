import { createDefaultSiteData } from "./defaults";
import type { CmsSiteData } from "./types";

export async function getSiteData(): Promise<CmsSiteData> {
  return createDefaultSiteData();
}

export async function saveSiteData(data: CmsSiteData) {
  const payload: CmsSiteData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return payload;
}
