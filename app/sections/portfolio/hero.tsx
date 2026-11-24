"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { registerGsap, DESKTOP_MOTION_QUERY, REDUCED_MOTION_QUERY } from "@/app/lib/motion";
import { FlipText } from "@/app/components/FlipText";

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
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const { gsap, ScrollTrigger } = registerGsap();

    const ctx = gsap.context(() => {
      // Intro (reference: word rise, stagger 60–525ms, cubic-bezier(.16,1,.3,1)).
      if (!reduce) {
        const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
        intro
          .from("[data-intro='eyebrow']", { y: 14, opacity: 0, duration: 0.9 }, 0.06)
          .from("[data-word] > span", { yPercent: 110, duration: 1.15, stagger: 0.04 }, 0.16)
          .from("[data-intro='copy']", { y: 24, opacity: 0, duration: 1.1 }, 0.5)
          .from("[data-intro='ctas'] > *", { y: 20, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.6)
          .from("[data-intro='tags'] > *", { y: 14, opacity: 0, duration: 0.7, stagger: 0.04 }, 0.7)
          .from(
            "[data-intro='visual']",
            { y: 36, scale: 0.96, opacity: 0, duration: 1.3, ease: "expo.out" },
            0.35
          );
      }

      // Scroll-out and parallax on desktop only (reference: scrub .55).
      ScrollTrigger.matchMedia({
        [DESKTOP_MOTION_QUERY]: () => {
          gsap.to("[data-hero-copy]", {
            opacity: 0,
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          });
          gsap.fromTo(
            "[data-hero-visual]",
            { y: -30 },
            {
              y: 30,
              ease: "none",
              scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 0.85 },
            }
          );
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="glow-bg relative overflow-hidden border-b border-[var(--border)] pt-28 md:pt-40"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="section-shell relative flex w-full min-w-0 flex-col items-center text-center" data-hero-copy>
        <p data-intro="eyebrow" className="eyebrow">
          Full Stack Developer
        </p>

        <h1 className="heading-display mt-6 w-full max-w-full text-[38px] leading-[1.04] sm:text-[48px] md:text-[68px] lg:text-[80px]">
          <span className="block">
            <Word text="Building" /> <Word text="software" /> <Word text="that" />
          </span>
          <span className="block">
            <Word text="solves" />{" "}
            <Word text="real" className="text-display-accent text-[var(--accent-bright)]" />{" "}
            <Word text="problems." />
          </span>
        </h1>

        <p
          data-intro="copy"
          className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--foreground-muted)] md:mt-8 md:text-[18px]"
        >
          I build production-ready AI-powered applications, CRM systems and
          scalable web products — engineered to actually work in production.
        </p>

        <div data-intro="ctas" className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
          <Link href="/projects" className="btn-primary">
            <FlipText text="View My Work" />
            <span className="btn-icon-chip">
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/#contact" className="btn-secondary">
            <FlipText text="Let's Connect" />
          </Link>
        </div>

        <div data-intro="tags" className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div data-intro="visual" className="relative mt-16 w-full md:mt-20">
          <div data-hero-visual>
            <ArchitectureVisual />
          </div>
        </div>
      </div>

      <div className="section-shell relative mt-16 hidden items-center justify-between border-t border-[var(--border)] py-6 md:flex">
        <p className="eyebrow-muted">Production Software Engineer</p>
        <p className="text-xs text-[var(--foreground-subtle)]">
          Based in Khopoli, Maharashtra, India
        </p>
        <Link
          href="/#impact"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

/** Word mask for the rise animation: the word sits inside an overflow-hidden box. */
function Word({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span data-word className={`inline-block overflow-hidden align-bottom pb-[0.08em] ${className}`}>
      <span className="inline-block">{text}</span>
    </span>
  );
}

function ArchitectureVisual() {
  return (
    <div className="glass-card mx-auto w-full max-w-[1000px] overflow-hidden rounded-[28px] p-3 text-left shadow-[0_40px_120px_-30px_rgba(0,86,251,0.45)] md:p-5">
      <div className="flex items-center justify-between gap-3 rounded-[18px] border-b border-[var(--border-soft)] bg-[rgba(1,13,35,0.6)] px-4 py-3">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff6b70]" />
          <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
          <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
        </div>
        <div className="min-w-0 flex-1 truncate text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-subtle)]">
          pratik.dev / system
        </div>
        <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-bright)]">
          Live
        </p>
      </div>

      <div className="border-b border-[var(--border-soft)] px-4 py-4 md:px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
              System Overview
            </p>
            <p className="mt-1 truncate font-display text-[17px] font-semibold tracking-tight md:text-[20px]">
              Production Stack
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)] shadow-[0_0_8px_rgba(17,99,255,0.9)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              Production
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-3 sm:grid-cols-2 md:grid-cols-3 md:p-4">
        {modules.map((m, i) => (
          <div
            key={m.code}
            className="float-y"
            style={{
              ["--float-dur" as string]: `${7.4 + (i % 4) * 0.6}s`,
              ["--float-delay" as string]: `${-(i * 0.8)}s`,
            }}
          >
            <ModuleRow module={m} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border-soft)] bg-[rgba(1,13,35,0.6)] px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-subtle)]">
          Stack
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
          Next.js
        </p>
      </div>
    </div>
  );
}

function ModuleRow({
  module,
}: {
  module: { code: string; label: string; sub: string; accent?: boolean };
}) {
  return (
    <div
      data-cursor="pointer"
      className="glass-card flex items-center gap-3 rounded-[18px] p-3 text-left transition-transform duration-500 ease-out hover:-translate-y-1"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          module.accent
            ? "bg-[var(--accent)] text-white shadow-[0_0_20px_rgba(0,86,251,0.6)]"
            : "bg-[rgba(255,255,255,0.06)] text-[var(--foreground)]"
        }`}
      >
        <span className="font-display text-[11px] font-bold leading-none">{module.code}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-semibold leading-tight tracking-tight">
          {module.label}
        </p>
        <p className="mt-0.5 truncate text-[11px] text-[var(--foreground-subtle)]">{module.sub}</p>
      </div>
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
          module.accent ? "bg-[var(--accent-bright)]" : "bg-[rgba(255,255,255,0.25)]"
        }`}
      />
    </div>
  );
}

