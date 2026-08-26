"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { Reveal } from "@/app/components/Reveal";
import { SectionHeading } from "@/app/components/SectionHeading";

type Project = (typeof projects)[number];

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="projects" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Projects"
          title="Case-study style product work"
          subtitle="Production CRM, AI job assistance, and location-based web products."
        />
      </Reveal>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <article className="glass-card group grid overflow-hidden rounded-[1.75rem] md:grid-cols-5">
              <div className="relative h-[240px] overflow-hidden bg-[#0a101c] md:col-span-2 md:h-auto md:min-h-[320px]">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>

              <div className="space-y-5 p-6 md:col-span-3 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">{project.name}</h3>
                    <p className="mt-1 text-xs text-slate-500">{project.period}</p>
                  </div>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                    >
                      Live Project <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>

                <p className="text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="focus-ring inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-400/40"
                >
                  Open case study
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm md:items-center"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            className="glass-card max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} case study`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sky-400">{active.category}</p>
                <h3 className="mt-2 font-display text-3xl text-white">{active.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{active.period}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="focus-ring rounded-full border border-white/10 p-2 text-slate-300"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Problem</p>
                <p className="mt-2">{active.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Solution</p>
                <p className="mt-2">{active.solution}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Key contributions</p>
                <ul className="mt-2 space-y-2">
                  {active.contributions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Technologies</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {active.demo ? (
              <a
                href={active.demo}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Live Project <ArrowUpRight size={16} />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
