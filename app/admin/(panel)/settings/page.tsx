"use client";

import { useAdminData } from "../../components/AdminDataProvider";

export default function AdminSettingsPage() {
  const { save, saving, message, error, reload } = useAdminData();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="mt-1 text-sm text-slate-500">Site-wide configuration.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => void reload()} className="rounded-xl border border-slate-300 px-4 py-2 text-sm">
            Reset
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
        <h2 className="font-semibold">General</h2>
        <p className="text-sm text-slate-500">
          Additional site settings can be managed from the Content and Theme pages.
        </p>
      </section>
    </div>
  );
}
