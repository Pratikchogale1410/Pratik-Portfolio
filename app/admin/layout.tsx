import type { ReactNode } from "react";

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <div data-theme="light" className="admin-root min-h-screen bg-slate-100 pt-20 text-slate-900">{children}</div>;
}
