import { Check } from "lucide-react";
import { bfOffer } from "@/data/blackFriday";
import { BfCta, bfWrap } from "./shared";

const included = [
  "Treinos novos todo mês",
  "Aulas ao vivo de PBT e Solo",
  "Plano de rotina personalizado",
  "Avaliação física anual",
  "Professores convidados",
  "App + comunidade de alunas",
];

export function BfOfferSection() {
  return (
    <section id="oferta" className="border-y border-white/8 bg-bf-panel py-20 sm:py-[104px]">
      <div className={`${bfWrap} max-w-[1080px]`}>
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-accent">Investimento</p>
          <h2 className="mt-[18px] font-display text-[clamp(34px,4vw,54px)] leading-[1.1] font-normal">
            Escolha quando entrar
          </h2>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-6">
          {/* Preço normal */}
          <div className="flex flex-col border border-white/10 px-7 py-9 sm:px-9 sm:py-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">Depois de 19/11</p>
            <p className="mt-6 flex items-baseline gap-2 text-white/60">
              <span className="text-base">12x</span>
              <span className="font-display text-[52px] leading-none line-through decoration-2">R$ {bfOffer.parcelaDe}</span>
            </p>
            <p className="mt-2.5 text-[15px] text-white/60">ou R$ {bfOffer.precoDe} à vista</p>
            <p className="mt-auto pt-8 text-[15px] leading-relaxed text-white/60">
              Mesmo conteúdo, mesmas aulas, mesmo app — pelo preço normal.
            </p>
          </div>

          {/* Black Friday */}
          <div className="relative border-2 border-accent bg-bf px-6 py-11 shadow-[0_0_0_6px_rgba(183,162,222,0.12),0_30px_80px_-30px_rgba(183,162,222,0.5)] sm:px-10">
            <p className="absolute -top-4 left-6 bg-accent px-3.5 py-[7px] text-[11px] font-extrabold uppercase tracking-[0.25em] text-ink sm:left-9">
              Black Friday · −R$ {bfOffer.desconto}
            </p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="flex flex-wrap items-baseline gap-2">
                  <span className="text-lg text-white/80">12x</span>
                  <span className="font-display text-[clamp(60px,7vw,88px)] leading-[0.95]">R$ {bfOffer.parcelaInt}</span>
                  <span className="font-display text-[34px] text-white/80">,{bfOffer.parcelaCent}</span>
                </p>
                <p className="mt-2.5 text-[15px] text-white/70">ou R$ {bfOffer.precoPor} à vista</p>
              </div>
              <p className="bg-accent/14 px-3.5 py-2.5 text-sm font-bold text-accent">−R$ {bfOffer.economia}</p>
            </div>

            <ul className="mt-8 grid gap-x-5 gap-y-3.5 border-t border-white/10 pt-7 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-[1.45] text-white/85">
                  <Check size={17} strokeWidth={2.2} aria-hidden="true" className="mt-px shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <BfCta variant="accent" className="mt-8">
              Quero o preço de Black Friday
            </BfCta>
            <p className="mt-3.5 text-center text-[13px] text-white/60">
              Garantia incondicional de 7 dias · Pagamento seguro pela Hotmart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
