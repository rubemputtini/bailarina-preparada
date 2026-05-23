import { Helmet } from "react-helmet-async";
import { BASE_URL, DEFAULT_IMAGE } from "@/constants/urls";

interface PageHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function PageHead({ title, description, path, ogImage = DEFAULT_IMAGE }: PageHeadProps) {
  const url = `${BASE_URL}${path}`;
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
    </Helmet>
  );
}
