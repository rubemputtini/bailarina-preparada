// Quiz "qual serviço é ideal para você".
// Cada opção soma pontos para um ou mais serviços (chave = slug em services.ts);
// vence o serviço com mais pontos (empate: ordem em services.ts).
//
// Lógica: a primeira pergunta identifica o perfil e roteia com peso 12 os públicos
// que têm serviço próprio (Educação Física → PRO, escolas → Workshops) — as demais
// perguntas somam no máximo 11 para um mesmo serviço, então nunca invertem a rota.
// Para bailarinas, as quatro perguntas seguintes diferenciam Clube, Consultoria,
// Aulas Particulares e Treinamentos por objetivo, formato, local e compromisso.

export interface QuizOption {
  label: string;
  points: Record<string, number>;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Qual dessas opções mais combina com você?",
    options: [
      { label: "Sou bailarina — danço ou quero voltar a dançar", points: {} },
      { label: "Sou professor(a) de dança", points: { "/formacao": 12 } },
      { label: "Sou profissional ou estudante de Educação Física", points: { "/formacao": 12 } },
      { label: "Represento uma escola, companhia ou evento", points: { "/workshops": 12 } },
    ],
  },
  {
    question: "O que você mais busca neste momento?",
    options: [
      { label: "Evoluir de forma contínua, com constância", points: { "/clube": 3 } },
      {
        label: "Trabalhar um objetivo específico (pontas, pirueta, flexibilidade…)",
        points: { "/treinamentos": 3 },
      },
      { label: "Um treino sob medida para o meu corpo e a minha rotina", points: { "/consultoria": 3 } },
      { label: "Atenção individual, com correção em tempo real", points: { "/aulas-particulares": 3 } },
    ],
  },
  {
    question: "Como você prefere treinar?",
    options: [
      { label: "Com vídeo-aulas, no meu horário", points: { "/clube": 2, "/treinamentos": 2 } },
      { label: "Sozinha, com um plano montado para mim", points: { "/consultoria": 3 } },
      { label: "Ao vivo, com a professora só para mim", points: { "/aulas-particulares": 3 } },
      { label: "Em grupo, com aulas ao vivo e comunidade", points: { "/clube": 3 } },
    ],
  },
  {
    question: "Onde você pretende treinar?",
    options: [
      {
        label: "Em casa",
        points: { "/clube": 2, "/aulas-particulares": 1, "/treinamentos": 1 },
      },
      { label: "Na academia", points: { "/consultoria": 3 } },
      { label: "Tanto faz — quero liberdade", points: { "/clube": 1, "/treinamentos": 1 } },
    ],
  },
  {
    question: "Que formato de compromisso funciona melhor para você?",
    options: [
      { label: "Assinatura com conteúdo novo todo mês", points: { "/clube": 3 } },
      { label: "Programa avulso, com começo, meio e fim", points: { "/treinamentos": 3 } },
      { label: "Plano renovado a cada ciclo, com acompanhamento", points: { "/consultoria": 2 } },
      { label: "Encontros marcados, ao vivo", points: { "/aulas-particulares": 2 } },
    ],
  },
];
