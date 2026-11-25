"use client";

import { useEffect, useRef } from "react";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";

/**
 * Closing transition before Contact. On desktop the stage pins and a royal-blue
 * circle clip-path grows from 0% to 150% of the viewport (scrub, so it reverses
 * on scroll up). The PRATIK.DEV mark sits in the centre. Mobile and reduced
 * motion show the mark statically with no pin.
 */
export function ZoomReveal() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const circle = circleRef.current;
    if (!stage || !circle) return;
    const { gsap } = registerGsap();
    const mm = gsap.matchMedia();

    mm.add(DESKTOP_MOTION_QUERY, () => {
      const tween = gsap.fromTo(
        circle,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(150% at 50% 50%)",
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: "+=180%",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );
      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={stageRef} className="hm-zoom-stage">
      <div ref={circleRef} className="hm-zoom-circle" aria-hidden="true">
        <p className="hm-zoom-mark">
          PRATIK<span>.DEV</span>
        </p>
      </div>
    </div>
  );
}
