"use client";

import { useAdminData } from "../../components/AdminDataProvider";
import type { CmsProject } from "@/lib/cms/types";

function emptyProject(order: number): CmsProject {
  return {
    id: `project-${Date.now()}`,
    order,
    featured: false,
    visibility: "draft",
    category: "",
    name: "New Project",
    period: "",
    startDate: "",
    endDate: "",
    role: "Full Stack Developer",
    image: "",
    description: "",
    problem: "",
    solution: "",
    stack: [],
    features: [],
    contributions: [],
    demo: "",
    github: "",
  };
}

export default function AdminProjectsPage() {
  const { data, setData, save, saving, message, error, reload } = useAdminData();
  const projects = [...data.projects].sort((a, b) => a.order - b.order);

  const updateProject = (id: string, patch: Partial<CmsProject>) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, ...patch } : project,
      ),
    }));
  };

  const move = (id: string, direction: -1 | 1) => {
    const sorted = [...projects];
    const index = sorted.findIndex((project) => project.id === id);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= sorted.length) return;
    const swap = sorted[index];
    sorted[index] = sorted[target];
    sorted[target] = swap;
    setData((prev) => ({
      ...prev,
      projects: sorted.map((project, order) => ({ ...project, order: order + 1 })),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="mt-1 text-sm text-slate-500">Add, edit, reorder, publish, and hide projects.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() =>
              setData((prev) => ({
                ...prev,
                projects: [...prev.projects, emptyProject(prev.projects.length + 1)],
              }))
            }
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
          >
            + Add Project
          </button>
          <button type="button" onClick={() => void reload()} disabled={saving} className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 disabled:opacity-60">
            Cancel
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => void save()}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {message ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
          ✓ {message}
        </div>
      ) : null}
      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.id} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-semibold">
                {project.order}. {project.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="rounded-lg border px-2 py-1 text-xs hover:bg-slate-50" onClick={() => move(project.id, -1)}>
                  Up
                </button>
                <button type="button" className="rounded-lg border px-2 py-1 text-xs hover:bg-slate-50" onClick={() => move(project.id, 1)}>
                  Down
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-rose-200 px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"
                  onClick={() => {
                    if (!confirm("Delete this project?\n\nThis action cannot be undone.")) return;
                    setData((prev) => ({
                      ...prev,
                      projects: prev.projects
                        .filter((item) => item.id !== project.id)
                        .map((item, order) => ({ ...item, order: order + 1 })),
                    }));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {(
                [
                  ["name", "Project Name"],
                  ["category", "Category"],
                  ["period", "Period"],
                  ["startDate", "Start Date"],
                  ["endDate", "End Date"],
                  ["role", "Role"],
                  ["image", "Project Image URL"],
                  ["demo", "Live URL"],
                  ["github", "GitHub URL"],
                ] as const
              ).map(([key, label]) => (
                <label key={key} className="block text-sm">
                  <span className="mb-1 block font-medium text-slate-700">{label}</span>
                  <input
                    value={project[key]}
                    onChange={(e) => updateProject(project.id, { [key]: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2"
                  />
                </label>
              ))}
            </div>

            <label className="block text-sm">
              <span className="mb-1 block font-medium text-slate-700">Description</span>
              <textarea
                rows={4}
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </label>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-slate-700">Technologies (comma separated)</span>
                <input
                  value={project.stack.join(", ")}
                  onChange={(e) =>
                    updateProject(project.id, {
                      stack: e.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean),
                    })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-slate-700">Features (comma separated)</span>
                <input
                  value={project.features.join(", ")}
                  onChange={(e) =>
                    updateProject(project.id, {
                      features: e.target.value
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean),
                    })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </label>
            </div>

            <label className="block text-sm">
              <span className="mb-1 block font-medium text-slate-700">Contributions (one per line)</span>
              <textarea
                rows={4}
                value={project.contributions.join("\n")}
                onChange={(e) =>
                  updateProject(project.id, {
                    contributions: e.target.value
                      .split("\n")
                      .map((item) => item.trim())
                      .filter(Boolean),
                  })
                }
                className="w-full rounded-xl border border-slate-300 px-3 py-2"
              />
            </label>

            <div className="flex flex-wrap gap-4 text-sm">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={project.featured}
                  onChange={(e) => updateProject(project.id, { featured: e.target.checked })}
                />
                Featured
              </label>
              <label className="inline-flex items-center gap-2">
                Visibility
                <select
                  value={project.visibility}
                  onChange={(e) =>
                    updateProject(project.id, {
                      visibility: e.target.value as CmsProject["visibility"],
                    })
                  }
                  className="rounded-lg border border-slate-300 px-2 py-1"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="hidden">Hidden</option>
                </select>
              </label>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
