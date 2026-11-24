import Image from "next/image";
<<<<<<< HEAD
import { personalInfo, education } from "@/data/portfolio-data";
=======
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda

const focusTags = [
  "FULL STACK DEVELOPMENT",
  "AI INTEGRATION",
  "CRM SYSTEMS",
  "DATABASE OPTIMIZATION",
  "AUTOMATION",
];

export function DeveloperSection() {
  return (
    <section id="about" className="relative border-b border-[var(--border)] bg-[var(--background)] grid-bg">
      <div className="section-shell section-pad">
        <div className="reveal">
          <p className="eyebrow">The Developer</p>
          <h2 className="heading-display mt-5 text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.04]">
            The engineer behind
            <br />
            the systems.
          </h2>
        </div>

<<<<<<< HEAD
        <div className="reveal mt-12 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
=======
        <div className="reveal glass-card mt-14 overflow-hidden">
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
          <div className="grid items-stretch md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative border-b border-[var(--border-soft)] md:border-b-0 md:border-r">
              <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Pratik Chogale"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
<<<<<<< HEAD
              <div className="flex items-center justify-between border-t border-[var(--border)] bg-black px-4 py-2.5 md:absolute md:bottom-0 md:left-0 md:right-0 md:border-t md:bg-black/95 md:backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
=======
              <div className="flex items-center justify-between border-t border-[var(--border-soft)] bg-[rgba(1,13,35,0.7)] px-5 py-3 md:absolute md:bottom-0 md:left-0 md:right-0 md:backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
                  Profile
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-bright)]">
                  2026
                </p>
              </div>
            </div>

            <div className="p-7 md:p-12">
              <p className="eyebrow">Profile</p>
              <h3 className="heading-display mt-4 text-[28px] leading-[1.1] md:text-[38px]">
                Pratik Chogale
              </h3>
<<<<<<< HEAD
              <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground)]">
=======
              <p className="mt-3 text-[15px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground-muted)]">
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
                Full Stack Developer
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                BSc IT Graduate
              </p>

<<<<<<< HEAD
              <p className="mt-6 text-[15px] leading-7 text-[var(--foreground-subtle)] md:text-base">
=======
              <p className="mt-6 text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[17px]">
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
                BSc IT Graduate and Full Stack Developer focused on building
                production-ready web applications, AI-powered features, CRM
                systems and automation workflows.
              </p>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="eyebrow">Education</p>
                {education.map((edu) => (
                  <div key={edu.degree} className="mt-4">
                    <p className="text-sm font-bold text-[var(--foreground)]">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-[13px] text-[var(--foreground-subtle)]">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-xs text-[var(--foreground-subtle)] uppercase tracking-[0.12em]">
                      {edu.period} · {edu.location}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--foreground-subtle)]">
                      {edu.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="mt-1 h-1 w-1 shrink-0 bg-[var(--accent)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="eyebrow">Focus areas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span key={tag} className="tag">
<<<<<<< HEAD
=======
                      <span className="mr-2 h-1 w-1 rounded-full bg-[var(--accent-bright)]" />
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--border-soft)] md:grid-cols-3">
                {[
                  { label: "Role", value: "Full Stack" },
                  { label: "Education", value: "BSc IT" },
                  { label: "Status", value: "Open to work" },
                ].map((row) => (
                  <div key={row.label} className="bg-[rgba(1,13,35,0.8)] px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

