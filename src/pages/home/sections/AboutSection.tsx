import isabellaSrc from "../../../app/assets/isabella.jpg";

const stats = [
  { value: "+500", label: "bailarinas preparadas" },
  { value: "#1", label: "plataforma do Brasil" },
  { value: "4", label: "serviços especializados" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6 overflow-hidden" style={{ background: "#403b4d" }}>
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative flex justify-center md:justify-start">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
              style={{ background: "#b89fd4" }}
            />
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
                style={{ background: "rgba(184,159,212,0.15)", border: "1px solid rgba(184,159,212,0.2)" }}
              />
              <img
                src={isabellaSrc}
                alt="Isabella Souza — fundadora da Bailarina Preparada"
                className="relative z-10 w-full rounded-3xl object-cover aspect-square"
                style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.4)" }}
              />
              <div
                className="absolute -bottom-5 -right-5 z-20 rounded-2xl px-5 py-3 flex flex-col items-center"
                style={{ background: "#302539", border: "1px solid rgba(184,159,212,0.25)" }}
              >
                <span className="text-2xl font-bold text-white">+500</span>
                <span className="text-brand-accent text-xs font-medium text-center leading-tight">bailarinas<br />preparadas</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-brand-accent text-sm font-semibold tracking-[0.2em] uppercase">
              Quem somos
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2">
              Isabella Souza
            </h2>
            <p className="text-brand-accent text-base font-medium mb-6">
              Fundadora da Bailarina Preparada
            </p>

            <div className="space-y-4 text-white/60 text-base leading-relaxed mb-10">
              <p>
                A <strong className="text-white font-semibold">Bailarina Preparada</strong> nasceu da
                missão de transformar a forma como bailarinas e dançarinas se preparam fisicamente —
                com ciência, inteligência e respeito às especificidades da dança.
              </p>
              <p>
                Isabella Souza é profissional de educação física especializada em preparação física
                para a dança, criadora da maior plataforma online do Brasil voltada para bailarinas.
                Com uma metodologia própria, ela une musculação, mobilidade e condicionamento ao
                universo artístico da dança.
              </p>
              <p>
                Hoje, a Bailarina Preparada atende bailarinas, dançarinas e profissionais da educação
                física em todo o país, com programas online, consultorias e formações especializadas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: "rgba(48,37,57,0.6)", border: "1px solid rgba(184,159,212,0.15)" }}
                >
                  <span className="block text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-white/50 text-xs leading-tight mt-1 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
