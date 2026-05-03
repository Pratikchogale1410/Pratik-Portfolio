import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { aboutSummary } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 md:py-20">
      <Reveal>
        <SectionHeading
          badge="About Me"
          title="Building products that solve real problems"
          subtitle="Full Stack Developer passionate about creating clean, efficient, and user-focused solutions."
        />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-slate-600">
              {aboutSummary}
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              My journey started with a curiosity for how things work, which led me to build my first web application. Today, I focus on delivering reliable software that serves both users and business goals effectively.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-3xl font-semibold text-blue-600">10+</p>
              <p className="text-sm text-slate-600">Projects Completed</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-3xl font-semibold text-blue-600">2+</p>
              <p className="text-sm text-slate-600">Years Experience</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <p className="text-3xl font-semibold text-blue-600">100%</p>
              <p className="text-sm text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}