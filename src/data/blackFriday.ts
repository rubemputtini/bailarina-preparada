// Black Friday 2026 do Clube Bailarina Preparada — tudo da campanha fica aqui.
// A campanha só existe na página /clube; o resto do site não muda.

export const BLACK_FRIDAY_CHECKOUT_URL = "https://pay.hotmart.com/R46545109G?off=bfl4vs7d";

// Dia 19/11 inteiro no horário de Brasília (o mesmo da oferta na Hotmart), para todo mundo:
// começa às 00:00:00 e termina às 23:59:59. O fim é exclusivo — a página volta ao
// normal exatamente às 00:00:00 de 20/11 (BRT).
export const BLACK_FRIDAY_START = Date.parse("2026-11-19T00:00:00-03:00");
export const BLACK_FRIDAY_END = Date.parse("2026-11-20T00:00:00-03:00");

// Adicione ?preview=blackfriday na URL do /clube para ver a página antes do dia 19.
export const PREVIEW_PARAM = "preview";
export const PREVIEW_VALUE = "blackfriday";

export function isBlackFridayActive(now: number): boolean {
  return now >= BLACK_FRIDAY_START && now < BLACK_FRIDAY_END;
}

// Próximo instante em que a campanha liga ou desliga (null quando já acabou).
export function nextBlackFridayBoundary(now: number): number | null {
  if (now < BLACK_FRIDAY_START) return BLACK_FRIDAY_START;
  if (now < BLACK_FRIDAY_END) return BLACK_FRIDAY_END;
  return null;
}

// Preços — Black Friday conferida no checkout da Hotmart em 17/11/2026 (12x R$ 92,77 / R$ 897,00).
const PRECO_NORMAL = 1097;
const PARCELA_NORMAL = 113.46;
const DESCONTO = 200;
const PARCELA_BLACK_FRIDAY = 92.77;

const precoBlackFriday = PRECO_NORMAL - DESCONTO;

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const [parcelaInt, parcelaCent] = brl(PARCELA_BLACK_FRIDAY).split(",");

export const bfOffer = {
  desconto: String(DESCONTO),
  precoDe: brl(PRECO_NORMAL),
  precoPor: brl(precoBlackFriday),
  parcelaDe: brl(PARCELA_NORMAL),
  parcelaInt,
  parcelaCent,
  economia: brl(DESCONTO),
  mesesGratis: (DESCONTO / (PRECO_NORMAL / 12)).toLocaleString("pt-BR", { maximumFractionDigits: 1 }),
  porDia: brl(Math.ceil((precoBlackFriday / 365) * 100) / 100),
};

export const bfTape = [
  "Black Friday",
  `−R$ ${DESCONTO} no Clube`,
  "Só até 19/11",
  "Plano anual",
  "Black Friday",
  `−R$ ${DESCONTO} no Clube`,
  "Garantia de 7 dias",
  "Só até 19/11",
];

export const bfFaqs = [
  {
    q: "Até quando vale o desconto?",
    a: `A oferta vale só no dia 19 de novembro, até as 23h59 (horário de Brasília). Depois disso, o plano anual volta ao valor normal de R$ ${brl(PRECO_NORMAL)}.`,
  },
];
