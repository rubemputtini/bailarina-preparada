import { cn } from "@/lib/utils";

interface ImageWithPlaceholderProps {
  src?: string;
  alt: string;
  /** Classes aplicadas tanto à imagem quanto ao bloco de placeholder. */
  className?: string;
  /** Classes aplicadas apenas ao bloco de placeholder (ex.: cor de fundo, borda). */
  placeholderClassName?: string;
}

// Exibe a foto quando cadastrada; sem foto, mostra a marca d'água da logo.
export function ImageWithPlaceholder({ src, alt, className, placeholderClassName }: ImageWithPlaceholderProps) {
  if (src) {
    return <img src={src} alt={alt} className={cn("object-cover", className)} />;
  }
  return (
    <div className={cn("flex items-center justify-center", className, placeholderClassName)}>
      <img src="/logo-mark.png" alt="" className="h-16 w-16 opacity-40" />
    </div>
  );
}
