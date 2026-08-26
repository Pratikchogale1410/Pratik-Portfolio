export type CmsVisibility = "published" | "draft" | "hidden";

export type CmsPersonalInfo = {
  name: string;
  role: string;
  location: string;
  headline: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resumeUrl: string;
  profileImage: string;
  logoUrl: string;
};

export type CmsHero = {
  heading: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  highlights: string[];
};

export type CmsAbout = {
  title: string;
  description: string;
  focus: string[];
  stack: string[];
};

export type CmsHighlight = {
  id: string;
  title: string;
  detail: string;
  metric?: { before: string; after: string };
};

export type CmsExperience = {
  id: string;
  role: string;
  company: string;
  period: string;
  tags: string[];
  points: string[];
  visibility: CmsVisibility;
};

export type CmsContribution = {
  id: string;
  title: string;
  detail: string;
};

export type CmsSkill = {
  id: string;
  name: string;
  description: string;
};

export type CmsSkillGroup = {
  id: string;
  category: string;
  skills: CmsSkill[];
};

export type CmsProject = {
  id: string;
  order: number;
  featured: boolean;
  visibility: CmsVisibility;
  category: string;
  name: string;
  period: string;
  startDate: string;
  endDate: string;
  role: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  contributions: string[];
  demo: string;
  github: string;
};

export type CmsTheme = {
  preset: "midnight" | "minimal" | "electric" | "professional" | "custom";
  background: string;
  backgroundElevated: string;
  foreground: string;
  muted: string;
  accent: string;
  accent2: string;
  border: string;
  card: string;
  radius: string;
  glowIntensity: number;
};

export type CmsMediaItem = {
  id: string;
  url: string;
  filename: string;
  type: string;
  size: number;
  kind: "logo" | "profile" | "project" | "other";
  createdAt: string;
};

export type CmsSiteData = {
  personalInfo: CmsPersonalInfo;
  hero: CmsHero;
  about: CmsAbout;
  highlights: CmsHighlight[];
  experiences: CmsExperience[];
  contributions: CmsContribution[];
  skillGroups: CmsSkillGroup[];
  aiCapabilities: string[];
  projects: CmsProject[];
  contactAvailability: string[];
  theme: CmsTheme;
  media: CmsMediaItem[];
  updatedAt: string;
};

export const THEME_PRESETS: Record<Exclude<CmsTheme["preset"], "custom">, CmsTheme> = {
  midnight: {
    preset: "midnight",
    background: "#07090f",
    backgroundElevated: "#0d111a",
    foreground: "#f4f6fb",
    muted: "#9aa3b5",
    accent: "#3b82f6",
    accent2: "#22d3ee",
    border: "rgba(148, 163, 184, 0.16)",
    card: "rgba(16, 22, 35, 0.86)",
    radius: "1.25rem",
    glowIntensity: 0.22,
  },
  minimal: {
    preset: "minimal",
    background: "#0a0a0a",
    backgroundElevated: "#141414",
    foreground: "#f5f5f5",
    muted: "#a3a3a3",
    accent: "#e5e5e5",
    accent2: "#a3a3a3",
    border: "rgba(255,255,255,0.12)",
    card: "rgba(20,20,20,0.9)",
    radius: "1rem",
    glowIntensity: 0.08,
  },
  electric: {
    preset: "electric",
    background: "#050816",
    backgroundElevated: "#0b1224",
    foreground: "#eef6ff",
    muted: "#94a3b8",
    accent: "#38bdf8",
    accent2: "#a78bfa",
    border: "rgba(56,189,248,0.2)",
    card: "rgba(11,18,36,0.88)",
    radius: "1.35rem",
    glowIntensity: 0.3,
  },
  professional: {
    preset: "professional",
    background: "#0b1220",
    backgroundElevated: "#111827",
    foreground: "#f8fafc",
    muted: "#94a3b8",
    accent: "#2563eb",
    accent2: "#0ea5e9",
    border: "rgba(148,163,184,0.18)",
    card: "rgba(17,24,39,0.9)",
    radius: "1.15rem",
    glowIntensity: 0.18,
  },
};
