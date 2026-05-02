"use client";

import { Braces, BriefcaseBusiness, Database, MonitorSmartphone, Server, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import { skillGroups } from "@/data/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const categoryIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  Tools: BriefcaseBusiness,
};

const skillIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Next: Braces,
  Django: Database,
  Firebase: Database,
  Supabase: Database,
  Cursor: Sparkles,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Skills"
          title="Strong across frontend, backend, and modern developer tools"
          subtitle="Focused on production-ready implementation with clean UI quality and reliable data workflows."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, groupIndex) => {
          const CategoryIcon = categoryIcons[group.category] ?? MonitorSmartphone;
          return (
            <Reveal key={group.category} delay={groupIndex * 0.08}>
              <article className="glass-card rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-5 flex items-center gap-3">
                  <CategoryIcon size={18} className="text-blue-600" />
                  <h3 className="font-display text-xl text-slate-900">{group.category}</h3>
                </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const key = Object.keys(skillIcons).find((value) => skill.includes(value)) ?? "";
                  const SkillIcon = skillIcons[key] ?? Braces;
                  return (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      <SkillIcon size={12} className="text-blue-600" />
                      {skill}
                    </div>
                  );
                })}
              </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
