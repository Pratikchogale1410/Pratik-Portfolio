"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CmsSiteData } from "@/lib/cms/types";
import { createDefaultSiteData } from "@/lib/cms/defaults";
import { useUnsavedChanges } from "./UnsavedChangesProvider";

type AdminDataContextValue = {
  data: CmsSiteData;
  setData: React.Dispatch<React.SetStateAction<CmsSiteData>>;
  loading: boolean;
  saving: boolean;
  message: string | null;
  error: string | null;
  reload: () => Promise<void>;
  save: (next?: CmsSiteData) => Promise<boolean>;
};

const AdminDataContext = createContext<AdminDataContextValue | null>(null);

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CmsSiteData>(createDefaultSiteData());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastSavedData, setLastSavedData] = useState<string | null>(null);
  const { setHasUnsavedChanges } = useUnsavedChanges();

  const reload = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/site");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load");
      setData(json.data);
      setLastSavedData(JSON.stringify(json.data));
      setHasUnsavedChanges(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, [setHasUnsavedChanges]);

  useEffect(() => {
    const id = setTimeout(() => {
      void reload();
    }, 0);
    return () => clearTimeout(id);
  }, [reload]);

  const save = useCallback(
    async (next?: CmsSiteData) => {
      setSaving(true);
      setMessage(null);
      setError(null);
      try {
        const payload = next ?? data;
        const res = await fetch("/api/admin/site", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: payload }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to save");
        setData(json.data);
        setLastSavedData(JSON.stringify(json.data));
        setHasUnsavedChanges(false);
        setMessage(json.message || "Changes saved successfully");
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        return false;
      } finally {
        setSaving(false);
      }
    },
    [data, setHasUnsavedChanges],
  );

  useEffect(() => {
    if (lastSavedData === null) return;
    const current = JSON.stringify(data);
    const changed = current !== lastSavedData;
    setHasUnsavedChanges(changed);
  }, [data, lastSavedData, setHasUnsavedChanges]);

  const value = useMemo(
    () => ({ data, setData, loading, saving, message, error, reload, save }),
    [data, loading, saving, message, error, reload, save],
  );

  return <AdminDataContext.Provider value={value}>{children}</AdminDataContext.Provider>;
}

export function useAdminData() {
  const ctx = useContext(AdminDataContext);
  if (!ctx) throw new Error("useAdminData must be used within AdminDataProvider");
  return ctx;
}
