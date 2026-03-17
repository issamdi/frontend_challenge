import SectionShell from "../layout/SectionShell";
import { Calendar, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <SectionShell className="bg-gradient-to-r from-[#DE1223] to-[#C80F1D] py-16 text-center text-white sm:py-20">
      <div className="mx-auto w-full max-w-[980px]">
        <h2
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
          className="text-white"
        >
          Prêt à transformer votre marketing ?
        </h2>
        <p
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
          className="mx-auto mt-4 max-w-[760px]"
        >
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          <button className="inline-flex h-[60px] min-w-[220px] items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-[16px] font-medium text-[#C80F1D] shadow-soft transition-shadow hover:shadow-strong">
            <Calendar size={18} strokeWidth={2} aria-hidden="true" />
            <span>Planifier une démo gratuite</span>
          </button>
          <button className="inline-flex h-[60px] min-w-[220px] items-center justify-center gap-2 rounded-[8px] border-2 border-white/25 bg-white/8 px-5 text-[16px] font-medium text-white backdrop-blur-[8px] transition-colors hover:bg-white/25 hover:border-[#C80F1D] hover:text-white">
            <Mail size={18} strokeWidth={2} aria-hidden="true" />
            <span>Nous contacter</span>
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
