"use client";

import { useEffect, useRef } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

type Bubble = {
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  opacity: number;
  blur: number;
  color: string;
  translateX: string;
  translateY: string;
};

function buildBubbles(): Bubble[] {
  const colors = [
    "rgba(59,130,246,0.18)",
    "rgba(34,211,238,0.16)",
    "rgba(99,102,241,0.15)",
    "rgba(56,189,248,0.14)",
    "rgba(129,140,248,0.12)",
    "rgba(34,211,238,0.18)",
    "rgba(59,130,246,0.14)",
    "rgba(99,102,241,0.18)",
    "rgba(56,189,248,0.12)",
    "rgba(129,140,248,0.15)",
  ];

  const items: Bubble[] = [];
  for (let i = 0; i < 14; i++) {
    const rand = () => seededRandom(i * 10 + 1);
    const size = Math.round(120 + rand() * 320);
    items.push({
      size,
      x: `${(rand() * 90).toFixed(2)}%`,
      y: `${(rand() * 90).toFixed(2)}%`,
      duration: Math.round((18 + rand() * 22) * 100) / 100,
      delay: Math.round(rand() * 12 * 100) / 100,
      opacity: Math.round((0.18 + rand() * 0.35) * 1000) / 1000,
      blur: rand() > 0.5 ? 24 : 48,
      color: colors[i % colors.length],
      translateX: `${((rand() - 0.5) * 80).toFixed(2)}px`,
      translateY: `${((rand() - 0.5) * 90).toFixed(2)}px`,
    });
  }
  return items;
}

function buildParticles() {
  return Array.from({ length: 22 }).map((_, i) => {
    const rand = () => seededRandom(i * 7 + 99);
    return {
      id: i,
      size: Math.round((1.5 + rand() * 3) * 100) / 100,
      x: `${(rand() * 100).toFixed(2)}%`,
      y: `${(rand() * 100).toFixed(2)}%`,
      duration: Math.round((16 + rand() * 26) * 100) / 100,
      delay: Math.round(rand() * 14 * 100) / 100,
      opacity: Math.round((0.25 + rand() * 0.4) * 1000) / 1000,
    };
  });
}

const BUBBLES = buildBubbles();
const PARTICLES = buildParticles();

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let raf = 0;
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 14;
        const y = (event.clientY / window.innerHeight - 0.5) * 14;
        if (container) {
          container.style.setProperty("--mouse-x", `${x}px`);
          container.style.setProperty("--mouse-y", `${y}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out will-change-transform"
        style={{
          transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
        }}
      >
        {BUBBLES.map((bubble) => (
          <span
            key={bubble.size + bubble.x + bubble.y}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x,
              top: bubble.y,
              background: `radial-gradient(circle, ${bubble.color}, transparent 70%)`,
              opacity: bubble.opacity,
              filter: `blur(${bubble.blur}px)`,
              animation: `bubbleDrift ${bubble.duration}s ease-in-out ${bubble.delay}s infinite alternate`,
              "--translate-x": bubble.translateX,
              "--translate-y": bubble.translateY,
            } as React.CSSProperties}
          />
        ))}

        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full bg-sky-200"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              animation: `particleFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bubbleDrift {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(var(--translate-x), calc(var(--translate-y) * 0.5)) scale(1.05);
          }
          50% {
            transform: translate(calc(var(--translate-x) * 0.5), var(--translate-y)) scale(0.97);
          }
          75% {
            transform: translate(calc(var(--translate-x) * -0.5), calc(var(--translate-y) * 0.75)) scale(1.04);
          }
          100% {
            transform: translate(calc(var(--translate-x) * -0.25), calc(var(--translate-y) * -0.5)) scale(1);
          }
        }
        @keyframes particleFloat {
          0% {
            transform: translate(0, 0);
            opacity: 0.25;
          }
          33% {
            transform: translate(14px, -18px);
            opacity: 0.5;
          }
          66% {
            transform: translate(-10px, 12px);
            opacity: 0.3;
          }
          100% {
            transform: translate(8px, -14px);
            opacity: 0.25;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden="true"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
