import { GraduationCap } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { ServicePage } from "../components/ServicePage";

export default function FormacaoPage() {
  return (
    <>
      <PageHead
        title="Formação em Preparação Física para a Dança — Bailarina Preparada"
        description="Capacitação para educadores físicos que querem atuar com bailarinas e dançarinas. Método exclusivo com certificação."
        path="/formacao"
      />
      <ServicePage
      icon={GraduationCap}
      tag="Formação profissional · Online"
      title="Formação de Profissionais"
      subtitle="Capacite-se para atuar com preparação física para a dança"
      description="Formação completa para educadores físicos que desejam trabalhar com bailarinas e dançarinas — unindo conhecimento científico e a realidade do universo artístico."
      features={[
        {
          title: "Metodologia exclusiva da Bailarina Preparada",
          description: "Aprenda o método criado por Isabella Souza e aplicado com mais de 500 bailarinas.",
        },
        {
          title: "Conteúdo teórico e prático",
          description: "Módulos que cobrem anatomia para dança, periodização, lesões frequentes e aplicação prática.",
        },
        {
          title: "Certificado de conclusão",
          description: "Certificado reconhecido para agregar ao seu portfólio profissional.",
        },
        {
          title: "Acesso a materiais de apoio",
          description: "Protocolos, planilhas e materiais didáticos para usar na prática com seus alunos.",
        },
      ]}
      forWho={[
        "Profissionais de Educação Física que querem se especializar em um nicho de alto valor",
        "Profissionais que já atendem dançarinas mas querem mais embasamento",
        "Personal trainers que desejam ampliar sua atuação para o universo da dança",
        "Recém-formados buscando diferenciação no mercado",
      ]}
      ctaLabel="Quero me formar"
      whatsappMessage="Olá! Tenho interesse na Formação de Profissionais. Pode me passar mais informações?"
    />
    </>
  );
}
