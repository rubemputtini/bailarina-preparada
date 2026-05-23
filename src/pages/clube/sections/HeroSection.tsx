import { ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_CBP_URL } from "@/constants/urls";

const avatarInitials = ["AM", "LC", "FO", "JS", "BR"];

const stats = [
  { n: "+431", label: "bailarinas" },
  { n: "+130", label: "treinos gravados" },
  { n: "+19", label: "módulos" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(155deg, #4a4358 0%, #302539 65%)" }}
    >
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full opacity-10 blur-[120px] pointer-events-none" style={{ background: "#b89fd4" }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none" style={{ background: "#b89fd4" }} />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm mb-16 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Voltar
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {avatarInitials.map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-brand-deep" style={{ borderColor: "#302539", background: "#b89fd4" }}>{i}</div>
            ))}
          </div>
          <p className="text-white/40 text-sm">
            <span className="text-white font-semibold">+431 bailarinas</span> já fazem parte do Clube
          </p>
        </div>

        <h1 className="text-5xl md:text-[5.5rem] font-black text-white leading-[0.95] mb-8 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
          Dançarinas que treinam com o Clube voltam para a aula diferentes.
        </h1>

        <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-xl">
          Todo mês: novos treinos de força, flexibilidade e cardio específicos para o ballet, aulas ao vivo de PBT e Solo, e um plano de rotina personalizado para a sua realidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button
            href={CHECKOUT_CBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-5 text-base rounded-2xl"
          >
            Quero entrar no Clube
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center gap-2 text-white/30 text-sm pt-4">
            <ShieldCheck size={14} className="text-brand-accent flex-shrink-0" />
            Garantia incondicional de 7 dias
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.07] grid grid-cols-3 gap-8 max-w-lg">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-white">{s.n}</p>
              <p className="text-white/30 text-xs mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
