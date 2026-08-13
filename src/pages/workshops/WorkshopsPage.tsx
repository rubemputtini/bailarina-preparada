import { PageHead } from "@/components/PageHead";
import { serviceSchema } from "@/constants/structuredData";
import { ServiceHero } from "@/components/service/ServiceHero";
import { EventsSection } from "./sections/EventsSection";
import { ServiceForWho } from "@/components/service/ServiceForWho";
import { ServiceCta } from "@/components/service/ServiceCta";
import { whatsappLink } from "@/constants/urls";

const whatsappUrl = whatsappLink(
  "Olá! Tenho interesse em contratar um Workshop ou Palestra. Pode me passar mais informações?"
);

const formats = [
  {
    title: "Workshop prático",
    text: "Experiência mão na massa com treinos e exercícios aplicados, adaptada ao nível e ao espaço do seu evento.",
  },
  {
    title: "Palestra",
    text: "Conteúdo técnico apresentado com a linguagem de quem entende o universo da dança — presencial ou online.",
  },
  {
    title: "Imersão",
    text: "Um mergulho mais profundo no método, combinando teoria e prática em um ou mais encontros.",
  },
];

const themes = [
  "Prevenção de lesões na dança",
  "Musculação para bailarinas",
  "Flexibilidade funcional para a dança",
  "Saúde e bem-estar na dança",
  "Performance e preparação para o palco",
];

export default function WorkshopsPage() {
  return (
    <>
      <PageHead
        title="Workshops e Palestras de Performance na Dança — Bailarina Preparada"
        description="Eventos presenciais e online sobre preparação física, prevenção de lesões e performance para bailarinas. Para escolas de dança, companhias e festivais."
        path="/workshops"
        jsonLd={serviceSchema(
          "Workshops e Palestras de Performance na Dança",
          "Eventos presenciais e online sobre preparação física, prevenção de lesões e performance para bailarinas. Para escolas de dança, companhias e festivais.",
          "/workshops"
        )}
      />
      <main>
        <ServiceHero
          breadcrumb="Workshops e Palestras"
          kicker="Eventos · Presencial e online"
          title={
            <>
              Leve o método para sua <em className="text-accent">escola ou companhia</em>
            </>
          }
          description="Workshops práticos, palestras e imersões sobre preparação física, saúde e performance na dança — no formato ideal para a sua escola, companhia ou festival."
        />

        <EventsSection />

        <section className="bg-paper py-28 text-deep">
          <div className="container-site">
            <p className="eyebrow text-mid">Formatos</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Do auditório ao <em>estúdio</em>
            </h2>

            <div className="mt-16 grid gap-px border border-deep/10 bg-deep/10 md:grid-cols-3">
              {formats.map((item, i) => (
                <div key={item.title} className="bg-paper p-10">
                  <span className="font-display text-lg text-accent">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-deep/60">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-deep/10 pt-14">
              <p className="eyebrow text-mid">Temas abordados</p>
              <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                {themes.map((theme) => (
                  <p key={theme} className="border-b border-deep/10 pb-6 font-display text-2xl leading-snug">
                    {theme}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-sm text-deep/50">
                Os temas são adaptados ao público e ao objetivo de cada evento ou instituição.
              </p>
            </div>
          </div>
        </section>

        <ServiceForWho
          checks
          title="Para instituições que vivem a dança"
          items={[
            "Escolas de dança que querem oferecer conteúdo diferenciado aos alunos",
            "Companhias de dança em preparação para temporadas",
            "Festivais, eventos e encontros do universo da dança",
            "Instituições de educação física com interesse em dança",
          ]}
        />

        <ServiceCta
          title="Vamos montar o seu evento?"
          text="Conte para a nossa equipe o formato, o público e a data — e receba uma proposta sob medida."
          ctaLabel="Solicitar proposta"
          ctaHref={whatsappUrl}
        />
      </main>
    </>
  );
}
