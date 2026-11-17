import { Link } from "react-router-dom";
import { bfOffer } from "@/data/blackFriday";
import isabellaSrc from "@/assets/hero-clube.jpeg";
import { BfCta, CountdownBlocks, bfWrap } from "./shared";

export function BfClosingSection() {
  return (
    <section className="bg-accent text-ink">
      <div
        className={`${bfWrap} grid items-center gap-10 py-20 sm:py-[104px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16`}
      >
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.35em]">Última chamada</p>
          <h2 className="mt-5 font-display text-[clamp(40px,5.4vw,76px)] leading-[1.02] font-normal">
            Depois de hoje, <em>o preço volta.</em>
          </h2>

          <CountdownBlocks size="lg" className="mt-10 max-w-[520px]" />

          <BfCta className="mt-9 inline-flex px-10 max-sm:w-full">
            Entrar no Clube com R$ {bfOffer.desconto} OFF
          </BfCta>
          <p className="mt-3.5 text-sm font-medium">
            12x de R$ {bfOffer.parcelaInt},{bfOffer.parcelaCent} ou R$ {bfOffer.precoPor} à vista · Garantia de 7 dias
          </p>
        </div>

        <div className="relative hidden w-full max-w-[380px] justify-self-end lg:block">
          <div aria-hidden="true" className="absolute top-[18px] -left-[18px] size-full border-2 border-bf" />
          <img
            src={isabellaSrc}
            alt="Isabella Souza, criadora do Clube Bailarina Preparada, em espacate"
            loading="lazy"
            className="relative block aspect-[4/5] w-full object-cover object-[60%_60%]"
          />
        </div>
      </div>
    </section>
  );
}

// Rodapé mínimo. O espaço extra embaixo evita que a barra fixa cubra os links.
export function BfFooter() {
  return (
    <footer className="border-t border-white/8 pb-24">
      <div className={`${bfWrap} flex flex-wrap items-center justify-between gap-4 py-8`}>
        <img src="/header-logo.webp" alt="Bailarina Preparada" className="block h-8 w-auto opacity-85" />
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/60">
          <span>© 2026 Bailarina Preparada</span>
          <Link to="/termos" className="text-white/65 transition-colors hover:text-white">
            Termos de uso
          </Link>
          <Link to="/privacidade" className="text-white/65 transition-colors hover:text-white">
            Privacidade
          </Link>
        </p>
      </div>
    </footer>
  );
}
