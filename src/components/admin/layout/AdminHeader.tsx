'use client';

import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { FiLogOut, FiUser, FiBell } from 'react-icons/fi';

export default function AdminHeader() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const getPageTitle = () => {
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    switch (lastSegment) {
      case 'dashboard':
        return 'Dashboard';
      case 'team':
        return 'Team Members';
      case 'projects':
        return 'Projects';
      case 'blog':
        return 'Blog Posts';
      case 'inquiries':
        return 'Contact Inquiries';
      case 'files':
        return 'File Manager';
      case 'users':
        return 'Users';
      case 'settings':
        return 'Settings';
      case 'new':
        return 'Add New';
      default:
        return 'Admin Panel';
    }
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/admin/login' });
  };

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Page Title */}
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            {getPageTitle()}
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 transition-colors hover:text-gray-600">
            <FiBell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Menu */}
          <div className="relative flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                <FiUser className="h-4 w-4 text-gray-600" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">
                  {session?.user?.name}
                </p>
                <p className="text-xs capitalize text-gray-500">
                  {session?.user?.role}
                </p>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              <FiLogOut className="h-4 w-4" />
              <span className="hidden md:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
