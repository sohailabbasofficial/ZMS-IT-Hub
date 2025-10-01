import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiSmartphone,
  FiCloud,
  FiShield,
  FiUsers,
  FiLayers,
  FiTarget,
} from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title:
    'Software Development Services | Custom Solutions & Digital Transformation',
  description:
    'Comprehensive software development services including custom applications, mobile apps, web solutions, cloud services, QA testing, and UI/UX design. Expert team delivering innovative solutions.',
  keywords: [
    'software development services',
    'custom software development',
    'mobile app development',
    'web application development',
    'cloud services',
    'QA testing services',
    'UI UX design services',
  ],
};

export default function ServicesPage() {
  const serviceIcons = [
    FiCode,
    FiSmartphone,
    FiLayers,
    FiCloud,
    FiShield,
    FiUsers,
    FiCode,
    FiTarget,
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'We analyze your requirements and create a detailed project plan.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description:
        'Our team designs user interfaces and creates interactive prototypes.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        'We build your solution using agile methodology with continuous testing.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description:
        'We deploy your solution and provide ongoing maintenance and support.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              Our Software Development Services
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              We offer comprehensive software development services to help your
              business thrive in the digital age. From custom applications to
              mobile apps and cloud solutions, we've got you covered.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our comprehensive suite of services covers every aspect of
              software development and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => {
              const IconComponent = serviceIcons[index];
              return (
                <div
                  key={service.slug}
                  className="card group transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                      <IconComponent
                        className="text-primary transition-colors duration-300 group-hover:text-white"
                        size={28}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
                  >
                    Learn More
                    <FiArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Our Development Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We follow a proven methodology that ensures quality, transparency,
              and timely delivery of your software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  <span className="text-xl font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-secondary">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Technologies We Use
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We work with cutting-edge technologies and frameworks to build
              scalable, secure, and high-performance applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {[
              'React',
              'Next.js',
              'Node.js',
              'Python',
              'Java',
              'C#',
              'AWS',
              'Azure',
              'Docker',
              'Kubernetes',
              'MongoDB',
              'PostgreSQL',
              'iOS',
              'Android',
              'Flutter',
              'React Native',
              'TypeScript',
              'GraphQL',
            ].map((tech, index) => (
              <div key={index} className="group text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 transition-all duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-xs font-bold text-primary transition-colors duration-300 group-hover:text-white">
                    {tech}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-primary">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary lg:text-4xl">
                Why Choose Our Services?
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                We combine technical expertise with business acumen to deliver
                solutions that drive real results for your business.
              </p>
              <div className="space-y-6">
                {[
                  'Expert team with 5+ years of experience',
                  'Agile development methodology',
                  '24/7 support and maintenance',
                  'Competitive pricing and transparent billing',
                  'Proven track record of successful projects',
                  'Modern tech stack and best practices',
                  'Scalable and maintainable code',
                  'Comprehensive testing and quality assurance',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <FiCheck className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services-hero.jpg"
                alt="Software Development Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Models Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Flexible Engagement Models
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We offer flexible engagement models to suit different project
              requirements and budget constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Fixed Price',
                description:
                  'Perfect for well-defined projects with clear requirements.',
                features: [
                  'Fixed timeline and budget',
                  'Clear deliverables',
                  'No scope creep',
                  'Ideal for small to medium projects',
                ],
                price: 'Starting from $5,000',
              },
              {
                title: 'Time & Material',
                description:
                  'Flexible model for evolving projects and ongoing development.',
                features: [
                  'Pay for actual work done',
                  'Flexible scope changes',
                  'Regular billing cycles',
                  'Ideal for long-term projects',
                ],
                price: 'Starting from $25/hour',
              },
              {
                title: 'Dedicated Team',
                description:
                  'Exclusive team working on your project full-time.',
                features: [
                  'Dedicated resources',
                  'Full-time commitment',
                  'Direct communication',
                  'Ideal for large projects',
                ],
                price: 'Starting from $3,000/month',
              },
            ].map((model, index) => (
              <div key={index} className="card text-center">
                <h3 className="mb-4 text-2xl font-semibold text-secondary">
                  {model.title}
                </h3>
                <p className="mb-6 text-gray-600">{model.description}</p>
                <div className="mb-8 space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                        <FiCheck className="text-white" size={12} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-6 text-2xl font-bold text-primary">
                  {model.price}
                </div>
                <Button variant="outline" size="lg" href="/contact">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200">
              Let's discuss your requirements and create a solution that drives
              your business forward. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" href="/contact">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" href="/case-studies">
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
