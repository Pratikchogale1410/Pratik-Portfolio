"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const tags = [
  "AI APPLICATIONS",
  "CRM SYSTEMS",
  "DATABASE OPTIMIZATION",
  "API INTEGRATIONS",
  "WHATSAPP AUTOMATION",
  "NEXT.JS",
];

const modules = [
  { code: "AI", label: "AI", sub: "LLM / OpenRouter", accent: true },
  { code: "CRM", label: "CRM", sub: "Lead Workflow" },
  { code: "DB", label: "DATABASE", sub: "Convex" },
  { code: "API", label: "API", sub: "REST" },
  { code: "WA", label: "WHATSAPP", sub: "WhatsApp Business" },
  { code: "WEB", label: "WEB", sub: "Next.js" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative border-b border-[var(--border)] grid-bg"
    >
      <div className="section-shell grid gap-10 pb-14 pt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:pb-24 md:pt-24">
        <div className="min-w-0">
          <p className="eyebrow">Full Stack Developer</p>

          <h1 className="heading-display mt-5 text-[34px] leading-[1.05] md:mt-6 md:text-[64px]">
            Building software that
            <br />
            solves <span className="italic text-[var(--accent)]">real</span>{" "}
            problems.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--foreground-muted)] md:mt-6 md:text-[17px]">
            I build production-ready AI-powered applications, CRM systems and
            scalable web products — engineered to actually work in production.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
            <Link href="/projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link href="/#contact" className="btn-secondary">
              Let&apos;s Connect
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-w-0">
          <ArchitectureVisual />
        </div>
      </div>

      <div className="section-shell hidden items-center justify-between border-t border-[var(--border)] py-5 md:flex">
        <p className="eyebrow-muted">Production Software Engineer</p>
        <p className="text-xs text-[var(--foreground-subtle)]">
          Based in Khopoli, Maharashtra, India
        </p>
        <a
          href="/#impact"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function ArchitectureVisual() {
  return (
    <div className="relative w-full">
        <div className="relative rounded-lg border-[1.5px] border-[var(--border)] bg-white shadow-[4px_4px_0_0_rgba(10,10,10,1)]">
          <div className="flex items-center justify-between gap-3 rounded-t-[8px] border-b border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 md:px-3 md:py-2">
            <div className="flex shrink-0 items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full border border-[var(--border)] bg-white md:h-2 md:w-2" />
              <span className="h-1.5 w-1.5 rounded-full border border-[var(--border)] bg-white md:h-2 md:w-2" />
              <span className="h-1.5 w-1.5 rounded-full border border-[var(--border)] bg-white md:h-2 md:w-2" />
            </div>
            <div className="min-w-0 flex-1 truncate text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)] md:text-[9px] md:tracking-[0.16em]">
              pratik.dev / system
            </div>
            <p className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] md:text-[9px] md:tracking-[0.16em]">
              Live
            </p>
          </div>

          <div className="border-b border-[var(--border)] bg-white px-2.5 py-2 md:px-3 md:py-2.5">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-subtle)] md:text-[9px] md:tracking-[0.18em]">
                  System Overview
                </p>
                <p className="mt-0.5 truncate font-display text-[13px] font-semibold leading-tight tracking-tight md:text-[15px]">
                  Production Stack
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-[var(--accent)] md:h-1.5 md:w-1.5" />
                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)] md:text-[9px] md:tracking-[0.16em]">
                  Production
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 px-2.5 py-3 md:space-y-2.5 md:px-3 md:py-4">
            {modules.map((m) => (
              <ModuleRow key={m.code} module={m} />
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 md:px-3 md:py-2">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)] md:text-[9px] md:tracking-[0.16em]">
              Stack
            </p>
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)] md:text-[9px] md:tracking-[0.16em]">
              Next.js
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-1.5 left-5 right-5 hidden h-2 rounded border-[1.5px] border-[var(--border)] bg-white md:block" />
        <div className="pointer-events-none absolute -bottom-4 left-10 right-10 hidden h-2 rounded border-[1.5px] border-[var(--border)] bg-white md:block" />
    </div>
  );
}

function ModuleRow({
  module,
}: {
  module: { code: string; label: string; sub: string; accent?: boolean };
}) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-white p-2 md:gap-3 md:p-2.5">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[var(--border)] md:h-9 md:w-9 ${
          module.accent ? "bg-[var(--accent)] text-white" : "bg-[var(--background)] text-[var(--foreground)]"
        }`}
      >
        <span className="font-display text-[10px] font-bold leading-none md:text-[11px]">
          {module.code}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-semibold leading-tight tracking-tight md:text-[11px]">
          {module.label}
        </p>
        <p className="mt-0.5 truncate text-[9px] text-[var(--foreground-muted)] md:text-[10px]">
          {module.sub}
        </p>
      </div>
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full md:h-1.5 md:w-1.5 ${
          module.accent ? "bg-[var(--accent)]" : "bg-[var(--border)]"
        }`}
      />
    </div>
  );
}
