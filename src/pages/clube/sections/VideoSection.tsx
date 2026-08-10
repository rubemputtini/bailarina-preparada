import { YOUTUBE_ID } from "@/data/clube";

export function VideoSection() {
  return (
    <section className="bg-deep py-24">
      <div className="container-site max-w-4xl">
        <p className="eyebrow text-center text-white/30">Conheça o Clube por dentro</p>
        <div className="mt-10 aspect-video overflow-hidden border border-white/[0.08]">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="Clube Bailarina Preparada"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
