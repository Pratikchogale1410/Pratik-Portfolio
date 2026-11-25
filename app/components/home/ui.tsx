import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

/** Pill label with a sparkle icon, used above each section heading. */
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="hm-kicker">
      <Sparkles size={14} aria-hidden="true" />
      {children}
    </span>
  );
}

/** Two stacked copies of a label; hover slides the second copy in. */
export function Swap({ text }: { text: string }) {
  return (
    <span className="hm-swap">
      <span>{text}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}

type HomeButtonProps = {
  href: string;
  children: string;
  variant?: "light" | "ink" | "ghost";
  external?: boolean;
};

/** Pill button with the label swap and an arrow inside a circle. */
export function HomeButton({ href, children, variant = "light", external = false }: HomeButtonProps) {
  const className = `hm-btn hm-btn--${variant}`;
  const content = (
    <>
      <Swap text={children} />
      <span className="hm-btn-icon" aria-hidden="true">
        <ArrowUpRight size={16} />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
