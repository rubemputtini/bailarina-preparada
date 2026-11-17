import { bfOffer } from "@/data/blackFriday";
import { Tape, bfWrap } from "./shared";

const tapeItem = "gap-5 pr-5 text-base tracking-[0.06em] sm:gap-7 sm:pr-7 sm:text-[22px]";

function CrossTapes() {
  return (
    <div aria-hidden="true" className="relative h-[130px] overflow-hidden sm:h-[180px]">
      <Tape
        className="absolute inset-x-[-5%] top-[42px] -rotate-3 bg-accent py-3 text-ink sm:top-[62px] sm:py-4"
        itemClassName={tapeItem}
        sparkleSize={14}
      />
      <Tape
        className="absolute inset-x-[-5%] top-11 rotate-[2.5deg] bg-white py-3 text-bf sm:top-16 sm:py-4"
        itemClassName={tapeItem}
        sparkleSize={14}
        reverse
      />
    </div>
  );
}

const stats = [
  { value: `R$ ${bfOffer.economia}`, label: "a menos no plano anual" },
  { value: `${bfOffer.mesesGratis} meses`, label: "de Clube de graça, na prática" },
  { value: `R$ ${bfOffer.porDia}`, label: "por dia de treino, o ano todo" },
];

export function BfStatsSection() {
  return (
    <>
      <CrossTapes />
      <section className="py-20 sm:py-24">
        <div className={bfWrap}>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.35em] text-accent">Faça as contas</p>
          <h2 className="mx-auto mt-[18px] max-w-[760px] text-center font-display text-[clamp(34px,4vw,54px)] leading-[1.1] font-normal">
            O mesmo Clube de sempre. <em className="text-accent">Só que bem mais barato.</em>
          </h2>

          <div className="mt-12 grid border-y border-white/10 sm:mt-16 md:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-8 py-10 text-center ${i > 0 ? "border-t border-white/10 md:border-t-0 md:border-l" : ""}`}
              >
                <p className="font-display text-[clamp(44px,5vw,68px)] leading-none text-accent">{s.value}</p>
                <p className="mt-3.5 text-[15px] text-white/68">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
