"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, personalInfo } from "@/data/portfolio-data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#07090f]/80 py-0 backdrop-blur-xl"
          : "bg-transparent py-1"
      }`}
    >
      <nav
        className={`section-shell flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="focus-ring group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-sm font-bold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-transform group-hover:scale-105">
            P
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-white md:text-base">
            {personalInfo.name.split(" ")[0].toUpperCase()}
            <span className="text-sky-400">.DEV</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-7">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring relative text-sm transition-colors ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sky-400" />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="focus-ring inline-flex rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Contact
          </Link>
        </div>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 md:hidden"
        >
          LinkedIn
        </a>
      </nav>
    </motion.header>
  );
}
