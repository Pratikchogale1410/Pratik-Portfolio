import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { FlipText } from "./FlipText";
import { personalInfo } from "@/data/portfolio-data";

const footerNav = [
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Technology", href: "#technology" },
  { label: "Projects", href: "#work" },
  { label: "Agent Mail", href: "#agent-mail" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "inline-flex items-center gap-2 text-[15px] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-[15px] font-semibold tracking-tight">
              PRATIK<span className="text-[var(--accent-bright)]">.DEV</span>
            </p>
            <p className="mt-4 text-[15px] font-semibold text-[var(--foreground)]">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-[var(--foreground-muted)]">{personalInfo.role}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--foreground-subtle)]">
              Building production-ready AI applications, CRM systems, and
              scalable web products.
            </p>
          </div>

          <div>
            <p className="eyebrow-muted mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    <FlipText text={item.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-muted mb-5">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                  <LinkedinIcon size={14} /> <FlipText text="LinkedIn" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pratikchogale1410"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  <GithubIcon size={14} /> <FlipText text="GitHub" />
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className={linkClass}>
                  <Mail size={14} /> <FlipText text="Email" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-soft)] pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[var(--foreground-subtle)]">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--foreground-subtle)]">{personalInfo.location}</p>
        </div>
      </div>
    </footer>
  );
}
