import { ArrowRight, Award, BadgeCheck, Clock3, Target } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { serviceSchema } from "@/constants/structuredData";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceForWho } from "@/components/service/ServiceForWho";
import { ServiceCta } from "@/components/service/ServiceCta";
import { Button } from "@/components/ui/Button";
import { ImageWithPlaceholder } from "@/components/ui/ImageWithPlaceholder";
import { BASE_URL, whatsappLink } from "@/constants/urls";
import cardOutrosTreinamentos from "@/assets/card-outros-treinamentos.jpg";
import cardPreparada from "@/assets/card-preparada.jpg";
import cardPirueta from "@/assets/card-pirueta.jpg";
import cardFlexivel from "@/assets/card-flexivel.jpg";
import cardPbt from "@/assets/card-pbt.jpg";

const whatsappUrl = whatsappLink(
  "Olá! Tenho interesse nos treinamentos da Bailarina Preparada. Pode me passar mais informações?"
);

const features = [
  {
    icon: Target,
    title: "Objetivos específicos",
    text: "Programas focados em habilidades específicas da dança: piruetas, pontas, flexibilidade.",
  },
  {
    icon: Clock3,
    title: "No seu ritmo",
    text: "Você treina quando e onde quiser, seguindo um programa estruturado com começo, meio e fim.",
  },
  {
    icon: Award,
    title: "Método Bailarina Preparada",
    text: "A mesma abordagem do Clube e das consultorias, em formato de programas avulsos.",
  },
  {
    icon: BadgeCheck,
    title: "Sem mensalidade",
    text: "Programas independentes: você escolhe o que faz sentido para o seu momento, sem assinatura.",
  },
];

const trainings: { title: string; paragraphs: string[]; image?: string }[] = [
  {
    title: "Preparada para as pontas",
    paragraphs: [
      "O Preparada para as Pontas fortalece pés, core e pernas de forma específica para a performance nas pontas, com 8 módulos completos: treinos de fortalecimento, estabilidade e mobilidade, biblioteca de exercícios para os pés, planilhas específicas, aulas bônus de meia ponta, liberação miofascial e mobilidade do tendão, além de correções técnicas por Fernanda Ruschel.",
      "Indicado para quem ainda não dança com pontas ou está começando, este é o treinamento que vai te fazer sentir verdadeiramente preparada para esse momento.",
    ],
    image: cardPreparada,
  },
  {
    title: "Pirueta Perfeita",
    paragraphs: [
      "Chegou a hora de destravar sua pirueta de uma vez por todas. Este treinamento une maestria técnica e preparação física específica para o movimento.",
      "Em parceria com a bailarina e professora Fernanda Ruschel, ensinamos corpo e técnica a trabalharem juntos na busca da pirueta perfeita.",
      "Em 3 meses, um dos passos mais difíceis do ballet vai deixar de ser um bicho de sete cabeças para você.",
    ],
    image: cardPirueta,
  },
  {
    title: "Definitivamente Flexível",
    paragraphs: [
      "O Definitivamente Flexível é o programa ideal para bailarinas de todas as idades e níveis que querem conquistar flexibilidade de forma definitiva e duradoura, sem precisar passar horas por dia treinando.",
      "A metodologia é baseada em evidências científicas e combina técnicas de alongamento passivo, ativo e FNP, ensinando a aplicar a flexibilidade de verdade nas aulas e coreografias, e não só para zerar espacates.",
      "O programa inclui 30 aulas em formato de desafio, planejamento de rotina personalizado para depois do desafio, o ebook Flexibilidade Descomplicada e o ComboDF, para que você se torne independente nos treinos.",
    ],
    image: cardFlexivel,
  },
  {
    title: "Aulas ao Vivo de PBT e Barra no Solo",
    paragraphs: [
      "Aulas ao vivo, em grupo, de PBT (Progressing Ballet Technique) e barra no solo — metodologias que trabalham a técnica do ballet fora da posição vertical, fortalecendo o controle corporal, o alinhamento e a consciência de movimento.",
      "Um espaço para praticar, tirar dúvidas em tempo real e evoluir a sua técnica com a orientação direta da Bella.",
    ],
    image: cardPbt,
  },
];

export default function TreinamentosPage() {
  return (
    <>
      <PageHead
        title="Treinamentos para Bailarinas — Bailarina Preparada"
        description="Programas de treino para objetivos específicos: pontas, piruetas, flexibilidade e mais. Treine no seu ritmo com o método Bailarina Preparada."
        path="/treinamentos"
        ogImage={`${BASE_URL}${cardOutrosTreinamentos}`}
        jsonLd={serviceSchema(
          "Treinamentos para Bailarinas",
          "Programas de treino para objetivos específicos: pontas, piruetas, flexibilidade e mais. Treine no seu ritmo com o método Bailarina Preparada.",
          "/treinamentos"
        )}
      />
      <main>
        <ServiceHero
          breadcrumb="Outros Treinamentos"
          kicker="Programas · Online"
          title={
            <>
              Um treino para cada <em className="text-accent">objetivo</em>
            </>
          }
          description="Programas de treino avulsos, criados com o método Bailarina Preparada, para você trabalhar necessidades específicas no seu ritmo."
        />

        <section className="bg-paper py-28 text-deep">
          <div className="container-site">
            <p className="eyebrow text-mid">Como funciona</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Programas com começo, meio e <em>fim</em>
            </h2>

            <div className="mt-16 grid gap-px border border-deep/10 bg-deep/10 md:grid-cols-2">
              {features.map((item) => (
                <div key={item.title} className="bg-paper p-10 md:p-12">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent text-mid">
                    <item.icon size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-deep/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-28">
          <div className="container-site">
            <p className="eyebrow text-accent">Os treinamentos</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight text-white md:text-5xl">
              Escolha o seu <em className="text-accent">foco</em>
            </h2>

            <div className="mt-16 grid gap-6">
              {trainings.map((training) => (
                <article
                  key={training.title}
                  className="grid overflow-hidden bg-paper text-deep md:grid-cols-[2fr_3fr]"
                >
                  <div className="aspect-[4/3] bg-paper-deep md:aspect-auto">
                    <ImageWithPlaceholder
                      src={training.image}
                      alt={training.title}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="flex flex-col p-10 md:p-12">
                    <h3 className="font-display text-3xl">{training.title}</h3>
                    <div className="mt-4 max-w-xl flex-1 space-y-4 leading-relaxed text-deep/60">
                      {training.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <Button
                      variant="ink"
                      href={whatsappLink(
                        `Olá! Tenho interesse no treinamento "${training.title}". Pode me passar mais informações?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 self-start"
                    >
                      Quero este treinamento
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceForWho
          checks
          title="Para quem tem um objetivo claro"
          items={[
            "Bailarinas que querem trabalhar uma necessidade específica",
            "Quem prefere programas avulsos a uma assinatura contínua",
            "Quem quer conhecer o método antes de entrar para o Clube",
            "Bailarinas que querem complementar a rotina atual de treinos",
          ]}
        />

        <ServiceCta
          title="Qual é o seu próximo objetivo?"
          text="Fale com a nossa equipe e descubra qual treinamento combina com o seu momento."
          ctaLabel="Falar com a equipe"
          ctaHref={whatsappUrl}
        />
      </main>
    </>
  );
}
