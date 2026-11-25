"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/portfolio-data";
import { registerGsap, REDUCED_MOTION_QUERY } from "@/app/lib/motion";
import { Kicker } from "./ui";

/** Sticky title on the left; entries on the right reveal through a mask. */
export function Experience() {
  const rootRef = useRef<HTMLElement | null>(null);
  const exp = experiences[0];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const { gsap } = registerGsap();
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-exp-inner]", {
        yPercent: 105,
        duration: 1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root, start: "top 75%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="experience" className="hm hm-section bg-white">
      <div className="hm-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Kicker>Experience</Kicker>
          <h2 className="hm-h2 mt-6">
            Impact-focused <span className="hm-serif">product development.</span>
          </h2>
          <p className="hm-lead mt-6 max-w-[420px] text-[var(--hm-ink-muted)]">
            Full-stack ownership across AI platforms, CRM systems, and production workflows.
          </p>
        </div>

        <div className="space-y-10">
          <div className="hm-card hm-tint-cream">
            <div className="overflow-hidden">
              <p data-exp-inner className="hm-eyebrow">
                {exp.period}
              </p>
            </div>
            <div className="overflow-hidden">
              <h3 data-exp-inner className="hm-h3 mt-5 text-[28px] md:text-[34px]">
                {exp.role}
              </h3>
            </div>
            <div className="overflow-hidden">
              <p data-exp-inner className="mt-2 text-[15px] font-semibold text-[var(--hm-ink-muted)]">
                {exp.company}
              </p>
            </div>

            <div className="mt-10 overflow-hidden">
              <p data-exp-inner className="hm-eyebrow">
                Responsibilities
              </p>
            </div>
            <ul className="mt-5 space-y-4 text-[15px] leading-7">
              {exp.points.slice(0, 3).map((point) => (
                <li key={point} className="overflow-hidden">
                  <span data-exp-inner className="flex items-start gap-3">
                    <span className="hm-dot mt-3 text-[var(--hm-royal)]" aria-hidden="true" />
                    <span>{point}</span>
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
