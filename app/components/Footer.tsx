import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="section-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-[15px] font-semibold tracking-tight">
              PRATIK<span className="text-[var(--accent)]">.DEV</span>
            </p>
            <p className="mt-3 text-[15px] font-semibold text-[var(--foreground)]">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-[var(--foreground-muted)]">
              {personalInfo.role}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--foreground-subtle)]">
              Building production-ready AI applications, CRM systems, and
              scalable web products.
            </p>
          </div>

          <div>
            <p className="eyebrow-muted mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-muted mb-4">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pratikchogale1410"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--border-soft)] pt-6 md:flex-row md:items-center">
          <p className="text-xs text-[var(--foreground-subtle)]">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--foreground-subtle)]">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
