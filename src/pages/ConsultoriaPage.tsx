import { Dumbbell } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { ServicePage } from "../components/ServicePage";

export default function ConsultoriaPage() {
  return (
    <>
      <PageHead
        title="Consultoria Online de Musculação para Bailarinas — Bailarina Preparada"
        description="Planejamento de treino personalizado para bailarinas. Periodização específica conciliando musculação e ensaios, com acompanhamento mensal e suporte direto."
        path="/consultoria"
      />
      <ServicePage
      icon={Dumbbell}
      tag="Atendimento individual · Online"
      title="Consultoria Online de Musculação"
      subtitle="Planejamento personalizado para a sua dança"
      description="Treino de musculação desenhado especificamente para o seu corpo, seu estilo de dança e seus objetivos. Ciência aplicada à performance artística."
      features={[
        {
          title: "Avaliação física completa",
          description: "Análise do seu histórico, objetivos, rotina de ensaios e limitações para criar um plano sob medida.",
        },
        {
          title: "Plano de treino personalizado",
          description: "Periodização específica para dançarinas, conciliando treino e agenda de aulas/ensaios.",
        },
        {
          title: "Acompanhamento e ajustes mensais",
          description: "Revisões periódicas do plano conforme sua evolução e demandas da dança.",
        },
        {
          title: "Suporte via mensagens",
          description: "Canal direto com a equipe para tirar dúvidas sobre execução, dores e adaptações.",
        },
      ]}
      forWho={[
        "Bailarinas que querem um treino sério mas sem abrir mão da dança",
        "Dançarinas com histórico de lesões que precisam de abordagem cuidadosa",
        "Quem já treina mas não vê resultado porque o treino não é específico para dança",
        "Profissionais de dança em período de preparação para espetáculos ou audições",
      ]}
      ctaLabel="Quero minha consultoria"
      whatsappMessage="Olá! Tenho interesse na Consultoria Online de Musculação. Pode me passar mais informações?"
    />
    </>
  );
}
