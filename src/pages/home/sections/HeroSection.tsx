import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #403b4d -20%, #302539 80%)",
      }}
    >
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#b89fd4" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#b89fd4" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-20">
        <span className="inline-block text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          Preparação Física para a Dança
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Seu corpo pronto{" "}
          <span
            className="block"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(90deg, #b89fd4, #ffffff)",
              backgroundClip: "text",
            }}
          >
            para dançar mais
          </span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Treinos, aulas e consultorias desenvolvidas especialmente para bailarinas
          e dançarinas que querem evoluir com segurança e performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicos"
            className="bg-brand-accent text-brand-deep px-8 py-4 rounded-full font-semibold text-base hover:bg-white transition-colors duration-200"
          >
            Conhecer os serviços
          </a>
          <a
            href="#sobre"
            className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-base hover:border-white/70 hover:bg-white/5 transition-all duration-200"
          >
            Sobre a Bailarina Preparada
          </a>
        </div>

        <a
          href="#servicos"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
