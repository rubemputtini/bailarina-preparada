import React, { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { SOCIALS, whatsappLink } from "@/constants/urls";

const socialIcons: Record<string, React.ReactElement> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

export function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Olá! Me chamo ${name}. ${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-deep py-28">
      <GlowBlob className="-bottom-48 left-[-10%] h-[480px] w-[480px] opacity-[0.12]" />

      <div className="container-site relative">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Contato</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              Vamos conversar sobre a sua <em className="text-accent">evolução</em>?
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/50">
              Conte para a nossa equipe onde você está na dança e o que quer
              alcançar. Respondemos direto no WhatsApp.
            </p>

            <div className="mt-12 border-t border-white/[0.08] pt-8">
              <p className="eyebrow text-white/30">Redes sociais</p>
              <div className="mt-5 flex gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    {socialIcons[s.name]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 border border-white/[0.08] p-8 md:p-10">
            <div>
              <label htmlFor="contact-name" className="eyebrow text-white/40">
                Seu nome
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar?"
                className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 text-white placeholder:text-white/25 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="eyebrow text-white/40">
                Sua mensagem
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex.: quero saber mais sobre o Clube..."
                className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 text-white placeholder:text-white/25 focus:border-accent focus:outline-none"
              />
            </div>
            <Button type="submit" className="mt-2">
              Enviar pelo WhatsApp
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-center text-xs text-white/30">
              Você será direcionada ao WhatsApp da nossa equipe.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
