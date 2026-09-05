import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="heading-display mt-4 text-[32px] leading-[1.05] md:text-[48px]">
              Software I&apos;ve built
              <br />
              and contributed to.
            </h2>
          </div>
          <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
            Real applications across healthcare CRM, AI-powered job assistance
            and location-based web products.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="reveal flex flex-col gap-6 border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-8"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="tag-accent">{project.category}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground-subtle)]">
                  {project.period}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="heading-display text-[22px] leading-tight">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-soft">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="border-t border-[var(--border-soft)] pt-5">
                <p className="eyebrow-muted mb-3">Key capabilities</p>
                <ul className="space-y-1.5 text-sm text-[var(--foreground-muted)]">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-[var(--border-soft)] pt-5">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-white"
                  >
                    View Live
                    <ArrowUpRight size={12} />
                  </a>
                ) : null}
                {project.id === "dermaplastcrm" ? (
                  <a
                    href="/projects#case-study"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-[1.5px_1.5px_0_0_rgba(10,10,10,1)]"
                  >
                    Case Study
                    <ArrowRight size={12} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/projects"
            className="btn-secondary"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
