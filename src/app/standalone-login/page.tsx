'use client';

import { useState } from 'react';

export default function StandaloneLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'admin@zmsithub.com' && password === 'admin123') {
      setMessage('Login successful! (This is just a test)');
    } else {
      setMessage('Invalid credentials. Try admin@zmsithub.com / admin123');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '24px',
              marginBottom: '20px',
              color: '#1f2937',
            }}
          >
            Standalone Login Test
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '14px',
                  color: '#374151',
                }}
              >
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '16px',
                }}
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '14px',
                  color: '#374151',
                }}
              >
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '16px',
                }}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Test Login
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: message.includes('successful')
                  ? '#d1fae5'
                  : '#fee2e2',
                color: message.includes('successful') ? '#065f46' : '#991b1b',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              {message}
            </div>
          )}

          <div
            style={{
              marginTop: '20px',
              textAlign: 'center',
              fontSize: '12px',
              color: '#6b7280',
            }}
          >
            <p>Test credentials: admin@zmsithub.com / admin123</p>
            <div style={{ marginTop: '10px' }}>
              <a
                href="/admin/login"
                style={{ color: '#3b82f6', textDecoration: 'underline' }}
              >
                Go to Real Admin Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
