import { type LucideIcon, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_BASE } from "@/constants/urls";

interface ServicePageProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; description: string }[];
  forWho: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export function ServicePage({
  icon: Icon,
  tag,
  title,
  subtitle,
  description,
  features,
  forWho,
  ctaLabel,
  whatsappMessage,
}: ServicePageProps) {
  const whatsappUrl = WHATSAPP_BASE + encodeURIComponent(whatsappMessage);

  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[75vh] flex items-end pb-24 pt-44 px-6 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #4a4358 0%, #302539 60%)" }}
      >
        <div
          className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full opacity-15 blur-[80px] pointer-events-none"
          style={{ background: "#b89fd4" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "#b89fd4" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-10 transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            Voltar para o início
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(184,159,212,0.15)", border: "1px solid rgba(184,159,212,0.3)" }}
                >
                  <Icon size={18} className="text-brand-accent" />
                </div>
                <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase">
                  {tag}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
                {title}
              </h1>
              <p className="text-white/50 text-lg max-w-xl leading-relaxed">{description}</p>
            </div>

            <div
              className="md:w-72 rounded-2xl p-6 flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(184,159,212,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-brand-accent text-xs font-semibold tracking-widest uppercase mb-2">
                Pronta para começar?
              </p>
              <p className="text-white font-semibold text-base mb-5 leading-snug">{subtitle}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-accent text-brand-deep w-full py-3 rounded-xl font-semibold text-sm hover:bg-white transition-colors duration-200"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES — lista editorial com linhas ─────────────────── */}
      <section className="px-6 relative" style={{ background: "#302539" }}>
        <div className="max-w-5xl mx-auto">

          {/* Cabeçalho da seção */}
          <div className="flex items-center gap-6 py-20">
            <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
              O que está incluído
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(184,159,212,0.2)" }} />
            <span className="text-white/20 text-sm font-light">{features.length} recursos</span>
          </div>

          {/* Lista */}
          <div>
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group grid grid-cols-[4rem_1fr_1fr] gap-8 items-start py-8 border-t border-white/[0.06] hover:border-brand-accent/30 transition-colors duration-300 last:border-b last:border-white/[0.06]"
              >
                {/* Número decorativo */}
                <span
                  className="text-5xl font-black leading-none select-none transition-colors duration-300"
                  style={{ color: "rgba(184,159,212,0.12)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Título */}
                <p className="text-white font-semibold text-lg pt-1 group-hover:text-brand-accent transition-colors duration-300">
                  {f.title}
                </p>

                {/* Descrição */}
                <p className="text-white/45 text-sm leading-relaxed pt-1">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="pb-20" />
        </div>
      </section>

      {/* ─── PARA QUEM É — tipografia grande + tag cloud ───────────── */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "#403b4d" }}
      >
        {/* Texto decorativo de fundo */}
        <span
          className="absolute -bottom-8 -right-4 text-[160px] md:text-[220px] font-black leading-none select-none pointer-events-none whitespace-nowrap"
          style={{ color: "rgba(184,159,212,0.04)" }}
        >
          VOCÊ
        </span>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-14">
            <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
              Para quem é
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              Este programa foi feito para você se…
            </h2>
          </div>

          {/* Itens como linhas tipográficas grandes */}
          <div className="space-y-0">
            {forWho.map((item, i) => (
              <div
                key={item}
                className="flex items-baseline gap-5 py-5 border-b border-white/[0.08] group"
              >
                <span className="text-brand-accent text-xs font-bold tracking-widest flex-shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/60 text-lg md:text-xl font-light leading-snug group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL — full-bleed dramático ─────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#302539" }}
      >
        {/* Faixa de gradiente diagonal */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(184,159,212,0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

            {/* Texto */}
            <div className="flex-1">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
                style={{ background: "rgba(184,159,212,0.12)", border: "1px solid rgba(184,159,212,0.25)" }}
              >
                <Icon size={26} className="text-brand-accent" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Pronta para dar<br />
                <span
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(90deg, #b89fd4, #ffffff)",
                    backgroundClip: "text",
                  }}
                >
                  o próximo passo?
                </span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-md">
                Tire suas dúvidas pelo WhatsApp e dê o primeiro passo para transformar
                sua performance na dança.
              </p>
            </div>

            {/* Botões empilhados verticalmente */}
            <div className="flex flex-col gap-4 md:min-w-[260px]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-brand-accent text-brand-deep px-7 py-5 rounded-2xl font-semibold text-base hover:bg-white transition-colors duration-200 group"
              >
                <span>{ctaLabel}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/"
                className="flex items-center justify-between gap-3 px-7 py-5 rounded-2xl font-medium text-base text-white/50 hover:text-white transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span>Ver outros serviços</span>
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
