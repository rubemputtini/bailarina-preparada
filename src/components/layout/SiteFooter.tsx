import { Link } from "react-router-dom";
import { SOCIALS, WHATSAPP_URL } from "@/constants/urls";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="container-site py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Bailarina Preparada — Início">
              <img src="/footer-logo.webp" alt="Bailarina Preparada" className="h-12 w-auto" />
            </Link>
          </div>

          <div>
            <p className="eyebrow text-white/30">Serviços</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.slug}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/30">Empresa</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/#sobre" className="text-sm text-white/60 transition-colors hover:text-accent">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className="text-sm text-white/60 transition-colors hover:text-accent">
                  Nossos serviços
                </Link>
              </li>
              <li>
                <Link to="/#contato" className="text-sm text-white/60 transition-colors hover:text-accent">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/30">Contato</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-center text-xs text-white/30 md:text-left">
            © {new Date().getFullYear()} Bailarina Preparada. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/termos" className="text-xs text-white/30 transition-colors hover:text-accent">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="text-xs text-white/30 transition-colors hover:text-accent">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
