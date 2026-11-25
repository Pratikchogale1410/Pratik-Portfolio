"use client";

import { useEffect, useRef } from "react";
import { skillGroups } from "@/data/portfolio-data";
import { registerGsap, REDUCED_MOTION_QUERY } from "@/app/lib/motion";
import { Kicker } from "./ui";

const tints = ["hm-tint-lavender", "hm-tint-peach", "hm-tint-mint", "hm-tint-pink", "hm-tint-sky"];

export function Technology() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
    const { gsap } = registerGsap();
    const ctx = gsap.context(() => {
      gsap.from("[data-tech-tile]", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: grid, start: "top 85%", once: true },
      });
    }, grid);
    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" className="hm hm-section bg-white">
      <div className="hm-wrap">
        <Kicker>Technology</Kicker>
        <h2 className="hm-h2 mt-6 max-w-[920px]">
          Tools I use to build <span className="hm-serif">modern applications.</span>
        </h2>
        <p className="hm-lead mt-6 max-w-[600px] text-[var(--hm-ink-muted)]">
          A focused stack of frontend, backend, database, AI and developer tooling — chosen for production
          reliability.
        </p>

        <div ref={gridRef} className="mt-14 grid gap-5 md:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              data-tech-tile
              className={`hm-tile ${tints[i % tints.length]} ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <p className="hm-h3 text-[22px]">{group.category}</p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.slice(0, 3).map((skill) => (
                  <li key={skill.name} className="hm-chip" title={skill.description}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
