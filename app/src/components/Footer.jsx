import { navLinks } from "../data/constants";

// ─── Footer column ────────────────────────────────────────────────────────────
function FooterColumn({ heading, children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900">{heading}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12">
        {/* ── Top grid ─────────────────────────────────────────────── */}
        <div className="grid gap-10 border-b border-slate-200 pb-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-green to-brand-green-dark text-white">
                <svg
                  width="16"
                  height="16"
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
              <span className="text-lg font-bold leading-none tracking-[-0.02em]">
                <span className="text-brand-red-dark">You</span>
                <span className="text-brand-navy">can</span>
                <span className="text-brand-green">win</span>
              </span>
            </div>
            <p className="mt-3 max-w-[540px] text-sm text-slate-600">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="group h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-brand-green transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7231 9L12.1675 6.10437H9.38906V4.22531C9.38906 3.43313 9.77718 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1384 0 10.0425 0C7.75437 0 6.25875 1.38688 6.25875 3.8975V6.10437H3.71531V9H6.25875V16H9.38906V9H11.7231Z"
                    fill="#475569"
                    className="group-hover:fill-white transition-colors"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="group h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-brand-green transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.325 0H13.5312L8.7125 5.50625L14.3813 13H9.94375L6.46562 8.45625L2.49062 13H0.28125L5.43437 7.10938L0 0H4.55L7.69062 4.15312L11.325 0ZM10.55 11.6812H11.7719L3.88438 1.25H2.57188L10.55 11.6812Z"
                    fill="#475569"
                    className="group-hover:fill-white transition-colors"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="group h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-brand-green transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00547 3.41172C5.01797 3.41172 3.41484 5.01484 3.41484 7.00234C3.41484 8.98984 5.01797 10.593 7.00547 10.593C8.99297 10.593 10.5961 8.98984 10.5961 7.00234C10.5961 5.01484 8.99297 3.41172 7.00547 3.41172ZM7.00547 9.33672C5.72109 9.33672 4.67109 8.28984 4.67109 7.00234C4.67109 5.71484 5.71797 4.66797 7.00547 4.66797C8.29297 4.66797 9.33984 5.71484 9.33984 7.00234C9.33984 8.28984 8.28984 9.33672 7.00547 9.33672ZM11.5805 3.26484C11.5805 3.73047 11.2055 4.10234 10.743 4.10234C10.2773 4.10234 9.90547 3.72734 9.90547 3.26484C9.90547 2.80234 10.2805 2.42734 10.743 2.42734C11.2055 2.42734 11.5805 2.80234 11.5805 3.26484ZM13.9586 4.11484C13.9055 2.99297 13.6492 1.99922 12.8273 1.18047C12.0086 0.361719 11.0148 0.105469 9.89297 0.0492187C8.73672 -0.0164062 5.27109 -0.0164062 4.11484 0.0492187C2.99609 0.102344 2.00234 0.358594 1.18047 1.17734C0.358594 1.99609 0.105469 2.98984 0.0492187 4.11172C-0.0164062 5.26797 -0.0164062 8.73359 0.0492187 9.88984C0.102344 11.0117 0.358594 12.0055 1.18047 12.8242C2.00234 13.643 2.99297 13.8992 4.11484 13.9555C5.27109 14.0211 8.73672 14.0211 9.89297 13.9555C11.0148 13.9023 12.0086 13.6461 12.8273 12.8242C13.6461 12.0055 13.9023 11.0117 13.9586 9.88984C14.0242 8.73359 14.0242 5.27109 13.9586 4.11484ZM12.4648 11.1305C12.2211 11.743 11.7492 12.2148 11.1336 12.4617C10.2117 12.8273 8.02422 12.743 7.00547 12.743C5.98672 12.743 3.79609 12.8242 2.87734 12.4617C2.26484 12.218 1.79297 11.7461 1.54609 11.1305C1.18047 10.2086 1.26484 8.02109 1.26484 7.00234C1.26484 5.98359 1.18359 3.79297 1.54609 2.87422C1.78984 2.26172 2.26172 1.78984 2.87734 1.54297C3.79922 1.17734 5.98672 1.26172 7.00547 1.26172C8.02422 1.26172 10.2148 1.18047 11.1336 1.54297C11.7461 1.78672 12.218 2.25859 12.4648 2.87422C12.8305 3.79609 12.7461 5.98359 12.7461 7.00234C12.7461 8.02109 12.8305 10.2117 12.4648 11.1305Z"
                    fill="#475569"
                    className="group-hover:fill-white transition-colors"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="group h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-brand-green transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z"
                    fill="#475569"
                    className="group-hover:fill-white transition-colors"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <FooterColumn heading="Liens rapides">
            <ul className="space-y-3">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-green"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact & Légal */}
          <FooterColumn heading="Contact & Légal">
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:games@agency.africa"
                  className="transition-colors hover:text-brand-green"
                >
                  games@agency.africa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-brand-green"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 transition-colors hover:text-brand-green"
                >
                  Protection des données (CNDP)
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8L8 2M8 2H4M8 2v4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-brand-green"
                >
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div className="pt-6">
          {/* First line */}
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row mb-4">
            <p>© 2025 Youcanwin. Tous droits réservés.</p>
            <p>
              Un service de{" "}
              <a
                href="#"
                className="font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
              >
                Agency.Africa
              </a>{" "}
              — games.agency.africa
            </p>
          </div>

          {/* Second line - centered */}
          <div className="flex items-center justify-center">
            <span
              className="flex items-center gap-2 h-[38px] w-[252px] rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-[17px] py-[9px]"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#0B6B3A",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.83332 8.38016L7.49998 10.0468L10.8333 6.7135M15.515 3.36683C12.8801 3.50676 10.2973 2.59567 8.33332 0.833496C6.36937 2.59567 3.78656 3.50676 1.15165 3.36683C0.939594 4.18776 0.832627 5.03229 0.833316 5.88016C0.833316 10.5393 4.01998 14.4552 8.33332 15.5652C12.6466 14.4552 15.8333 10.5402 15.8333 5.88016C15.8333 5.01183 15.7225 4.17016 15.515 3.36683Z"
                  stroke="#16A34A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Site conforme CNDP Maroc
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
