'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import type { ContactFormData } from '@/types';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <FiCheckCircle className="text-green-600" size={40} />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-secondary">
              Message Sent Successfully!
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Thank you for reaching out to us. We'll get back to you within 24
              hours.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              Get In Touch
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              Ready to start your next project? We'd love to hear from you. Send
              us a message and we'll respond within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="input"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="input"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="input"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className="input"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                    className="input"
                  >
                    <option value="">Select a service</option>
                    {siteConfig.services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className="input"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">
                        $15,000 - $50,000
                      </option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      {...register('timeline')}
                      className="input"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    className="textarea"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FiMail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-secondary">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-600 transition-colors duration-200 hover:text-primary"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FiPhone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-secondary">
                      Phone
                    </h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-gray-600 transition-colors duration-200 hover:text-primary"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FiMapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-secondary">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      {siteConfig.contact.address}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Timezone: {siteConfig.contact.timezone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FiClock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-secondary">
                      Business Hours
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-secondary">
                  Response Time
                </h3>
                <p className="mb-4 text-gray-600">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Email inquiries: Within 24 hours</p>
                  <p>• Phone calls: Immediate response</p>
                  <p>• Project consultations: Scheduled within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Here are some common questions we receive. Don't see your
              question? Feel free to contact us directly.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary depending on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months or more. We provide detailed timelines during the consultation phase.',
              },
              {
                question: 'What is your development process?',
                answer:
                  'We follow an agile development methodology with regular client communication, iterative development, and continuous testing. Our process includes discovery, design, development, testing, and deployment phases.',
              },
              {
                question: 'Do you provide ongoing support and maintenance?',
                answer:
                  'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, updates, security patches, and feature enhancements. We also provide 24/7 monitoring for critical applications.',
              },
              {
                question: 'What technologies do you work with?',
                answer:
                  'We work with modern technologies including React, Next.js, Node.js, Python, Java, AWS, Azure, and more. We choose the best technology stack based on your project requirements.',
              },
              {
                question: 'How do you ensure project quality?',
                answer:
                  'We follow industry best practices including code reviews, automated testing, continuous integration, and regular quality assurance checks. All projects go through comprehensive testing before deployment.',
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-secondary">
                  {faq.question}
                </h3>
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
