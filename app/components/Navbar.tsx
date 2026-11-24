"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FlipText } from "./FlipText";
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  // Hide on scroll down past the threshold, show again on scroll up.
  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 12);
      if (menuOpen) {
        lastY.current = y;
        return;
      }
      if (y > 160 && delta > 6) setHidden(true);
      else if (delta < -6 || y < 160) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Pause Lenis and lock the page while the mobile menu is open.
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
        className={`site-header fixed inset-x-0 top-0 z-50 ${hidden && !menuOpen ? "is-hidden" : ""} ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="section-shell pt-3 md:pt-4">
          <div className="site-nav-shell mx-auto flex h-14 items-center justify-between gap-3 rounded-full border border-[var(--border)] bg-[rgba(1,13,35,0.5)] pl-5 pr-2 md:h-[62px] md:max-w-[1000px] md:pl-6">
            <Link href="/" className="flex shrink-0 items-center gap-2 text-[var(--foreground)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] font-display text-[13px] font-bold leading-none text-white">
                P
              </span>
              <span className="font-display text-[14px] font-semibold tracking-tight md:text-[15px]">
                PRATIK<span className="text-[var(--accent-bright)]">.DEV</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[14px] font-semibold text-[var(--foreground)] transition-opacity hover:opacity-80"
                >
                  <FlipText text={item.label} />
                </a>
              ))}
            </nav>

            <div className="hidden items-center lg:flex">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-1.5 !pl-5 !pr-1.5 !text-[14px]"
              >
                <FlipText text="Let's Talk" />
                <span className="btn-icon-chip">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !px-3 !py-1.5 !text-[12px]"
              >
                Connect
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
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
        className={`mobile-menu fixed inset-0 z-40 overflow-y-auto bg-[var(--background)] lg:hidden ${
          menuOpen ? "is-open pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ clipPath: menuOpen ? "circle(150% at 100% 0%)" : "circle(0% at 100% 0%)" }}
        aria-hidden={!menuOpen}
      >
        <div className="section-shell flex min-h-full flex-col justify-center gap-2 pb-16 pt-28">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="mobile-menu-item border-b border-[var(--border-soft)] py-4 font-display text-[34px] font-semibold tracking-tight text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            onClick={close}
            className="mobile-menu-item btn-primary mt-8 w-fit"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}
