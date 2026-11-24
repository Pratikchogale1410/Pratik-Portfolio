"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { registerGsap } from "@/app/lib/motion";
import { setLenis } from "@/app/lib/lenis-store";

/**
 * Lenis smooth scroll synced with GSAP ScrollTrigger (same wiring and
 * options as the reference: duration 1.05, exponential easing, smoothWheel).
 * Skipped on coarse pointers and reduced-motion, as the reference does.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) {
      setLenis(null);
      return;
    }

    const { gsap, ScrollTrigger } = registerGsap();

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Fonts and images shift layout after mount; refresh pin positions then.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, [pathname]);

  return null;
}
