import { ArrowDown } from "lucide-react";

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="border-b border-[var(--border)] bg-white"
    >
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Engineering Impact</p>
            <h2 className="heading-display mt-4 text-[32px] leading-[1.05] md:text-[48px]">
              Optimizing the systems
              <br />
              behind the application.
            </h2>
          </div>
          <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
            Identified high database I/O usage in production, reworked the
            application data layer, and reduced unnecessary operations across
            the stack.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
          <div className="border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-10">
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

          <div className="border border-[var(--border)] bg-[var(--background)] p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-10">
            <p className="eyebrow">Optimization</p>
            <ul className="mt-6 space-y-3 text-[15px] leading-6">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                <span>Query Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                <span>Data Fetching Improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                <span>Database Architecture</span>
              </li>
            </ul>
            <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground-subtle)]">
              <ArrowDown size={14} />
              Reduced
            </div>
          </div>

          <div className="border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-10">
            <p className="eyebrow-accent" style={{ color: "var(--accent)" }}>
              After
            </p>
            <p className="mt-6 font-display text-[56px] font-semibold leading-none tracking-tight text-[var(--accent)] md:text-[72px]">
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

        <p className="mt-8 max-w-3xl text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
          Optimized application data operations and reduced unnecessary
          database I/O through data-fetching, query and architecture
          improvements.
        </p>
      </div>
    </section>
  );
}
