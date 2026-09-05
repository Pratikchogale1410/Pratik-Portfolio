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
    <section
      id="experience"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="heading-display mt-4 text-[32px] leading-[1.05] md:text-[48px]">
              Impact-focused
              <br />
              product development.
            </h2>
          </div>
          <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
            Full-stack ownership across AI platforms, CRM systems, and
            production workflows.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 border border-[var(--border)] bg-white p-1 shadow-[5px_5px_0_0_rgba(10,10,10,1)] md:grid-cols-[1.2fr_2fr]">
          <div className="bg-white p-7 md:p-10">
            <p className="eyebrow">{exp.period}</p>
            <h3 className="heading-display mt-4 text-[24px] md:text-[28px]">
              {exp.role}
            </h3>
            <p className="mt-2 text-sm font-semibold text-[var(--foreground-muted)]">
              {exp.company}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px border border-[var(--border)] bg-[var(--border)]">
              {[
                { label: "Type", value: "Full-time" },
                { label: "Scope", value: "Full Stack" },
                { label: "Domain", value: "Healthcare / AI" },
                { label: "Status", value: "Active" },
              ].map((row) => (
                <div key={row.label} className="bg-white p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-7 md:p-10">
            <p className="eyebrow">Responsibilities</p>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[var(--foreground-muted)]">
              {exp.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-10">Stack & tools</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
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
