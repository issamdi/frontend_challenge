import SectionShell from "../layout/SectionShell";
import SectionHeader from "../ui/SectionHeader";
import { pricingCards } from "../../data/constants";
import { TrendingUp } from "lucide-react";

const StarterProvidedIcon = ({ size = 20, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 8V1L1.00002 12H8.00002V19L17 8H10Z"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CouvertureIcon = ({ size = 26, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.055 9H3C3.53043 9 4.03914 9.21071 4.41421 9.58579C4.78929 9.96086 5 10.4696 5 11V12C5 12.5304 5.21071 13.0391 5.58579 13.4142C5.96086 13.7893 6.46957 14 7 14C7.53043 14 8.03914 14.2107 8.41421 14.5858C8.78929 14.9609 9 15.4696 9 16V18.945M6 1.935V3.5C6 4.16304 6.26339 4.79893 6.73223 5.26777C7.20107 5.73661 7.83696 6 8.5 6H9C9.53043 6 10.0391 6.21071 10.4142 6.58579C10.7893 6.96086 11 7.46957 11 8C11 8.53043 11.2107 9.03914 11.5858 9.41421C11.9609 9.78929 12.4696 10 13 10C13.5304 10 14.0391 9.78929 14.4142 9.41421C14.7893 9.03914 15 8.53043 15 8C15 7.46957 15.2107 6.96086 15.5858 6.58579C15.9609 6.21071 16.4696 6 17 6H18.064M13 18.488V16C13 15.4696 13.2107 14.9609 13.5858 14.5858C13.9609 14.2107 14.4696 14 15 14H18.064M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PLAN_ICONS = [StarterProvidedIcon, TrendingUp, CouvertureIcon];

function PricingCard({ card, icon: Icon }) {
  const { title, subtitle, desc, items, cta, featured } = card;
  const isScalePlan = title === "Scale";
  const IconComponent = Icon;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-8 transition-shadow ${
        featured
          ? "border-brand-red/30 bg-white shadow-strong"
          : "border-slate-200 bg-white shadow-card hover:shadow-lg"
      }`}
    >
      {/* "Populaire" badge */}
      {featured && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          Populaire
        </span>
      )}

      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
          isScalePlan
            ? "bg-transparent text-brand-red"
            : featured
              ? "bg-brand-red/5 text-brand-red"
              : "bg-brand-green/5 text-brand-green"
        }`}
      >
        <IconComponent size={26} aria-hidden="true" />
      </div>

      <h3 className="text-[28px] font-bold text-brand-navy">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-green">{subtitle}</p>
      <p className="mt-3 text-sm text-slate-500">{desc}</p>

      <div className="my-5 border-t border-slate-100" />

      <p className="text-sm text-slate-400">
        Tarification sur mesure selon vos volumes
      </p>

      <div className="my-4 border-t border-slate-100" />

      {/* Feature list */}
      <ul className="flex-1 space-y-2.5 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${
                featured ? "bg-brand-red" : "bg-brand-green"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`mt-8 h-11 w-full rounded-lg border text-base font-semibold transition-colors ${
          featured
            ? "border-brand-red bg-brand-red text-white hover:bg-brand-red-dark"
            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
        }`}
      >
        {cta}
      </button>
    </article>
  );
}

export default function PricingSection() {
  return (
    <SectionShell
      id="pricing"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16 sm:py-20"
    >
      <SectionHeader
        title={
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "36px",
              lineHeight: "40px",
              letterSpacing: "0",
              textAlign: "center",
              verticalAlign: "middle",
              display: "block",
            }}
          >
            Des formules adaptées à votre échelle
          </span>
        }
        subtitle={
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "28px",
              letterSpacing: "0",
              textAlign: "center",
              verticalAlign: "middle",
              display: "block",
            }}
          >
            Choisissez la solution qui correspond à vos besoins et votre
            ambition
          </span>
        }
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {pricingCards.map((card, i) => (
          <PricingCard key={card.title} card={card} icon={PLAN_ICONS[i]} />
        ))}
      </div>
    </SectionShell>
  );
}
