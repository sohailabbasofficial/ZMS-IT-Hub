'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginTestPage() {
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
        setResult('Login successful! Redirecting...');
        window.location.href = '/admin/dashboard';
      } else {
        setResult('Login failed: Unknown error');
      }
    } catch (error) {
      setResult(`Login error: ${error}`);
    }
  };

  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="mb-4 text-2xl font-bold">Login Test</h1>
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
      {result && (
        <div className="mt-4 rounded bg-gray-100 p-3">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}

