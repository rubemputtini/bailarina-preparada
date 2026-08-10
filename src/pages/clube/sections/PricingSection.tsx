import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHECKOUT_CBP_URL } from "@/constants/urls";

const included = [
  "Treinos novos todo mês",
  "Aulas ao vivo semanais de PBT e Solo",
  "Plano de rotina personalizado",
  "Avaliação física anual",
  "Professores convidados",
  "Comunidade exclusiva de alunas",
];

export function PricingSection() {
  return (
    <section className="bg-ink py-28">
      <div className="container-site max-w-4xl">
        <div className="text-center">
          <p className="eyebrow text-accent">Investimento</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
            Um ano inteiro de <em className="text-accent">evolução</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-white/50">
            Junte-se às bailarinas que já treinam com o Clube — por
            menos de R$ 4 por dia.
          </p>
        </div>

        <div className="mt-16 border border-accent/30 bg-deep p-10 md:p-14">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow text-white/40">Plano anual</p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-lg text-white/50">12x de</span>
                <span className="font-display text-6xl text-white md:text-7xl">R$ 113</span>
                <span className="font-display text-2xl text-white/60">,46</span>
              </div>
              <p className="mt-3 text-sm text-white/40">
                ou R$ 1.097 à vista no plano anual
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm text-white/50">
                <ShieldCheck size={15} className="shrink-0 text-accent" />
                Garantia incondicional de 7 dias — 100% do valor de volta
              </div>

              <Button
                href={CHECKOUT_CBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-full sm:w-auto"
              >
                Assinar o Clube
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="mt-4 text-xs text-white/30">
                Plataforma Hotmart · Pagamento 100% seguro
              </p>
            </div>

            <ul className="space-y-4 border-t border-white/[0.08] pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-12">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
