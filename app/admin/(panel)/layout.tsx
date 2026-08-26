"use client";

import type { ReactNode } from "react";
import { AdminDataProvider } from "../components/AdminDataProvider";
import { AdminShell } from "../components/AdminShell";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AdminDataProvider>
      <AdminShell>{children}</AdminShell>
    </AdminDataProvider>
  );
}
