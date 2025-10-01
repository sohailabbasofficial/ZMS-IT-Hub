import { Metadata } from 'next';
import Image from 'next/image';
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiHeart,
  FiTrendingUp,
  FiGlobe,
  FiArrowRight,
} from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About ZMS IT Hub | Leading Software Development Company',
  description:
    "Learn about ZMS IT Hub's mission, vision, and values. Meet our expert team of developers, designers, and strategists dedicated to delivering exceptional software solutions.",
  keywords: [
    'about ZMS IT Hub',
    'software development company Pakistan',
    'team of developers',
    'company mission vision',
    'tech company culture',
  ],
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Zain Malik',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 8+ years in software development and business strategy.',
      avatar: '/images/team/zain-malik.jpg',
      skills: ['Leadership', 'Strategy', 'Full-Stack Development'],
    },
    {
      name: 'Sarah Ahmed',
      position: 'CTO',
      bio: 'Technical architect specializing in scalable systems and cloud infrastructure.',
      avatar: '/images/team/sarah-ahmed.jpg',
      skills: ['Cloud Architecture', 'DevOps', 'System Design'],
    },
    {
      name: 'Hassan Khan',
      position: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile apps.',
      avatar: '/images/team/hassan-khan.jpg',
      skills: ['React', 'Node.js', 'Mobile Development'],
    },
    {
      name: 'Ayesha Ali',
      position: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and exceptional user experiences.',
      avatar: '/images/team/ayesha-ali.jpg',
      skills: ['UI/UX Design', 'Prototyping', 'User Research'],
    },
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description:
        'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork and collaboration to achieve outstanding results.',
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description:
        'We maintain the highest standards of integrity and transparency in all our dealings.',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description:
        'We embrace innovation and stay ahead of technology trends to deliver cutting-edge solutions.',
    },
  ];

  const stats = [
    { number: '3', label: 'Successful Projects' },
    { number: '10', label: 'Team Members' },
    { number: '3', label: 'Years Experience' },
    { number: '2025', label: 'Founded' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              About ZMS IT Hub
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              We are a passionate team of developers, designers, and strategists
              dedicated to transforming businesses through innovative software
              solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story Section */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary lg:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>
                  Founded on August 14, 2025, ZMS IT Hub began as a small team of
                  passionate developers with a vision to bridge the gap between
                  innovative ideas and practical software solutions. What
                  started as a local software development company has grown into
                  a trusted partner for businesses worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous learning,
                  adaptation, and growth. We've successfully delivered 3
                  projects across various industries, from startups to
                  established enterprises, helping them achieve their digital
                  transformation goals.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Pakistan's
                  leading software development companies, known for our
                  technical expertise, commitment to quality, and client-centric
                  approach.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ourstory.png"
                alt="ZMS IT Hub Company Story"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <FiTarget className="text-white" size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-secondary">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                To empower businesses with innovative software solutions that
                drive growth, efficiency, and success in the digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <FiGlobe className="text-white" size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-secondary">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                To be the leading software development company globally,
                recognized for excellence, innovation, and transformative
                digital solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <FiHeart className="text-white" size={32} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-secondary">
                Our Values
              </h3>
              <p className="leading-relaxed text-gray-700">
                Integrity, excellence, collaboration, and innovation guide
                everything we do, ensuring we deliver value to our clients and
                community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our success is measured by the impact we create for our clients
              and the growth we achieve together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary lg:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              These values guide our decisions, shape our culture, and define
              how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-secondary">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our diverse team of experts brings together technical excellence,
              creative vision, and business acumen to deliver exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto h-48 w-48 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-secondary">
                  {member.name}
                </h3>
                <p className="mb-3 font-medium text-primary">
                  {member.position}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary lg:text-4xl">
              Recognition & Awards
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our commitment to excellence has been recognized by industry
              leaders and our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Best Software Development Company 2025',
                organization: 'Pakistan Tech Awards',
                year: '2025',
              },
              {
                title: 'Excellence in Mobile App Development',
                organization: 'Digital Innovation Awards',
                year: '2025',
              },
              {
                title: 'Top Rated Development Partner',
                organization: 'Clutch.co',
                year: '2025',
              },
            ].map((award, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FiAward className="text-primary" size={32} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-secondary">
                  {award.title}
                </h3>
                <p className="mb-2 text-gray-600">{award.organization}</p>
                <p className="font-medium text-primary">{award.year}</p>
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
              Ready to Work with Us?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200">
              Let's discuss your project and see how our team can help bring
              your vision to life with innovative software solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" href="/contact">
                Start Your Project
              </Button>
              <Button variant="primary" size="lg" href="/careers">
                Join Our Team
                <FiArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
