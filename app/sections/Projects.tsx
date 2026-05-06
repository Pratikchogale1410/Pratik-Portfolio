"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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

  return (
    <section id="projects" className="section-shell py-10 md:py-12">
      <Reveal>
        <SectionHeading
          badge="Projects"
          title="Featured projects"
          subtitle="A selection of work that demonstrates my approach to solving real problems with clean, scalable solutions."
        />
      </Reveal>

      <Reveal>
        <div className="mb-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                filter === activeFilter
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-8">
        {visibleProjects.map((project, index) => {
          const isApplySathi = project.id === "applysathi";
          const isEvFinder = project.id === "evfinder";
          
          return (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-300">
                <div className={`grid ${isApplySathi ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                  <div className={`relative bg-slate-50 ${
                    isApplySathi 
                      ? "h-64 lg:h-auto" 
                      : "h-56 lg:h-auto"
                  }`}>
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className={`${
                        isEvFinder 
                          ? "object-contain p-4 md:object-cover md:p-6" 
                          : "object-contain p-6"
                      } transition-transform duration-500 group-hover:scale-105`}
                      sizes={isApplySathi ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    />
                  </div>
                  <div className={`p-6 md:p-8 ${isApplySathi ? "lg:col-span-1" : "lg:col-span-2"}`}>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                          {project.category}
                        </p>
                        <h3 className={`mt-1.5 font-display font-bold text-slate-900 ${
                          isApplySathi ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                        }`}>
                          {project.name}
                        </h3>
                      </div>
                      {isApplySathi && (
                        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mb-5 space-y-2">
                      <p className="text-sm leading-relaxed text-slate-600">
                        <span className="font-semibold text-slate-900">Problem:</span> {project.problem}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        <span className="font-semibold text-slate-900">Solution:</span> {project.solution}
                      </p>
                    </div>

                    <div className="mb-5">
                      <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Key Features
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                      {!isEvFinder && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                        >
                          <ArrowUpRight size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.github && project.github !== "https://github.com/" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-700"
                        >
                          <ExternalLink size={16} />
                          Source Code
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