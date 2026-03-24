import { heroStats, trustBrands } from "../../data/constants";
import { ChevronRight, Gift } from "lucide-react";
import QrCodeExactIcon from "../icons/QrCodeExactIcon";

const phoneGridSlots = Array.from({ length: 6 });
const bottomTabs = ["Collection", "Scanner", "Échanges", "Profil"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* ── Content grid ─────────────────────────────────────────── */}
      <div className="relative mx-auto grid min-h-[810px] w-full max-w-[1280px] gap-8 px-4 py-10 sm:py-14 lg:grid-cols-[1fr_608px] lg:items-center lg:py-16">
        {/* Left — text content */}
        <div className="max-w-[608px]">
          <h1 className="text-[40px] font-bold leading-[1.03] tracking-[-1.2px] text-brand-navy sm:text-[52px] sm:tracking-[-1.4px] xl:text-[72px] xl:tracking-[-1.8px]">
            Transformez chaque{" "}
            <span className="relative inline-block bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
              produit
              <svg
                aria-hidden="true"
                viewBox="0 0 240 18"
                preserveAspectRatio="none"
                className="pointer-events-none absolute left-[-2%] top-[110%] h-[16px] w-[104%] overflow-visible"
              >
                <path
                  d="M4 15C46 6 114 2 236 14"
                  fill="none"
                  stroke="#0B6B3A"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            en expérience de jeu
          </h1>

          <p className="mt-6 max-w-[570px] text-[18px] leading-7 text-[#475569] sm:mt-8 sm:text-[22px] sm:leading-8">
            YouCanWin connecte vos marques aux fans de football à travers des
            mécaniques de gamification innovantes.{" "}
            <span className="font-semibold text-[#0F172A]">
              Codes QR, cartes digitales, défis et récompenses.
            </span>
          </p>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
            {heroStats.map(({ value, label, color }) => (
              <div key={value}>
                <p
                  className={`text-[28px] font-bold leading-9 sm:text-[36px] sm:leading-10 ${color}`}
                >
                  {value}
                </p>
                <p className="text-sm text-[#64748B]">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-green to-brand-green-dark px-6 text-base font-semibold text-white shadow-soft transition-opacity hover:opacity-90 sm:h-16 sm:w-auto sm:px-8 sm:text-lg">
              Voir la démo
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 text-base font-medium text-[#475569] transition-colors hover:border-slate-400 sm:h-16 sm:w-auto sm:px-8 sm:text-lg">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] text-[#334155]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2.8v1.6" />
                <path d="M5.3 6.1 6.6 7" />
                <path d="M3 12h1.9" />
                <path d="M20.9 12H19" />
                <path d="M18.7 6.1 17.4 7" />
                <circle cx="12" cy="12" r="5.1" />
                <path d="M10.7 17.8h2.6" />
                <path d="M10.9 20.1h2.2" />
                <rect x="10" y="17" width="4" height="4.4" rx="1.9" />
              </svg>
              Comment ça marche
            </button>
          </div>

          {/* Trust bar */}
          <div className="mt-8 border-t border-slate-200 pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#94A3B8]">
              Ils nous font confiance
            </p>
            <div className="mt-3 flex flex-wrap gap-6 text-sm font-medium text-[#94A3B8]">
              {trustBrands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="relative mx-auto h-[480px] w-full max-w-[392px] lg:h-[760px] lg:max-w-[608px] lg:pl-8 lg:pt-2">
          <div className="mx-auto h-[424px] w-[235px] overflow-hidden rounded-[24px] border-[4px] border-brand-navy bg-[#F9FAFB] shadow-strong sm:h-[560px] sm:w-[312px] sm:rounded-[32px] sm:border-[5px] lg:h-[704px] lg:w-[392px] lg:rounded-[42px] lg:border-[7px]">
            <div className="relative flex h-full flex-col bg-[#F9FAFB]">
              <div className="h-[72px] bg-gradient-to-r from-brand-green to-brand-green-dark px-3 pt-3 text-white sm:h-[96px] sm:px-4 sm:pt-4 lg:h-[128px] lg:px-5 lg:pt-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-[#C8F2D3] sm:text-[9px] lg:text-[10px]">
                  Album digital 2025
                </p>
                <h3 className="mt-1 text-[13px] font-semibold leading-none text-white sm:mt-2 sm:text-[15px] lg:mt-2 lg:text-[17px]">
                  Ma Collection
                </h3>
                <div className="mt-2 flex gap-2 sm:gap-3 lg:mt-4 lg:gap-4">
                  <div>
                    <p className="text-[12px] font-semibold leading-none text-white sm:text-[14px] lg:text-[17px]">
                      127
                    </p>
                    <p className="mt-0.5 text-[8px] leading-none text-[#D1F5DD] sm:mt-1 sm:text-[9px] lg:text-[11px]">
                      Cartes
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold leading-none text-white sm:text-[14px] lg:text-[17px]">
                      76%
                    </p>
                    <p className="mt-0.5 text-[8px] leading-none text-[#D1F5DD] sm:mt-1 sm:text-[9px] lg:text-[11px]">
                      Complet
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold leading-none text-white sm:text-[14px] lg:text-[17px]">
                      #12
                    </p>
                    <p className="mt-0.5 text-[8px] leading-none text-[#D1F5DD] sm:mt-1 sm:text-[9px] lg:text-[11px]">
                      Rang
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 px-2 pt-2 sm:gap-2.5 sm:px-3 sm:pt-3 lg:gap-2.5 lg:px-4 lg:pt-3">
                {phoneGridSlots.map((_, i) => (
                  <div
                    key={i}
                    className="h-[72px] rounded-[8px] bg-slate-200/85 sm:h-[96px] sm:rounded-[10px] lg:h-[132px] lg:rounded-[12px]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-[28px] left-[52.6%] z-10 grid h-[40px] w-[235px] -translate-x-1/2 grid-cols-4 items-center border-t border-slate-200 bg-white px-2 sm:bottom-[38px] sm:h-[48px] sm:w-[312px] sm:px-3 lg:bottom-[48px] lg:h-[56px] lg:w-[394px] lg:px-4">
            {bottomTabs.map((tab) => (
              <div
                key={tab}
                className="flex flex-col items-center gap-1.5 text-[#64748B]"
              >
                <span className="h-4 w-4 rounded-[4px] bg-[#B8C4D3] sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <span className="text-[7px] leading-none sm:text-[8px] lg:text-[10px]">{tab}</span>
              </div>
            ))}
          </div>

          {/* Floating stat cards */}
          <div className="absolute right-[12px] top-[-4px] flex h-[40px] w-[140px] items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-2 shadow-soft sm:right-[20px] sm:top-[-6px] sm:h-[48px] sm:w-[164px] sm:gap-2.5 sm:rounded-[10px] sm:px-2.5 lg:right-[25px] lg:top-[-8px] lg:h-[56px] lg:w-[184px] lg:gap-2.5 lg:rounded-[12px] lg:px-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-brand-green/10 text-brand-green sm:h-7 sm:w-7 sm:rounded-[7px] lg:h-8 lg:w-8 lg:rounded-[8px]">
              <QrCodeExactIcon aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-semibold leading-none text-brand-navy sm:text-[11px] lg:text-[13px]">
                Scan QR Code
              </p>
              <p className="mt-0.5 text-[7px] leading-none text-slate-400 sm:mt-1 sm:text-[8px] lg:text-[10px]">
                Débloquer une carte
              </p>
            </div>
          </div>

          <div className="absolute bottom-[22px] left-[36px] z-20 flex h-[40px] w-[140px] items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-2 shadow-soft sm:bottom-[30px] sm:left-[48px] sm:h-[48px] sm:w-[164px] sm:gap-2.5 sm:rounded-[10px] sm:px-2.5 lg:bottom-[38px] lg:left-[60px] lg:h-[56px] lg:w-[184px] lg:gap-2.5 lg:rounded-[12px] lg:px-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-brand-red/10 text-brand-red sm:h-7 sm:w-7 sm:rounded-[7px] lg:h-8 lg:w-8 lg:rounded-[8px]">
              <Gift size={12} aria-hidden="true" className="sm:size-[13px] lg:size-[15px]" />
            </span>
            <div>
              <p className="text-[10px] font-semibold leading-none text-brand-navy sm:text-[11px] lg:text-[13px]">
                Récompense
              </p>
              <p className="mt-0.5 text-[7px] leading-none text-slate-400 sm:mt-1 sm:text-[8px] lg:text-[10px]">
                Tirage hebdomadaire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
