import { ClipboardCheck, LineChart, Star, CalendarCheck } from "lucide-react";
import appDemo from "@/assets/app-demo.mp4";

const features = [
  {
    icon: ClipboardCheck,
    title: "Registre seus treinos",
    text: "Marque cada treino concluído e acompanhe todo o seu histórico.",
  },
  {
    icon: Star,
    title: "Ganhe pontos",
    text: "Cada treino registrado soma pontos que podem ser trocados por recompensas. Sua constância vira conquista.",
  },
  {
    icon: CalendarCheck,
    title: "Plano de rotina sempre à mão",
    text: "Seu planejamento personalizado, organizado dentro do app, com links direcionados para as aulas do dia.",
  },
  {
    icon: LineChart,
    title: "Acompanhe suas avaliações",
    text: "Veja sua evolução através das avaliações físicas.",
  },
];

export function AppSection() {
  return (
    <section className="bg-ink py-28">
      <div className="container-site">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Aplicativo próprio</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              A sua constância mora no <em className="text-accent">app</em>{" "}
              Bailarina Preparada
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/50">
              O Clube tem um aplicativo exclusivo, feito para transformar o
              treino em hábito: tudo o que você precisa para evoluir, em um só
              lugar.
            </p>

            <div className="mt-12 space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <f.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-white">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[300px]">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-deep p-2">
              <div className="flex aspect-[9/19] items-center justify-center overflow-hidden rounded-[2rem] bg-black">
                <video
                  src={appDemo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
