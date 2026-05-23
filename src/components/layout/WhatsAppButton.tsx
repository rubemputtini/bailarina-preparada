import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/urls";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-xl shadow-black/30 hover:scale-105 active:scale-95 transition-transform duration-200 group"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Falar no WhatsApp
      </span>
    </a>
  );
}
