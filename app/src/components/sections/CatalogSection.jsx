import SectionShell from "../layout/SectionShell";
import SectionHeader from "../ui/SectionHeader";
import { catalogCards } from "../../data/constants";

// ─── Single catalog card ──────────────────────────────────────────────────────
function CatalogCard({ title, desc, tag, image, showDiscover }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:shadow-2xl"
      id={title === "Album Digital 2025" ? "album" : undefined}
    >
      {/* Cover image area */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full rounded-none object-cover group-hover:scale-110"
        />
        {tag && (
          <span
            className={`absolute right-0 top-0 rounded-bl-2xl px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
              tag === "STAR"
                ? "bg-gradient-to-r from-brand-green to-brand-green-dark"
                : "bg-slate-700"
            }`}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-semibold leading-snug text-brand-navy">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {desc}
        </p>
        {showDiscover && (
          <button className="mt-4 self-start text-sm font-semibold text-brand-green transition-opacity hover:opacity-75">
            Découvrir →
          </button>
        )}
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function CatalogSection() {
  return (
    <SectionShell
      id="jeux"
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
            Catalogue de jeux
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
            Des mécaniques éprouvées pour engager vos audiences
          </span>
        }
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {catalogCards.map((card) => (
          <CatalogCard key={card.title} {...card} />
        ))}
      </div>
    </SectionShell>
  );
}
