import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Intervalo entre a entrada de um check e a do seguinte, em ms — folgado o
    suficiente para ler a linha antes de o próximo marcar. */
export const CHECK_STAGGER_MS = 1000;

interface AnimatedCheckProps {
  checked: boolean;
  delayMs?: number;
  /** true = versão para fundos escuros */
  dark?: boolean;
}

export function AnimatedCheck({ checked, delayMs = 0, dark = false }: AnimatedCheckProps) {
  return (
    <span
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-700",
        checked
          ? "scale-100 border-accent bg-accent text-ink"
          : cn("scale-90 text-transparent", dark ? "border-white/20" : "border-deep/20")
      )}
    >
      <Check size={16} strokeWidth={3} />
    </span>
  );
}
