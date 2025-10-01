import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft, FiCheck, FiArrowRight } from 'react-icons/fi';
import { siteConfig } from '@/lib/config';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { StructuredData } from '@/components/seo/StructuredData';

interface ServiceDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailsPageProps): Promise<Metadata> {
  const service = siteConfig.services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      type: 'website',
    },
  };
}

export default function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      '@type': 'Offer',
      price: service.pricing.startingFrom,
      priceCurrency: 'USD',
      description: service.pricing.description,
    },
  };

  return (
    <>
      <StructuredData type="Service" data={structuredData} />

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4">
        <Container>
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 transition-colors duration-200 hover:text-primary"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/services"
              className="text-gray-600 transition-colors duration-200 hover:text-primary"
            >
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-primary">{service.title}</span>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center text-white/80 transition-colors duration-200 hover:text-white"
            >
              <FiArrowLeft className="mr-2" size={16} />
              Back to Services
            </Link>
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              {service.title}
            </h1>
            <p className="mb-8 text-xl text-white/90">{service.description}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Get Free Quote
                <FiArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="#pricing">
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed">{service.content}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
                What We Offer
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Comprehensive features and capabilities for your{' '}
                {service.title.toLowerCase()} needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="card text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <FiCheck className="text-primary" size={20} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
                Why Choose Our {service.title}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Discover the key benefits that make our{' '}
                {service.title.toLowerCase()} services stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <FiCheck className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-secondary">
                      {benefit}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
                Our Process
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                A proven methodology that ensures successful project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
                Pricing
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Transparent pricing for our {service.title.toLowerCase()}{' '}
                services.
              </p>
            </div>

            <div className="card text-center">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-semibold text-secondary">
                  {service.pricing.model}
                </h3>
                <div className="mb-4 text-4xl font-bold text-primary">
                  {service.pricing.startingFrom}
                </div>
                <p className="text-gray-600">{service.pricing.description}</p>
              </div>
              <Button variant="primary" size="lg" href="/contact">
                Get Custom Quote
                <FiArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Let's discuss your {service.title.toLowerCase()} project and
              create something amazing together.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Start Your Project
                <FiArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/services">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
