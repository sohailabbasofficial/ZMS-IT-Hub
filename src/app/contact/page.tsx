import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/forms/ContactForm';
import { siteConfig } from '@/lib/config';

export default function ContactPage() {
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
              <ContactForm />
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
