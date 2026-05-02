import { experiences } from "@/data/portfolio-data";
import { CircleDot } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Experience"
          title="Impact-focused internship experience"
          subtitle="Built modules that solved workflow bottlenecks across hiring and healthcare products."
        />
      </Reveal>

      <div className="relative space-y-5 before:absolute before:top-2 before:bottom-2 before:left-3 before:w-px before:bg-slate-200">
        {experiences.map((exp, index) => (
          <Reveal key={exp.role} delay={index * 0.08}>
            <article className="glass-card relative rounded-2xl p-6 pl-10 md:p-7 md:pl-12">
              <CircleDot size={16} className="absolute top-8 left-[0.45rem] text-blue-600" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl text-slate-900">{exp.role}</h3>
                <p className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {exp.period}
                </p>
              </div>
              <p className="mt-2 text-sm font-medium text-blue-600">{exp.company}</p>
              <div className="mt-5 grid gap-2">
                {exp.points.map((point) => (
                  <p key={point} className="text-sm leading-7 text-slate-600">
                    - {point}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
