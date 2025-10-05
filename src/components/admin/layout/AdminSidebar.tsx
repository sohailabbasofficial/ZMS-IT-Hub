'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { hasPermission } from '@/lib/permissions';
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiSettings,
  FiImage,
  FiMail,
  FiUser,
} from 'react-icons/fi';

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: FiHome,
    permission: 'VIEW_DASHBOARD',
  },
  {
    name: 'Team Members',
    href: '/admin/team',
    icon: FiUsers,
    permission: 'VIEW_CONTENT',
  },
  {
    name: 'User Management',
    href: '/admin/users',
    icon: FiUser,
    permission: 'MANAGE_USERS',
  },
  {
    name: 'Projects',
    href: '/admin/projects',
    icon: FiBriefcase,
    permission: 'VIEW_CONTENT',
  },
  {
    name: 'Blog Posts',
    href: '/admin/blog',
    icon: FiFileText,
    permission: 'VIEW_CONTENT',
  },
  {
    name: 'Contact Inquiries',
    href: '/admin/inquiries',
    icon: FiMail,
    permission: 'VIEW_CONTENT',
  },
  {
    name: 'File Manager',
    href: '/admin/files',
    icon: FiImage,
    permission: 'UPLOAD_FILES',
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: FiUser,
    permission: 'VIEW_USERS',
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: FiSettings,
    permission: 'MANAGE_SETTINGS',
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (!session?.user) return null;

  const userRole = session.user.role || 'viewer';

  return (
    <div className="flex w-64 flex-col bg-white shadow-lg">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <Link href="/admin/dashboard" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <span className="text-sm font-bold text-white">Z</span>
          </div>
          <span className="text-xl font-bold text-gray-900">ZMS Admin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          if (
            !hasPermission(
              userRole,
              item.permission as
                | 'VIEW_DASHBOARD'
                | 'VIEW_CONTENT'
                | 'MANAGE_USERS'
                | 'UPLOAD_FILES'
                | 'VIEW_USERS'
                | 'MANAGE_SETTINGS'
            )
          ) {
            return null;
          }

          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
            <FiUser className="h-4 w-4 text-gray-600" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">
              {session.user.name}
            </p>
            <p className="text-xs capitalize text-gray-500">
              {session.user.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
