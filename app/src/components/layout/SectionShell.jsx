/**
 * SectionShell
 * Provides the full-width section wrapper + centred max-width content container.
 * Maps to the outer "Container" frame seen in every Figma section.
 *
 * Props:
 *   className  – section-level classes (bg, py, border, etc.)
 *   innerClass – overrides for the inner max-width container
 *   ...props   – forwarded to <section> (id, aria-*, etc.)
 */
export default function SectionShell({
  className = "",
  innerClass = "",
  children,
  ...props
}) {
  return (
    <section className={className} {...props}>
      <div className={`mx-auto w-full max-w-[1280px] px-4 ${innerClass}`}>
        {children}
      </div>
    </section>
  );
}
