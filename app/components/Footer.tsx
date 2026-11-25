import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { personalInfo } from "@/data/portfolio-data";

const footerNav = [
  { label: "Services", href: "/#services" },
  { label: "Impact", href: "/#impact" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/#technology" },
  { label: "Contact", href: "/#contact" },
];

const linkClass =
  "inline-flex items-center gap-2 text-[15px] text-white/70 transition-colors hover:text-white";

/** Dark footer with a soft blue glow and a large gradient PRATIK.DEV wordmark. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hm hm-footer">
      <div className="hm-footer-glow" aria-hidden="true" />
      <div className="hm-wrap relative pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-[18px] font-semibold">{personalInfo.name}</p>
            <p className="mt-1 text-[14px] text-white/60">{personalInfo.role}</p>
            <p className="mt-5 max-w-xs text-[14px] leading-6 text-white/55">
              Building production-ready AI applications, CRM systems, and scalable web products.
            </p>
          </div>

          <div>
            <p className="hm-eyebrow mb-5 text-white/50">Navigation</p>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="hm-eyebrow mb-5 text-white/50">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Pratikchogale1410" target="_blank" rel="noreferrer" className={linkClass}>
                  <GithubIcon size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className={linkClass}>
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hm-wrap relative mt-16 md:mt-24">
        <p className="hm-wordmark" aria-label="PRATIK.DEV">
          PRATIK.DEV
        </p>
      </div>

      <div className="hm-wrap relative flex flex-col gap-3 border-t border-white/12 py-6 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p>{personalInfo.location}</p>
      </div>
    </footer>
  );
}
