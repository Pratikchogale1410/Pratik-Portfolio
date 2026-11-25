"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { Kicker, HomeButton } from "./ui";
import { pinStack } from "./stack";

const WORK_IDS = ["dermaplastcrm", "applysathi", "evfinder"];
const tints = ["hm-tint-peach", "hm-tint-mint", "hm-tint-lavender"];

export function Work() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const work = projects.filter((p) => WORK_IDS.includes(p.id));

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".hm-stack-card"));
    return pinStack(stage, cards);
  }, []);

  return (
    <section id="work" className="hm hm-section bg-white">
      <div className="hm-wrap">
        <Kicker>Selected Work</Kicker>
        <h2 className="hm-h2 mt-6 max-w-[900px]">
          Software I&apos;ve built <span className="hm-serif">and contributed to.</span>
        </h2>
        <p className="hm-lead mt-6 max-w-[600px] text-[var(--hm-ink-muted)]">
          Real applications across healthcare CRM, AI-powered job assistance and location-based web products.
        </p>
      </div>

      <div ref={stageRef} className="hm-stack-stage mt-14 md:mt-20">
        <div className="hm-stack-list hm-wrap">
          {work.map((p, i) => (
            <div key={p.id} className="hm-stack-slot">
              <article
                className={`hm-stack-card hm-card ${tints[i % tints.length]} !p-0`}
                data-cursor="view"
                data-cursor-label="View"
              >
                <div className="grid h-full gap-0 md:grid-cols-[1fr_1fr]">
                  <div className="flex flex-col justify-between gap-8 p-7 md:p-12">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="hm-chip hm-chip--dark">{p.category}</span>
                      <span className="text-[13px] font-medium text-[var(--hm-ink-muted)]">{p.period}</span>
                    </div>

                    <div>
                      <h3 className="hm-h2 !text-[clamp(30px,3.6vw,52px)]">{p.name}</h3>
                      <p className="mt-5 line-clamp-3 text-[15px] leading-7 text-[var(--hm-ink-muted)]">
                        {p.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {p.demo ? (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="hm-link">
                          View Live <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ) : null}
                      {p.id === "dermaplastcrm" ? (
                        <Link href="/projects#case-study" className="hm-link">
                          Case Study <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="relative min-h-[260px] overflow-hidden md:min-h-0">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.name} screenshot`}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : null}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="hm-wrap mt-14 flex justify-center">
        <HomeButton href="/projects" variant="ink">
          View All Projects
        </HomeButton>
      </div>
    </section>
  );
}
