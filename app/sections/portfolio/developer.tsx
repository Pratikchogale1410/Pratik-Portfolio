import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";

const focusTags = [
  "FULL STACK DEVELOPMENT",
  "AI INTEGRATION",
  "CRM SYSTEMS",
  "DATABASE OPTIMIZATION",
  "AUTOMATION",
];

export function DeveloperSection() {
  return (
    <section
      id="about"
      className="border-b border-[var(--border)] bg-[var(--background)] grid-bg"
    >
      <div className="section-shell section-pad">
        <div className="reveal">
          <p className="eyebrow">The Developer</p>
          <h2 className="heading-display mt-4 text-[32px] leading-[1.05] md:text-[44px]">
            The engineer behind
            <br />
            the systems.
          </h2>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-[6px_6px_0_0_rgba(10,10,10,1)]">
          <div className="grid items-stretch md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative border-b border-[var(--border)] bg-[var(--background)] md:border-b-0 md:border-r">
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
              <div className="flex items-center justify-between border-t border-[var(--border)] bg-white px-4 py-2.5 md:absolute md:bottom-0 md:left-0 md:right-0 md:border-t md:bg-white/95 md:backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                  Profile
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  2026
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <p className="eyebrow">Profile</p>
              <h3 className="heading-display mt-3 text-[28px] leading-[1.1] md:text-[36px]">
                Pratik Chogale
              </h3>
              <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground-muted)]">
                Full Stack Developer
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
                <span className="h-1 w-1 bg-[var(--accent)]" />
                BSc IT Graduate
              </p>

              <p className="mt-6 text-[15px] leading-7 text-[var(--foreground-muted)] md:text-base">
                BSc IT Graduate and Full Stack Developer focused on building
                production-ready web applications, AI-powered features, CRM
                systems and automation workflows.
              </p>

              <div className="mt-8 border-t border-[var(--border-soft)] pt-6">
                <p className="eyebrow">Focus areas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 border border-[var(--border)] bg-white px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em]"
                    >
                      <span className="h-1 w-1 bg-[var(--accent)]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
                {[
                  { label: "Role", value: "Full Stack" },
                  { label: "Education", value: "BSc IT" },
                  { label: "Status", value: "Open to work" },
                ].map((row) => (
                  <div key={row.label} className="bg-white px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                      {row.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">{row.value}</p>
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
