"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { FlipText } from "@/app/components/FlipText";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";

export function SelectedWorkSection() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const { gsap } = registerGsap();
    const mm = gsap.matchMedia();

    // Desktop only: pin the stage and stack the cards as the user scrolls.
    // Each new card slides up over the previous one, which scales to 0.9
    // and dims (scrub tied to scroll; pin spacing gives the scroll distance).
    mm.add(DESKTOP_MOTION_QUERY, () => {
      const slots = gsap.utils.toArray<HTMLElement>(".stack-slot", stage);
      const cards = slots.map((s) => s.querySelector<HTMLElement>(".stack-card")!);
      stage.classList.add("is-pinned");

      slots.forEach((slot, i) => {
        slot.style.zIndex = String(i + 1);
      });
      gsap.set(cards.slice(1), { yPercent: 115 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${(cards.length - 1) * window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        tl.to(cards[i], { yPercent: 0, duration: 1, ease: "power3.out" }, i - 1);
        tl.to(
          cards[i - 1],
          { scale: 0.9, yPercent: -3, opacity: 0.45, duration: 1, ease: "power3.out" },
          i - 1
        );
      }

      return () => {
        stage.classList.remove("is-pinned");
        slots.forEach((slot) => (slot.style.zIndex = ""));
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="work"
      className="relative border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.04]">
              Software I&apos;ve built
              <br />
              and contributed to.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[18px]">
            Real applications across healthcare CRM, AI-powered job assistance
            and location-based web products.
          </p>
        </div>

        <div ref={stageRef} className="stack-stage mt-16">
          {projects.map((project) => (
            <div key={project.id} className="stack-slot">
              <article
                data-cursor="view"
                data-cursor-label="View"
                className="stack-card glass-card flex w-full flex-col gap-6 p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="tag-accent">{project.category}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-subtle)]">
                    {project.period}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="heading-display text-[24px] leading-tight md:text-[28px]">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--foreground-muted)]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-soft">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-[var(--border-soft)] pt-5">
                  <p className="eyebrow-muted mb-3">Key capabilities</p>
                  <ul className="space-y-1.5 text-sm text-[var(--foreground-muted)]">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-2 border-t border-[var(--border-soft)] pt-5">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      <FlipText text="View Live" />
                      <ArrowUpRight size={12} />
                    </a>
                  ) : null}
                  {project.id === "dermaplastcrm" ? (
                    <a href="/projects#case-study" className="btn-primary !px-4 !py-2 !text-[13px]">
                      <FlipText text="Case Study" />
                      <ArrowRight size={12} />
                    </a>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <Link href="/projects" className="btn-secondary">
            <FlipText text="View All Projects" />
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

