import { ArrowDown } from "lucide-react";
import { achievements } from "@/data/portfolio-data";

export function ImpactSection() {
  return (
    <section id="impact" className="relative border-b border-[var(--border)] bg-[var(--background)]">
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Engineering Impact</p>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.04]">
              Optimizing the systems
              <br />
              and Impact
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[18px]">
            Identified high database I/O usage in production, reworked the
            application data layer, and reduced unnecessary operations across
            the stack.
          </p>
        </div>

        <div className="reveal mt-16 grid gap-5 md:grid-cols-3">
          <div className="glass-card p-7 md:p-10">
            <p className="eyebrow">Before</p>
            <p className="mt-6 font-display text-[56px] font-semibold leading-none tracking-tight md:text-[72px]">
              12–15
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
              GB / day
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
              Database I/O
            </p>
          </div>

          <div className="glass-card p-7 md:p-10">
            <p className="eyebrow">Optimization</p>
            <ul className="mt-6 space-y-3 text-[15px] leading-6 text-[var(--foreground-muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                <span>Query Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                <span>Data Fetching Improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" />
                <span>Database Architecture</span>
              </li>
            </ul>
            <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
              <ArrowDown size={14} />
              Reduced
            </div>
          </div>

          <div className="glass-card border-[rgba(0,86,251,0.45)] p-7 shadow-[0_30px_80px_-30px_rgba(0,86,251,0.6)] md:p-10">
            <p className="eyebrow">After</p>
            <p className="mt-6 font-display text-[56px] font-semibold leading-none tracking-tight text-[var(--accent-bright)] md:text-[72px]">
              1–1.5
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
              GB / day
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
              Database I/O
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[17px]">
          Optimized application data operations and reduced unnecessary
          database I/O through data-fetching, query and architecture
          improvements.
        </p>
      </div>
    </section>
  );
}
