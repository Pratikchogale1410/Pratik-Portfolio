import { aboutSummary } from "@/data/portfolio-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="About Me"
          title="Building practical digital products with business impact"
          subtitle="Product-minded developer with internship experience across AI platforms and workflow-heavy CRM systems."
        />
      </Reveal>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <Reveal>
          <article className="glass-card rounded-2xl p-7">
            <p className="leading-8 text-slate-700">{aboutSummary}</p>
            <div className="mt-6 grid gap-2 text-sm text-slate-600">
              <p>- BSc IT Graduate</p>
              <p>- Full Stack Developer Intern</p>
              <p>- Built CRM and AI-powered application workflows</p>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm">
            <div className="text-center">
              <p className="font-display text-5xl font-semibold text-blue-600">PC</p>
              <p className="mt-2 text-sm text-slate-600">Pratik Chogale</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
