import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { projects } from "@/data/portfolio-data";

export const metadata = {
  title: "Projects — Pratik Chogale",
  description:
    "Production-ready AI applications, CRM systems, and web products built by Pratik Chogale.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[var(--background)]">
      <PageHeader
        eyebrow="All Projects"
        title="Selected software I've built and contributed to."
        subtitle="Real applications across healthcare CRM, AI-powered job assistance and location-based web products."
      />

      <section className="border-b border-[var(--border)]">
        <div className="section-shell py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={project.id}
                className="flex flex-col gap-6 border border-[var(--border)] bg-[var(--glass)] p-7 md:p-8"
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
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--glass)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground)] transition-colors hover:bg-white/10"
                    >
                      View Live
                      <ArrowUpRight size={12} />
                    </a>
                  ) : null}
                  {project.id === "dermaplastcrm" ? (
                    <Link
                      href="/#case-study"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
                    >
                      Case Study
                      <ArrowRight size={12} />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link href="/" className="btn-secondary">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

