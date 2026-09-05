"use client";

import { useState } from "react";
import { THEME_PRESETS } from "@/lib/cms/types";
import { useAdminData } from "../../components/AdminDataProvider";

export default function AdminThemePage() {
  const { data, setData, save, saving, message, error, reload } = useAdminData();
  const [draft, setDraft] = useState(data.theme);

  const applyPreset = (preset: keyof typeof THEME_PRESETS) => {
    const next = { ...THEME_PRESETS[preset] };
    setDraft(next);
    setData((prev) => ({ ...prev, theme: next }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Theme</h1>
          <p className="mt-1 text-sm text-slate-500">Adjust colors and presets. Save to publish.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setDraft(data.theme);
              void reload();
            }}
            disabled={saving}
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={async () => {
              const next = { ...data, theme: { ...draft, preset: "custom" as const } };
              setData(next);
              await save(next);
            }}
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

      <div className="flex flex-wrap gap-2">
        {(Object.keys(THEME_PRESETS) as Array<keyof typeof THEME_PRESETS>).map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => applyPreset(preset)}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm capitalize hover:bg-slate-50"
          >
            {preset}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
          {(
            [
              ["background", "Primary background"],
              ["backgroundElevated", "Secondary background"],
              ["foreground", "Primary text"],
              ["muted", "Secondary text"],
              ["accent", "Accent color"],
              ["accent2", "Secondary accent"],
              ["border", "Border color"],
              ["card", "Card background"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-slate-700">{label}</span>
              <input
                type="color"
                value={draft[key].startsWith("#") ? draft[key].slice(0, 7) : "#000000"}
                onChange={(e) => setDraft((prev) => ({ ...prev, [key]: e.target.value, preset: "custom" }))}
              />
            </label>
          ))}
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-slate-700">Border radius</span>
            <input
              value={draft.radius}
              onChange={(e) => setDraft((prev) => ({ ...prev, radius: e.target.value, preset: "custom" }))}
              className="w-full rounded-xl border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-slate-700">
              Glow intensity ({draft.glowIntensity.toFixed(2)})
            </span>
            <input
              type="range"
              min={0}
              max={0.5}
              step={0.01}
              value={draft.glowIntensity}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  glowIntensity: Number(e.target.value),
                  preset: "custom",
                }))
              }
              className="w-full"
            />
          </label>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5" style={{ background: draft.background }}>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: draft.accent }}>
            Preview
          </p>
          <h2 className="mt-2 text-2xl font-semibold" style={{ color: draft.foreground }}>
            Portfolio Preview
          </h2>
          <p className="mt-2 text-sm" style={{ color: draft.muted }}>
            Accents and cards update based on your theme settings.
          </p>
          <div
            className="mt-5 rounded-2xl p-4"
            style={{
              background: draft.card,
              border: `1px solid ${draft.border}`,
              borderRadius: draft.radius,
              boxShadow: `0 0 40px rgba(59,130,246,${draft.glowIntensity})`,
            }}
          >
            <p style={{ color: draft.foreground }}>Sample card</p>
            <button
              type="button"
              className="mt-3 rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: draft.accent }}
            >
              Accent button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
