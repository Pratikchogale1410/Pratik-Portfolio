"use client";

import { useEffect, useState } from "react";

type SiteData = {
  personalInfo: {
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
  hero: {
    heading: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
    highlights: string[];
  };
  about: {
    title: string;
    description: string;
    focus: string[];
    stack: string[];
  };
  highlights: Array<{
    id: string;
    title: string;
    detail: string;
    metric?: { before: string; after: string };
  }>;
  experiences: Array<{
    id: string;
    role: string;
    company: string;
    period: string;
    tags: string[];
    points: string[];
    visibility: string;
  }>;
  contributions: Array<{
    id: string;
    title: string;
    detail: string;
  }>;
  skillGroups: Array<{
    id: string;
    category: string;
    skills: Array<{
      id: string;
      name: string;
      description: string;
    }>;
  }>;
  aiCapabilities: string[];
  projects: Array<{
    id: string;
    order: number;
    featured: boolean;
    visibility: string;
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
  }>;
  contactAvailability: string[];
  theme: {
    preset: string;
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
  media: Array<{
    id: string;
    url: string;
    filename: string;
    type: string;
    size: number;
    kind: string;
    createdAt: string;
  }>;
  updatedAt: string;
};

export function useSiteData() {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/site", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load site data");
        const json = await res.json();
        if (!cancelled) {
          setData(json.data as SiteData);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to load portfolio data.");
          setLoading(false);
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error, refresh: () => setLoading(true) };
}
