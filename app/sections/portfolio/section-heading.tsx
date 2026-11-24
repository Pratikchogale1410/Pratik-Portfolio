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
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.04]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-[15px] leading-7 text-[var(--foreground-muted)] md:text-[18px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
