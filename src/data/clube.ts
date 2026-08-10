import depAnaLia from "@/assets/depoimento-ana-lia.jpg";
import depAndreza from "@/assets/depoimento-andreza.jpg";
import depCamila from "@/assets/depoimento-camila.jpg";
import depFabia from "@/assets/depoimento-fabia.jpg";
import depLuana from "@/assets/depoimento-luana.jpg";

export const YOUTUBE_ID = "ABsLsyHNofA";

export const painPoints = [
  "Chega exausta nas aulas e não consegue dar o seu melhor",
  "Sente que sua técnica tem limite e o problema é ter começado tarde",
  "Morre de medo de se machucar (pela primeira vez ou de novo)",
  "Vê outras bailarinas evoluindo enquanto você sente que está estagnada",
  "Treina, se dedica, mas o seu corpo ainda não responde como deveria",
];

export const insideItems = [
  {
    label: "Toda semana",
    title: "Aulas ao vivo de PBT e Solo",
    detail: "Em grupo, para praticar, tirar dúvidas e se manter motivada.",
  },
  {
    label: "Todo mês",
    title: "Treinos novos",
    detail: "De força, cardio e flexibilidade, além de treinos específicos para os movimentos do ballet, atualizados continuamente.",
  },
  {
    label: "Todo ano",
    title: "Avaliação física individual",
    detail: "Para montar seu planejamento de rotina personalizado e medir sua evolução ao longo do tempo.",
  },
  {
    label: "Bônus",
    title: "Aulas com professores convidados",
    detail: "Aulas de Pilates, Yoga e Flow com professores convidados e mini-curso de técnica com Fernanda Ruschel.",
  },
];

// photo: sem foto, o site mostra um círculo com as iniciais da aluna.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo?: string;
}

const anaLia: Testimonial = {
  quote: "Existe uma bailarina antes do Clube e depois do Clube. São duas pessoas completamente diferentes — não há comparação.",
  name: "Ana Lia Moreira",
  role: "Aluna do Clube",
  photo: depAnaLia,
};

const andrezza: Testimonial = {
  quote: "Minha flexibilidade, força, abdômen, colocação — tudo melhorou. Meus professores notaram em 6 meses. Vi resultados em tudo que me propus a melhorar.",
  name: "Andrezza Carvalho",
  role: "Aluna da Consultoria Individual",
  photo: depAndreza,
};

const fabia: Testimonial = {
  quote: "Me sentia frustrada nas aulas de não conseguir fazer nada, ver todo mundo evoluindo. O Clube foi a mudança que eu estava procurando.",
  name: "Fábia Gondim",
  role: "Aluna do Clube",
  photo: depFabia,
};

const isabelaFelicio: Testimonial = {
  quote: "Minha experiência com o clube ao longo desses anos sempre foi positiva. A plataforma é organizada, tem uma boa variedade de treinos e o suporte é excelente. Tive muitos bons resultados seguindo os treinos propostos, como ganho de massa muscular e flexibilidade, que me ajudaram a evoluir não só na dança como em outras atividades.",
  name: "Isabela Felício",
  role: "Aluna do Clube",
};

const paulaMoura: Testimonial = {
  quote: "Comecei há pouco tempo a treinar no clube, mas já me surpreendi positivamente com os resultados. O planejamento que recebi cabe perfeitamente no meu dia a dia, com treinos curtos e muito efetivos. Depois de 2 semanas seguindo o cronograma à risca, já me sinto mais forte e vejo o resultado na sala de balé: mais balance, saltando melhor, mais segurança nos giros… enfim, incrível! Bella, parabéns pelo seu trabalho, sério e confiável!",
  name: "Paula Moura",
  role: "Aluna do Clube",
};

const luana: Testimonial = {
  quote: "Adoro o clube! A Bella tem muito cuidado ao preparar e explicar os treinos, para que possam ser feitos da melhor forma possível, além de sempre adaptar os materiais. Senti uma diferença muito grande principalmente nas pernas derriere, que sempre foram uma dificuldade pra mim, e nos grandes saltos também, a força que estou construindo tem me ajudado muito. Além disso, melhorou muito minha autoestima na dança, pois fazer coisas que antes pareciam distantes me deixou muito feliz.",
  name: "Luana Cristina Camboin",
  role: "Aluna do Clube",
  photo: depLuana,
};

const camila: Testimonial = {
  quote: "Eu sempre dancei e achava que isso já era suficiente. Mas quando comecei a fazer a preparação física com ela, percebi o quanto um treino bem planejado faz diferença.",
  name: "Camila Merighi",
  role: "Aluna particular",
  photo: depCamila,
};

// Página do Clube: apenas assinantes
export const testimonials: Testimonial[] = [isabelaFelicio, fabia, paulaMoura, luana];

// Página inicial: alunas de diferentes serviços
export const homeTestimonials: Testimonial[] = [anaLia, andrezza, fabia, camila];

export const faqs = [
  {
    q: "Qualquer bailarina pode participar, mesmo iniciante?",
    a: "Sim. O Clube foi criado para bailarinas de todos os níveis. Os treinos têm progressões adaptadas — você começa no seu ritmo e evolui com segurança. O que importa é a sua vontade de melhorar.",
  },
  {
    q: "Quanto tempo duram os treinos?",
    a: "Os treinos variam entre 20 e 60 minutos. A ideia é que você consiga encaixar na sua rotina de ensaios e aulas sem sobrecarga. Você escolhe quando e como treinar.",
  },
  {
    q: "Preciso de algum equipamento?",
    a: "A grande maioria dos treinos não exige nenhum equipamento. Alguns conteúdos usam itens simples como faixa elástica ou colchonete — mas tudo é indicado com antecedência.",
  },
  {
    q: "Como funciona o suporte e a comunidade?",
    a: "Você tem acesso a um grupo exclusivo de alunas para tirar dúvidas, compartilhar conquistas e se conectar com outras bailarinas. As aulas ao vivo também são um espaço para interação direta com a Isabella.",
  },
  {
    q: "E se eu não gostar? Posso cancelar?",
    a: "Sim. O Clube tem garantia incondicional de 7 dias. Se por qualquer motivo você não estiver satisfeita, basta solicitar o cancelamento e receberá 100% do valor de volta — sem perguntas.",
  },
];
