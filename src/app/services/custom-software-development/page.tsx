import { Metadata } from 'next';
import Image from 'next/image';
import {
  FiCheck,
  FiArrowRight,
  FiCode,
  FiShield,
  FiUsers,
  FiClock,
} from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Tailored Business Solutions',
  description:
    'Expert custom software development services. We build scalable, secure, and innovative software solutions tailored to your business needs. Get a free consultation today.',
  keywords: [
    'custom software development',
    'business software solutions',
    'enterprise software development',
    'custom application development',
    'software consulting services',
  ],
};

export default function CustomSoftwareDevelopmentPage() {
  const features = [
    'Scalable architecture design',
    'Cross-platform compatibility',
    'Advanced security features',
    'Real-time data processing',
    'API integration and development',
    'Database design and optimization',
    'Cloud deployment and management',
    'Ongoing maintenance and support',
  ];

  const benefits = [
    {
      icon: FiCode,
      title: 'Tailored Solutions',
      description:
        'Custom-built software designed specifically for your business processes and requirements.',
    },
    {
      icon: FiShield,
      title: 'Enhanced Security',
      description:
        'Robust security measures and compliance with industry standards.',
    },
    {
      icon: FiUsers,
      title: 'User-Friendly Interface',
      description:
        'Intuitive and responsive user interfaces that enhance productivity.',
    },
    {
      icon: FiClock,
      title: 'Faster Time to Market',
      description:
        'Agile development methodology ensures faster delivery and deployment.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description:
        'We conduct detailed analysis of your business requirements and technical specifications.',
    },
    {
      step: '02',
      title: 'System Design',
      description:
        'Our architects design a scalable and maintainable system architecture.',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'We develop your custom software using agile methodology with regular updates.',
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description:
        'Comprehensive testing followed by smooth deployment and go-live support.',
    },
  ];

  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Vue.js', 'Angular', 'TypeScript'],
    },
    { category: 'Backend', techs: ['Node.js', 'Python', 'Java', 'C#'] },
    {
      category: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    },
    { category: 'Cloud', techs: ['AWS', 'Azure', 'Google Cloud', 'Docker'] },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                Custom Software Development
              </h1>
              <p className="text-xl leading-relaxed text-gray-200">
                Transform your business with custom software solutions built
                specifically for your unique requirements. We deliver scalable,
                secure, and innovative applications that drive growth and
                efficiency.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="secondary" size="lg" href="/contact">
                  Get Free Quote
                  <FiArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" href="/case-studies">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/custom-software-hero.jpg"
                alt="Custom Software Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              What We Deliver
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our custom software development services cover every aspect of
              your application lifecycle, from conception to deployment and
              maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <FiCheck className="text-white" size={14} />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Why Choose Custom Software?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Custom software solutions offer unique advantages over
              off-the-shelf products, providing better control, scalability, and
              alignment with your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-secondary">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Our Development Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We follow a proven methodology that ensures quality, transparency,
              and timely delivery of your custom software solution.
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
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Technologies We Use
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We work with cutting-edge technologies and frameworks to build
              scalable, secure, and high-performance custom software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="mb-6 text-xl font-semibold text-secondary">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group rounded-xl bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span className="font-medium text-gray-700 transition-colors duration-300 group-hover:text-primary">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Pricing & Engagement Models
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We offer flexible pricing models to suit different project
              requirements and budget constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Small Project',
                description: 'Perfect for MVPs and small business applications',
                features: [
                  'Up to 3 months development',
                  'Basic features and functionality',
                  'Standard UI/UX design',
                  'Basic testing and deployment',
                ],
                price: '$5,000 - $15,000',
                popular: false,
              },
              {
                title: 'Medium Project',
                description:
                  'Ideal for growing businesses and complex applications',
                features: [
                  '3-6 months development',
                  'Advanced features and integrations',
                  'Custom UI/UX design',
                  'Comprehensive testing and QA',
                ],
                price: '$15,000 - $50,000',
                popular: true,
              },
              {
                title: 'Enterprise Project',
                description:
                  'For large organizations and mission-critical systems',
                features: [
                  '6+ months development',
                  'Enterprise-grade features',
                  'Premium UI/UX design',
                  'Full testing suite and support',
                ],
                price: '$50,000+',
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`card text-center ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-4 text-2xl font-semibold text-secondary">
                  {plan.title}
                </h3>
                <p className="mb-6 text-gray-600">{plan.description}</p>
                <div className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
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
                <div className="mb-6 text-3xl font-bold text-primary">
                  {plan.price}
                </div>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  href="/contact"
                >
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
              Ready to Build Your Custom Software?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200">
              Let's discuss your requirements and create a custom software
              solution that perfectly fits your business needs.
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
