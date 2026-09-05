import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)] pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="section-shell">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
        <div className="mt-8">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-display mt-3 text-[36px] leading-[1.05] md:text-[56px]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
