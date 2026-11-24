"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";

const INTERACTIVE =
  'a[href], button:not(:disabled), [role="button"], summary, label[for], [data-cursor="pointer"]';

/**
 * Dot that follows the pointer instantly, plus a ring that trails it with
 * gsap.quickTo. States: default, link/button hover, card hover ("View"
 * label, larger ring), mouse down (ring shrinks), leaving the window (fade).
 * Desktop with a fine pointer only; never rendered on touch devices.
 */
export function CustomCursor() {
  const pathname = usePathname();
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_MOTION_QUERY);
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let active = false;
    let teardown: (() => void) | undefined;

    const enable = () => {
      if (active) return;
      active = true;
      const { gsap } = registerGsap();
      document.documentElement.classList.add("custom-cursor-enabled");

      gsap.set([dot, ring], { xPercent: 0, yPercent: 0 });
      const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

      const setScale = (value: number) => {
        gsap.to(ring, { scale: value, duration: 0.45, ease: "power3.out", overwrite: "auto" });
      };

      const onMove = (e: MouseEvent) => {
        gsap.set(dot, { x: e.clientX, y: e.clientY });
        ringX(e.clientX);
        ringY(e.clientY);
        dot.classList.add("is-visible");
        ring.classList.add("is-visible");
      };

      const onOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const view = target.closest<HTMLElement>('[data-cursor="view"]');
        if (view) {
          ring.classList.add("is-large");
          label.textContent = view.dataset.cursorLabel ?? "View";
          setScale(2.4);
          return;
        }
        if (target.closest(INTERACTIVE)) {
          ring.classList.add("is-hover");
          setScale(1.5);
        }
      };

      const onOut = (e: MouseEvent) => {
        const related = e.relatedTarget as HTMLElement | null;
        const from = e.target as HTMLElement | null;
        if (!from) return;
        const leavingView = from.closest('[data-cursor="view"]');
        const enteringView = related?.closest?.('[data-cursor="view"]');
        if (leavingView && leavingView !== enteringView) {
          ring.classList.remove("is-large");
          label.textContent = "";
          setScale(1);
        }
        if (from.closest(INTERACTIVE) && !related?.closest?.(INTERACTIVE)) {
          ring.classList.remove("is-hover");
          setScale(1);
        }
      };

      const onDown = () => ring.classList.add("is-down");
      const onUp = () => ring.classList.remove("is-down");
      const onLeaveWindow = () => {
        dot.classList.remove("is-visible");
        ring.classList.remove("is-visible");
      };

      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);
      window.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);
      document.documentElement.addEventListener("mouseleave", onLeaveWindow);

      teardown = () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
        window.removeEventListener("mousedown", onDown);
        window.removeEventListener("mouseup", onUp);
        document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
        gsap.killTweensOf([ring, dot]);
        ring.classList.remove("is-hover", "is-large", "is-down", "is-visible");
        dot.classList.remove("is-visible");
        document.documentElement.classList.remove("custom-cursor-enabled");
        active = false;
      };
    };

    const sync = () => {
      if (mql.matches) enable();
      else {
        teardown?.();
        teardown = undefined;
      }
    };

    sync();
    mql.addEventListener("change", sync);

    return () => {
      mql.removeEventListener("change", sync);
      teardown?.();
      teardown = undefined;
    };
  }, [pathname]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-ring__label" />
      </div>
    </>
  );
}
