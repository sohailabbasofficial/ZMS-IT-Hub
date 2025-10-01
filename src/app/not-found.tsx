import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Container>
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Page Not Found
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-primary-dark"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-primary bg-white px-6 py-3 text-base font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
