"use client";

import { useAdminData } from "../../components/AdminDataProvider";

export default function AdminMediaPage() {
  const { data, message, error, reload } = useAdminData();

  const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);
    form.append("kind", "other");

    const res = await fetch("/api/admin/media", { method: "POST", body: form });
    const json = await res.json();
    if (!res.ok) {
      alert(json.error || "Upload failed");
      return;
    }

    event.target.value = "";
    await reload();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this media item?")) return;
    const res = await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const json = await res.json();
    if (!res.ok) {
      alert(json.error || "Delete failed");
      return;
    }
    await reload();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Media</h1>
          <p className="mt-1 text-sm text-slate-500">Upload and manage images.</p>
        </div>
        <div className="flex gap-2">
          <label className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium cursor-pointer hover:bg-slate-50">
            Upload Image
            <input type="file" accept="image/*" className="hidden" onChange={upload} />
          </label>
          <button type="button" onClick={() => void reload()} className="rounded-xl border border-slate-300 px-4 py-2 text-sm">
            Refresh
          </button>
        </div>
      </div>

      {message ? <p className="text-sm text-emerald-600">✓ {message}</p> : null}
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.media.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <img src={item.url} alt={item.filename} className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{item.filename}</p>
                <p className="text-xs text-slate-500">{item.kind} · {(item.size / 1024).toFixed(1)} KB</p>
              </div>
              <button
                type="button"
                onClick={() => void remove(item.id)}
                className="rounded-lg border border-rose-200 px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {data.media.length === 0 ? (
        <p className="text-sm text-slate-500">No media uploaded yet.</p>
      ) : null}
    </div>
  );
}
