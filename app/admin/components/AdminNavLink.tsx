"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";
import { useUnsavedChanges } from "./UnsavedChangesProvider";

export function AdminNavLink({
  href,
  children,
  className,
}: {
  href: string;
  children?: ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const { hasUnsavedChanges } = useUnsavedChanges();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasUnsavedChanges) return;
    event.preventDefault();
    const ok = confirm("You have unsaved changes. Discard changes and continue?");
    if (ok) {
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
