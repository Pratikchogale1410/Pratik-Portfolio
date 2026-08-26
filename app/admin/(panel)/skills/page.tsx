"use client";

import { useAdminData } from "../../components/AdminDataProvider";

export default function AdminSkillsPage() {
  const { data, setData, save, saving, message, error, reload } = useAdminData();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Skills</h1>
          <p className="mt-1 text-sm text-slate-500">Manage categories and skills.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
            onClick={() =>
              setData((prev) => ({
                ...prev,
                skillGroups: [
                  ...prev.skillGroups,
                  {
                    id: `skill-group-${Date.now()}`,
                    category: "New Category",
                    skills: [],
                  },
                ],
              }))
            }
          >
            + Add Category
          </button>
          <button type="button" onClick={() => void reload()} className="rounded-xl border border-slate-300 px-4 py-2 text-sm">
            Cancel
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => void save()}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {message ? <p className="text-sm text-emerald-600">✓ {message}</p> : null}
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      {data.skillGroups.map((group, groupIndex) => (
        <article key={group.id} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <input
              value={group.category}
              onChange={(e) =>
                setData((prev) => {
                  const skillGroups = [...prev.skillGroups];
                  skillGroups[groupIndex] = { ...skillGroups[groupIndex], category: e.target.value };
                  return { ...prev, skillGroups };
                })
              }
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold"
            />
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg border px-3 py-1.5 text-sm"
                onClick={() =>
                  setData((prev) => {
                    const skillGroups = [...prev.skillGroups];
                    skillGroups[groupIndex] = {
                      ...skillGroups[groupIndex],
                      skills: [
                        ...skillGroups[groupIndex].skills,
                        {
                          id: `skill-${Date.now()}`,
                          name: "New skill",
                          description: "",
                        },
                      ],
                    };
                    return { ...prev, skillGroups };
                  })
                }
              >
                Add skill
              </button>
              <button
                type="button"
                className="text-sm text-rose-600"
                onClick={() => {
                  if (!confirm("Delete this skill category?")) return;
                  setData((prev) => ({
                    ...prev,
                    skillGroups: prev.skillGroups.filter((item) => item.id !== group.id),
                  }));
                }}
              >
                Delete category
              </button>
            </div>
          </div>

          {group.skills.map((skill, skillIndex) => (
            <div key={skill.id} className="grid gap-3 rounded-xl border border-slate-200 p-3 md:grid-cols-[1fr_2fr_auto]">
              <input
                value={skill.name}
                onChange={(e) =>
                  setData((prev) => {
                    const skillGroups = [...prev.skillGroups];
                    const skills = [...skillGroups[groupIndex].skills];
                    skills[skillIndex] = { ...skills[skillIndex], name: e.target.value };
                    skillGroups[groupIndex] = { ...skillGroups[groupIndex], skills };
                    return { ...prev, skillGroups };
                  })
                }
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="Skill name"
              />
              <input
                value={skill.description}
                onChange={(e) =>
                  setData((prev) => {
                    const skillGroups = [...prev.skillGroups];
                    const skills = [...skillGroups[groupIndex].skills];
                    skills[skillIndex] = { ...skills[skillIndex], description: e.target.value };
                    skillGroups[groupIndex] = { ...skillGroups[groupIndex], skills };
                    return { ...prev, skillGroups };
                  })
                }
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
                placeholder="Description"
              />
              <button
                type="button"
                className="text-sm text-rose-600"
                onClick={() => {
                  if (!confirm("Delete this skill?")) return;
                  setData((prev) => {
                    const skillGroups = [...prev.skillGroups];
                    skillGroups[groupIndex] = {
                      ...skillGroups[groupIndex],
                      skills: skillGroups[groupIndex].skills.filter((item) => item.id !== skill.id),
                    };
                    return { ...prev, skillGroups };
                  });
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
