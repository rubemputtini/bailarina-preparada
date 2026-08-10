import { AnimatedCheck, CHECK_STAGGER_MS } from "@/components/ui/AnimatedCheck";
import { useInView } from "@/hooks/useInView";

interface ServiceForWhoProps {
  title: string;
  items: string[];
  /** true = checks animados (como na página do Clube) no lugar dos números */
  checks?: boolean;
  /** Observação exibida abaixo da lista */
  footnote?: React.ReactNode;
}

export function ServiceForWho({ title, items, checks = false, footnote }: ServiceForWhoProps) {
  const [listRef, visible] = useInView<HTMLUListElement>();

  return (
    <section className="bg-deep py-28">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Para quem é</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              {title}
            </h2>
          </div>
          <ul ref={listRef} className="space-y-0 lg:pt-4">
            {items.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-6 border-b border-white/[0.08] py-6 first:border-t"
              >
                {checks ? (
                  <AnimatedCheck checked={visible} delayMs={i * CHECK_STAGGER_MS} dark />
                ) : (
                  <span className="font-display text-lg text-accent">0{i + 1}</span>
                )}
                <p className="leading-relaxed text-white/70">{item}</p>
              </li>
            ))}
            {footnote && (
              <li className="list-none py-6 text-sm leading-relaxed text-white/45">{footnote}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
