import { ArrowDown } from "lucide-react";

const flow = [
  "Clinic Mail",
  "Agent Mail",
  "Lead Processing",
  "DermaplastCRM",
  "Lead Page",
];

export function AgentMailSection() {
  return (
    <section
      id="agent-mail"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="section-shell section-pad">
        <div className="reveal">
          <div className="flex items-center gap-3">
            <p className="eyebrow">Agent Mail</p>
            <span className="h-px flex-1 bg-[var(--border-soft)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
              DermaplastCRM · Highlight
            </p>
          </div>

          <h2 className="heading-display mt-6 text-[32px] leading-[1.05] md:text-[44px]">
            From incoming clinic email
            <br />
            to actionable CRM lead.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
            Implemented an email-to-CRM workflow inside DermaplastCRM where
            incoming leads from the clinic mail flow through Agent Mail and
            are added to the CRM Lead workflow.
          </p>
        </div>

        <div className="reveal mt-12 border border-[var(--border)] bg-white">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
              Workflow
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Clinic Email → CRM Lead Page
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <div className="flex min-w-[820px] items-center px-6 py-8">
              {flow.map((step, idx) => (
                <div key={step} className="flex flex-1 items-center">
                  <div className="workflow-node flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                      Step 0{idx + 1}
                    </p>
                    <p className="mt-1 font-display text-[15px] font-semibold leading-tight">
                      {step}
                    </p>
                  </div>
                  {idx < flow.length - 1 ? (
                    <div className="workflow-arrow px-3">
                      <ArrowDown
                        size={20}
                        className="-rotate-90"
                        strokeWidth={1.5}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid border-t border-[var(--border)] md:grid-cols-3">
            {[
              { label: "Source", value: "Clinic Mail" },
              { label: "Bridge", value: "Agent Mail" },
              { label: "Destination", value: "CRM Lead Page" },
            ].map((row) => (
              <div
                key={row.label}
                className="border-r border-[var(--border)] px-5 py-4 last:border-r-0"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                  {row.label}
                </p>
                <p className="mt-1 text-sm font-semibold">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
