/**
 * SectionHeader
 * Reusable badge + heading + subtitle block used in most page sections.
 * Maps to the "SectionTitle" container pattern in Figma.
 *
 * Props:
 *   badge            – optional label shown above heading (pill style)
 *   badgeClassName   – override badge colours/style
 *   title            – required heading text
 *   titleClassName   – override heading colour/size (e.g. "text-white")
 *   subtitle         – optional subheading text
 *   subtitleClassName – override subtitle style
 *   align            – "center" (default) | "left"
 */
export default function SectionHeader({
  badge,
  badgeClassName = "bg-brand-green/15 text-brand-green-dark",
  title,
  titleClassName = "text-brand-navy",
  subtitle,
  subtitleClassName = "text-slate-500",
  align = "center",
}) {
  const textAlign = align === "left" ? "text-left" : "text-center";

  return (
    <div className={textAlign}>
      {badge && (
        <span
          className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${badgeClassName}`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`${badge ? "mt-3 " : ""}text-[30px] font-bold leading-tight tracking-[-0.45px] sm:text-[38px] lg:text-[44px] lg:tracking-[-0.7px] ${titleClassName}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-[18px] sm:text-[22px] lg:text-[26px] ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
