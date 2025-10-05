'use client';

import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function TestLoginPage() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('admin@zmsithub.com');
  const [password, setPassword] = useState('admin123');
  const [result, setResult] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('Attempting login...');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setResult(`Login failed: ${result.error}`);
      } else if (result?.ok) {
        setResult('Login successful!');
      } else {
        setResult('Login failed: Unknown error');
      }
    } catch (error) {
      setResult(`Login error: ${error}`);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setResult('Logged out successfully');
  };

  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Authentication Test</h1>

      {/* Session Status */}
      <div className="mb-6 rounded-lg bg-gray-100 p-4">
        <h2 className="mb-2 text-xl font-semibold">Session Status</h2>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Authenticated:</strong> {session ? 'Yes' : 'No'}
        </p>
        {session && (
          <>
            <p>
              <strong>Email:</strong> {session.user?.email}
            </p>
            <p>
              <strong>Name:</strong> {session.user?.name}
            </p>
            <p>
              <strong>Role:</strong> {session.user?.role}
            </p>
          </>
        )}
      </div>

      {/* Login Form */}
      <div className="mb-6 rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">Test Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Test Login
          </button>
        </form>
      </div>

      {/* Logout Button */}
      {session && (
        <div className="mb-6 rounded-lg border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Logout</h2>
          <button
            onClick={handleLogout}
            className="w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="rounded-lg bg-yellow-100 p-4">
          <strong>Result:</strong> {result}
        </div>
      )}

      {/* Test Links */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Test Links</h2>
        <div className="space-x-4">
          <a href="/admin/login" className="text-blue-600 underline">
            Admin Login
          </a>
          <a href="/admin/dashboard" className="text-blue-600 underline">
            Admin Dashboard
          </a>
          <a href="/admin" className="text-blue-600 underline">
            Admin Root
          </a>
        </div>
      </div>
    </div>
  );
}
