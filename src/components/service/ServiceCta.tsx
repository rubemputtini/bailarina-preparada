import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";

interface ServiceCtaProps {
  eyebrow?: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

export function ServiceCta({ eyebrow, title, text, ctaLabel, ctaHref }: ServiceCtaProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-32">
      <GlowBlob className="left-1/2 top-1/2 h-[400px] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />

      <div className="container-site relative max-w-4xl text-center">
        {eyebrow && <p className="eyebrow mb-8 text-white/40">{eyebrow}</p>}
        <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">{title}</h2>
        <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/50">{text}</p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Button href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Link
            to="/"
            className="text-sm text-white/35 underline-offset-4 transition-colors hover:text-white/70 hover:underline"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </section>
  );
}
