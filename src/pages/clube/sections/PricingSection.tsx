import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_CBP_URL } from "@/constants/urls";

const items = ["treinos globais", "aulas ao vivo", "professores convidados", "suporte exclusivo", "plano de rotina", "avaliação física"];

export function PricingSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden" style={{ background: "#302539" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(184,159,212,0.35), transparent)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(184,159,212,0.35), transparent)" }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-12">
          Investimento
        </p>

        <p className="text-white/50 text-lg mb-3">
          Por menos de R$4 por dia, você tem acesso a:
        </p>
        <div className="flex justify-center flex-wrap gap-2 mb-14">
          {items.map((item) => (
            <span
              key={item}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "rgba(184,159,212,0.1)", color: "rgba(184,159,212,0.7)", border: "1px solid rgba(184,159,212,0.15)" }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-white/40 text-2xl">12x de</span>
            <span className="text-7xl md:text-8xl font-black text-white tracking-tight">R$113</span>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-white/60">,46</span>
            </div>
          </div>
          <p className="text-white/30 mt-2 text-base">ou R$1.097 no plano anual</p>
        </div>

        <div className="flex items-center justify-center gap-3 my-10">
          <div className="flex-1 max-w-24 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <ShieldCheck size={15} className="text-brand-accent" />
            Garantia incondicional de 7 dias
          </div>
          <div className="flex-1 max-w-24 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>

        <Button
          href={CHECKOUT_CBP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 text-lg rounded-2xl mx-auto"
        >
          Começar agora
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-white/20 text-xs mt-4">Plataforma Hotmart · Pagamento 100% seguro</p>
      </div>
    </section>
  );
}
