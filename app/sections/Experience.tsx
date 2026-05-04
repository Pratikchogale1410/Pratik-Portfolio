import { experiences } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-10 md:py-12">
      <Reveal>
        <SectionHeading
          badge="Experience"
          title="Work experience"
          subtitle="Professional experience building products with measurable impact in real-world environments."
        />
      </Reveal>

      <div className="relative space-y-4">
        <div className="absolute left-6 top-2 h-full w-px bg-slate-200 md:left-8" />
        
        {experiences.map((exp, index) => (
          <Reveal key={exp.role} delay={index * 0.1}>
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-4 top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-md md:left-8" />
              <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm transition-all hover:shadow-lg hover:border-slate-300">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                      <Briefcase size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-sm font-medium text-blue-600">{exp.company}</p>
                    </div>
                  </div>
                  <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5 pl-1">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}