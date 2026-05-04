import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { aboutSummary } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-10 md:py-12">
      <Reveal>
        <SectionHeading
          badge="About"
          title="About me"
          subtitle="BSc IT graduate and Full Stack Developer Intern building real-world products across AI platforms and CRM workflows."
        />
      </Reveal>

      <div className="grid gap-8 md:gap-8 md:grid-cols-2 lg:gap-8">
        <Reveal delay={0.1} className="lg:col-span-1">
          <div className="space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              {aboutSummary}
            </p>
            <p>
              My journey started with a curiosity for how things work, which led me to build my first web application. Today, I focus on delivering reliable software that serves both users and business goals effectively.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-100/50">
              <p className="mb-1 text-4xl font-bold text-blue-600">5</p>
              <p className="text-sm font-medium text-slate-700">Projects Completed</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 border border-indigo-100/50">
              <p className="mb-1 text-4xl font-bold text-indigo-600">6</p>
              <p className="text-sm font-medium text-slate-700">Months Experience</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-6 border border-slate-200">
              <p className="mb-1 text-4xl font-bold text-slate-800">100%</p>
              <p className="text-sm font-medium text-slate-700">Client Satisfaction</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}