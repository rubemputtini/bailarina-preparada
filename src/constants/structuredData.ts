import { BASE_URL, SOCIALS } from "./urls";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bailarina Preparada",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: SOCIALS.map((social) => social.href),
};

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Isabella Souza",
    jobTitle: "Fundadora da Bailarina Preparada",
    url: BASE_URL,
    sameAs: SOCIALS.map((social) => social.href),
};

export function serviceSchema(name: string, description: string, path: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${BASE_URL}${path}`,
        areaServed: "BR",
        provider: {
            "@type": "Organization",
            name: "Bailarina Preparada",
        },
    };
}
