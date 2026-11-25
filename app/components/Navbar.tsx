"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { getLenis } from "@/app/lib/lenis-store";

const LINKEDIN_URL = "https://linkedin.com/in/pratik-chogale";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Impact", href: "/#impact" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/#technology" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Transparent at the top with white text and a white pill CTA with an arrow
 * circle. After 80px the dark translucent blurred background fades in, so the
 * bar reads as a floating centred pill.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="mx-auto w-full max-w-[1240px] px-4 pt-4 md:px-8">
          <div className="hm-nav-bar">
            <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--hm-royal)] text-[14px] font-bold text-white">
                P
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                PRATIK<span className="text-[var(--hm-lime)]">.DEV</span>
              </span>
            </Link>

            <nav className="relative z-10 hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hm-link rounded-full px-3 py-2 text-[14px] font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="relative z-10 hidden lg:block">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="hm-btn hm-btn--light !h-11 !pl-5 !text-[14px]"
              >
                Let&apos;s Talk
                <span className="hm-btn-icon !h-8 !w-8 !bg-[var(--hm-ink)]" aria-hidden="true">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>

            <div className="relative z-10 flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        data-lenis-prevent="true"
        className={`fixed inset-0 z-40 overflow-y-auto bg-[var(--hm-navy)] text-white transition-opacity duration-500 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-full flex-col justify-center gap-2 px-6 pb-16 pt-28">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-white/12 py-4 text-[34px] font-semibold tracking-tight"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="hm-btn hm-btn--light mt-8 w-fit"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}
