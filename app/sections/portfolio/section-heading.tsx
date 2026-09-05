import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-display text-[32px] leading-[1.05] md:text-[44px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-7 text-[var(--foreground-muted)] md:text-[17px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
