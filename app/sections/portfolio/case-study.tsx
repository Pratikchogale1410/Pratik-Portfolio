import { ArrowDown, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

const workflow = [
  { label: "Clinic Email ID", sub: "Incoming Lead" },
  { label: "Agent Mail", sub: "Email Receiver" },
  { label: "Lead Processing", sub: "Enrichment" },
  { label: "DermaplastCRM", sub: "Lead Page" },
];

const crmWorkflows = [
  "Lead Management",
  "Patient Conversion",
  "Appointments",
  "Treatments",
  "Billing",
  "Before / After Results",
];

const automation = [
  "WhatsApp automation",
  "Meta / WhatsApp Business integration",
  "OpenRouter integration",
];

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="border-b border-[var(--border)] bg-white"
    >
      <div className="section-shell section-pad">
        <div className="reveal">
          <SectionHeading
            eyebrow="Case Study — DermaplastCRM"
            title={
              <>
                Healthcare CRM, from
                <br />
                clinic email to CRM lead.
              </>
            }
            subtitle="Production-ready CRM covering lead-to-patient workflows, appointments, treatments, before/after results, billing, and WhatsApp chatbot automation."
          />
        </div>

        <div className="reveal mt-10 grid gap-3 border border-[var(--border)] bg-white p-6 md:grid-cols-3 md:gap-0 md:p-0">
          <div className="bg-white p-6">
            <p className="eyebrow-muted">Category</p>
            <p className="mt-2 text-[15px] font-semibold">Healthcare CRM</p>
          </div>
          <div className="bg-white p-6 md:border-x md:border-[var(--border)]">
            <p className="eyebrow-muted">Period</p>
            <p className="mt-2 text-[15px] font-semibold">
              April 2026 – July 2026
            </p>
          </div>
          <div className="bg-white p-6">
            <p className="eyebrow-muted">Stack</p>
            <p className="mt-2 flex flex-wrap gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
              Next.js · JavaScript · Convex · Supabase · OpenRouter · Meta / WhatsApp
            </p>
          </div>
        </div>

        <div className="reveal mt-14">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Lead Flow</p>
              <h3 className="heading-display mt-2 text-[24px] md:text-[28px]">
                From incoming clinic email to actionable CRM lead.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--foreground-muted)]">
              Every incoming clinic lead moves from email to Agent Mail and
              into the CRM Lead workflow.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex min-w-[820px] items-stretch gap-0">
              {workflow.map((step, idx) => (
                <div key={step.label} className="flex items-stretch">
                  <div className="workflow-node flex flex-col gap-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      Step 0{idx + 1}
                    </p>
                    <p className="font-display text-[15px] font-semibold leading-tight">
                      {step.label}
                    </p>
                    <p className="text-[11px] text-[var(--foreground-muted)]">
                      {step.sub}
                    </p>
                  </div>
                  {idx < workflow.length - 1 ? (
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
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="reveal border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-8">
            <p className="eyebrow">01 — The System</p>
            <h3 className="heading-display mt-3 text-[22px]">
              Healthcare CRM for the full lead-to-patient workflow.
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              Built an end-to-end CRM that connects leads, patients,
              appointments, treatments, billing and communication in a single
              production system.
            </p>
          </div>

          <div className="reveal border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-8">
            <p className="eyebrow">02 — Lead Flow</p>
            <h3 className="heading-display mt-3 text-[22px]">
              Clinic Mail → Agent Mail → CRM Lead Page
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              Implemented an email-to-CRM workflow where leads arriving
              through the clinic mail are routed through Agent Mail and added
              to the CRM Lead Page.
            </p>
          </div>

          <div className="reveal border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-8">
            <p className="eyebrow">03 — CRM Workflows</p>
            <h3 className="heading-display mt-3 text-[22px]">
              End-to-end patient operations.
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {crmWorkflows.map((w) => (
                <li
                  key={w}
                  className="flex items-center gap-2 border border-[var(--border-soft)] bg-[var(--background)] px-3 py-2 text-sm"
                >
                  <CheckCircle2 size={14} className="text-[var(--accent)]" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-8">
            <p className="eyebrow">04 — Automation</p>
            <h3 className="heading-display mt-3 text-[22px]">
              WhatsApp & LLM-powered automation.
            </h3>
            <ul className="mt-5 space-y-2">
              {automation.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]"
                >
                  <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal border border-[var(--border)] bg-[var(--background)] p-7 shadow-[4px_4px_0_0_rgba(10,10,10,1)] md:p-8 md:col-span-2">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="eyebrow">05 — Database</p>
                <h3 className="heading-display mt-3 text-[22px]">
                  Supabase → Convex migration.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                  Migrated the application database and reworked the data
                  layer to reduce database I/O from{" "}
                  <strong className="text-[var(--foreground)]">
                    12–15 GB/day
                  </strong>{" "}
                  down to{" "}
                  <strong className="text-[var(--accent)]">
                    1–1.5 GB/day
                  </strong>
                  .
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                  <strong>06 — Result:</strong> Reduced unnecessary database
                  I/O through data-fetching, query and architecture
                  improvements.
                </p>
              </div>

              <div className="border border-[var(--border)] bg-white">
                <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                    Database I/O
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Migrated
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="border-r border-[var(--border)] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                      Before
                    </p>
                    <p className="mt-2 font-display text-[28px] font-semibold leading-none tracking-tight">
                      12–15
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                      GB / day
                    </p>
                  </div>
                  <div className="p-5">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--accent)" }}
                    >
                      After
                    </p>
                    <p
                      className="mt-2 font-display text-[28px] font-semibold leading-none tracking-tight"
                      style={{ color: "var(--accent)" }}
                    >
                      1–1.5
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                      GB / day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
