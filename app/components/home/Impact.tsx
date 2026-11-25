"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { registerGsap, REDUCED_MOTION_QUERY } from "@/app/lib/motion";
import { Kicker } from "./ui";

/**
 * Royal-blue block. The "after" figures count from the before range down to
 * the reduced one (12–15 → 1–1.5 GB/day, figures from the existing content).
 */
export function Impact() {
  const afterRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = afterRef.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = registerGsap();
    const reduce = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const state = { a: 12, b: 15 };
    const render = () => {
      el.textContent = `${Math.round(state.a * 10) / 10}–${Math.round(state.b * 10) / 10}`;
    };
    if (reduce) {
      state.a = 1;
      state.b = 1.5;
      render();
      return;
    }
    render();

    const tween = gsap.to(state, {
      a: 1,
      b: 1.5,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: render,
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <section id="impact" className="hm hm-navy hm-section">
      <div className="hm-wrap">
        <Kicker>Impact</Kicker>
        <h2 className="hm-h2 mt-6 max-w-[980px]">
          Optimizing the systems <span className="hm-serif">and Impact</span>
        </h2>
        <p className="hm-lead mt-6 max-w-[620px] text-[var(--hm-on-navy-muted)]">
          Optimized application data operations and reduced unnecessary database I/O through data-fetching, query
          and architecture improvements.
        </p>

        <div className="hm-impact-block mt-14 grid items-center gap-12 md:mt-20 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="hm-eyebrow text-white/75">Before</p>
            <p className="hm-count mt-6">12–15</p>
            <p className="mt-3 text-[15px] font-medium uppercase tracking-[0.1em] text-white/80">GB / day</p>
          </div>

          <ArrowDown size={28} aria-hidden="true" className="hidden text-white/60 md:block -rotate-90" />

          <div>
            <p className="hm-eyebrow text-white/75">After</p>
            <p ref={afterRef} className="hm-count mt-6 text-[var(--hm-lime)]">
              12–15
            </p>
            <p className="mt-3 text-[15px] font-medium uppercase tracking-[0.1em] text-white/80">GB / day</p>
          </div>
        </div>
      </div>
    </section>
  );
}
