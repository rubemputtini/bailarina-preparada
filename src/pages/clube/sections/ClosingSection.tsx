import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { CHECKOUT_CBP_URL } from "@/constants/urls";

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <GlowBlob className="left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />

      <div className="container-site relative max-w-4xl text-center">
        <h2 className="font-display text-5xl leading-[1.05] text-white md:text-7xl">
          A próxima história pode ser a <em className="text-accent">sua</em>
        </h2>
        <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/50">
          Mais de 500 bailarinas já decidiram levar a preparação do corpo a
          sério. Falta você.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Button href={CHECKOUT_CBP_URL} target="_blank" rel="noopener noreferrer">
            Quero fazer parte do Clube
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Link
            to="/"
            className="text-sm text-white/35 underline-offset-4 transition-colors hover:text-white/70 hover:underline"
          >
            Conhecer os outros serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
