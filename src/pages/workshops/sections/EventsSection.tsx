import { eventos, type Evento } from "@/data/eventos";
import { ImageWithPlaceholder } from "@/components/ui/ImageWithPlaceholder";

// Enquanto não houver eventos cadastrados em src/data/eventos.ts, o carrossel
// mostra cards de exemplo indicando onde entram a foto, o local e a data.
const placeholders: Evento[] = Array.from({ length: 4 }, () => ({
  image: "",
  local: "Local do evento",
  date: "Data",
}));

export function EventsSection() {
  const items = eventos.length > 0 ? eventos : placeholders;

  // A animação translada -50%, então a trilha precisa de um número par de cópias
  // e largura suficiente para não deixar faixa em branco em telas largas.
  const copies = 2 * Math.ceil(6 / items.length);
  const track = Array.from({ length: copies }, () => items).flat();

  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-ink py-16">
      <p className="eyebrow text-center text-white/30">Eventos já realizados</p>
      <div className="mt-10 flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
        {track.map((evento, i) => (
          <figure key={i} className="w-80 shrink-0" aria-hidden={i >= items.length}>
            <ImageWithPlaceholder
              src={evento.image || undefined}
              alt={`Evento em ${evento.local}`}
              className="aspect-[4/3] w-full"
              placeholderClassName="border border-white/[0.08] bg-deep-soft"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-display text-lg text-white">{evento.local}</span>
              <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-white/40">
                {evento.date}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
