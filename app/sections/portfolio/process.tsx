const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand requirements, workflows and technical constraints before writing code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the interface, user flow and application architecture.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop frontend, backend, database and integrations end-to-end.",
  },
  {
    number: "04",
    title: "Test & Optimize",
    description:
      "Debug, test and optimize application performance and data layer.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Prepare the application for production deployment.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-[var(--border)] bg-white">
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">How I Build</p>
            <h2 className="heading-display mt-4 text-[32px] leading-[1.05] md:text-[48px]">
              From idea to
              <br />
              production software.
            </h2>
          </div>
          <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
            A practical development workflow I follow on every production
            project.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="reveal flex flex-col gap-4 border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <p className="font-display text-[44px] font-semibold leading-none tracking-tight text-[var(--accent)]">
                {step.number}
              </p>
              <h3 className="heading-display text-[18px]">{step.title}</h3>
              <p className="text-sm leading-6 text-[var(--foreground-subtle)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

