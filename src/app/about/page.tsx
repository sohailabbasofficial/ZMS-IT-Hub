import { Metadata } from 'next';
import Image from 'next/image';
import { FiAward, FiUsers, FiTarget, FiHeart, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About ZMS IT Hub | Leading Software Development Company',
  description: 'Learn about ZMS IT Hub\'s mission, vision, and values. Meet our expert team of developers, designers, and strategists dedicated to delivering exceptional software solutions.',
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
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve outstanding results.',
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and transparency in all our dealings.',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We embrace innovation and stay ahead of technology trends to deliver cutting-edge solutions.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About ZMS IT Hub
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We are a passionate team of developers, designers, and strategists dedicated to 
              transforming businesses through innovative software solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story Section */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, ZMS IT Hub began as a small team of passionate developers 
                  with a vision to bridge the gap between innovative ideas and practical software 
                  solutions. What started as a local software development company has grown into 
                  a trusted partner for businesses worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and growth. 
                  We've successfully delivered over 50 projects across various industries, 
                  from startups to established enterprises, helping them achieve their digital 
                  transformation goals.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Pakistan's leading software 
                  development companies, known for our technical expertise, commitment to quality, 
                  and client-centric approach.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/company-story.jpg"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <FiTarget className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and success in the digital age.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <FiGlobe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading software development company globally, recognized for 
                excellence, innovation, and transformative digital solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity, excellence, collaboration, and innovation guide everything we do, 
                ensuring we deliver value to our clients and community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is measured by the impact we create for our clients and the 
              growth we achieve together.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide our decisions, shape our culture, and define how we 
              work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together technical excellence, 
              creative vision, and business acumen to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders 
              and our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Best Software Development Company 2023',
                organization: 'Pakistan Tech Awards',
                year: '2023',
              },
              {
                title: 'Excellence in Mobile App Development',
                organization: 'Digital Innovation Awards',
                year: '2022',
              },
              {
                title: 'Top Rated Development Partner',
                organization: 'Clutch.co',
                year: '2023',
              },
            ].map((award, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiAward className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.organization}</p>
                <p className="text-primary font-medium">{award.year}</p>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and see how our team can help bring your 
              vision to life with innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" href="/careers">
                Join Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

