"use client";

import type { ReactNode } from "react";
import { AdminDataProvider } from "../components/AdminDataProvider";
import { AdminShell } from "../components/AdminShell";
import { UnsavedChangesProvider } from "../components/UnsavedChangesProvider";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <UnsavedChangesProvider>
      <AdminDataProvider>
        <AdminShell>{children}</AdminShell>
      </AdminDataProvider>
    </UnsavedChangesProvider>
  );
}
