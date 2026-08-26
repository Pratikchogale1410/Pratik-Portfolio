"use client";

import Link from "next/link";
import { useAdminData } from "../../components/AdminDataProvider";

export default function AdminDashboardPage() {
  const { data, loading } = useAdminData();

  if (loading) return <p className="text-sm text-slate-500">Loading dashboard...</p>;

  const publishedProjects = data.projects.filter((p) => p.visibility === "published").length;
  const skillsCount = data.skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Portfolio Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Manage content, projects, theme, and media.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Projects", value: String(data.projects.length) },
          { label: "Published", value: String(publishedProjects) },
          { label: "Experience", value: String(data.experiences.length) },
          { label: "Skills", value: String(skillsCount) },
          { label: "Images", value: String(data.media.length) },
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">Last Updated</p>
        <p className="mt-1 font-medium">{new Date(data.updatedAt).toLocaleString()}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/admin/projects" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
          + Add Project
        </Link>
        <Link href="/admin/content" className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium">
          Edit Portfolio
        </Link>
        <Link href="/admin/theme" className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium">
          Change Theme
        </Link>
        <Link href="/admin/media" className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium">
          Manage Images
        </Link>
      </div>
    </div>
  );
}
