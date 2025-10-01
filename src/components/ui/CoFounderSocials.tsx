interface CoFounderSocialsProps {
  linkedinUrl?: string;
  email?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CoFounderSocials({
  linkedinUrl = 'https://linkedin.com/in/placeholder',
  email = 'ceo@example.com',
  size = 'md',
  className = ''
}: CoFounderSocialsProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {/* LinkedIn Icon */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 ${sizeClasses[size]}`}
        aria-label="Visit LinkedIn profile"
      >
        <svg
          className="transition-transform duration-200 hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
          width={iconSizes[size]}
          height={iconSizes[size]}
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      {/* Email Icon */}
      <a
        href={`mailto:${email}`}
        className={`flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary/30 ${sizeClasses[size]}`}
        aria-label={`Send email to ${email}`}
      >
        <svg
          className="transition-transform duration-200 hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width={iconSizes[size]}
          height={iconSizes[size]}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>
    </div>
  );
}
