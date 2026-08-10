import { FlaskConical, Heart, Target } from "lucide-react";
import isabellaSrc from "@/assets/sobre-mim-isabella.jpg";

const pillars = [
  {
    icon: Target,
    title: "Especificidade",
    text: "Treinos desenhados para as demandas reais do ballet, não adaptações genéricas de academia.",
  },
  {
    icon: FlaskConical,
    title: "Ciência aplicada",
    text: "Fisiologia, periodização e prevenção de lesões traduzidas para a rotina de aulas, ensaios e palcos.",
  },
  {
    icon: Heart,
    title: "Acolhimento",
    text: "Uma linguagem que entende o universo artístico e respeita o corpo e a história de cada bailarina.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-paper py-28 text-deep">
      <div className="container-site">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-32">
            <div className="absolute -top-5 -left-5 h-full w-full rounded-none border border-accent" />
            <img
              src={isabellaSrc}
              alt="Isabella Souza, fundadora da Bailarina Preparada"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <p className="mt-6 text-sm text-deep/50">
              Isabella Souza — fundadora da Bailarina Preparada
            </p>
          </div>

          <div>
            <p className="eyebrow text-mid">Quem somos</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              A ciência do treino,
              <br />a sensibilidade da <em>dança</em>
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-deep/70">
              <p>
                A Bailarina Preparada nasceu para unir dois mundos que sempre
                caminharam separados: o treinamento físico baseado em ciência e
                a realidade de quem começa a dançar adulta.
              </p>
              <p>
                Fundada por Isabella Souza, profissional de educação física
                especializada em preparação física para a dança, construímos um
                método próprio, aplicado com mais de 500 bailarinas, que une
                treino de força, flexibilidade e condicionamento às exigências
                técnicas do ballet clássico.
              </p>
              <p>
                Hoje, a Bailarina Preparada é a plataforma de referência no
                Brasil no seu nicho, atendendo bailarinas adultas, professores
                de dança e profissionais de educação física que desejam atuar
                como preparadores físicos.
              </p>
            </div>

            <div className="mt-12 space-y-8 border-t border-deep/10 pt-10">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent text-mid">
                    <p.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-deep/60">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
