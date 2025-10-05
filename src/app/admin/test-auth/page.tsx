'use client';

import { useSession } from 'next-auth/react';

export default function TestAuthPage() {
  const { data: session, status } = useSession();

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Authentication Test</h1>
      <div className="space-y-4">
        <div>
          <strong>Status:</strong> {status}
        </div>
        <div>
          <strong>Session:</strong> {session ? 'Yes' : 'No'}
        </div>
        {session && (
          <>
            <div>
              <strong>User ID:</strong> {session.user?.id}
            </div>
            <div>
              <strong>Email:</strong> {session.user?.email}
            </div>
            <div>
              <strong>Name:</strong> {session.user?.name}
            </div>
            <div>
              <strong>Role:</strong> {session.user?.role}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

