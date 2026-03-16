import SectionShell from "../layout/SectionShell";
import { Calendar, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <SectionShell className="bg-gradient-to-r from-[#DE1223] to-[#C80F1D] py-16 text-center text-white sm:py-20">
      <div className="mx-auto w-full max-w-[980px]">
        <h2 className="text-[36px] font-bold tracking-[-0.35px] sm:text-[46px] lg:text-[52px] lg:tracking-[-0.6px] text-white">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-[20px] text-red-50 sm:text-[22px]">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          <button className="inline-flex h-[66px] min-w-[350px] items-center justify-center gap-3 rounded-[10px] bg-white px-8 text-[20px] font-semibold text-[#C80F1D] shadow-soft transition-shadow hover:shadow-strong">
            <Calendar size={22} strokeWidth={2} aria-hidden="true" />
            <span>Planifier une démo gratuite</span>
          </button>
          <button className="inline-flex h-[66px] min-w-[248px] items-center justify-center gap-3 rounded-[10px] border-2 border-white/25 bg-white/8 px-8 text-[20px] font-semibold text-white backdrop-blur-[1px] transition-colors hover:bg-white/16">
            <Mail size={22} strokeWidth={2} aria-hidden="true" />
            <span>Nous contacter</span>
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
