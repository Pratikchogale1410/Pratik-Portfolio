"use client";

import { useAdminData } from "../../components/AdminDataProvider";

function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-slate-700">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
        />
      )}
    </label>
  );
}

export default function AdminContentPage() {
  const { data, setData, save, saving, message, error, reload } = useAdminData();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Content</h1>
          <p className="mt-1 text-sm text-slate-500">Personal info, hero, about, and highlights.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => void reload()}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm"
          >
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

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="font-semibold">Personal Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Name"
            value={data.personalInfo.name}
            onChange={(value) =>
              setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, name: value } }))
            }
          />
          <Field
            label="Professional title"
            value={data.personalInfo.role}
            onChange={(value) =>
              setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, role: value } }))
            }
          />
          <Field
            label="Location"
            value={data.personalInfo.location}
            onChange={(value) =>
              setData((prev) => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, location: value },
              }))
            }
          />
          <Field
            label="Email"
            value={data.personalInfo.email}
            onChange={(value) =>
              setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, email: value } }))
            }
          />
          <Field
            label="Phone"
            value={data.personalInfo.phone}
            onChange={(value) =>
              setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, phone: value } }))
            }
          />
          <Field
            label="LinkedIn"
            value={data.personalInfo.linkedin}
            onChange={(value) =>
              setData((prev) => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, linkedin: value },
              }))
            }
          />
          <Field
            label="GitHub"
            value={data.personalInfo.github}
            onChange={(value) =>
              setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, github: value } }))
            }
          />
          <Field
            label="Portfolio URL"
            value={data.personalInfo.portfolio}
            onChange={(value) =>
              setData((prev) => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, portfolio: value },
              }))
            }
          />
        </div>
        <Field
          label="Short description"
          multiline
          value={data.personalInfo.summary}
          onChange={(value) =>
            setData((prev) => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, summary: value },
            }))
          }
        />
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="font-semibold">Hero Section</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Hero heading"
            value={data.hero.heading}
            onChange={(value) => setData((prev) => ({ ...prev, hero: { ...prev.hero, heading: value } }))}
          />
          <Field
            label="Subtitle"
            value={data.hero.subtitle}
            onChange={(value) =>
              setData((prev) => ({ ...prev, hero: { ...prev.hero, subtitle: value } }))
            }
          />
          <Field
            label="CTA text"
            value={data.hero.ctaText}
            onChange={(value) => setData((prev) => ({ ...prev, hero: { ...prev.hero, ctaText: value } }))}
          />
          <Field
            label="CTA URL"
            value={data.hero.ctaUrl}
            onChange={(value) => setData((prev) => ({ ...prev, hero: { ...prev.hero, ctaUrl: value } }))}
          />
        </div>
        <Field
          label="Description"
          multiline
          value={data.hero.description}
          onChange={(value) =>
            setData((prev) => ({ ...prev, hero: { ...prev.hero, description: value } }))
          }
        />
        <Field
          label="Highlights (comma separated)"
          value={data.hero.highlights.join(", ")}
          onChange={(value) =>
            setData((prev) => ({
              ...prev,
              hero: {
                ...prev.hero,
                highlights: value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean),
              },
            }))
          }
        />
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="font-semibold">About</h2>
        <Field
          label="About title"
          value={data.about.title}
          onChange={(value) => setData((prev) => ({ ...prev, about: { ...prev.about, title: value } }))}
        />
        <Field
          label="About description"
          multiline
          value={data.about.description}
          onChange={(value) =>
            setData((prev) => ({ ...prev, about: { ...prev.about, description: value } }))
          }
        />
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Highlights</h2>
          <button
            type="button"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
            onClick={() =>
              setData((prev) => ({
                ...prev,
                highlights: [
                  ...prev.highlights,
                  {
                    id: `highlight-${Date.now()}`,
                    title: "New highlight",
                    detail: "",
                  },
                ],
              }))
            }
          >
            Add highlight
          </button>
        </div>
        {data.highlights.map((item, index) => (
          <div key={item.id} className="space-y-3 rounded-xl border border-slate-200 p-4">
            <Field
              label="Title"
              value={item.title}
              onChange={(value) =>
                setData((prev) => {
                  const highlights = [...prev.highlights];
                  highlights[index] = { ...highlights[index], title: value };
                  return { ...prev, highlights };
                })
              }
            />
            <Field
              label="Detail"
              multiline
              value={item.detail}
              onChange={(value) =>
                setData((prev) => {
                  const highlights = [...prev.highlights];
                  highlights[index] = { ...highlights[index], detail: value };
                  return { ...prev, highlights };
                })
              }
            />
            <button
              type="button"
              className="text-sm text-rose-600"
              onClick={() => {
                if (!confirm("Delete this highlight?")) return;
                setData((prev) => ({
                  ...prev,
                  highlights: prev.highlights.filter((h) => h.id !== item.id),
                }));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </section>

    </div>
  );
}
