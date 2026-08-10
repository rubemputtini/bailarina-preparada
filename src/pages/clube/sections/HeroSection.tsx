import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { CHECKOUT_CBP_URL } from "@/constants/urls";
import heroSrc from "@/assets/hero-clube.jpeg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-deep">
      <GlowBlob className="-top-32 right-[-15%] h-[620px] w-[620px] opacity-[0.14]" />

      <div className="container-site pt-36 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="eyebrow text-accent">Clube Bailarina Preparada · Assinatura</p>

            <h1 className="mt-8 font-display text-5xl leading-[1.08] text-white md:text-6xl">
              Quem treina com o Clube volta para a aula{" "}
              <em className="text-accent">diferente</em>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/55">
              Os melhores treinos de condicionamento físico para bailarinas:
              desenvolva sua <em className="text-accent">força</em>, sua{" "}
              <em className="text-accent">flexibilidade</em>, seu{" "}
              <em className="text-accent">equilíbrio</em> e todas as capacidades
              físicas necessárias para a sua evolução no ballet!
            </p>

            <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button href={CHECKOUT_CBP_URL} target="_blank" rel="noopener noreferrer">
                Quero entrar no Clube
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="flex items-center gap-2 text-sm text-white/40">
                <ShieldCheck size={15} className="shrink-0 text-accent" />
                Garantia incondicional de 7 dias
              </p>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-sm animate-fade-up lg:block">
            <div className="absolute -top-5 -right-5 h-full w-full border border-accent/50" />
            {/* O bloco só aparece em lg+, mas display:none não impede o download da foto — o
                <picture> garante que o mobile receba apenas um pixel transparente */}
            <picture>
              <source media="(min-width: 1024px)" srcSet={heroSrc} />
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt="Isabella Souza, criadora do Clube Bailarina Preparada, em espacate"
                className="relative aspect-[4/5] w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
