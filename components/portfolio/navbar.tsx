"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 z-40 w-full px-4"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-xl">
        <a href="#home" className="font-display text-sm font-semibold tracking-wide text-slate-900 md:text-base">
          PRATIK.DEV
        </a>
        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
