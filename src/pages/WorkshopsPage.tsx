import { Mic } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { ServicePage } from "../components/ServicePage";

export default function WorkshopsPage() {
  return (
    <>
      <PageHead
        title="Workshops e Palestras sobre Performance na Dança — Bailarina Preparada"
        description="Eventos presenciais e online sobre preparação física, prevenção de lesões e performance para bailarinas. Para escolas de dança, companhias e festivais."
        path="/workshops"
      />
      <ServicePage
      icon={Mic}
      tag="Eventos · Presencial e online"
      title="Workshops e Palestras"
      subtitle="Conhecimento prático para grupos e instituições"
      description="Eventos presenciais e online sobre preparação física, performance e saúde para dançarinas. Ideal para escolas de dança, companhias e eventos do setor."
      features={[
        {
          title: "Formatos flexíveis",
          description: "Workshop prático, palestra ou imersão — adaptamos o formato ao seu evento e público.",
        },
        {
          title: "Temas variados",
          description: "Prevenção de lesões, musculação para bailarinas, nutrição na dança, saúde mental e performance.",
        },
        {
          title: "Presencial ou online",
          description: "Atendemos escolas, companhias e eventos em todo o Brasil, presencialmente ou via streaming.",
        },
        {
          title: "Material de apoio incluso",
          description: "Participantes recebem material complementar para continuar aprendendo após o evento.",
        },
      ]}
      forWho={[
        "Escolas de dança que querem oferecer conteúdo diferenciado aos alunos",
        "Companhias de dança em período de preparação para temporada",
        "Eventos, festivais e encontros do universo da dança",
        "Instituições de educação física com interesse em dança",
      ]}
      ctaLabel="Solicitar workshop ou palestra"
      whatsappMessage="Olá! Tenho interesse em contratar um Workshop ou Palestra. Pode me passar mais informações?"
    />
    </>
  );
}
