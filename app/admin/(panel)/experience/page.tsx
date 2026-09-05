"use client";

import { useAdminData } from "../../components/AdminDataProvider";

export default function AdminExperiencePage() {
  const { data, setData, save, saving, message, error, reload } = useAdminData();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Experience</h1>
          <p className="mt-1 text-sm text-slate-500">Manage roles and responsibilities.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
            onClick={() =>
              setData((prev) => ({
                ...prev,
                experiences: [
                  ...prev.experiences,
                  {
                    id: `exp-${Date.now()}`,
                    role: "New role",
                    company: "",
                    period: "",
                    tags: [],
                    points: [""],
                    visibility: "published",
                  },
                ],
              }))
            }
          >
            + Add Experience
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

      {data.experiences.map((item, index) => (
        <article key={item.id} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-3 md:grid-cols-2">
            {(
              [
                ["role", "Designation"],
                ["company", "Company"],
                ["period", "Date"],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="block text-sm">
                <span className="mb-1 block font-medium text-slate-700">{label}</span>
                <input
                  value={item[key]}
                  onChange={(e) =>
                    setData((prev) => {
                      const experiences = [...prev.experiences];
                      experiences[index] = { ...experiences[index], [key]: e.target.value };
                      return { ...prev, experiences };
                    })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2"
                />
              </label>
            ))}
          </div>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-slate-700">Tags (comma separated)</span>
            <input
              value={item.tags.join(", ")}
              onChange={(e) =>
                setData((prev) => {
                  const experiences = [...prev.experiences];
                  experiences[index] = {
                    ...experiences[index],
                    tags: e.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  };
                  return { ...prev, experiences };
                })
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-slate-700">Responsibilities (one per line)</span>
            <textarea
              rows={6}
              value={item.points.join("\n")}
              onChange={(e) =>
                setData((prev) => {
                  const experiences = [...prev.experiences];
                  experiences[index] = {
                    ...experiences[index],
                    points: e.target.value.split("\n"),
                  };
                  return { ...prev, experiences };
                })
              }
              className="w-full rounded-xl border border-slate-300 px-3 py-2"
            />
          </label>

          <button
            type="button"
            className="text-sm text-rose-600 hover:text-rose-700"
            onClick={() => {
              if (!confirm("Delete this experience?\n\nThis action cannot be undone.")) return;
              setData((prev) => ({
                ...prev,
                experiences: prev.experiences.filter((exp) => exp.id !== item.id),
              }));
            }}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );
}
