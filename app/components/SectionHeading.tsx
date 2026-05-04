type SectionHeadingProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          {badge}
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}