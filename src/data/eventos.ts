// Eventos já realizados — aparecem no carrossel automático da página de Workshops.
// Para adicionar: coloque a foto em src/assets/, importe aqui e preencha local e data.

import workshopEspinho from "@/assets/workshop-espinho-2025.jpg";

export interface Evento {
  image: string;
  local: string;
  date: string;
}

export const eventos: Evento[] = [
  { image: workshopEspinho, local: "Espinho", date: "2025" },
];
