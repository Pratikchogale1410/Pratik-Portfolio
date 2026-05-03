"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Link2 } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";

const filters = ["All", "AI Platform", "CRM System", "Web App"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const hideGithub = ["applysathi", "dermaplastcrm", "evfinder"];

  return (
    <section id="projects" className="section-shell py-16 md:py-20">
      <Reveal>
        <SectionHeading
          badge="Projects"
          title="Selected work with real business impact"
          subtitle="Each project solves a specific problem, built with clean code and user experience in mind."
        />
      </Reveal>

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === activeFilter
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-6">
        {visibleProjects.map((project, index) => {
          const isApplySathi = project.id === "applysathi";
          return (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className={`grid gap-0 ${isApplySathi ? "md:grid-cols-3" : "md:grid-cols-5"}`}>
                  <div className={`relative bg-slate-50 ${
                    isApplySathi 
                      ? "h-56 md:col-span-1 md:h-full" 
                      : "h-48 md:col-span-2 md:h-full"
                  }`}>
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes={isApplySathi ? "(min-width: 768px) 20rem, 100vw" : "(min-width: 768px) 24rem, 100vw"}
                    />
                  </div>
                  <div className={`space-y-4 p-6 ${isApplySathi ? "md:col-span-2 md:p-8" : "md:col-span-3 md:p-8"}`}>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </p>
                      <h3 className={`mt-1 font-display ${
                        isApplySathi ? "text-2xl md:text-3xl" : "text-xl"
                      } text-slate-900`}>{project.name}</h3>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-slate-600">
                        <span className="font-medium text-slate-900">Problem:</span> {project.problem}
                      </p>
                      <p className="text-sm text-slate-600">
                        <span className="font-medium text-slate-900">Solution:</span> {project.solution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                      {!hideGithub.includes(project.id) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
                        >
                          GitHub
                          <Link2 size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}