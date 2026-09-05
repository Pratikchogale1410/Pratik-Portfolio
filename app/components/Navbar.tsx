"use client";

import { useEffect, useState } from "react";

const LINKEDIN_URL = "https://linkedin.com/in/pratik-chogale";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Impact", href: "/#impact" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/#technology" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-3 md:pt-4">
        <div
          className={`flex h-14 items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-white px-3.5 shadow-[3px_3px_0_0_rgba(10,10,10,1)] transition-shadow duration-200 md:h-[60px] md:px-5 ${
            scrolled ? "shadow-[4px_4px_0_0_rgba(10,10,10,1)]" : ""
          }`}
        >
          <a
            href="/#top"
            className="flex shrink-0 items-center gap-2 text-[var(--foreground)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent)] font-display text-[13px] font-bold leading-none text-white shadow-[1.5px_1.5px_0_0_rgba(10,10,10,1)]">
              P
            </span>
            <span className="font-display text-[14px] font-semibold tracking-tight md:text-[15px]">
              PRATIK<span className="text-[var(--accent)]">.DEV</span>
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--accent)] px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white shadow-[2px_2px_0_0_rgba(10,10,10,1)] transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(10,10,10,1)]"
            >
              Let&apos;s Talk
            </a>
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[2px_2px_0_0_rgba(10,10,10,1)] transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(10,10,10,1)] lg:hidden"
          >
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}
