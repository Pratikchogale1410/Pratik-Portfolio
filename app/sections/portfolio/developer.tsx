import Image from "next/image";

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

        <div className="reveal glass-card mt-14 overflow-hidden">
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
              <div className="flex items-center justify-between border-t border-[var(--border-soft)] bg-[rgba(1,13,35,0.7)] px-5 py-3 md:absolute md:bottom-0 md:left-0 md:right-0 md:backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
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
              <p className="mt-3 text-[15px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground-muted)]">
                Full Stack Developer
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
                BSc IT Graduate
              </p>

              <p className="mt-6 text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[17px]">
                BSc IT Graduate and Full Stack Developer focused on building
                production-ready web applications, AI-powered features, CRM
                systems and automation workflows.
              </p>

              <div className="mt-8 border-t border-[var(--border-soft)] pt-6">
                <p className="eyebrow">Focus areas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span key={tag} className="tag">
                      <span className="mr-2 h-1 w-1 rounded-full bg-[var(--accent-bright)]" />
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
