import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO } from '@/utils/seo-utils';

export function SEOHead({ 
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = 'website',
  structuredData = null
}) {
  const fullTitle = title === DEFAULT_SEO.title ? title : `${title} | OrthoBoost`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="OrthoBoost" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}