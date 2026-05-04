"use client";

import { Code, Database, Server, Sparkles } from "lucide-react";
import { skillGroups } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  "AI & Developer Tools": Sparkles,
};

const categoryColors: Record<string, { bg: string; border: string; icon: string }> = {
  Frontend: { bg: "from-blue-50 to-cyan-50", border: "border-blue-100", icon: "text-blue-600" },
  Backend: { bg: "from-indigo-50 to-blue-50", border: "border-indigo-100", icon: "text-indigo-600" },
  Database: { bg: "from-emerald-50 to-teal-50", border: "border-emerald-100", icon: "text-emerald-600" },
  "AI & Developer Tools": { bg: "from-violet-50 to-purple-50", border: "border-violet-100", icon: "text-violet-600" },
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-10 md:py-12">
      <Reveal>
        <SectionHeading
          badge="Skills"
          title="Technical skills"
          subtitle="A focused toolkit for building modern, scalable web applications with clean architecture."
        />
      </Reveal>

      <div className="grid gap-4 md:gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = categoryIcons[group.category] || Code;
          const colors = categoryColors[group.category] || { bg: "from-slate-50 to-slate-50", border: "border-slate-200", icon: "text-slate-600" };
          return (
            <Reveal key={group.category} delay={index * 0.1}>
              <div className={`rounded-2xl bg-gradient-to-br ${colors.bg} p-6 md:p-7 border ${colors.border} transition-all duration-300 hover:shadow-lg hover:scale-[1.01]`}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon size={22} className={colors.icon} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm border border-slate-200/50"
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