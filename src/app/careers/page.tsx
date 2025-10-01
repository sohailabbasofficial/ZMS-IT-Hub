import { Metadata } from 'next';
import Link from 'next/link';
import {
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiBriefcase,
  FiMail,
  FiArrowRight,
} from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Careers at ZMS IT Hub | Join Our Software Development Team',
  description:
    'Explore exciting career opportunities at ZMS IT Hub. Join our team of talented developers, designers, and strategists building innovative software solutions.',
  keywords: [
    'careers ZMS IT Hub',
    'software developer jobs Pakistan',
    'tech jobs Karachi',
    'remote developer positions',
    'IT career opportunities',
  ],
};

export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Karachi',
      type: 'full-time',
      experience: '3-5 years',
      description:
        'We are looking for an experienced full-stack developer to join our team and work on exciting projects.',
      requirements: [
        '3+ years of experience in React and Node.js',
        'Strong knowledge of TypeScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Familiarity with database design and optimization',
        'Excellent problem-solving skills',
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance coverage',
        'Flexible working hours',
        'Professional development opportunities',
        'Remote work options',
      ],
      salary: {
        min: 150000,
        max: 250000,
        currency: 'PKR',
      },
      publishedAt: '2025-01-15',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Karachi',
      type: 'full-time',
      experience: '2-4 years',
      description:
        'Join our design team to create beautiful and functional user interfaces for web and mobile applications.',
      requirements: [
        '2+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing design skills',
        'Understanding of design systems',
        'Experience with user research and testing',
      ],
      benefits: [
        'Creative work environment',
        'Latest design tools and software',
        'Design conference attendance',
        'Mentorship opportunities',
        'Career growth path',
      ],
      salary: {
        min: 80000,
        max: 150000,
        currency: 'PKR',
      },
      publishedAt: '2025-01-10',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'full-time',
      experience: '2-4 years',
      description:
        'Help us build and maintain robust cloud infrastructure and deployment pipelines.',
      requirements: [
        '2+ years of DevOps experience',
        'Knowledge of Docker and Kubernetes',
        'Experience with CI/CD pipelines',
        'Cloud platform expertise (AWS/Azure)',
        'Infrastructure as Code (Terraform/CloudFormation)',
      ],
      benefits: [
        'Cutting-edge technology stack',
        'Certification support',
        'Conference and training budget',
        'Flexible schedule',
        'Remote-first culture',
      ],
      salary: {
        min: 120000,
        max: 200000,
        currency: 'PKR',
      },
      publishedAt: '2025-01-08',
    },
  ];

  const companyBenefits = [
    {
      icon: FiDollarSign,
      title: 'Competitive Salary',
      description:
        'Market-competitive compensation packages with performance bonuses.',
    },
    {
      icon: FiUsers,
      title: 'Team Environment',
      description:
        'Collaborative and supportive work culture with talented professionals.',
    },
    {
      icon: FiBriefcase,
      title: 'Career Growth',
      description:
        'Clear career progression paths and professional development opportunities.',
    },
    {
      icon: FiClock,
      title: 'Work-Life Balance',
      description:
        'Flexible working hours and remote work options for better work-life balance.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              Join Our Team
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              Be part of a dynamic team building innovative software solutions.
              We're looking for passionate individuals who want to make a
              difference in the tech industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Benefits Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Why Work With Us?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We offer more than just a job - we provide an environment where
              you can grow, learn, and contribute to meaningful projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyBenefits.map((benefit, index) => (
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

      {/* Job Openings Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Current Openings
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Explore our current job openings and find the perfect role for
              your career goals.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-semibold text-secondary">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FiBriefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiMapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiClock size={16} />
                        <span>{job.type.replace('-', ' ')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiUsers size={16} />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="mb-2 text-lg font-semibold text-primary">
                      {job.salary.min.toLocaleString()} -{' '}
                      {job.salary.max.toLocaleString()} {job.salary.currency}
                    </div>
                    <div className="text-sm text-gray-500">
                      Posted: {new Date(job.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed text-gray-700">
                  {job.description}
                </p>

                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-secondary">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start space-x-2"
                        >
                          <span className="mt-1 text-primary">•</span>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-secondary">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benIndex) => (
                        <li
                          key={benIndex}
                          className="flex items-start space-x-2"
                        >
                          <span className="mt-1 text-primary">•</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="primary"
                    size="lg"
                    href={`/careers/apply?position=${job.title}`}
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Process Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Application Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our hiring process is designed to be transparent and efficient,
              ensuring we find the right fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Application',
                description:
                  'Submit your application with resume and portfolio.',
              },
              {
                step: '02',
                title: 'Initial Review',
                description:
                  'Our team reviews your application and qualifications.',
              },
              {
                step: '03',
                title: 'Interview',
                description:
                  'Technical and cultural fit interview with our team.',
              },
              {
                step: '04',
                title: 'Decision',
                description: 'We make our decision and extend an offer.',
              },
            ].map((step, index) => (
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

      {/* Culture Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary lg:text-4xl">
                Our Culture
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                At ZMS IT Hub, we believe in fostering a culture of innovation,
                collaboration, and continuous learning.
              </p>
              <div className="space-y-6">
                {[
                  'Innovation-driven mindset',
                  'Collaborative team environment',
                  'Continuous learning opportunities',
                  'Work-life balance focus',
                  'Diverse and inclusive workplace',
                  'Open communication culture',
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <span className="text-sm text-white">✓</span>
                    </div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/team-culture.jpg"
                alt="ZMS IT Hub Team Culture"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Ready to Join Our Team?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200">
              Don't see a position that matches your skills? We're always
              looking for talented individuals. Send us your resume and let's
              start a conversation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" href="/contact">
                Send Resume
              </Button>
              <Button variant="primary" size="lg" href="/about">
                Learn More About Us
                <FiArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
