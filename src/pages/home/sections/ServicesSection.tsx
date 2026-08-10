import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithPlaceholder } from "@/components/ui/ImageWithPlaceholder";
import { services } from "@/data/services";

export function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  }

  return (
    <section id="servicos" className="bg-deep py-28">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">O que oferecemos</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              Um método, seis <em className="text-accent">possibilidades</em>
            </h2>
            <p className="mt-6 leading-relaxed text-white/50">
              Da bailarina que está começando à escola que quer um diferencial:
              cada frente da Bailarina Preparada foi criada para um momento
              diferente da sua jornada.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Serviços anteriores"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Próximos serviços"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-14 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-2"
        >
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex w-[85%] shrink-0 snap-start flex-col bg-paper text-deep sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-paper-deep">
                <ImageWithPlaceholder
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full"
                />
              </div>

              <div className="flex flex-1 flex-col p-8 text-center">
                <p className="eyebrow text-mid">{service.kicker}</p>
                <h3 className="mt-4 font-display text-2xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-deep/60">
                  {service.description}
                </p>
                <Link
                  to={service.slug}
                  className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-deep/25 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep transition-colors duration-300 hover:border-deep hover:bg-deep hover:text-white"
                >
                  Saiba mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
