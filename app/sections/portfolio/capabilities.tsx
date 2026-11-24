import { SectionHeading } from "./section-heading";
import { Parallax } from "@/app/components/Parallax";

const capabilities = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Production-ready web applications across frontend, backend, database and API layers.",
    tags: ["NEXT.JS", "REACT", "JAVASCRIPT", "DATABASES"],
  },
  {
    number: "02",
    title: "AI Applications",
    description:
      "AI-powered application features, LLM integrations and intelligent workflows.",
    tags: ["LLM", "OPENROUTER", "AI WORKFLOWS", "PROMPT ENGINEERING"],
  },
  {
    number: "03",
    title: "CRM Development",
    description:
      "Healthcare CRM workflows including leads, patients, appointments, treatments and billing.",
    tags: ["CRM", "LEAD MANAGEMENT", "APPOINTMENTS", "PATIENT WORKFLOWS"],
  },
  {
    number: "04",
    title: "Database Optimization",
    description:
      "Database architecture, query optimization and efficient data-fetching strategies.",
    tags: ["SUPABASE", "CONVEX", "FIREBASE", "SQL"],
  },
  {
    number: "05",
    title: "WhatsApp Automation",
    description:
      "Automated customer communication and CRM-connected WhatsApp workflows.",
    tags: ["WHATSAPP BUSINESS", "META", "API", "AUTOMATION"],
  },
  {
    number: "06",
    title: "Web Applications",
    description:
      "Responsive applications built for practical production use.",
    tags: ["RESPONSIVE UI", "FRONTEND", "BACKEND", "DEPLOYMENT"],
  },
];

export function CapabilitiesSection() {
  // Three columns drift at different speeds so the cards look suspended.
  const columns = [0, 1, 2].map((col) =>
    capabilities.filter((_, i) => i % 3 === col)
  );
  const speeds = [28, 64, 44];

  return (
    <section
      id="services"
      className="relative border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="section-shell section-pad">
        <div className="reveal">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Engineering capabilities
                <br />
                for production software.
              </>
            }
            subtitle="Six areas where I've shipped real engineering work — not slides."
          />
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:items-start">
          {columns.map((col, colIdx) => (
            <Parallax key={colIdx} speed={speeds[colIdx]} className="flex flex-col gap-5">
              {col.map((cap) => (
                <div key={cap.title} className="reveal">
                <article
                  data-cursor="view"
                  data-cursor-label="View"
                  className="glass-card lift flex flex-col gap-6 p-7 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-[var(--foreground-subtle)]">
                      {cap.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-bright)]">
                      Engineering
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="heading-display text-[22px] leading-tight">{cap.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[var(--foreground-muted)]">
                      {cap.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 border-t border-[var(--border-soft)] pt-5">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="tag-soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
                </div>
              ))}
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
