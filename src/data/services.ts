import cardClube from "@/assets/card-clube.jpg";
import cardConsultoria from "@/assets/card-consultoria.jpg";
import cardAulasParticulares from "@/assets/card-aulas-particulares.jpg";
import cardOutrosTreinamentos from "@/assets/card-outros-treinamentos.jpg";
import cardBpPro from "@/assets/card-bp-pro.jpg";
import cardWorkshop from "@/assets/card-workshop.jpg";

export interface Service {
  slug: string;
  label: string;
  kicker: string;
  title: string;
  description: string;
  image?: string;
}

export const services: Service[] = [
  {
    slug: "/clube",
    label: "Clube",
    kicker: "Plataforma online",
    title: "Clube Bailarina Preparada",
    description:
      "Treinos novos todo mês, aulas ao vivo toda semana e uma comunidade de bailarinas evoluindo juntas.",
    image: cardClube,
  },
  {
    slug: "/consultoria",
    label: "Consultoria",
    kicker: "Treino individual",
    title: "Consultoria Online",
    description:
      "Plano de treino personalizado, criado para o seu corpo, sua rotina de ensaios e seus objetivos.",
    image: cardConsultoria,
  },
  {
    slug: "/aulas-particulares",
    label: "Aulas Particulares",
    kicker: "Aulas ao vivo",
    title: "Aulas Particulares",
    description:
      "Aulas individuais ao vivo, com atenção exclusiva para o seu momento e a sua evolução na dança.",
    image: cardAulasParticulares,
  },
  {
    slug: "/treinamentos",
    label: "Treinamentos",
    kicker: "Cursos",
    title: "Outros Treinamentos",
    description:
      "Programas de treino para objetivos específicos, para você evoluir no seu ritmo, onde estiver.",
    image: cardOutrosTreinamentos,
  },
  {
    slug: "/formacao",
    label: "Bailarina Preparada PRO",
    kicker: "Formação profissional",
    title: "Bailarina Preparada PRO",
    description:
      "Capacitação certificada para profissionais que querem atuar com preparação física para a dança.",
    image: cardBpPro,
  },
  {
    slug: "/workshops",
    label: "Workshops",
    kicker: "Eventos",
    title: "Workshops e Palestras",
    description:
      "Experiências presenciais e online para escolas de dança, companhias, festivais e eventos do setor.",
    image: cardWorkshop,
  },
];
