'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FiArrowRight,
  FiCheck,
  FiUsers,
  FiCode,
  FiSmartphone,
  FiCloud,
  FiShield,
} from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { motion } from 'framer-motion';
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  TiltOnHover,
  BounceIn,
  RotateOnHover,
} from '@/components/animations/FramerAnimations';
import {
  AnimatedCounter,
  TypingAnimation,
  GradientBackground,
} from '@/components/animations/AnimatedElements';
import { TestimonialCarousel } from '@/components/animations/TestimonialCarousel';

export default function HomePageContent() {
  return (
    <>
      {/* Hero Section */}
      <GradientBackground className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeInUp className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                <TypingAnimation
                  text="Transform Your Business with Cutting-Edge Software Solutions"
                  className="block"
                />
              </h1>
              <p className="text-xl leading-relaxed text-gray-200">
                ZMS IT Hub delivers custom software development, mobile apps,
                and digital transformation services that drive growth and
                innovation for businesses worldwide.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <ScaleOnHover>
                  <Button variant="secondary" size="lg" href="/contact">
                    Get Free Quote
                    <FiArrowRight className="ml-2" />
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button variant="outline" size="lg" href="/case-studies">
                    View Our Work
                  </Button>
                </ScaleOnHover>
              </div>
              <StaggerContainer className="flex items-center space-x-8 pt-8">
                <StaggerItem className="text-center">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-300">
                    Projects Delivered
                  </div>
                </StaggerItem>
                <StaggerItem className="text-center">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </StaggerItem>
                <StaggerItem className="text-center">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </StaggerItem>
              </StaggerContainer>
            </FadeInUp>
            <FadeInUp delay={0.3} className="relative">
              <TiltOnHover className="relative z-10">
                <Image
                  src="/images/hero.png"
                  alt="ZMS IT Hub - Software Development Solutions"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </TiltOnHover>
              <motion.div
                className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-accent/10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </FadeInUp>
          </div>
        </Container>
      </GradientBackground>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <FadeInUp className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We offer comprehensive software development services to help your
              business thrive in the digital age.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.slice(0, 6).map((service, index) => (
              <StaggerItem key={service.slug}>
                <TiltOnHover className="card group">
                  <div className="mb-4 flex items-center">
                    <BounceIn
                      delay={index * 0.1}
                      className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary"
                    >
                      {index === 0 && (
                        <RotateOnHover>
                          <FiCode
                            className="text-primary transition-colors duration-300 group-hover:text-white"
                            size={24}
                          />
                        </RotateOnHover>
                      )}
                      {index === 1 && (
                        <RotateOnHover>
                          <FiSmartphone
                            className="text-primary transition-colors duration-300 group-hover:text-white"
                            size={24}
                          />
                        </RotateOnHover>
                      )}
                      {index === 2 && (
                        <RotateOnHover>
                          <FiCode
                            className="text-primary transition-colors duration-300 group-hover:text-white"
                            size={24}
                          />
                        </RotateOnHover>
                      )}
                      {index === 3 && (
                        <RotateOnHover>
                          <FiCloud
                            className="text-primary transition-colors duration-300 group-hover:text-white"
                            size={24}
                          />
                        </RotateOnHover>
                      )}
                      {index === 4 && (
                        <RotateOnHover>
                          <FiShield
                            className="text-primary transition-colors duration-300 group-hover:text-white"
                            size={24}
                          />
                        </RotateOnHover>
                      )}
                      {index === 5 && (
                        <RotateOnHover>
                          <FiUsers
                            className="text-primary transition-colors duration-300 group-hover:text-white"
                            size={24}
                          />
                        </RotateOnHover>
                      )}
                    </BounceIn>
                    <h3 className="text-xl font-semibold text-secondary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ScaleOnHover>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
                    >
                      Learn More
                      <FiArrowRight className="ml-1" size={16} />
                    </Link>
                  </ScaleOnHover>
                </TiltOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeInUp>
              <h2 className="mb-6 text-3xl font-bold text-secondary lg:text-4xl">
                Why Choose ZMS IT Hub?
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                We combine technical expertise with business acumen to deliver
                solutions that drive real results.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <FiCheck className="text-primary" size={24} />,
                    title: 'Expert Team',
                    description:
                      'Our developers have 5+ years of experience in cutting-edge technologies.',
                  },
                  {
                    icon: <FiCheck className="text-primary" size={24} />,
                    title: 'Quality Assurance',
                    description:
                      'Rigorous testing and code review processes ensure bug-free delivery.',
                  },
                  {
                    icon: <FiCheck className="text-primary" size={24} />,
                    title: '24/7 Support',
                    description:
                      'Round-the-clock support to keep your applications running smoothly.',
                  },
                  {
                    icon: <FiCheck className="text-primary" size={24} />,
                    title: 'Competitive Pricing',
                    description:
                      'Transparent pricing with no hidden costs or surprise fees.',
                  },
                ].map((feature, index) => (
                  <FadeInUp key={index} delay={index * 0.1}>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-secondary">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="relative">
                <Image
                  src="/images/expert.png"
                  alt="Expert Team - Why Choose ZMS IT Hub"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-primary/10"></div>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <Container>
          <FadeInUp className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <TestimonialCarousel
              testimonials={[
                {
                  id: '1',
                  name: 'Sarah Johnson',
                  company: 'TechStart Inc.',
                  role: 'CEO',
                  content:
                    'ZMS IT Hub delivered an exceptional mobile app that exceeded our expectations. Their team was professional, responsive, and delivered on time.',
                  rating: 5,
                },
                {
                  id: '2',
                  name: 'Ahmed Hassan',
                  company: 'FinanceFlow',
                  role: 'CTO',
                  content:
                    'The custom software solution they built for us has streamlined our operations significantly. Highly recommended for any fintech project.',
                  rating: 5,
                },
                {
                  id: '3',
                  name: 'Maria Rodriguez',
                  company: 'HealthTech Solutions',
                  role: 'Product Manager',
                  content:
                    'Working with ZMS IT Hub was a game-changer for our healthcare platform. Their expertise in compliance and security is outstanding.',
                  rating: 5,
                },
              ]}
              className="mx-auto max-w-4xl"
            />
          </FadeInUp>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center">
            <FadeInUp>
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200">
                Let's discuss your project and see how we can help you achieve
                your digital transformation goals.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <ScaleOnHover>
                  <Button variant="secondary" size="lg" href="/contact">
                    Start Your Project
                    <FiArrowRight className="ml-2" />
                  </Button>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Button variant="outline" size="lg" href="/about">
                    Learn More About Us
                  </Button>
                </ScaleOnHover>
              </div>
            </FadeInUp>
          </div>
        </Container>
      </section>
    </>
  );
}
