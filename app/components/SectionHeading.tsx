type SectionHeadingProps = {
  badge: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-3 text-center md:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">{badge}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:mx-0 md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
