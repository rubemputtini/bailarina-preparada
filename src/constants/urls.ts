export const BASE_URL = "https://bailarinapreparada.com.br";
export const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
export const HANDLE = "bailarinapreparada";
export const WHATSAPP_PHONE = "351914793862";
export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}`;

export function whatsappLink(message: string) {
    return `${WHATSAPP_URL}&text=${encodeURIComponent(message)}`;
}
export const CHECKOUT_CBP_URL = "https://blog.bailarinapreparada.com.br/checkoutcbp/";

export const SOCIALS = [
    { name: "Instagram", href: `https://instagram.com/${HANDLE}` },
    { name: "YouTube", href: `https://youtube.com/@${HANDLE}` },
];