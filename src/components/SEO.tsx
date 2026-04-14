import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const BASE_URL = 'https://devmetasol.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'DevMetaSol';

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KingTechSol',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'Leading digital transformation and software development company delivering enterprise-grade solutions.',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+92-330-4527519',
    contactType: 'customer service',
    email: 'infomeernaib47@gmail.com',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/devmetasol',
    'https://twitter.com/devmetasol',
    'https://www.facebook.com/devmetasol',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
  },
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// Generate breadcrumb schema
const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

export default function SEO({
  title,
  description,
  keywords = 'software development, digital transformation, cloud services, web development, mobile app development, KingTechSol, enterprise solutions, IT consulting',
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData,
  breadcrumbs,
}: SEOProps) {
  const fullTitle = title.includes('KingTechSol') ? title : `${title} | KingTechSol`;
  const canonical = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : undefined;

  // Combine all structured data
  const allStructuredData = [
    organizationSchema,
    websiteSchema,
    ...(breadcrumbs ? [generateBreadcrumbSchema(breadcrumbs)] : []),
    ...(structuredData ? [structuredData] : []),
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="KingTechSol" />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || BASE_URL} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical || BASE_URL} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@devmetasol" />
      <meta name="twitter:creator" content="@devmetasol" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e3a5f" />
      <meta name="msapplication-TileColor" content="#1e3a5f" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data / JSON-LD */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

// Pre-configured SEO for specific page types
export const ServiceSEO = ({
  serviceName,
  description,
  canonicalUrl,
}: {
  serviceName: string;
  description: string;
  canonicalUrl: string;
}) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'DevMetaSol',
      url: BASE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: serviceName,
  };

  return (
    <SEO
      title={`${serviceName} Services`}
      description={description}
      canonicalUrl={canonicalUrl}
      ogType="service"
      structuredData={serviceSchema}
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: serviceName, url: canonicalUrl },
      ]}
    />
  );
};

// FAQ Page SEO with FAQ Schema
export const FAQPageSEO = ({
  title,
  description,
  canonicalUrl,
  faqs,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  faqs: Array<{ question: string; answer: string }>;
}) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <SEO
      title={title}
      description={description}
      canonicalUrl={canonicalUrl}
      structuredData={faqSchema}
    />
  );
};

// Blog/Article SEO
export const ArticleSEO = ({
  title,
  description,
  canonicalUrl,
  publishedDate,
  modifiedDate,
  authorName,
  ogImage,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  publishedDate: string;
  modifiedDate?: string;
  authorName: string;
  ogImage?: string;
}) => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DevMetaSol',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${canonicalUrl}`,
    },
  };

  return (
    <SEO
      title={title}
      description={description}
      canonicalUrl={canonicalUrl}
      ogType="article"
      ogImage={ogImage}
      structuredData={articleSchema}
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: title, url: canonicalUrl },
      ]}
    />
  );
};
