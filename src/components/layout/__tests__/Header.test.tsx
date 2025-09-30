import { render, screen } from '@testing-library/react';
import { siteConfig } from '@/lib/config';
import Header from '@/components/layout/Header';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Header Component', () => {
  it('renders company logo and name', () => {
    render(<Header />);

    expect(screen.getByText('ZMS IT Hub')).toBeInTheDocument();
    expect(screen.getByText('Z')).toBeInTheDocument(); // Logo initial
  });

  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<Header />);

    expect(screen.getByText('Get Quote')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Header />);

    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Header />);

    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });
});
