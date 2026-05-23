import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_CBP_URL } from "@/constants/urls";

export function ClosingSection() {
  return (
    <section
      className="relative overflow-hidden py-32 px-6"
      style={{ background: "#403b4d" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#b89fd4" }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="text-5xl md:text-7xl font-black text-white leading-[1.0] mb-8"
          style={{ letterSpacing: "-0.02em" }}
        >
          A próxima história de transformação pode ser a sua.
        </h2>
        <p className="text-white/40 text-xl leading-relaxed mb-14 max-w-xl">
          Mais de 431 bailarinas já decidiram levar a sério a preparação do seu corpo. Você está esperando o quê?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button
            href={CHECKOUT_CBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 text-base rounded-2xl"
          >
            Quero fazer parte do Clube
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/35 hover:text-white/60 text-sm pt-4 transition-colors"
          >
            <ArrowLeft size={14} />
            Ver outros serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
