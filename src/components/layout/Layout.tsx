import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import WhatsAppContactButton from '@/components/ui/WhatsAppContactButton';
import CallButton from '@/components/ui/CallButton';
import { siteConfig } from '@/lib/config';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noindex?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  image,
  url,
  noindex = false,
}: LayoutProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = url || siteConfig.url;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={pageUrl} />

        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.name} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:site" content={siteConfig.social.twitter} />

        {/* Additional Meta Tags */}
        <meta name="author" content={siteConfig.name} />
        <meta name="theme-color" content="#751A1A" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallButton />
        <WhatsAppContactButton />
      </div>
    </>
  );
}
