import { useState } from "react";
import { navLinks } from "../../data/constants";
import { ChevronRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* ── Main bar ─────────────────────────────────────────────────── */}
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-brand-green-dark text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15.3333 2.66645H12.4444V1.55534C12.4444 1.18589 12.1472 0.888672 11.7778 0.888672H4.22222C3.85278 0.888672 3.55556 1.18589 3.55556 1.55534V2.66645H0.666667C0.297222 2.66645 0 2.96367 0 3.33312V4.88867C0 5.88034 0.625 6.89978 1.71944 7.68589C2.59444 8.31645 3.65833 8.71645 4.775 8.84423C5.64722 10.2914 6.66667 10.8887 6.66667 10.8887V12.8887H5.33333C4.35278 12.8887 3.55556 13.4637 3.55556 14.4442V14.7776C3.55556 14.9609 3.70556 15.1109 3.88889 15.1109H12.1111C12.2944 15.1109 12.4444 14.9609 12.4444 14.7776V14.4442C12.4444 13.4637 11.6472 12.8887 10.6667 12.8887H9.33333V10.8887C9.33333 10.8887 10.3528 10.2914 11.225 8.84423C12.3444 8.71645 13.4083 8.31645 14.2806 7.68589C15.3722 6.89978 16 5.88034 16 4.88867V3.33312C16 2.96367 15.7028 2.66645 15.3333 2.66645ZM2.75833 6.24423C2.08056 5.75534 1.77778 5.21089 1.77778 4.88867V4.44423H3.56111C3.58889 5.34978 3.72222 6.14423 3.91667 6.83867C3.49722 6.69423 3.10556 6.49423 2.75833 6.24423ZM14.2222 4.88867C14.2222 5.33589 13.7306 5.89145 13.2417 6.24423C12.8944 6.49423 12.5 6.69423 12.0806 6.83867C12.275 6.14423 12.4083 5.34978 12.4361 4.44423H14.2222V4.88867Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-[26px] font-bold leading-none tracking-[-0.02em]">
            <span className="text-brand-red-dark">You</span>
            <span className="text-brand-navy">can</span>
            <span className="text-brand-green">win</span>
          </span>
          <span className="rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-semibold text-brand-green-dark">
            GAMES
          </span>
        </a>

        {/* Desktop nav + Actions grouped on the right */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-brand-green"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#offres"
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-opacity hover:opacity-90"
          >
            Demander une démo
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Actions (mobile CTA hidden + hamburger) */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          {/* Hamburger — mobile/tablet only */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              /* X icon */
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 1h18M0 6.5h18M0 12h18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────── */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <nav className="mx-auto flex w-full max-w-[1280px] flex-col gap-1 px-4 py-3">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-green"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#offres"
              className="mt-2 rounded-lg bg-gradient-to-r from-brand-green to-brand-green-dark px-4 py-3 text-center text-sm font-semibold text-white shadow-soft"
              onClick={() => setOpen(false)}
            >
              Demander une démo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
