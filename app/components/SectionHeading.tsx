type SectionHeadingProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">{badge}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{subtitle}</p>
    </div>
  );
}