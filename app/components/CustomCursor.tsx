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
  const pathRef = useRef<SVGPathElement | null>(null);

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

      // Trail: the last ~600ms of pointer positions drawn as a soft curve that fades out.
      const path = pathRef.current;
      const points: Array<{ x: number; y: number; t: number }> = [];
      const drawTrail = () => {
        if (!path) return;
        const now = performance.now();
        while (points.length && now - points[0].t > 600) points.shift();
        if (points.length < 2) {
          path.setAttribute("d", "");
          return;
        }
        let d = `M${points[0].x},${points[0].y}`;
        for (let i = 1; i < points.length - 1; i++) {
          const mx = (points[i].x + points[i + 1].x) / 2;
          const my = (points[i].y + points[i + 1].y) / 2;
          d += ` Q${points[i].x},${points[i].y} ${mx},${my}`;
        }
        const last = points[points.length - 1];
        d += ` L${last.x},${last.y}`;
        path.setAttribute("d", d);
        path.style.opacity = String(Math.max(0, 1 - (now - last.t) / 600));
      };
      gsap.ticker.add(drawTrail);
      const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

      const setScale = (value: number) => {
        gsap.to(ring, { scale: value, duration: 0.45, ease: "power3.out", overwrite: "auto" });
      };

      const onMove = (e: MouseEvent) => {
        points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
        if (points.length > 48) points.shift();
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

      // Mouse down: press the dot and ring in slightly; release springs back.
      const onDown = () => {
        ring.classList.add("is-down");
        gsap.to(dot, { scale: 0.7, duration: 0.2, ease: "power2.out" });
      };
      const onUp = () => {
        ring.classList.remove("is-down");
        gsap.to(dot, { scale: 1, duration: 0.4, ease: "back.out(2)" });
      };
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
        gsap.ticker.remove(drawTrail);
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
      <svg className="hm-trail is-visible" aria-hidden="true">
        <path ref={pathRef} fill="none" stroke="#1F4BFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-ring__label" />
      </div>
    </>
  );
}
