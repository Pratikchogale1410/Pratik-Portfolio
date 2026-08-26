"use client";

import { aboutFocus, aboutStack, personalInfo } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="About"
          title="Product-minded full stack development"
          subtitle="Building practical digital products across AI platforms and CRM workflows."
        />
      </Reveal>

      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="glass-card h-full rounded-[1.5rem] p-7 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">Introduction</p>
            <p className="mt-4 text-base leading-8 text-slate-300">{personalInfo.summary}</p>
            <div className="mt-6 grid gap-2 text-sm text-slate-400">
              <p>• BSc IT Graduate</p>
              <p>• Full Stack Developer</p>
              <p>• AI platforms, CRM systems, and scalable web products</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="glass-card relative overflow-hidden rounded-[1.5rem] p-7 md:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full soft-glow" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Developer System</p>
            <h3 className="mt-3 font-display text-2xl text-white">{personalInfo.role}</h3>
            <p className="mt-1 text-sm text-slate-400">{personalInfo.name}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {aboutFocus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {aboutStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
