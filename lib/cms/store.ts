import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { createDefaultSiteData } from "./defaults";
import type { CmsSiteData } from "./types";

const SITE_DOC = doc(db, "cms", "site");

export async function getSiteData(): Promise<CmsSiteData> {
  try {
    const snap = await getDoc(SITE_DOC);
    if (!snap.exists()) {
      const defaults = createDefaultSiteData();
      await setDoc(SITE_DOC, defaults);
      return defaults;
    }
    const data = snap.data() as CmsSiteData;
    const defaults = createDefaultSiteData();
    return {
      ...defaults,
      ...data,
      personalInfo: { ...defaults.personalInfo, ...data.personalInfo },
      hero: { ...defaults.hero, ...data.hero },
      about: { ...defaults.about, ...data.about },
      theme: { ...defaults.theme, ...data.theme },
      projects: Array.isArray(data.projects) ? data.projects : defaults.projects,
      experiences: Array.isArray(data.experiences) ? data.experiences : defaults.experiences,
      skillGroups: Array.isArray(data.skillGroups) ? data.skillGroups : defaults.skillGroups,
      highlights: Array.isArray(data.highlights) ? data.highlights : defaults.highlights,
      contributions: Array.isArray(data.contributions) ? data.contributions : defaults.contributions,
      media: Array.isArray(data.media) ? data.media : defaults.media,
      aiCapabilities: Array.isArray(data.aiCapabilities)
        ? data.aiCapabilities
        : defaults.aiCapabilities,
      contactAvailability: Array.isArray(data.contactAvailability)
        ? data.contactAvailability
        : defaults.contactAvailability,
    };
  } catch (error) {
    console.error("Failed to load CMS site data", error);
    return createDefaultSiteData();
  }
}

export async function saveSiteData(data: CmsSiteData) {
  const payload: CmsSiteData = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await setDoc(SITE_DOC, payload, { merge: false });
  return payload;
}
