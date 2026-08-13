import { ArrowRight, Clock3, House, Target } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { serviceSchema } from "@/constants/structuredData";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceCta } from "@/components/service/ServiceCta";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { ImageWithPlaceholder } from "@/components/ui/ImageWithPlaceholder";
import { BASE_URL, whatsappLink } from "@/constants/urls";
import cardAulasParticulares from "@/assets/card-aulas-particulares.jpg";
import depCamila from "@/assets/depoimento-camila.jpg";
import fotoConforto from "@/assets/aula-particular-conforto.jpg";
import fotoRitmo from "@/assets/aula-particular-ritmo.jpg";
import fotoFoco from "@/assets/aula-particular-foco.jpg";

const whatsappUrl = whatsappLink(
  "Olá! Tenho interesse nas Aulas Particulares. Pode me passar mais informações?"
);

const pillars: { icon: typeof House; title: string; text: string; image?: string }[] = [
  {
    icon: House,
    title: "No conforto da sua casa",
    text: "As aulas acontecem ao vivo e pelo Google Meet. Você só precisa de um espaço livre, um colchonete e internet! A aula chega até você, onde você estiver.",
    image: fotoConforto,
  },
  {
    icon: Clock3,
    title: "No seu ritmo",
    text: "Sem o compasso de uma turma: a aula anda na sua velocidade. A gente repete o que precisar de mais tempo e avança quando você estiver pronta.",
    image: fotoRitmo,
  },
  {
    icon: Target,
    title: "Com o foco que você escolher",
    text: "Cada encontro parte do seu objetivo. Você diz onde quer chegar, e a aula é construída para te levar até lá.",
    image: fotoFoco,
  },
];

// TODO: ajustar a lista de focos ao que é oferecido de fato
const focos = ["Flexibilidade", "Pontas", "Força", "Piruetas", "Core", "Técnica", "Retorno à dança"];

const steps = [
  {
    title: "Defina seus objetivos",
    text: "Fale com a Bella no WhatsApp e conte o que pretende com as aulas.",
  },
  {
    title: "Escolha seu horário",
    text: "Mostre sua disponibilidade para encaixar na agenda da Bella da melhor forma possível.",
  },
  {
    title: "Efetue o pagamento",
    text: "Garanta sua vaga com o pagamento de acordo com a sua frequência semanal.",
  },
  {
    title: "Receba o link",
    text: "A aula acontece no Google Meet, sem aplicativo complicado nem equipamento especial.",
  },
  {
    title: "Treine com atenção exclusiva",
    text: "Correções em tempo real, como se estivéssemos na mesma sala.",
  },
];

// Espaço reservado: depoimento da Giovana Santoro (ainda não enviado).
const testimonials = [
  {
    name: "Camila Merighi",
    role: "Aluna desde 2022",
    photo: depCamila,
    paragraphs: [
      "Sou aluna da Bella desde 2022 e acho que uma das maiores mudanças que ela trouxe para a minha vida foi a forma como eu passei a enxergar a atividade física.",
      "Eu sempre dancei e achava que isso já era suficiente. Mas quando comecei a fazer a preparação física com ela, percebi o quanto um treino bem planejado faz diferença. A Bella sempre montou tudo pensando na minha rotina, nos dias de aula, nas minhas necessidades e objetivos. Além de muito competente, ela sempre foi super disponível e atenciosa.",
      "Com o tempo, senti um ganho enorme de força, equilíbrio e condicionamento, e isso refletiu muito na minha dança. Hoje me sinto mais segura, tenho mais resistência e consigo aproveitar muito mais as aulas.",
      "E o mais engraçado é que, se alguém me falasse alguns anos atrás que eu iria gostar de treinar, eu jamais acreditaria. Hoje a atividade física faz parte da minha rotina e é algo de que eu realmente gosto. Sou muito grata à Bella por todo esse processo e por tornar tudo tão leve.",
    ],
  },
];

export default function AulasParticularesPage() {
  return (
    <>
      <PageHead
        title="Aulas Particulares para Bailarinas — Bailarina Preparada"
        description="Aulas individuais ao vivo pelo Google Meet, no conforto da sua casa. Você escolhe o ritmo e o foco — a atenção é toda sua."
        path="/aulas-particulares"
        ogImage={`${BASE_URL}${cardAulasParticulares}`}
        jsonLd={serviceSchema(
          "Aulas Particulares para Bailarinas",
          "Aulas individuais ao vivo pelo Google Meet, no conforto da sua casa. Você escolhe o ritmo e o foco — a atenção é toda sua.",
          "/aulas-particulares"
        )}
      />
      <main>
        <ServiceHero
          breadcrumb="Aulas Particulares"
          kicker="Individual · Ao vivo"
          title={
            <>
              Uma aula inteira só <em className="text-accent">sua</em>
            </>
          }
          description="Aulas individuais ao vivo, com atenção exclusiva ao seu corpo, às suas dúvidas e aos seus objetivos na dança."
          ctaLabel="Quero minha aula"
          ctaHref={whatsappUrl}
          note="Fale com a equipe e monte a sua agenda"
        />

        <section className="bg-paper py-28 text-deep">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="eyebrow text-mid">O formato</p>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                A aula acontece onde você <em>estiver</em>
              </h2>
            </div>

            <div className="mt-20 space-y-24">
              {pillars.map((pillar, i) => (
                <div key={pillar.title} className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                  <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 h-full w-full border border-accent" />
                      <ImageWithPlaceholder
                        src={pillar.image}
                        alt={pillar.title}
                        className="relative aspect-[4/3] w-full"
                        placeholderClassName="bg-paper-deep"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent text-mid">
                      <pillar.icon size={20} />
                    </span>
                    <h3 className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-5 max-w-md leading-relaxed text-deep/60">{pillar.text}</p>

                    {i === 2 && (
                      <div className="mt-8 flex max-w-md flex-wrap gap-2">
                        {focos.map((foco) => (
                          <span
                            key={foco}
                            className="rounded-full border border-deep/20 px-4 py-1.5 text-xs font-medium tracking-wide text-deep/70"
                          >
                            {foco}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-deep py-28">
          <div className="container-site">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">Como começar</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
                Da conversa à primeira aula em cinco <em className="text-accent">passos</em>
              </h2>
            </div>

            <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {steps.map((step, i) => (
                <div key={step.title}>
                  <p className="font-display text-4xl text-accent">0{i + 1}</p>
                  <h3 className="mt-5 font-display text-2xl text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{step.text}</p>
                </div>
              ))}
            </div>

            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-16">
              Marcar minha primeira aula
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        <section className="bg-paper py-28 text-deep">
          <div className="container-site max-w-3xl">
            <p className="eyebrow text-mid">Depoimentos</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              O que as alunas <em>dizem</em>
            </h2>

            <div className="mt-16 space-y-10">
              {testimonials.map((t) => (
                <figure key={t.name} className="border border-deep/10 p-10 md:p-12">
                  <span aria-hidden className="font-display text-6xl leading-none text-accent">
                    “
                  </span>
                  <blockquote className="mt-2 space-y-4 leading-relaxed text-deep/75">
                    {t.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <Avatar name={t.name} photo={t.photo} />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-deep/40">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ServiceCta
          title="Pronta para uma aula pensada só para você?"
          text="Fale com a nossa equipe, conte o seu objetivo e marque a sua primeira aula."
          ctaLabel="Falar no WhatsApp"
          ctaHref={whatsappUrl}
        />
      </main>
    </>
  );
}
