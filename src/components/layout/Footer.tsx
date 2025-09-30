import Link from 'next/link';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiGithub,
} from 'react-icons/fi';
import { siteConfig } from '@/lib/config';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo textColor="text-white" />
            <p className="text-sm leading-relaxed text-gray-300">
              Leading software development company specializing in custom
              solutions, mobile apps, web applications, and digital
              transformation services.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors duration-200 hover:text-primary"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors duration-200 hover:text-primary"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors duration-200 hover:text-primary"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors duration-200 hover:text-primary"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 transition-colors duration-200 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 transition-colors duration-200 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-300 transition-colors duration-200 hover:text-primary"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 transition-colors duration-200 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 transition-colors duration-200 hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 transition-colors duration-200 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <FiMail className="mt-1 flex-shrink-0 text-primary" size={16} />
                <div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gray-300 transition-colors duration-200 hover:text-primary"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiPhone
                  className="mt-1 flex-shrink-0 text-primary"
                  size={16}
                />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-gray-300 transition-colors duration-200 hover:text-primary"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin
                  className="mt-1 flex-shrink-0 text-primary"
                  size={16}
                />
                <div>
                  <span className="text-gray-300">
                    {siteConfig.contact.address}
                  </span>
                  <br />
                  <span className="text-xs text-gray-400">
                    Timezone: {siteConfig.contact.timezone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} ZMS IT Hub. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 transition-colors duration-200 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 transition-colors duration-200 hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-gray-400 transition-colors duration-200 hover:text-primary"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
