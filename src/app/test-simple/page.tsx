export default function TestSimplePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Simple Test Page</h1>
      <p>If you can see this, the basic routing is working.</p>
      <div style={{ marginTop: '20px' }}>
        <a
          href="/admin/login"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Go to Admin Login
        </a>
      </div>
    </div>
  );
}
