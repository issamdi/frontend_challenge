import SectionShell from "../layout/SectionShell";
import { valueCards } from "../../data/constants";
import { Zap, Heart } from "lucide-react";

const VALUE_ICONS = [
  <Zap size={32} aria-hidden="true" />,
  <Heart size={32} aria-hidden="true" />,
  <svg
    aria-hidden="true"
    viewBox="0 0 27 27"
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.66667"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.9976 16.9119C19.4411 17.6174 17.7519 17.9824 16.043 17.9824C14.334 17.9824 12.6448 17.6174 11.0883 16.9119M23.131 11.5439C20.6344 11.0916 18.3455 9.85965 16.5929 8.02512C14.8403 6.19058 13.7142 3.84781 13.3763 1.33325C7.41095 1.33325 2.35228 5.49325 1.33362 11.1013M1.33362 16.4693C2.04169 19.0915 3.6183 21.3959 5.80576 23.006C7.99321 24.6161 10.6621 25.4365 13.3763 25.3333C19.3416 25.3333 24.4003 21.1733 25.419 15.5653M8.95495 15.1226C9.22429 14.5839 9.37629 13.9759 9.37629 13.3333C9.37629 12.6906 9.22429 12.0826 8.95495 11.5439C8.55189 10.7381 7.88856 10.0919 7.07241 9.7101C6.25627 9.32831 5.33513 9.23324 4.45821 9.44032C3.5813 9.64739 2.79998 10.1445 2.24084 10.851C1.68169 11.5576 1.37748 12.4322 1.37748 13.3333C1.37748 14.2343 1.68169 15.1089 2.24084 15.8155C2.79998 16.522 3.5813 17.0191 4.45821 17.2262C5.33513 17.4333 6.25627 17.3382 7.07241 16.9564C7.88856 16.5746 8.55189 15.9284 8.95495 15.1226Z" />
  </svg>,
];

export default function ValuesSection() {
  return (
    <SectionShell className="border-b border-slate-200 bg-gradient-to-r from-brand-green to-brand-green-dark py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-[30px] font-bold tracking-[-0.45px] text-white sm:text-[36px] md:whitespace-nowrap lg:text-[40px] lg:tracking-[-0.65px]">
          Transformez vos ventes en expérience mémorable
        </h2>
        <p className="mx-auto mt-3 max-w-[720px] text-[18px] text-green-50 sm:text-[22px]">
          YouCanWin offre à vos clients plus qu'un produit : une expérience
          interactive complète autour du football
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {valueCards.map(({ title, desc }, i) => (
            <article
              key={title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white">
                {VALUE_ICONS[i]}
              </div>
              <h3 className="text-[20px] font-semibold leading-snug text-white">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[320px] text-[15px] leading-relaxed text-green-50">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
