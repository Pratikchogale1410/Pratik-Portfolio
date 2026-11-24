"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "hero", label: "Home", number: "01" },
  { id: "summary", label: "Summary", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "skills", label: "Skills", number: "04" },
  { id: "projects", label: "Projects", number: "05" },
  { id: "achievements", label: "Achievements", number: "06" },
  { id: "about", label: "About Me", number: "07" },
  { id: "contact", label: "Contact", number: "08" },
];

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -65% 0%" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 w-64 border-r border-[var(--border)] bg-black"
    >
      <div className="flex flex-col gap-1 p-4">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 px-4 py-3 border border-[var(--border)] ${isActive
                ? "bg-[var(--accent)] text-[var(--foreground)] shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                : "text-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
              } transition-colors duration-200`}
            >
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.14em]">
                {item.number}
              </span>
              <span className="text-[13px] font-bold uppercase tracking-[0.1em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
