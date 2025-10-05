'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function DebugAuthPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log('🔐 Debug Auth - Status:', status);
    console.log('🔐 Debug Auth - Session:', session);
  }, [session, status]);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Authentication Debug</h1>
      <div className="space-y-4">
        <div>
          <strong>Status:</strong>{' '}
          <span className="text-blue-600">{status}</span>
        </div>
        <div>
          <strong>Session Exists:</strong>{' '}
          <span className="text-blue-600">{session ? 'Yes' : 'No'}</span>
        </div>
        {session && (
          <>
            <div>
              <strong>User ID:</strong>{' '}
              <span className="text-green-600">{session.user?.id}</span>
            </div>
            <div>
              <strong>Email:</strong>{' '}
              <span className="text-green-600">{session.user?.email}</span>
            </div>
            <div>
              <strong>Name:</strong>{' '}
              <span className="text-green-600">{session.user?.name}</span>
            </div>
            <div>
              <strong>Role:</strong>{' '}
              <span className="text-green-600">{session.user?.role}</span>
            </div>
          </>
        )}
        <div className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">Test Links:</h2>
          <div className="space-x-4">
            <a href="/admin/login" className="text-blue-600 underline">
              Admin Login
            </a>
            <a href="/admin/dashboard" className="text-blue-600 underline">
              Admin Dashboard
            </a>
            <a href="/admin/test-auth" className="text-blue-600 underline">
              Test Auth
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
