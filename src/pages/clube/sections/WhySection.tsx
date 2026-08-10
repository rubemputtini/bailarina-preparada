const reasons = [
  {
    title: "Treino específico para ballet",
    text: "Nenhum exercício genérico ou aleatório. Cada movimento foi pensado para o que você executa na aula e no palco.",
  },
  {
    title: "Conteúdo novo todo mês",
    text: "Seu corpo não evolui repetindo o mesmo estímulo. Por isso o Clube se renova continuamente, e você segue progredindo.",
  },
  {
    title: "Método com resultado comprovado",
    text: "Quem treina com o Clube sente a diferença na força, na mobilidade e na segurança para dançar.",
  },
];

export function WhySection() {
  return (
    <section className="bg-deep py-28">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">O próximo nível</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              Por que fazer parte do <em className="text-accent">Clube</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50">
              As aulas técnicas não preparam o seu corpo para o palco. Você
              precisa ir além.
            </p>
          </div>
          <div className="space-y-10 lg:pt-4">
            {reasons.map((item, i) => (
              <div key={item.title} className="flex gap-6 border-t border-white/[0.08] pt-8 first:border-t-0 first:pt-0">
                <span className="font-display text-lg text-accent">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/50">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
