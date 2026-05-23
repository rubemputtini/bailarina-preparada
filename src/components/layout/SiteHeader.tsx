import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-deep/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="/logo.png" alt="Bailarina Preparada" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-lg text-white leading-tight">
            Bailarina<br />
            <span className="text-brand-accent font-light text-sm tracking-widest uppercase">Preparada</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-brand-accent text-brand-deep px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-200"
          >
            Quero começar
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brand-deep/98 backdrop-blur-sm border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-brand-accent text-brand-deep px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Quero começar
          </a>
        </div>
      )}
    </header>
  );
}
