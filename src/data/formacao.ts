// Depoimentos de profissionais formados na Formação.
// Adicione os depoimentos reais aqui — enquanto a lista estiver vazia, a seção
// mostra apenas a chamada da rede com o botão de lista de espera.
// photo: caminho da foto (colocar em src/assets/alunas/ e importar aqui).
export interface FormacaoTestimonial {
  quote: string;
  name: string;
  photo?: string;
}

export const formacaoTestimonials: FormacaoTestimonial[] = [];
