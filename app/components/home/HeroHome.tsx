"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { registerGsap, DESKTOP_MOTION_QUERY, REDUCED_MOTION_QUERY } from "@/app/lib/motion";
import { projects } from "@/data/portfolio-data";
import { HomeButton } from "./ui";

const WORK_IDS = ["dermaplastcrm", "applysathi", "evfinder"];

/** Circular tool badges. Positions are percentages of the hero. */
const badges = [
  { label: "Next.js", x: "91%", y: "47%", bg: "var(--hm-lavender)", depth: 26 },
  { label: "Convex", x: "82%", y: "14%", bg: "var(--hm-peach)", depth: 18 },
  { label: "Supabase", x: "68%", y: "60%", bg: "var(--hm-mint)", depth: 34 },
  { label: "Firebase", x: "52%", y: "72%", bg: "var(--hm-sky)", depth: 22 },
];

export function HeroHome() {
  const rootRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const { gsap, ScrollTrigger } = registerGsap();
    const reduce = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const mm = gsap.matchMedia();
    const cleanups: Array<() => void> = [];

    // Load timeline: H1 lines rise through their masks, the serif word fades
    // in last, then copy and buttons, then badges.
    if (!reduce) {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from("[data-hero-eyebrow]", { y: 14, opacity: 0, duration: 1.2 }, 0.05)
        .from("[data-hero-line] > span", { yPercent: 110, duration: 1.6, stagger: 0.14 }, 0.15)
        .from("[data-hero-accent]", { opacity: 0, duration: 1.4 }, 1.2)
        .from("[data-hero-sub], [data-hero-cta] > *", { y: 22, opacity: 0, duration: 1.2, stagger: 0.16 }, 1.0)
        .from("[data-hero-badge]", { scale: 0.6, opacity: 0, duration: 1.1, ease: "back.out(1.35)", stagger: 0.14 }, 1.2)
        .from("[data-hero-strip]", { y: 24, opacity: 0, duration: 1.2 }, 1.4);
    }

    // Badges drift a little toward the pointer (desktop only).
    mm.add(DESKTOP_MOTION_QUERY, () => {
      const els = gsap.utils.toArray<HTMLElement>("[data-hero-badge]", root);
      const xs = els.map((el) => gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }));
      const ys = els.map((el) => gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" }));
      const onMove = (e: PointerEvent) => {
        const r = root.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        badges.forEach((b, i) => {
          xs[i](nx * b.depth);
          ys[i](ny * b.depth);
        });
      };
      root.addEventListener("pointermove", onMove);

      // Strip slides horizontally as the hero scrolls away.
      const slide = gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: -30,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 1, invalidateOnRefresh: true },
        }
      );

      return () => {
        root.removeEventListener("pointermove", onMove);
        slide.scrollTrigger?.kill();
        slide.kill();
      };
    });

    cleanups.push(() => mm.revert());
    return () => {
      cleanups.forEach((fn) => fn());
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={rootRef} id="top" className="hm hm-navy hm-hero">
      <div className="hm-grid-lines" aria-hidden="true" />

      {badges.map((b) => (
        <div
          key={b.label}
          data-hero-badge
          aria-hidden="true"
          className="hm-badge"
          style={{
            left: b.x,
            top: b.y,
            background: b.bg,
            animationDelay: `${-(b.depth / 10)}s`,
          }}
        >
          {b.label}
        </div>
      ))}

      <div className="hm-wrap relative">
        <div className="hm-hero-copy">
          <p data-hero-eyebrow className="hm-eyebrow mb-6 text-[var(--hm-on-navy-muted)]">
            Full Stack Developer
          </p>

          <h1 className="hm-h1">
            <span data-hero-line className="hm-mask">
              <span>Building software that</span>
            </span>
            <span data-hero-line className="hm-mask">
              <span>
                solves{" "}
                <span data-hero-accent className="hm-serif hm-accent">
                  real
                </span>{" "}
                problems.
              </span>
            </span>
          </h1>

          <p data-hero-sub className="hm-lead mt-8 max-w-[600px] text-[var(--hm-on-navy-muted)]">
            I build production-ready AI-powered applications, CRM systems and scalable web products — engineered
            to actually work in production.
          </p>

          <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-3">
            <HomeButton href="/projects" variant="light">
              View My Work
            </HomeButton>
            <HomeButton href="/#contact" variant="ghost">
              Let&apos;s Connect
            </HomeButton>
          </div>
        </div>
      </div>

      <div data-hero-strip className="hm-strip">
        <div ref={trackRef} className="hm-strip-track">
          {projects
            .filter((p) => WORK_IDS.includes(p.id))
            .map((p) => (
              <article key={p.id} className="hm-strip-card" data-cursor="view" data-cursor-label="View">
                {p.image ? (
                  <Image src={p.image} alt="" fill sizes="(min-width: 768px) 40vw, 80vw" className="object-cover" />
                ) : null}
                <div className="hm-strip-meta">
                  <div>
                    <p className="hm-eyebrow text-white/80">{p.category}</p>
                    <p className="mt-1 text-[20px] font-semibold tracking-tight">{p.name}</p>
                  </div>
                  <span className="hm-btn-icon !h-10 !w-10 !bg-white !text-[var(--hm-ink)]" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
