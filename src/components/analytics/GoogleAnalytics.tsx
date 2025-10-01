'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
      const searchString = searchParams.toString();
      const pagePath = searchString ? `${pathname}?${searchString}` : pathname;
      
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pagePath,
      });
    }
  }, [pathname, searchParams]);

  if (!process.env.NEXT_PUBLIC_GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManager() {
  if (!process.env.NEXT_PUBLIC_GTM_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export function GTMNoScript() {
  if (!process.env.NEXT_PUBLIC_GTM_ID) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Analytics event tracking functions
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};

export const trackContactFormSubmission = (formType: string) => {
  trackEvent('form_submit', 'contact', formType);
};

export const trackServiceInquiry = (serviceName: string) => {
  trackEvent('service_inquiry', 'services', serviceName);
};

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'downloads', fileName);
};

export const trackExternalLink = (url: string) => {
  trackEvent('click', 'external_link', url);
};
