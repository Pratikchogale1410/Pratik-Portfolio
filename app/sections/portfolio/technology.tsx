import { skillGroups } from "@/data/portfolio-data";

export function TechnologySection() {
  return (
<<<<<<< HEAD
    <section
      id="skills"
      className="border-b border-[var(--border)] bg-[var(--background)]"
    >
=======
    <section id="technology" className="relative border-b border-[var(--border)] bg-[var(--background)]">
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
      <div className="section-shell section-pad">
        <div className="reveal grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="eyebrow">Technology</p>
            <h2 className="heading-display mt-5 text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.04]">
              Tools I use to build
              <br />
              modern applications.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[18px]">
            A focused stack of frontend, backend, database, AI and developer
            tooling — chosen for production reliability.
          </p>
        </div>

        <div className="reveal mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
<<<<<<< HEAD
            <div
              key={group.category}
              className="border border-[var(--border)] bg-white p-7 shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:p-8"
            >
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
=======
            <div key={group.category} className="glass-card p-7 md:p-8">
              <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
>>>>>>> 1fdfc2107c52d9789ccf090d3d586bccd177bdda
                <p className="eyebrow">{group.category}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground-subtle)]">
                  {group.skills.length} items
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start justify-between border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[15px] font-semibold text-[var(--foreground)]">
                      {skill.name}
                    </span>
                    <span className="text-right text-[12px] leading-5 text-[var(--foreground-subtle)]">
                      {skill.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

