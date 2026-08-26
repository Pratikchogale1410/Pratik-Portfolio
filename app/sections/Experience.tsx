"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { contributions, experiences } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="experience" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Experience"
          title="Impact-focused product development"
          subtitle="Full-stack ownership across AI platforms, CRM systems, and production workflows."
        />
      </Reveal>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <Reveal key={experience.role}>
            <article className="glass-card rounded-[1.5rem] p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400">
                    {experience.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm text-slate-400">{experience.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/40"
              >
                Responsibilities &amp; Contributions
                <ChevronDown
                  size={16}
                  className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                />
              </button>

              {expanded ? (
                <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                  {experience.points.map((point) => (
                    <li key={point} className="text-sm leading-7 text-slate-400">
                      <span className="mr-2 text-sky-400">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.08}>
          <div>
            <h3 className="mb-4 font-display text-xl text-white">Key project contributions</h3>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {contributions.map((item) => (
                <article
                  key={item.title}
                  className="glass-card rounded-[1.25rem] p-5 transition hover:-translate-y-1 hover:border-sky-400/30"
                >
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
