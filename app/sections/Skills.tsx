"use client";

import { Code, Database, Server, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  "AI & Tools": Sparkles,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-16 md:py-20">
      <Reveal>
        <SectionHeading
          badge="Skills"
          title="Technologies I work with"
          subtitle="A focused toolkit for building modern web applications."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = categoryIcons[group.category] || Code;
          return (
            <Reveal key={group.category} delay={index * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={20} className="text-blue-600" />
                  <h3 className="font-display text-lg text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}