import { SOCIALS } from "@/constants/urls";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10" style={{ background: "#302539" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Bailarina Preparada" className="h-7 w-7 rounded-full opacity-70" />
          <span className="text-white/40 text-sm">
            Bailarina Preparada © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 text-sm transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
