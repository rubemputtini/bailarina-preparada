import depManuela from "@/assets/depoimento-manuela.jpg";

// Depoimentos de profissionais formados na Formação.
// Adicione os depoimentos reais aqui — enquanto a lista estiver vazia, a seção
// mostra apenas a chamada da rede com o botão de lista de espera.
export interface FormacaoTestimonial {
  quote: string;
  name: string;
  /** Sobrepõe o role padrão ("Profissional formada") quando houver algo mais específico a dizer. */
  role?: string;
  photo?: string;
}

export const formacaoTestimonials: FormacaoTestimonial[] = [
  {
    quote:
      "Eu amei o curso, aprendi muito e foi muito além do que eu imaginava! Tudo muito organizado e bem explicado, todo apoio da Isa também foi incrível.",
    name: "Manuela Rodrigues Lima",
    role: "Aluna da Turma 1, hoje parte dos professores do Clube Bailarina Preparada",
    photo: depManuela,
  },
];
