import { type Ref } from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { bfOffer } from "@/data/blackFriday";
import { formatCountdown, useCountdown } from "@/hooks/useBlackFriday";
import isabellaSrc from "@/assets/hero-clube.jpeg";
import { BfCta, CountdownBlocks, Tape, bfWrap } from "./shared";

const chips = [
  "Aulas ao vivo de PBT e Solo",
  "Treinos novos todo mês",
  "Avaliação física individual",
  "App exclusivo",
  "Professores convidados",
];

function HeaderCountdown() {
  const c = useCountdown();
  return (
    <p className="m-0 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/75 tabular-nums sm:text-xs sm:font-semibold sm:tracking-[0.2em]">
      <span aria-hidden="true" className="hidden size-2 rounded-full bg-accent animate-[bf-pulse_1.4s_ease-in-out_infinite] motion-reduce:animate-none sm:block" />
      <span className="hidden sm:inline">Termina em</span> {formatCountdown(c)}
    </p>
  );
}

function SocialProof({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 sm:gap-4 ${className ?? ""}`}>
      <img
        src={isabellaSrc}
        alt="Isabella Souza"
        className="size-[52px] shrink-0 rounded-full border-2 border-accent object-cover object-[58%_38%] sm:size-16"
      />
      <p className="text-sm leading-normal text-white/70 sm:text-[15px]">
        <strong className="font-semibold text-white">Mais de 500 bailarinas</strong> já treinam com o
        método da Isabella Souza.
      </p>
    </div>
  );
}

function Coupon({ ctaRef }: { ctaRef: Ref<HTMLAnchorElement> }) {
  return (
    <div className="relative bg-accent text-ink shadow-[0_30px_80px_-20px_rgba(183,162,222,0.45)]">
      <div className="flex items-start justify-between gap-3 px-[22px] pt-[22px] pb-[18px] sm:gap-4 sm:px-8 sm:pt-7 sm:pb-6">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] sm:text-[11px] sm:tracking-[0.3em]">
            Cupom Black Friday
          </p>
          <p className="mt-1 text-[13px] font-medium sm:mt-1.5 sm:text-sm">Plano anual do Clube</p>
        </div>
        <p className="text-[28px] leading-none font-extrabold tracking-[-0.04em] sm:text-[44px]">−R$ {bfOffer.desconto}</p>
      </div>

      {/* Picote do cupom */}
      <div aria-hidden="true" className="relative mx-[18px] h-0 border-t-2 border-dashed border-ink/35 sm:mx-6">
        <span className="absolute -top-[13px] -left-[30px] size-6 rounded-full bg-bf sm:-top-[15px] sm:-left-[38px] sm:size-7" />
        <span className="absolute -top-[13px] -right-[30px] size-6 rounded-full bg-bf sm:-top-[15px] sm:-right-[38px] sm:size-7" />
      </div>

      <div className="px-[22px] pt-5 pb-6 sm:px-8 sm:pt-6 sm:pb-8">
        <p className="text-sm font-medium sm:text-[15px]">
          De <span className="line-through">R$ {bfOffer.precoDe}</span> por
        </p>
        <p className="mt-1 flex flex-wrap items-baseline gap-1.5 sm:mt-1.5 sm:gap-2">
          <span className="text-base font-semibold sm:text-lg">12x</span>
          <span className="font-display text-6xl leading-[0.95] tracking-[-0.02em] sm:text-[76px]">R$ {bfOffer.parcelaInt}</span>
          <span className="font-display text-[26px] sm:text-[32px]">,{bfOffer.parcelaCent}</span>
        </p>
        <p className="mt-1.5 text-sm font-medium sm:mt-2 sm:text-[15px]">ou R$ {bfOffer.precoPor} à vista</p>

        <p className="mt-5 mb-2 text-[10px] font-extrabold uppercase tracking-[0.28em] sm:mt-6 sm:mb-2.5 sm:text-[11px] sm:tracking-[0.3em]">
          A oferta acaba em
        </p>
        <CountdownBlocks />

        <BfCta ref={ctaRef} className="mt-5 sm:mt-6">
          Garantir meus R$ {bfOffer.desconto} OFF
        </BfCta>
        <p className="mt-3 flex items-center justify-center gap-2 text-xs font-medium sm:mt-3.5 sm:text-[13px]">
          <ShieldCheck size={15} aria-hidden="true" />
          Garantia incondicional de 7 dias
        </p>
      </div>
    </div>
  );
}

export function BfHeroSection({ ctaRef }: { ctaRef: Ref<HTMLAnchorElement> }) {
  return (
    <>
      <Tape
        className="bg-accent py-[9px] text-ink sm:py-2.5"
        itemClassName="gap-4 pr-4 text-[11px] tracking-[0.2em] sm:gap-[22px] sm:pr-[22px] sm:text-xs sm:tracking-[0.22em]"
        sparkleSize={10}
      />

      <header className={`${bfWrap} flex items-center justify-between gap-3 py-[18px] sm:gap-4 sm:py-[22px]`}>
        <Link to="/" aria-label="Bailarina Preparada — Início">
          <img src="/header-logo.webp" alt="Bailarina Preparada" className="block h-8 w-auto sm:h-10" />
        </Link>
        <HeaderCountdown />
      </header>

      <section className="relative overflow-hidden pt-2 pb-10 sm:pt-6 sm:pb-[104px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-40 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(183,162,222,0.24),rgba(183,162,222,0)_65%)] sm:-top-[200px] sm:-right-[200px] sm:size-[760px]"
        />

        <div className={`${bfWrap} relative`}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-3.5 sm:pb-5">
            <p className="hidden text-[11px] font-bold uppercase tracking-[0.35em] text-white/70 sm:block">
              Clube Bailarina Preparada
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent sm:text-[11px] sm:tracking-[0.35em]">
              <span className="sm:hidden">Clube Bailarina Preparada · </span>
              <span className="hidden sm:inline">Edição 2026 · </span>Só até 19/11
            </p>
          </div>

          {/* Wordmark */}
          <div className="relative mt-[18px] sm:mt-6" aria-hidden="true">
            <p
              className="text-[23vw] leading-[0.86] font-extrabold tracking-[-0.045em] text-transparent uppercase [-webkit-text-stroke:1.5px_#fff] sm:text-[clamp(76px,15.5vw,236px)] sm:[-webkit-text-stroke:2px_#fff]"
            >
              Black
            </p>
            <p
              className="pl-7 font-display text-[25vw] leading-[0.9] font-medium tracking-[-0.03em] text-accent italic sm:pl-[clamp(24px,12vw,200px)] sm:text-[clamp(80px,16vw,248px)]"
            >
              Friday
            </p>

            {/* Selo pequeno (celular/tablet) */}
            <div
              className="absolute -top-1.5 right-0 flex size-[92px] rotate-[10deg] flex-col items-center justify-center rounded-full bg-white text-bf shadow-[0_0_0_6px_var(--color-bf)] lg:hidden"
            >
              <span className="text-[22px] leading-[0.95] font-extrabold tracking-[-0.04em]">R${bfOffer.desconto}</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">Off</span>
            </div>

            {/* Selo grande (desktop) */}
            <div
              className="absolute top-[18px] right-2 hidden size-[200px] rotate-[10deg] flex-col items-center justify-center rounded-full bg-white text-center text-bf shadow-[0_0_0_10px_var(--color-bf),0_0_0_11px_rgba(255,255,255,0.35)] lg:flex"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.28em]">Plano anual</span>
              <span className="text-[52px] leading-[0.95] font-extrabold tracking-[-0.04em]">R${bfOffer.desconto}</span>
              <span className="text-sm font-extrabold uppercase tracking-[0.3em]">Off</span>
            </div>
          </div>

          <div className="mt-8 grid items-start gap-8 sm:gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-16">
            <div>
              <h1 className="font-display text-[32px] leading-[1.12] font-normal sm:text-[clamp(36px,4.2vw,56px)] sm:leading-[1.08]">
                <em className="text-accent">R$ {bfOffer.desconto} OFF</em> no Clube. A maior oportunidade do ano
                para entrar.
              </h1>
              <p className="mt-4 max-w-[560px] text-base leading-relaxed text-white/68 sm:mt-6 sm:text-lg">
                Um ano inteiro de treinos de força, flexibilidade e cardio específicos para ballet, com aulas ao
                vivo toda semana e rotina personalizada.
              </p>

              <ul className="mt-9 hidden flex-wrap gap-2.5 sm:flex">
                {chips.map((c) => (
                  <li key={c} className="rounded-full border border-white/18 px-4 py-2.5 text-sm text-white/85">
                    {c}
                  </li>
                ))}
              </ul>

              <SocialProof className="mt-10 hidden lg:flex" />
            </div>

            <Coupon ctaRef={ctaRef} />

            <SocialProof className="lg:hidden" />
          </div>
        </div>
      </section>
    </>
  );
}
