'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Logo from '@/components/ui/Logo';
import { DarkModeToggle } from '@/components/animations/InteractiveElements';

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Custom Software Development',
        href: '/services/custom-software-development',
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-app-development',
      },
      {
        label: 'Web Application Development',
        href: '/services/web-application-development',
      },
      { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { label: 'QA & Testing', href: '/services/qa-testing' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Product Strategy', href: '/services/product-strategy' },
      { label: 'Google Ads Marketing', href: '/services/google-ads-marketing' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Our Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleMouseEnter = (itemLabel: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo width={48} height={48} />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() =>
                  item.children && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 transition-colors duration-200 hover:text-primary"
                  onClick={() => {
                    // Close dropdown when clicking the main link
                    setActiveDropdown(null);
                  }}
                >
                  {item.label}
                  {item.children && (
                    <FiChevronDown className="ml-1 inline-block h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute left-0 top-full z-50 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Dark Mode */}
          <div className="hidden items-center space-x-4 md:flex">
            <DarkModeToggle />
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-primary"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-primary px-6 py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
                  onClick={closeMenu}
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
