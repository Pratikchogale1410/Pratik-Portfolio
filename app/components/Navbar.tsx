"use client";

const LINKEDIN_URL = "https://www.linkedin.com/in/pratik-chogale-68236632a/";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Impact", href: "/#impact" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/#technology" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-3 md:pt-4">
        <div
          className={`flex h-14 items-center justify-between gap-3 border border-[var(--border)] bg-black px-3.5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] md:h-[60px] md:px-5`}
        >
          <a
            href="/#top"
            className="flex shrink-0 items-center gap-2 text-[var(--foreground)]"
          >
            <span className="flex h-7 w-7 items-center justify-center bg-[var(--accent)] font-display text-[13px] font-bold leading-none text-[var(--foreground)] shadow-[1.5px_1.5px_0_0_rgba(0,0,0,1)]">
              P
            </span>
            <span className="font-display text-[14px] font-semibold tracking-tight md:text-[15px]">
              PRATIK<span className="text-[var(--accent)]">.DEV</span>
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--background)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--foreground)] active:bg-[var(--accent)] active:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[var(--border)] bg-[var(--accent)] px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--foreground)] shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)]"
            >
              Let&apos;s Talk
            </a>
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 border border-[var(--border)] bg-[var(--accent)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--foreground)] shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] lg:hidden"
          >
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}

