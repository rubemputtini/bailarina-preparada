import { AnimatedCheck, CHECK_STAGGER_MS } from "@/components/ui/AnimatedCheck";
import { useInView } from "@/hooks/useInView";
import { painPoints } from "@/data/clube";
import { cn } from "@/lib/utils";

export function PainPointsSection() {
  const [listRef, checked] = useInView<HTMLDivElement>();

  return (
    <section className="bg-paper py-28 text-deep">
      <div className="container-site max-w-4xl">
        <p className="eyebrow text-mid">Você se identifica?</p>

        <div ref={listRef} className="mt-12">
          {painPoints.map((point, i) => (
            <div
              key={point}
              className="flex items-center gap-8 border-b border-deep/10 py-8"
            >
              <AnimatedCheck checked={checked} delayMs={i * CHECK_STAGGER_MS} />
              <p
                style={{ transitionDelay: `${i * CHECK_STAGGER_MS}ms` }}
                className={cn(
                  "font-display text-2xl leading-snug transition-colors duration-700 md:text-3xl",
                  checked ? "text-deep/85" : "text-deep/35"
                )}
              >
                {point}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{ transitionDelay: `${painPoints.length * CHECK_STAGGER_MS + 200}ms` }}
          className={cn(
            "mt-16 max-w-3xl font-display text-3xl leading-snug transition-all duration-700 md:text-4xl",
            checked ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          Se você se reconheceu em qualquer uma dessas frases, o Clube foi
          criado <em className="text-mid">exatamente</em> para você.
        </p>
      </div>
    </section>
  );
}
