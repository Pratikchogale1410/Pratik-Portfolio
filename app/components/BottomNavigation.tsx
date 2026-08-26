"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Briefcase,
  Code2,
  FolderOpen,
  Home,
  Mail,
  User,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Exp", href: "/experience", icon: Briefcase },
  { label: "Skills", href: "/skills", icon: Code2 },
  { label: "Work", href: "/projects", icon: FolderOpen },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function BottomNavigation() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b0f18]/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      aria-label="Mobile section navigation"
    >
      <div className="grid h-[64px] grid-cols-6 items-stretch">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.href || (item.href !== "/" && activePath.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring flex min-w-0 flex-col items-center justify-center gap-0.5 px-0.5 text-[10px] font-medium"
              aria-label={`Navigate to ${item.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? "text-sky-400" : "text-slate-500"}
              />
              <span className={`truncate leading-none ${isActive ? "text-sky-400" : "text-slate-500"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
