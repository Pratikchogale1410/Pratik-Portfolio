"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";

/**
 * Speed-based parallax (reference: y from -0.35a to a, scrub .85, ease none).
 * `speed` is a fraction of the element's own height-scaled travel in px.
 * Desktop with fine pointer and motion allowed only; otherwise a no-op.
 */
export function Parallax({
  speed = 40,
  className = "",
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = registerGsap();

    const mm = gsap.matchMedia();
    mm.add(DESKTOP_MOTION_QUERY, () => {
      gsap.fromTo(
        el,
        { y: -(0.35 * speed) },
        {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
