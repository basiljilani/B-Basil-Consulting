import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = 'Basil Consulting',
  description = 'Transforming data into strategic assets for businesses worldwide. Expert consulting in data infrastructure, analytics, security, and custom solutions.',
  keywords = 'data consulting, business intelligence, data analytics, data infrastructure, security compliance',
  ogImage = '/lovable-uploads/fa66ce39-8dda-4305-81d7-181ca35ab9e6.png',
  ogType = 'website',
  canonical = '',
  noIndex = false,
}: SEOProps) => {
  const siteUrl = 'https://basilconsulting.net';
  const fullTitle = title === 'Basil Consulting' ? title : `${title} | Basil Consulting`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* No Index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Basil Consulting',
          url: siteUrl,
          logo: `${siteUrl}/lovable-uploads/fa66ce39-8dda-4305-81d7-181ca35ab9e6.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'info@basilconsulting.com',
            contactType: 'customer service'
          },
          sameAs: [
            'https://www.linkedin.com/company/basil-consulting-net'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
