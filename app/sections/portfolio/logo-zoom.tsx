"use client";

import { useEffect, useRef } from "react";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";

/**
 * Closing transition before the footer. On desktop the stage pins and the
 * PRATIK.DEV wordmark scales from 1 to 40 (scrub, so it reverses when
 * scrolling back up). It then fades into the page background, which is the
 * footer's background, so the footer takes over. Mobile and reduced motion
 * show the wordmark statically.
 */
export function LogoZoomSection() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<HTMLDivElement | null>(null);
  const veilRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const word = wordRef.current;
    const veil = veilRef.current;
    if (!stage || !word || !veil) return;

    const { gsap, ScrollTrigger } = registerGsap();
    const mm = gsap.matchMedia();

    mm.add(DESKTOP_MOTION_QUERY, () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(word, { scale: 1 }, { scale: 40, ease: "power2.in", duration: 1 }, 0);
      tl.fromTo(veil, { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.35 }, 0.65);
    });

    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section aria-label="PRATIK.DEV" className="relative bg-[var(--background)]">
      <div ref={stageRef} className="zoom-stage">
        <div ref={wordRef} className="zoom-wordmark select-none" aria-hidden="true">
          <span className="sr-only">PRATIK.DEV</span>
          <span>
            PRATIK<span>.DEV</span>
          </span>
        </div>
        <div
          ref={veilRef}
          className="pointer-events-none absolute inset-0 bg-[var(--background)] opacity-0"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
