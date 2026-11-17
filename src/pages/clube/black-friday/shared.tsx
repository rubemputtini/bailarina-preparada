import { type ReactNode, type Ref } from "react";
import { ArrowRight } from "lucide-react";
import { BLACK_FRIDAY_CHECKOUT_URL, bfTape } from "@/data/blackFriday";
import { useCountdown } from "@/hooks/useBlackFriday";
import { cn } from "@/lib/utils";

// Container da campanha (1240px, como no design).
export const bfWrap = "mx-auto w-full max-w-[1240px] px-5 sm:px-6";

export function Sparkle({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
    </svg>
  );
}

// Fita com texto rolando. O conteúdo é duplicado para o loop do marquee (-50%) ficar contínuo.
export function Tape({
  className,
  itemClassName,
  sparkleSize,
  reverse,
}: {
  className?: string;
  itemClassName: string;
  sparkleSize: number;
  reverse?: boolean;
}) {
  const items = [...bfTape, ...bfTape];
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div
        className={cn(
          "flex w-max motion-reduce:animate-none",
          reverse ? "animate-[marquee_40s_linear_infinite_reverse]" : "animate-[marquee_32s_linear_infinite]"
        )}
      >
        {items.map((t, i) => (
          <span key={i} className={cn("inline-flex items-center whitespace-nowrap font-extrabold uppercase", itemClassName)}>
            {t}
            <Sparkle size={sparkleSize} />
          </span>
        ))}
      </div>
    </div>
  );
}

// Contador em blocos (dias some no dia da campanha, quando estaria sempre em 00).
export function CountdownBlocks({ size = "md", className }: { size?: "md" | "lg"; className?: string }) {
  const c = useCountdown();
  const blocks = [
    ...(c.hasDays ? [{ v: c.d, l: "dias" }] : []),
    { v: c.h, l: "horas" },
    { v: c.m, l: "min" },
    { v: c.s, l: "seg", accent: true },
  ];
  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`A oferta acaba em ${c.hasDays ? `${Number(c.d)} dias, ` : ""}${Number(c.h)} horas e ${Number(c.m)} minutos`}
      className={cn("grid gap-1.5 sm:gap-2", c.hasDays ? "grid-cols-4" : "grid-cols-3", className)}
    >
      {blocks.map((b) => (
        <div key={b.l} className={cn("bg-bf px-1 text-center", size === "lg" ? "py-[18px]" : "py-2.5 sm:py-3")}>
          <p
            className={cn(
              "font-display leading-none tabular-nums",
              b.accent ? "text-accent" : "text-white",
              size === "lg" ? "text-[clamp(36px,5vw,56px)]" : "text-[28px] sm:text-[34px]"
            )}
          >
            {b.v}
          </p>
          <p
            className={cn(
              "font-bold uppercase text-white/70",
              size === "lg" ? "mt-2 text-[10px] tracking-[0.2em]" : "mt-1 text-[9px] tracking-[0.18em] sm:mt-1.5 sm:text-[10px] sm:tracking-[0.2em]"
            )}
          >
            {b.l}
          </p>
        </div>
      ))}
    </div>
  );
}

// Botão de compra da Black Friday (link real para o checkout da Hotmart).
export function BfCta({
  children,
  variant = "dark",
  className,
  ref,
}: {
  children: ReactNode;
  variant?: "dark" | "accent";
  className?: string;
  ref?: Ref<HTMLAnchorElement>;
}) {
  return (
    <a
      ref={ref}
      href={BLACK_FRIDAY_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex min-h-14 items-center justify-center gap-3 px-4 text-center text-xs font-extrabold uppercase tracking-[0.14em] transition-[filter,transform] duration-200 hover:-translate-y-px hover:brightness-110 sm:min-h-[60px] sm:px-6 sm:text-[13px] sm:tracking-[0.2em]",
        variant === "dark" ? "bg-bf text-white" : "bg-accent text-ink",
        className
      )}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
