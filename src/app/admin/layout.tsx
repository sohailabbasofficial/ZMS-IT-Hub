'use client';

import { SessionProvider } from 'next-auth/react';
import AdminLayout from '@/components/admin/layout/AdminLayout';
import ErrorBoundary from '@/components/ErrorBoundary';
import { usePathname } from 'next/navigation';

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage =
    pathname === '/admin/login' ||
    pathname === '/admin/login/' ||
    pathname === '/admin/login-basic';

  // For login pages, render without any wrapper
  if (isLoginPage) {
    return (
      <ErrorBoundary>
        <SessionProvider>{children}</SessionProvider>
      </ErrorBoundary>
    );
  }

  // For other admin pages, use the admin layout
  return (
    <ErrorBoundary>
      <SessionProvider>
        <AdminLayout>{children}</AdminLayout>
      </SessionProvider>
    </ErrorBoundary>
  );
}
