'use client';

import { useState, useEffect, useRef } from 'react';

interface ContactOption {
  id: string;
  role: string;
  phone: string;
  icon: string;
}

const contactOptions: ContactOption[] = [
  {
    id: 'project-manager',
    role: 'Project Manager',
    phone: '+923270651157',
    icon: '👥',
  },
  {
    id: 'business-consultant',
    role: 'Business Consultant',
    phone: '03000677362',
    icon: '💼',
  },
  {
    id: 'customer-support',
    role: 'Customer Support',
    phone: '+923709472900',
    icon: '🎧',
  },
];

export default function WhatsAppContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prev) =>
            prev < contactOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : contactOptions.length - 1
          );
          break;
        case 'Enter':
        case ' ':
          if (focusedIndex >= 0) {
            event.preventDefault();
            handleContactClick(contactOptions[focusedIndex]);
          }
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex]);

  const handleContactClick = (option: ContactOption) => {
    const message = `Hello — I'm contacting ${option.role} about your services.`;
    const encodedMessage = encodeURIComponent(message);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${option.phone.replace(/\s/g, '')}&text=${encodedMessage}`
      : `https://wa.me/${option.phone.replace(/\s/g, '')}?text=${encodedMessage}`;

    try {
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      // Fallback: show toast with phone number
      setToastMessage(option.phone);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }

    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage('Phone number copied!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className="group relative flex h-10 w-10 animate-pulse items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 sm:h-14 sm:w-14"
          aria-label="Open WhatsApp contact options"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {/* WhatsApp Icon */}
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Contact Options Menu */}
          {isOpen && (
            <div
              ref={menuRef}
              className="absolute bottom-16 right-0 w-64 rounded-xl bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-label="WhatsApp contact options"
            >
              <div className="space-y-2">
                {contactOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleContactClick(option)}
                    className={`w-full rounded-lg p-3 text-left transition-colors duration-200 ${
                      focusedIndex === index
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    role="menuitem"
                    tabIndex={-1}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg" aria-hidden="true">
                        {option.icon}
                      </span>
                      <div>
                        <div className="font-medium">{option.role}</div>
                        <div className="text-sm text-gray-500">
                          {option.phone}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-24 right-6 z-50 rounded-lg bg-gray-800 px-4 py-2 text-white shadow-lg">
          <div className="flex items-center space-x-2">
            <span>{toastMessage}</span>
            <button
              onClick={() => copyToClipboard(toastMessage)}
              className="text-green-400 hover:text-green-300"
              aria-label="Copy phone number"
            >
              📋
            </button>
          </div>
        </div>
      )}
    </>
  );
}
