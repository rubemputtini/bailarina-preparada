import { Helmet } from "react-helmet-async";
import { BASE_URL, DEFAULT_IMAGE } from "@/constants/urls";

type JsonLdSchema = Record<string, unknown>;

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: JsonLdSchema | JsonLdSchema[];
}

export function PageHead({ title, description, path, ogImage = DEFAULT_IMAGE, jsonLd }: PageHeadProps) {
  const url = `${BASE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
