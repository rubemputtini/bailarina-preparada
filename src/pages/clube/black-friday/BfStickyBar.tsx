import { type RefObject, useEffect, useState } from "react";
import { BLACK_FRIDAY_CHECKOUT_URL, bfOffer } from "@/data/blackFriday";
import { formatCountdown, useCountdown } from "@/hooks/useBlackFriday";
import { cn } from "@/lib/utils";
import { bfWrap } from "./shared";

// Barra fixa no rodapé da tela. Fica escondida só enquanto o botão do cupom está visível,
// para não ter dois CTAs iguais na tela (no celular ela já aparece no primeiro scroll).
export function BfStickyBar({ heroCtaRef }: { heroCtaRef: RefObject<HTMLAnchorElement | null> }) {
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const c = useCountdown();

  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setHeroCtaVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, [heroCtaRef]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t-2 border-accent bg-bf/95 backdrop-blur-md transition-transform duration-300",
        heroCtaVisible && "pointer-events-none translate-y-full"
      )}
      aria-hidden={heroCtaVisible}
    >
      <div
        className={`${bfWrap} flex items-center justify-between gap-3 pt-2.5 pb-[max(14px,env(safe-area-inset-bottom))] sm:gap-4 sm:py-3`}
      >
        <div className="flex min-w-0 flex-col gap-[3px] sm:flex-row sm:items-center sm:gap-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] whitespace-nowrap text-accent sm:bg-accent sm:px-2.5 sm:py-1.5 sm:tracking-[0.15em] sm:text-ink">
            −R$ {bfOffer.desconto}
            <span className="sm:hidden"> · Black Friday</span>
          </p>
          <p className="text-[13px] font-semibold whitespace-nowrap tabular-nums sm:text-sm">
            Acaba em {formatCountdown(c)}
          </p>
          <p className="hidden text-sm whitespace-nowrap text-white/70 md:block">
            12x de R$ {bfOffer.parcelaInt},{bfOffer.parcelaCent}
          </p>
        </div>
        <a
          href={BLACK_FRIDAY_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={heroCtaVisible ? -1 : undefined}
          className="inline-flex min-h-[46px] shrink-0 items-center justify-center bg-accent px-5 text-xs font-extrabold uppercase tracking-[0.16em] text-ink transition-[filter] hover:brightness-110 sm:px-6 sm:tracking-[0.18em]"
        >
          Garantir
        </a>
      </div>
    </div>
  );
}
