import { experiences } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-16 md:py-20">
      <Reveal>
        <SectionHeading
          badge="Experience"
          title="Building in production environments"
          subtitle="Internship experience developing real-world products with measurable impact."
        />
      </Reveal>

      <div className="relative space-y-6">
        <div className="absolute top-0 bottom-0 left-6 w-px bg-slate-200" />
        {experiences.map((exp, index) => (
          <Reveal key={exp.role} delay={index * 0.1}>
            <div className="relative pl-12">
              <div className="absolute top-2 left-4 h-4 w-4 rounded-full border-2 border-white bg-blue-600 shadow-sm" />
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg text-slate-900">{exp.role}</h3>
                  <span className="text-xs text-slate-500">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-blue-600">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-slate-600">
                      • {point}
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