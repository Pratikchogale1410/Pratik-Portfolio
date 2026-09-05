"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { AdminNavLink } from "./AdminNavLink";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/experience", label: "Experience" },
  { href: "/admin/skills", label: "Skills" },
  { href: "/admin/theme", label: "Theme" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/settings", label: "Settings" },
];

function MobileDrawer({
  open,
  onClose,
  pathname,
  onLogout,
  loggingOut,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  onLogout: () => void;
  loggingOut: boolean;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Admin</p>
            <p className="mt-1 text-lg font-semibold">Portfolio CMS</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 overflow-y-auto p-3">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <AdminNavLink
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${
                  active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </AdminNavLink>
            );
          })}
        </nav>
        <div className="p-3">
          <button
            type="button"
            onClick={onLogout}
            disabled={loggingOut}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = async () => {
    setLoggingOut(true);
    setDrawerOpen(false);
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
        <aside className="border-b border-slate-200 bg-white md:w-64 md:border-b-0 md:border-r">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Admin</p>
              <p className="mt-1 text-lg font-semibold">Portfolio CMS</p>
            </div>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="hidden gap-1 overflow-x-auto p-3 md:flex md:flex-col">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <AdminNavLink
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${
                    active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </AdminNavLink>
              );
            })}
          </nav>
          <div className="hidden p-3 md:block">
            <button
              type="button"
              onClick={logout}
              disabled={loggingOut}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
            >
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </aside>

        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          pathname={pathname}
          onLogout={logout}
          loggingOut={loggingOut}
        />

        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      <div className="fixed bottom-4 right-4 md:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
    </div>
  );
}
