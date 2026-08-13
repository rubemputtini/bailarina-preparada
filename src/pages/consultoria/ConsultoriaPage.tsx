import { ArrowRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { serviceSchema } from "@/constants/structuredData";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceForWho } from "@/components/service/ServiceForWho";
import { ServiceCta } from "@/components/service/ServiceCta";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { consultoriaTestimonials } from "@/data/clube";
import { useIsBrazil } from "@/hooks/useIsBrazil";
import { cn } from "@/lib/utils";
import { BASE_URL, whatsappLink } from "@/constants/urls";
import cardConsultoria from "@/assets/card-consultoria.jpg";

const whatsappUrl = whatsappLink(
  "Olá! Tenho interesse na Consultoria Online de Musculação. Pode me passar mais informações?"
);

const steps = [
  {
    title: "Anamnese",
    text: "Você me conta sobre o seu histórico, os seus objetivos e a sua rotina.",
  },
  {
    title: "Prescrição do treino",
    text: "Eu monto o seu plano de treinos totalmente personalizado.",
  },
  {
    title: "Entrega",
    text: "Você recebe o treino através de um aplicativo, com todas as orientações e vídeos de execução.",
  },
  {
    // TODO: texto provisório — a Isabella ainda vai definir a descrição desta etapa
    title: "Acompanhamento",
    text: "Acompanho a sua evolução de perto e ajusto o plano sempre que necessário.",
  },
  {
    title: "Suporte pelo WhatsApp",
    text: "Você envia todas as dúvidas e vídeos da sua execução para que eu te ajude de forma assíncrona.",
  },
];

const plans = [
  {
    name: "1 plano de treinos",
    priceBRL: "180",
    priceEUR: "35",
    linkBRL: "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=59814&page=59813",
    messageEUR: "Olá! Tenho interesse na Consultoria Online (1 plano de treinos). Pode me passar mais informações?",
    featured: false,
  },
  {
    name: "3 planos de treinos",
    priceBRL: "450",
    priceEUR: "90",
    linkBRL: "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=59815&page=59813",
    messageEUR: "Olá! Tenho interesse na Consultoria Online (3 planos de treinos). Pode me passar mais informações?",
    featured: true,
  },
];

export default function ConsultoriaPage() {
  const isBrazil = useIsBrazil();

  return (
    <>
      <PageHead
        title="Consultoria de Musculação para Bailarinas — Bailarina Preparada"
        description="Planejamento de treino personalizado para bailarinas. Periodização específica conciliando musculação e ensaios, com acompanhamento mensal e suporte direto."
        path="/consultoria"
        ogImage={`${BASE_URL}${cardConsultoria}`}
        jsonLd={serviceSchema(
          "Consultoria de Musculação para Bailarinas",
          "Planejamento de treino personalizado para bailarinas. Periodização específica conciliando musculação e ensaios, com acompanhamento mensal e suporte direto.",
          "/consultoria"
        )}
      />
      <main>
        <ServiceHero
          breadcrumb="Consultoria Online"
          kicker="Atendimento individual · Online"
          title={
            <>
              Um treino desenhado para o seu <em className="text-accent">corpo</em>
            </>
          }
          description="Treinos criados especificamente para o seu corpo, sua rotina e seus objetivos. Com todas as orientações individuais que você precisa para evoluir."
          ctaLabel="Quero minha consultoria"
          ctaHref="#planos"
          ctaExternal={false}
          note="Escolha o seu plano abaixo"
        />

        <section className="bg-paper py-28 text-deep">
          <div className="container-site max-w-4xl">
            <p className="eyebrow text-mid">Passo a passo</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Como a consultoria <em>funciona</em>
            </h2>

            <ol className="mt-16">
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-8 pb-12 last:pb-0">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-5 top-12 bottom-0 w-px bg-deep/15"
                    />
                  )}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent bg-paper font-display text-lg text-mid">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-deep/60">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ServiceForWho
          checks
          title="A consultoria foi feita para você se…"
          items={[
            "Você tem histórico de lesão e precisa de uma abordagem cuidadosa",
            "Você não vê resultados com treinos genéricos da academia",
            "Você tem disciplina e gosta de treinar sozinha",
            "Você está se preparando para um espetáculo, audição ou festival",
          ]}
        />

        <section id="planos" className="bg-ink py-28 scroll-mt-24">
          <div className="container-site max-w-4xl">
            <div className="text-center">
              <p className="eyebrow text-accent">Investimento</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
                Escolha o seu <em className="text-accent">plano</em>
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col p-10 md:p-12 ${
                    plan.featured
                      ? "border border-accent/60 bg-deep"
                      : "border border-white/[0.08] bg-deep"
                  }`}
                >
                  {plan.featured && (
                    <p className="eyebrow absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-accent px-4 py-1.5 text-ink">
                      Mais vantajoso
                    </p>
                  )}
                  <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                  <div className="mt-6 flex flex-1 items-baseline gap-2">
                    <span className="text-lg text-white/50">{isBrazil ? "R$" : "€"}</span>
                    <span className="font-display text-6xl text-white">
                      {isBrazil ? plan.priceBRL : plan.priceEUR}
                    </span>
                    {isBrazil && <span className="text-lg text-white/50">,00</span>}
                  </div>
                  <Button
                    variant={plan.featured ? "primary" : "outline"}
                    href={isBrazil ? plan.linkBRL : whatsappLink(plan.messageEUR)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10"
                  >
                    Começar agora
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-white/40">
              Cada plano de treinos dura de 4 a 6 semanas.
            </p>
          </div>
        </section>

        <section className="bg-paper py-24 text-deep">
          <div className="container-site max-w-3xl text-center">
            <p className="font-display text-3xl leading-snug md:text-4xl">
              O método Bailarina Preparada inteiramente dedicado a{" "}
              <em className="text-mid">você</em>.
            </p>
          </div>
        </section>

        <section className="bg-paper pb-28 text-deep">
          <div className="container-site max-w-6xl">
            <p className="eyebrow text-center text-mid">Depoimentos</p>
            <h2 className="mt-6 text-center font-display text-4xl leading-tight md:text-5xl">
              O que as alunas <em>dizem</em>
            </h2>

            <div
              className={cn(
                "mt-16 grid gap-px border border-deep/10 bg-deep/10",
                consultoriaTestimonials.length === 1
                  ? "mx-auto max-w-xl"
                  : consultoriaTestimonials.length % 2 === 0
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3"
              )}
            >
              {consultoriaTestimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        <ServiceCta
          title="Pronta para treinar do jeito certo?"
          text="Fale com a nossa equipe e descubra como a consultoria pode se encaixar na sua rotina."
          ctaLabel="Falar com a equipe"
          ctaHref={whatsappUrl}
        />
      </main>
    </>
  );
}
