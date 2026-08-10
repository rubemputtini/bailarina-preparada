import { ArrowRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { serviceSchema } from "@/constants/structuredData";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceForWho } from "@/components/service/ServiceForWho";
import { ServiceCta } from "@/components/service/ServiceCta";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { formacaoTestimonials } from "@/data/formacao";
import { BASE_URL, whatsappLink } from "@/constants/urls";
import cardBpPro from "@/assets/card-bp-pro.jpg";

const listaEsperaUrl = whatsappLink(
  "Olá! Quero entrar na lista de espera da Turma 3 da Formação. Pode me cadastrar?"
);

const professorDancaUrl = whatsappLink(
  "Olá! Sou professor(a) de dança e tenho interesse na Formação. Como funciona para o meu caso?"
);

// TODO: textos provisórios — a Isabella ainda vai definir a descrição de cada módulo
const modules = [
  { title: "Força", text: "Treinamento de força aplicado às demandas do ballet e da dança." },
  { title: "Flexibilidade", text: "Desenvolvimento de flexibilidade e mobilidade para a dança." },
  { title: "Cardio", text: "Condicionamento cardiorrespiratório para a performance." },
  { title: "Periodização", text: "Como organizar o treinamento ao longo da temporada." },
  { title: "Avaliação física", text: "Avaliação e acompanhamento da evolução da bailarina." },
  { title: "Carreira", text: "Como atuar e se posicionar no mercado da dança." },
];

const differentials = [
  { label: "Metodologia exclusiva", value: "Método aplicado com mais de 500 bailarinas" },
  { label: "Teoria e prática", value: "Do conceito à sala de aula" },
  { label: "Certificação", value: "Certificado de conclusão incluso" },
  { label: "Materiais de apoio", value: "Protocolos e planilhas prontos para usar" },
];

export default function FormacaoPage() {
  return (
    <>
      <PageHead
        title="Formação em Preparação Física para a Dança — Bailarina Preparada"
        description="Formação profissional certificada para profissionais de Educação Física que querem atuar com preparação física para bailarinas."
        path="/formacao"
        ogImage={`${BASE_URL}${cardBpPro}`}
        jsonLd={serviceSchema(
          "Formação em Preparação Física para a Dança",
          "Formação profissional certificada para profissionais de Educação Física que querem atuar com preparação física para bailarinas.",
          "/formacao"
        )}
      />
      <main>
        <ServiceHero
          breadcrumb="Formações"
          kicker="Formação profissional · Certificada"
          title={
            <>
              Forme-se na metodologia que é <em className="text-accent">referência</em> no Brasil
            </>
          }
          description="Capacitação completa para profissionais que desejam atuar com preparação física para a dança — unindo conhecimento científico à realidade do universo artístico."
          ctaLabel="Quero estar na próxima turma"
          ctaHref={listaEsperaUrl}
          note="Fale com a equipe e receba os detalhes da próxima turma"
        />

        <section className="bg-paper py-28 text-deep">
          <div className="container-site">
            <p className="eyebrow text-mid">Conteúdo</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              O que você vai <em>aprender</em>
            </h2>

            <div className="mt-16 grid gap-px border border-deep/10 bg-deep/10 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((item, i) => (
                <div key={item.title} className="bg-paper p-10">
                  <p className="eyebrow text-accent">Módulo 0{i + 1}</p>
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-deep/60">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-deep/10 pt-14">
              <p className="eyebrow text-mid">Diferenciais</p>
              <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {differentials.map((d) => (
                  <div key={d.label}>
                    <p className="text-xs uppercase tracking-[0.2em] text-deep/40">{d.label}</p>
                    <p className="mt-3 font-display text-xl leading-snug">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceForWho
          title="Para quem quer se destacar em um nicho de alto valor"
          items={[
            "Profissionais de Educação Física que querem se especializar",
            "Profissionais que já atendem bailarinas e buscam mais embasamento",
            "Personal trainers que desejam ampliar sua atuação para a dança",
            "Recém-formados em busca de diferenciação no mercado",
          ]}
          footnote={
            <>
              A formação é exclusiva para estudantes ou profissionais de
              Educação Física. Se você é professor de dança,{" "}
              <a
                href={professorDancaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 transition-colors hover:text-accent-soft"
              >
                entre em contato pelo WhatsApp
              </a>
              .
            </>
          }
        />

        <section className="bg-paper py-28 text-deep">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-mid">Rede Bailarina Preparada</p>
              <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                Seja um dos profissionais formados e faça parte da{" "}
                <em>rede</em> Bailarina Preparada
              </h2>
            </div>

            {formacaoTestimonials.length > 0 ? (
              <div className="mt-16 grid gap-px border border-deep/10 bg-deep/10 md:grid-cols-2">
                {formacaoTestimonials.map((t) => (
                  <TestimonialCard key={t.name} {...t} role="Profissional formada" />
                ))}
              </div>
            ) : (
              <div className="mt-12 flex justify-center">
                <Button variant="ink" href={listaEsperaUrl} target="_blank" rel="noopener noreferrer">
                  Quero estar na próxima turma
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}
          </div>
        </section>

        <ServiceCta
          eyebrow="Turma 2 encerrada"
          title="Garanta o seu lugar na Turma 3"
          text="Cadastre-se para entrar na lista de espera. Previsão de abertura: 01/09/2026."
          ctaLabel="Entrar na lista de espera"
          ctaHref={listaEsperaUrl}
        />
      </main>
    </>
  );
}
