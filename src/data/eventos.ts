// Eventos já realizados — aparecem no carrossel automático da página de Workshops.
// Para adicionar: coloque a foto em src/assets/, importe aqui e preencha local e data.

import workshopBraga2024 from "@/assets/workshop-braga-2024.jpg";
import workshopBrasilia2024 from "@/assets/workshop-brasilia-2024.jpg";
import workshopJoinville2024 from "@/assets/workshop-joinville-2024.jpg";
import workshopJoinville2024_2 from "@/assets/workshop-joinville-2024-2.jpg";
import workshopSaoPaulo2024 from "@/assets/workshop-sao-paulo-2024.jpg";
import workshopEspinho from "@/assets/workshop-espinho-2025.jpg";
import workshopMogiMirim2025 from "@/assets/workshop-mogi-mirim-2025.jpg";
import workshopPedreira2025 from "@/assets/workshop-pedreira-2025.jpg";
import workshopSaoJoseDosCampos2026 from "@/assets/workshop-sao-jose-dos-campos-2026.jpg";
import workshopSaoJoseDosCampos2026_2 from "@/assets/workshop-sao-jose-dos-campos-2026-2.jpg";
import workshopSaoPaulo2026 from "@/assets/workshop-sao-paulo-2026.jpg";

export interface Evento {
  image: string;
  local: string;
  date: string;
}

export const eventos: Evento[] = [
  { image: workshopBraga2024, local: "Braga", date: "2024" },
  { image: workshopBrasilia2024, local: "Brasília", date: "2024" },
  { image: workshopJoinville2024, local: "Joinville", date: "2024" },
  { image: workshopJoinville2024_2, local: "Joinville", date: "2024" },
  { image: workshopSaoPaulo2024, local: "São Paulo", date: "2024" },
  { image: workshopEspinho, local: "Espinho", date: "2025" },
  { image: workshopMogiMirim2025, local: "Mogi Mirim", date: "2025" },
  { image: workshopPedreira2025, local: "Pedreira", date: "2025" },
  { image: workshopSaoJoseDosCampos2026, local: "São José dos Campos", date: "2026" },
  { image: workshopSaoJoseDosCampos2026_2, local: "São José dos Campos", date: "2026" },
  { image: workshopSaoPaulo2026, local: "São Paulo", date: "2026" },
];
