import { YOUTUBE_ID } from "@/data/clube";

export function VideoSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#302539" }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-white/25 text-xs font-bold tracking-[0.3em] uppercase text-center mb-10">
          Conheça o Clube
        </p>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="Clube da Bailarina Preparada"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
