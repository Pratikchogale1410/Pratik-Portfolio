"use client";

import { useState } from "react";
import { aiCapabilities, skillGroups } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

export function SkillsSection() {
  const [active, setActive] = useState(skillGroups[0]?.skills[0]?.name ?? "");

  const activeSkill = skillGroups
    .flatMap((group) => group.skills.map((skill) => ({ ...skill, category: group.category })))
    .find((skill) => skill.name === active);

  return (
    <section id="skills" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Skills"
          title="Technical stack across product delivery"
          subtitle="Frontend, backend, databases, AI workflows, and modern developer tooling."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.04}>
              <div className="glass-card rounded-[1.35rem] p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setActive(skill.name)}
                      onMouseEnter={() => setActive(skill.name)}
                      className={`focus-ring rounded-full border px-3 py-1.5 text-sm transition ${
                        active === skill.name
                          ? "border-sky-400/40 bg-sky-400/15 text-sky-200"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <aside className="glass-card sticky top-28 h-fit rounded-[1.5rem] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Selected capability</p>
            <h3 className="mt-3 font-display text-2xl text-white">{activeSkill?.name ?? "Select a skill"}</h3>
            <p className="mt-2 text-sm text-sky-300">{activeSkill?.category}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {activeSkill?.description ?? "Hover or tap a technology to inspect it."}
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">AI capabilities</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {aiCapabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
