"use client";

import { useEffect, useRef } from "react";
import { registerGsap, DESKTOP_MOTION_QUERY } from "@/app/lib/motion";
import { Kicker } from "./ui";

const steps = [
  { number: "01", title: "Understand", description: "Understand requirements, workflows and technical constraints before writing code." },
  { number: "02", title: "Design", description: "Plan the interface, user flow and application architecture." },
  { number: "03", title: "Build", description: "Develop frontend, backend, database and integrations end-to-end." },
  { number: "04", title: "Test & Optimize", description: "Debug, test and optimize application performance and data layer." },
  { number: "05", title: "Deploy", description: "Prepare the application for production deployment." },
];

const tints = ["hm-tint-lavender", "hm-tint-peach", "hm-tint-mint", "hm-tint-pink", "hm-tint-sky"];

/**
 * How I Build. On desktop the section pins and the track of step cards moves
 * horizontally as the page scrolls vertically. Otherwise a plain row or column.
 */
export function Process() {
  const stageRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;
    const { gsap } = registerGsap();
    const mm = gsap.matchMedia();

    mm.add(DESKTOP_MOTION_QUERY, () => {
      stage.classList.add("is-pinned");
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => `+=${distance() + window.innerHeight * 0.8}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      return () => {
        stage.classList.remove("is-pinned");
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={stageRef} className="hm hm-navy hm-track-stage py-[clamp(88px,11vw,150px)]">
      <div className="hm-wrap">
        <Kicker>How I Build</Kicker>
        <h2 className="hm-h2 mt-6 max-w-[900px]">
          From idea to <span className="hm-serif">production software.</span>
        </h2>
        <p className="hm-lead mt-6 max-w-[560px] text-[var(--hm-on-navy-muted)]">
          A practical development workflow I follow on every production project.
        </p>
      </div>

      <div className="mt-14 md:mt-16">
        <div ref={trackRef} className="hm-track">
          {steps.map((s, i) => (
            <article key={s.number} className={`hm-track-card ${tints[i % tints.length]}`} data-cursor="pointer">
              <p className="text-[clamp(56px,7vw,96px)] font-semibold leading-none tracking-[-0.04em]">
                {s.number}
              </p>
              <div>
                <h3 className="hm-h3 text-[28px]">{s.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-[var(--hm-ink-muted)]">{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
