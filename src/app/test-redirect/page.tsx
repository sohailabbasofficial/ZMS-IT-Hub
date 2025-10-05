'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TestRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    console.log('🔄 Test Redirect: Redirecting to admin login...');
    router.push('/admin/login');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">Testing redirect to admin login...</p>
      </div>
    </div>
  );
}
