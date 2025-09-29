import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCheck, FiStar, FiUsers, FiCode, FiSmartphone, FiCloud, FiShield } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Leading Software Development Company | Custom Solutions & Digital Transformation',
  description: 'ZMS IT Hub delivers cutting-edge software development services including custom applications, mobile apps, web solutions, and digital transformation. Partner with Pakistan\'s leading tech company.',
  keywords: [
    'software development Pakistan',
    'custom software development',
    'mobile app development',
    'web application development',
    'digital transformation',
    'ZMS IT Hub',
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with{' '}
                <span className="text-accent">Cutting-Edge</span> Software Solutions
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                ZMS IT Hub delivers custom software development, mobile apps, and digital 
                transformation services that drive growth and innovation for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" href="/contact">
                  Get Free Quote
                  <FiArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" href="/case-studies">
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="Software Development Dashboard"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent/10 rounded-2xl"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive software development services to help your business 
              thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 6).map((service, index) => (
              <div key={service.slug} className="card group hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                    {index === 0 && <FiCode className="text-primary group-hover:text-white transition-colors duration-300" size={24} />}
                    {index === 1 && <FiSmartphone className="text-primary group-hover:text-white transition-colors duration-300" size={24} />}
                    {index === 2 && <FiCode className="text-primary group-hover:text-white transition-colors duration-300" size={24} />}
                    {index === 3 && <FiCloud className="text-primary group-hover:text-white transition-colors duration-300" size={24} />}
                    {index === 4 && <FiShield className="text-primary group-hover:text-white transition-colors duration-300" size={24} />}
                    {index === 5 && <FiUsers className="text-primary group-hover:text-white transition-colors duration-300" size={24} />}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-primary font-medium hover:text-primary-dark transition-colors duration-200 inline-flex items-center"
                >
                  Learn More
                  <FiArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Why Choose ZMS IT Hub?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver 
                solutions that drive real results.
              </p>
              <div className="space-y-6">
                {[
                  'Expert team with 5+ years of experience',
                  'Agile development methodology',
                  '24/7 support and maintenance',
                  'Competitive pricing and transparent billing',
                  'Proven track record of successful projects',
                  'Modern tech stack and best practices',
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
                src="/images/team-working.jpg"
                alt="ZMS IT Hub Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have deep expertise across various industries and understand 
              the unique challenges each sector faces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.industries.map((industry) => (
              <div key={industry.slug} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                    {industry.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'TechStart Inc.',
                role: 'CEO',
                content: 'ZMS IT Hub delivered an exceptional mobile app that exceeded our expectations. Their team was professional, responsive, and delivered on time.',
                rating: 5,
              },
              {
                name: 'Ahmed Hassan',
                company: 'FinanceFlow',
                role: 'CTO',
                content: 'The custom software solution they built for us has streamlined our operations significantly. Highly recommended for any fintech project.',
                rating: 5,
              },
              {
                name: 'Maria Rodriguez',
                company: 'HealthTech Solutions',
                role: 'Product Manager',
                content: 'Working with ZMS IT Hub was a game-changer for our healthcare platform. Their expertise in compliance and security is outstanding.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
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
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest tech trends, industry insights, 
              and company updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

