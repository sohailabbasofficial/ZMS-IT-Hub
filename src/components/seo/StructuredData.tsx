import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Article' | 'Service';
  data: Record<string, string | number | boolean | object>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          logo: `${siteConfig.url}${siteConfig.logo}`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.contact.phone,
            contactType: 'customer service',
            email: siteConfig.contact.email,
            areaServed: 'PK',
            availableLanguage: 'English',
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'PK',
            addressLocality: siteConfig.contact.address,
          },
          sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.facebook,
            siteConfig.links.instagram,
          ],
          foundingDate: '2025',
          numberOfEmployees: '10',
          industry: 'Software Development',
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteConfig.url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        };

      case 'BreadcrumbList':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (
            data as unknown as Array<{ name: string; url: string }>
          ).map((item, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'Article':
        const articleData = data as unknown as {
          title: string;
          description: string;
          image: string;
          author?: { name: string };
          publishedAt: string;
          updatedAt: string;
          url: string;
        };
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleData.title,
          description: articleData.description,
          image: articleData.image,
          author: {
            '@type': 'Person',
            name: articleData.author?.name || siteConfig.name,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}${siteConfig.logo}`,
            },
          },
          datePublished: articleData.publishedAt,
          dateModified: articleData.updatedAt,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleData.url,
          },
        };

      case 'Service':
        const serviceData = data as unknown as {
          title: string;
          description: string;
          category: string;
        };
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceData.title,
          description: serviceData.description,
          provider: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
          serviceType: serviceData.category,
          areaServed: 'Worldwide',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Software Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: serviceData.title,
                  description: serviceData.description,
                },
              },
            ],
          },
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}): Metadata {
  const pageTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const pageUrl = url || siteConfig.url;
  const pageImage = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url: pageUrl,
      type: type as 'website' | 'article',
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [pageImage],
      creator: siteConfig.social.twitter,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
