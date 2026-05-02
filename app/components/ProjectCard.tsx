import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Link2 } from "lucide-react";

type Project = {
  id: string;
  category: string;
  name: string;
  image: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  demo: string;
  github: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hideGithub = ["applysathi", "dermaplastcrm", "evfinder"].includes(project.id);

  return (
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
            {!hideGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Link2 size={15} />
              </a>
            )}
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
  );
}