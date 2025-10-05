'use client';

import { useEffect, useState } from 'react';

export default function DebugLoginPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Debug Login Page</h1>
      <div className="space-y-4">
        <div>
          <strong>Page Status:</strong>{' '}
          <span className="text-green-600">Rendering</span>
        </div>
        <div>
          <strong>Client Side:</strong>{' '}
          <span className="text-green-600">Working</span>
        </div>
        <div>
          <strong>React Hydration:</strong>{' '}
          <span className="text-green-600">Complete</span>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Test Links:</h2>
          <div className="space-x-4">
            <a href="/admin/login" className="text-blue-600 underline">
              Admin Login
            </a>
            <a href="/admin/login/" className="text-blue-600 underline">
              Admin Login (with slash)
            </a>
            <a href="/admin" className="text-blue-600 underline">
              Admin Root
            </a>
            <a href="/test-login" className="text-blue-600 underline">
              Test Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
