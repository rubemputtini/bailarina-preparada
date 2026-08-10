import { insideItems } from "@/data/clube";

export function InsideSection() {
  return (
    <section className="bg-paper py-28 text-deep">
      <div className="container-site max-w-5xl">
        <p className="eyebrow text-mid">O que tem por dentro</p>
        <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight md:text-5xl">
          Tudo o que a sua rotina de treino <em>precisa</em>
        </h2>

        <div className="mt-16">
          {insideItems.map((item) => (
            <div
              key={item.title}
              className="grid items-baseline gap-3 border-t border-deep/10 py-9 last:border-b md:grid-cols-[180px_1fr_1fr] md:gap-12"
            >
              <span className="eyebrow text-accent">{item.label}</span>
              <h3 className="font-display text-2xl leading-snug">{item.title}</h3>
              <p className="text-sm leading-relaxed text-deep/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
