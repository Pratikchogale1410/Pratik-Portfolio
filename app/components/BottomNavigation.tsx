"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Mail,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Exp", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden"
    >
      <div className="grid h-16 grid-cols-6 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="flex flex-col items-center justify-center gap-0.5 text-xs font-medium transition-colors focus:outline-none focus-visible:bg-blue-50"
              style={{
                color: isActive ? "#0284c7" : "#64748b",
              }}
              aria-label={`Navigate to ${item.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? "text-blue-600" : "text-slate-500"}
              />
              <span className={`leading-none ${isActive ? "text-blue-600" : "text-slate-500"}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
