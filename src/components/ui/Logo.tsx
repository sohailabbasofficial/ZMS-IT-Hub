import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  href?: string;
  textColor?: string;
}

export default function Logo({
  className = '',
  width = 32,
  height = 32,
  showText = true,
  href = '/',
  textColor = 'text-secondary',
}: LogoProps) {
  const logoElement = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.name} Logo`}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {showText && (
        <span className={`text-xl font-bold ${textColor}`}>ZMS IT Hub</span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="transition-opacity duration-200 hover:opacity-80"
      >
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}
