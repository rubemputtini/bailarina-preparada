import { cn } from "@/lib/utils";

// Brilho decorativo desfocado usado nos fundos escuros.
// Posição, tamanho e opacidade ficam a cargo de quem usa, via className.
export function GlowBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
    />
  );
}
