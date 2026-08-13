import { useState } from "react";

// Fusos horários oficiais do Brasil (IANA tz database).
const BRAZIL_TIME_ZONES = new Set([
  "America/Noronha",
  "America/Sao_Paulo",
  "America/Bahia",
  "America/Fortaleza",
  "America/Recife",
  "America/Araguaina",
  "America/Maceio",
  "America/Belem",
  "America/Santarem",
  "America/Campo_Grande",
  "America/Cuiaba",
  "America/Porto_Velho",
  "America/Boa_Vista",
  "America/Manaus",
  "America/Eirunepe",
  "America/Rio_Branco",
]);

function detectIsBrazil(): boolean {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return BRAZIL_TIME_ZONES.has(timeZone);
  } catch {
    // Se a detecção falhar, assume Brasil — é o público majoritário do site.
    return true;
  }
}

// Detecta se o visitante provavelmente está no Brasil pelo fuso horário do navegador.
// 100% client-side (sem API externa) — usado para decidir entre preços em R$/link de
// pagamento direto e preços em €/contato pelo WhatsApp.
export function useIsBrazil(): boolean {
  const [isBrazil] = useState(detectIsBrazil);
  return isBrazil;
}
