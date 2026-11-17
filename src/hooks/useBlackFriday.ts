import { useEffect, useState, useSyncExternalStore } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import {
  BLACK_FRIDAY_END,
  PREVIEW_PARAM,
  PREVIEW_VALUE,
  isBlackFridayActive,
  nextBlackFridayBoundary,
} from "@/data/blackFriday";

// Liga/desliga a campanha sozinho na hora certa, sem re-renderizar a cada segundo:
// só agenda um timer para o próximo limite (início ou fim).
export function useBlackFridayActive(): boolean {
  const { search } = useLocation();
  const preview = new URLSearchParams(search).get(PREVIEW_PARAM) === PREVIEW_VALUE;
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const next = nextBlackFridayBoundary(now);
    if (next === null) return;
    // Revalida no máximo a cada hora (setTimeout longo atrasa com o PC suspenso).
    const delay = Math.min(Math.max(next - now, 0) + 50, 60 * 60 * 1000);
    const id = setTimeout(() => setNow(Date.now()), delay);
    return () => clearTimeout(id);
  }, [now]);

  // Timers atrasam com o PC suspenso ou a aba em segundo plano: revalida ao voltar para a aba.
  useEffect(() => {
    const recheck = () => {
      if (document.visibilityState === "visible") setNow(Date.now());
    };
    document.addEventListener("visibilitychange", recheck);
    window.addEventListener("focus", recheck);
    return () => {
      document.removeEventListener("visibilitychange", recheck);
      window.removeEventListener("focus", recheck);
    };
  }, []);

  return preview || isBlackFridayActive(now);
}

export type BlackFridayOutletContext = { blackFriday: boolean };

// Para as páginas: lê o estado calculado no RootLayout (não cria outro timer).
export function useBlackFridayFromLayout(): boolean {
  return useOutletContext<BlackFridayOutletContext>().blackFriday;
}

// Um único relógio compartilhado: todos os contadores da página andam juntos.
let currentNow = Date.now();
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!timer) {
    currentNow = Date.now();
    timer = setInterval(() => {
      currentNow = Date.now();
      listeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export type Countdown = { d: string; h: string; m: string; s: string; hasDays: boolean };

// Sem ninguém inscrito o relógio está parado: atualiza na leitura (arredondado ao segundo,
// para o snapshot ser estável entre chamadas) e o primeiro render já sai com a hora certa.
function getSnapshot() {
  if (!timer) currentNow = Date.now() - (Date.now() % 1000);
  return currentNow;
}

export function useCountdown(): Countdown {
  const now = useSyncExternalStore(subscribe, getSnapshot);
  const total = Math.max(0, Math.floor((BLACK_FRIDAY_END - now) / 1000));
  const days = Math.floor(total / 86400);
  return {
    d: pad(days),
    h: pad(Math.floor((total % 86400) / 3600)),
    m: pad(Math.floor((total % 3600) / 60)),
    s: pad(total % 60),
    hasDays: days > 0,
  };
}

// "1d 04:12:09" ou, no dia da campanha, só "04:12:09".
export function formatCountdown(c: Countdown): string {
  return `${c.hasDays ? `${c.d}d ` : ""}${c.h}:${c.m}:${c.s}`;
}
