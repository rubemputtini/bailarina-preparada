import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import heroSrc from "@/assets/hero-home.jpeg";

const keywords = ["Força", "Flexibilidade", "Prevenção de lesões", "Performance"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-deep">
      {/* Mobile: a foto aparece quase inteira, ancorada na base, atrás de um véu leve */}
      <div className="absolute inset-x-0 bottom-0 md:hidden">
        <div className="relative left-1/2 w-[150%] -translate-x-1/2">
          <img src={heroSrc} alt="" className="w-full" />
        </div>
        <div className="absolute inset-0 bg-deep/45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep to-transparent" />
      </div>

      {/* Foto de fundo ancorada à direita em telas médias+ */}
      <div className="absolute inset-0 left-[42%] hidden md:block">
        <img
          src={heroSrc}
          alt=""
          className="h-full w-full object-cover object-[60%_20%]"
        />
        {/* Véus que fundem a foto ao fundo roxo — o texto parece parte da imagem */}
        <div className="absolute inset-0 bg-deep/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep from-5% via-deep/45 via-40% to-deep/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep/70 to-transparent" />
      </div>

      <div className="container-site relative z-10 pt-36 pb-16 md:pb-20">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow text-accent">Preparação física para a dança</p>

          <h1 className="mt-8 font-display text-5xl leading-[1.08] text-white md:text-6xl lg:text-7xl">
            Seu corpo <em className="text-accent">preparado</em> para dançar mais e melhor
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
            Treinos desenvolvidos especialmente para bailarinas adultas que
            querem evoluir com segurança.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:w-max lg:flex-nowrap">
            <Button to="/#servicos">
              Conhecer os serviços
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" to="/#sobre">
              Sobre a Bailarina Preparada
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2">
            {keywords.map((word, i) => (
              <span key={word} className="flex items-center gap-4">
                <span className="font-display text-lg italic text-white/45">{word}</span>
                {i < keywords.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
