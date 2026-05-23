import { Users, Dumbbell, GraduationCap, Mic, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const mainService = {
  icon: Users,
  tag: "Carro-chefe",
  title: "Clube da Bailarina Preparada",
  description:
    "Programa online completo com aulas gravadas e ao vivo, novos treinos e conteúdos todo mês. Plano anual com acesso ilimitado a uma comunidade exclusiva de bailarinas e dançarinas.",
  highlights: [
    "Aulas gravadas disponíveis 24h",
    "Treinos ao vivo mensais",
    "Novos conteúdos todo mês",
    "Comunidade exclusiva",
  ],
  cta: "Quero fazer parte do Clube",
  href: "/clube",
};

const otherServices = [
  {
    icon: Dumbbell,
    title: "Consultoria Online de Musculação",
    description:
      "Planejamento de treino personalizado com foco em preparação física para a dança. Evolua com segurança e inteligência.",
    cta: "Saiba mais",
    href: "/consultoria",
  },
  {
    icon: GraduationCap,
    title: "Formação de Profissionais",
    description:
      "Capacitação para educadores físicos que desejam atuar com preparação física para dança e ballet.",
    cta: "Saiba mais",
    href: "/formacao",
  },
  {
    icon: Mic,
    title: "Workshops e Palestras",
    description:
      "Eventos presenciais e online sobre performance, saúde e preparação física para dançarinas e profissionais da área.",
    cta: "Saiba mais",
    href: "/workshops",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 px-6" style={{ background: "#302539" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Soluções completas para bailarinas, dançarinas e profissionais que
            querem ir além.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden"
          style={{ background: "#403b4d" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "#b89fd4" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 bg-brand-accent/20 text-brand-accent text-xs font-semibold px-3 py-1 rounded-full">
                  <Star size={12} fill="currentColor" /> {mainService.tag}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                  <mainService.icon size={28} className="text-brand-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {mainService.title}
                </h3>
              </div>

              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {mainService.description}
              </p>

              <Link
                to={mainService.href}
                className="inline-flex items-center gap-2 bg-brand-accent text-brand-deep px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                {mainService.cta}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col gap-3 md:min-w-60">
              {mainService.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-accent/30 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-brand-accent block" />
                  </span>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {otherServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-8 flex flex-col group hover:ring-1 hover:ring-brand-accent/40 transition-all duration-300"
              style={{ background: "#403b4d" }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-6">
                <service.icon size={22} className="text-brand-accent" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>

              <p className="text-white/55 text-sm leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              <Link
                to={service.href}
                className="inline-flex items-center gap-1.5 text-brand-accent text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                {service.cta} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
