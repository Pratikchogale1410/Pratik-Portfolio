import { personalInfo, navItems } from "@/data/portfolio-data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c] pb-24 md:pb-0">
      <div className="section-shell flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-slate-400">{personalInfo.role}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 transition hover:text-sky-400"
          >
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-sky-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
