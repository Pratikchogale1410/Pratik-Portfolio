import { experiences } from "@/data/portfolio-data";

export function ExperienceSection() {
  const exp = experiences[0];
  const tags = [
    "Next.js",
    "JavaScript",
    "Firebase",
    "Supabase",
    "Convex",
    "Responsive UI/UX",
    "Backend integration",
    "Database design",
    "Testing",
    "Debugging",
    "Optimization",
    "Production readiness",
    "AI functionality",
    "External API integrations",
    "Git / GitHub",
    "Cursor AI",
  ];

  return (
    <section id="experience" className="relative border-b border-[var(--border)] bg-[var(--background)]">
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.04]">
              Impact-focused
              <br />
              product development.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[18px]">
            Full-stack ownership across AI platforms, CRM systems, and
            production workflows.
          </p>
        </div>

        <div className="reveal glass-card mt-16 grid overflow-hidden md:grid-cols-[1.2fr_2fr]">
          <div className="p-7 md:p-10">
            <p className="eyebrow">{exp.period}</p>
            <h3 className="heading-display mt-5 text-[24px] md:text-[30px]">{exp.role}</h3>
            <p className="mt-2 text-sm font-semibold text-[var(--foreground-muted)]">{exp.company}</p>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--border-soft)]">
              {[
                { label: "Type", value: "Full-time" },
                { label: "Scope", value: "Full Stack" },
                { label: "Domain", value: "Healthcare / AI" },
                { label: "Status", value: "Active" },
              ].map((row) => (
                <div key={row.label} className="bg-[rgba(1,13,35,0.8)] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-soft)] p-7 md:border-l md:border-t-0 md:p-10">
            <p className="eyebrow">Responsibilities</p>
            <ul className="mt-6 space-y-3 text-[15px] leading-7 text-[var(--foreground-muted)]">
              {exp.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-12">Stack & tools</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="tag-soft">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

