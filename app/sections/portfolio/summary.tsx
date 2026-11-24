import { personalInfo, professionalHighlights } from "@/data/portfolio-data";

export function SummarySection() {
  return (
    <section
      id="summary"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Summary</p>
            <h2 className="heading-display mt-4 text-[32px] leading-[1.05] md:text-[48px]">
              Professional
              <br />
              Summary
            </h2>
          </div>
          <p className="text-base leading-7 text-[var(--foreground-subtle)] md:text-[17px]">
            {personalInfo.summary}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {professionalHighlights.map((highlight, idx) => (
            <article
              key={highlight.title}
              className="reveal card p-7 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center font-display text-[14px] font-bold text-[var(--foreground)] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  {idx + 1}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Highlight
                </span>
              </div>
              <h3 className="heading-display mt-4 text-[20px] leading-tight">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--foreground-subtle)]">
                {highlight.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
