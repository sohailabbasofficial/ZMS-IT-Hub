import { Metadata } from 'next';
import HomePageContent from '@/components/pages/HomePageContent';

export const metadata: Metadata = {
  title:
    'Leading Software Development Company | Custom Solutions & Digital Transformation',
  description:
    "ZMS IT Hub delivers cutting-edge software development services including custom applications, mobile apps, web solutions, and digital transformation. Partner with Pakistan's leading tech company.",
  keywords: [
    'software development',
    'custom software',
    'mobile app development',
    'web development',
    'digital transformation',
    'ZMS IT Hub',
  ],
};

export default function HomePage() {
  return <HomePageContent />;
}
