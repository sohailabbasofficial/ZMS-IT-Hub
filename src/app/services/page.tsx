import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCheck, FiCode, FiSmartphone, FiCloud, FiShield, FiUsers, FiLayers } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Software Development Services | Custom Solutions & Digital Transformation',
  description: 'Comprehensive software development services including custom applications, mobile apps, web solutions, cloud services, QA testing, and UI/UX design. Expert team delivering innovative solutions.',
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
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our team designs user interfaces and creates interactive prototypes.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodology with continuous testing.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Software Development Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We offer comprehensive software development services to help your business 
              thrive in the digital age. From custom applications to mobile apps and 
              cloud solutions, we've got you covered.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of software 
              development and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => {
              const IconComponent = serviceIcons[index];
              return (
                <div key={service.slug} className="card group hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                      <IconComponent className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary font-medium hover:text-primary-dark transition-colors duration-200 inline-flex items-center"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures quality, transparency, 
              and timely delivery of your software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies and frameworks to build 
              scalable, secure, and high-performance applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Next.js', 'Node.js', 'Python', 'Java', 'C#',
              'AWS', 'Azure', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
              'iOS', 'Android', 'Flutter', 'React Native', 'TypeScript', 'GraphQL',
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="text-sm font-semibold">{tech}</span>
                </div>
                <span className="text-sm text-gray-600 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
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
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer flexible engagement models to suit different project requirements 
              and budget constraints.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fixed Price',
                description: 'Perfect for well-defined projects with clear requirements.',
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
                description: 'Flexible model for evolving projects and ongoing development.',
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
                description: 'Exclusive team working on your project full-time.',
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
                <h3 className="text-2xl font-semibold text-secondary mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <div className="space-y-3 mb-8">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <FiCheck className="text-white" size={12} />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary mb-6">{model.price}</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your requirements and create a solution that drives your business forward. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

