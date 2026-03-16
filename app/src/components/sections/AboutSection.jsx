import SectionShell from "../layout/SectionShell";
import { aboutFeatures } from "../../data/constants";
import footballImg from "../../../images/Fans de football avec smartphones.jpg";

const featureIconSvgs = [
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="3" width="12" height="18" rx="2.6" />
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>,
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 9.2h10" />
    <rect x="5" y="10" width="14" height="10" rx="2.3" />
    <path d="M8 6h8a2 2 0 0 1 2 2v2H6V8a2 2 0 0 1 2-2Z" />
    <path d="M9 3.6h6a2 2 0 0 1 2 2V6H7v-.4a2 2 0 0 1 2-2Z" />
  </svg>,
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="10" width="14" height="11" rx="2.2" />
    <path d="M5 10h14" />
    <path d="M12 10v11" />
    <path d="M12 10c0-2.1 1.7-3.7 3.8-3.7 1.2 0 2.2.9 2.2 2.1 0 1.1-.9 2-2 2H12Z" />
    <path d="M12 10c0-2.1-1.7-3.7-3.8-3.7-1.2 0-2.2.9-2.2 2.1 0 1.1.9 2 2 2H12Z" />
  </svg>,
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="12" width="4.5" height="8" rx="1.3" />
    <rect x="9.75" y="9" width="4.5" height="11" rx="1.3" />
    <rect x="15.5" y="6" width="4.5" height="14" rx="1.3" />
  </svg>,
];

export default function AboutSection() {
  return (
    <SectionShell
      id="apropos"
      className="border-y border-black/10 bg-gradient-to-b from-white to-[#F5F5F5] py-16 sm:py-20"
    >
      <div className="grid gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        {/* Left — image */}
        <img
          src={footballImg}
          alt="Fans de football"
          className="mx-auto h-[620px] w-[92%] rounded-2xl object-cover lg:mx-0 lg:h-[690px] lg:w-[88%]"
        />

        {/* Right — content */}
        <div className="lg:max-w-[560px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#CDEEDB] px-4 py-2 text-sm font-semibold text-[#0B6B3A]">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-[#0B6B3A]">
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 4.5l3 3L11 1"
                  stroke="#0B6B3A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Solution complète
          </span>

          <h2 className="mt-3 text-[30px] font-bold leading-[1.12] tracking-[-0.45px] text-brand-navy sm:text-[38px] lg:text-[42px] lg:tracking-[-0.7px]">
            Le terrain de jeu digital de votre marque
          </h2>

          <p className="mt-4 text-[18px] leading-8 text-slate-600 sm:text-[20px] sm:leading-9">
            YouCanWin transforme vos produits en expériences interactives.
            Chaque achat devient une opportunité d'engagement avec vos
            consommateurs.
          </p>

          {/* Feature list */}
          <ul className="mt-8 space-y-5">
            {aboutFeatures.map(({ title, desc }, index) => {
              const featureIcon = featureIconSvgs[index] ?? featureIconSvgs[0];
              return (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px] bg-[#F2F8F4] text-[#16A34A]">
                    {featureIcon}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-navy">{title}</p>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brand-red px-8 text-base font-semibold text-white transition-colors hover:bg-brand-red-dark">
            Planifier une démo
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3.5" y="5" width="17" height="15" rx="2.6" />
              <path d="M8 3.7V7" />
              <path d="M16 3.7V7" />
              <path d="M8 12h8" />
            </svg>
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
