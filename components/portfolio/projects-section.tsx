"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Link2 } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const filters = ["All", "AI Platform", "CRM System", "Web App"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell py-18 md:py-24">
      <Reveal>
        <SectionHeading
          badge="Featured Projects"
          title="Projects with real business context and measurable execution"
          subtitle="A curated set of products I built around AI workflows, CRM operations, and user-first interfaces."
        />
      </Reveal>

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === activeFilter
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.07}>
            <article className="glass-card group grid overflow-hidden rounded-3xl border-slate-200 md:grid-cols-5">
              <div className="relative min-h-56 md:col-span-2">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <div className="space-y-5 p-6 md:col-span-3 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-slate-900">{project.name}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
                    >
                      GitHub <Link2 size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">Problem:</span> {project.problem}
                </p>
                <p className="text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">Solution:</span> {project.solution}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid gap-2">
                  {project.features.map((feature) => (
                    <p key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <BadgeCheck size={16} className="mt-0.5 shrink-0 text-blue-600" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
