import SectionShell from "../layout/SectionShell";
import SectionHeader from "../ui/SectionHeader";
import { processSteps } from "../../data/constants";
import { TbShoppingCart, TbPuzzle, TbGift } from "react-icons/tb";
import QrCodeExactIcon from "../icons/QrCodeExactIcon";

const STEP_ICONS = [
  <TbShoppingCart size={24} aria-hidden="true" />,
  <QrCodeExactIcon aria-hidden="true" className="h-6 w-6" />,
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 9.2h10" />
    <rect x="5" y="10" width="14" height="10" rx="2.3" />
    <path d="M8 6h8a2 2 0 0 1 2 2v2H6V8a2 2 0 0 1 2-2Z" />
    <path d="M9 3.6h6a2 2 0 0 1 2 2V6H7v-.4a2 2 0 0 1 2-2Z" />
  </svg>,
  <TbPuzzle size={24} aria-hidden="true" className="-scale-x-100" />,
  <TbGift size={24} aria-hidden="true" />,
];

export default function ProcessSection() {
  return (
    <SectionShell className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <SectionHeader
        title="Un parcours client simple et engageant"
        subtitle="De l'achat du produit à la récompense, en 5 étapes"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {processSteps.map(({ name, desc }, index) => (
          <article
            key={name}
            className="relative flex flex-col items-center px-4 py-6 text-center"
          >
            {/* Step number badge */}
            <span
              className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${
                index < 3 ? "bg-brand-green" : "bg-brand-red"
              }`}
            >
              {index + 1}
            </span>

            {/* Step icon */}
            {(() => {
              const icon = STEP_ICONS[index] ?? STEP_ICONS[0];
              return (
                <div
                  className={`mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-[18px] border-[3px] bg-white shadow-[0_6px_14px_rgba(15,23,42,0.08)] ${
                    index < 3
                      ? "border-[#9DE9BF] text-[#16A34A]"
                      : "border-[#F2BCC1] text-[#E1272D]"
                  }`}
                >
                  {icon}
                </div>
              );
            })()}

            <h3 className="text-[17px] font-semibold leading-snug text-brand-navy">
              {name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {desc}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
