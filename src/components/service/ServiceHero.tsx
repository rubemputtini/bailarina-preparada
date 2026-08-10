import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";

interface ServiceHeroProps {
  breadcrumb: string;
  kicker: string;
  title: ReactNode;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
}

export function ServiceHero({ breadcrumb, kicker, title, description, ctaLabel, ctaHref, note }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-deep pt-44 pb-24">
      <GlowBlob className="-top-40 right-[-10%] h-[520px] w-[520px] opacity-[0.14]" />

      <div className="container-site relative animate-fade-up">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link to="/" className="transition-colors hover:text-accent">
            Início
          </Link>
          <span>/</span>
          <span className="text-white/60">{breadcrumb}</span>
        </nav>

        <p className="eyebrow mt-12 text-accent">{kicker}</p>
        <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.08] text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/55">{description}</p>

        {ctaLabel && ctaHref && (
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Button>
            {note && <p className="text-sm text-white/40">{note}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
