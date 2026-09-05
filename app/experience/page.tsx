import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { experiences } from "@/data/portfolio-data";

export const metadata = {
  title: "Experience — Pratik Chogale",
  description:
    "Production engineering experience across AI platforms, CRM systems, and full-stack web products.",
};

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

export default function ExperiencePage() {
  const exp = experiences[0];

  return (
    <main className="bg-[var(--background)]">
      <PageHeader
        eyebrow="Experience"
        title="Building and contributing to production-ready software systems."
        subtitle="Full-stack ownership across AI platforms, CRM systems, and production workflows."
      />

      <section className="border-b border-[var(--border)]">
        <div className="section-shell py-16 md:py-20">
          <div className="border border-[var(--border)] bg-white p-7 shadow-[5px_5px_0_0_rgba(10,10,10,1)] md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow">{exp.period}</p>
                <h2 className="heading-display mt-3 text-[26px] leading-tight md:text-[32px]">
                  {exp.role}
                </h2>
                <p className="mt-2 text-[15px] font-semibold text-[var(--foreground-muted)]">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[var(--border-soft)] pt-8">
              <p className="eyebrow">Responsibilities &amp; Contributions</p>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[var(--foreground-muted)]">
                {exp.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-10">
            <p className="eyebrow">Stack &amp; Tools</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="tag-soft">
                  {tag}
                </span>
              ))}
            </div>
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
