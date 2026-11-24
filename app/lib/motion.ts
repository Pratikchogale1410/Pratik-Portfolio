import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registers GSAP plugins once. Safe to call from any client component. */
export function registerGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

/** Easing names mirror the reference ("out", "soft", "expo"). */
export const ease = {
  out: "power4.out",
  soft: "power3.out",
  expo: "expo.out",
  back: "back.out(1.35)",
} as const;

/**
 * Matches the reference's gating: pins, parallax and the custom cursor run
 * only with a fine pointer, a wide viewport and no reduced-motion request.
 */
export const DESKTOP_MOTION_QUERY =
  "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
