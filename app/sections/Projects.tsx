"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio-data";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/Reveal";
import { ProjectCard } from "@/app/components/ProjectCard";

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
              suppressHydrationWarning={true}
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
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}