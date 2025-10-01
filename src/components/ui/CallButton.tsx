'use client';

import { useState, useEffect, useRef } from 'react';

interface CallOption {
  id: string;
  role: string;
  phone: string;
  icon: string;
}

const callOptions: CallOption[] = [
  {
    id: 'project-manager',
    role: 'Project Manager',
    phone: '+1 555 111 2222',
    icon: '👥',
  },
  {
    id: 'business-consultant',
    role: 'Business Consultant',
    phone: '+1 555 333 4444',
    icon: '💼',
  },
  {
    id: 'customer-support',
    role: 'Customer Support',
    phone: '+1 555 777 8888',
    icon: '🎧',
  },
];

export default function CallButton() {
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
            prev < callOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : callOptions.length - 1
          );
          break;
        case 'Enter':
        case ' ':
          if (focusedIndex >= 0) {
            event.preventDefault();
            handleCallClick(callOptions[focusedIndex]);
          }
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex]);

  const handleCallClick = (option: CallOption) => {
    const telUrl = `tel:${option.phone.replace(/\s/g, '')}`;

    try {
      window.location.href = telUrl;
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
      {/* Call Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className="group relative flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Open call contact options"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          {/* Phone Icon */}
          <svg
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          {/* Contact Options Menu */}
          {isOpen && (
            <div
              ref={menuRef}
              className="absolute bottom-16 left-0 w-64 rounded-xl bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-label="Call contact options"
            >
              <div className="space-y-2">
                {callOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleCallClick(option)}
                    className={`w-full rounded-lg p-3 text-left transition-colors duration-200 ${
                      focusedIndex === index
                        ? 'bg-blue-50 text-blue-700'
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
        <div className="fixed bottom-24 left-6 z-50 rounded-lg bg-gray-800 px-4 py-2 text-white shadow-lg">
          <div className="flex items-center space-x-2">
            <span>{toastMessage}</span>
            <button
              onClick={() => copyToClipboard(toastMessage)}
              className="text-blue-400 hover:text-blue-300"
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
