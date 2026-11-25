"use client";

import { useEffect, useRef } from "react";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";
import { heroHighlights } from "@/data/portfolio-data";

const STATEMENT =
  "Identified high database I/O usage in production, reworked the application data layer, and reduced unnecessary operations across the stack.";

const rotations = [-4, 3, -2, 4, -3, 2];

/**
 * Pinned statement. Words go from muted to full colour as the section scrolls,
 * then the highlight tags fly in one at a time with a stagger and small tilts.
 */
export function Statement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const tagsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { gsap } = registerGsap();
    const mm = gsap.matchMedia();

    mm.add(DESKTOP_MOTION_QUERY, () => {
      const words = wordsRef.current;
      const tags = tagsRef.current.map((t) => t.firstElementChild as HTMLElement);

      gsap.set(words, { color: "rgba(11,11,15,0.16)" });
      gsap.set(tags, { y: 60, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.to(words, { color: "#0b0b0f", stagger: 0.08, ease: "none", duration: 1 }, 0);
      tl.to(tags, { y: 0, opacity: 1, stagger: 0.2, ease: "back.out(1.35)", duration: 0.9 }, 0.55);
    });

    return () => mm.revert();
  }, []);

  const words = STATEMENT.split(" ");

  return (
    <section ref={sectionRef} className="hm hm-section hm-statement-stage bg-white">
      <div className="hm-wrap">
        <p className="hm-statement-text max-w-[1100px]">
          {words.map((w, i) => (
            <span key={`${w}-${i}`}>
              <span ref={(el) => {
                if (el) wordsRef.current[i] = el;
              }}>
                {w}
              </span>{" "}
            </span>
          ))}
        </p>

        <div className="mt-14 flex flex-wrap gap-4 md:mt-20">
          {heroHighlights.map((tag, i) => (
            <div
              key={tag}
              className="hm-tilt"
              style={{ ["--r" as string]: `${rotations[i % rotations.length]}deg` }}
              ref={(el) => {
                if (el) tagsRef.current[i] = el;
              }}
            >
              <div className="hm-tilt-inner">
                <span className="hm-dot text-[var(--hm-royal)]" aria-hidden="true" />
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
