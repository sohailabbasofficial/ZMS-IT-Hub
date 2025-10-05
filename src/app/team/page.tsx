import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import CoFounderSocials from '@/components/ui/CoFounderSocials';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Our Team | Web Development Team Karachi | ZMS IT Hub',
  description:
    "Meet Karachi's premier web development team at ZMS IT Hub. Expert developers, designers, and innovators building your digital future.",
  keywords: [
    'web development team',
    'Karachi',
    'software studio',
    'web developers',
    'tech team',
  ],
};

export default async function TeamPage() {
  // Fetch team members from database
  const teamMembers = await prisma.teamMember.findMany({
    where: { isActive: true },
    orderBy: [
      { isFounder: 'desc' },
      { displayOrder: 'asc' },
      { createdAt: 'asc' },
    ],
  });

  // Separate founders from other team members
  const founders = teamMembers.filter((member) => member.isFounder);
  const otherMembers = teamMembers.filter((member) => !member.isFounder);
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Meet Our Expert Team
          </h1>
          <p className="mx-auto max-w-3xl text-xl md:text-2xl">
            Passionate professionals dedicated to delivering exceptional digital
            solutions for your business success.
          </p>
        </div>
      </header>

      {/* Co-Founders Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl">
              Founders
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The visionary leaders who built ZMS IT Hub from the ground up
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="transform rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
              <div className="text-center">
                <div className="mb-8">
                  <Image
                      src={founder.imageUrl || '/images/expert.png'}
                      alt={`${founder.name}, Co-Founder of ZMS IT Hub`}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full shadow-lg"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-secondary">
                    {founder.name}
                </h3>
                <p className="mb-4 font-semibold text-primary">
                    {founder.position}
                </p>
                  {founder.bio && (
                <p className="mb-6 leading-relaxed text-gray-600">
                      {founder.bio}
                    </p>
                  )}
                <CoFounderSocials
                    linkedinUrl={founder.linkedinUrl || ''}
                    email={founder.email || ''}
                  size="lg"
                  className="justify-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Featured Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="mb-8">
                  <Image
                    src="/images/sohail-abbas.jpg"
                    alt="Sohail Abbas, CEO of ZMS IT Hub"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto shadow-xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">Sohail Abbas</h2>
                <p className="text-primary font-semibold text-xl mb-6">Chief Executive Officer</p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">Serving as the Chief Executive Officer, he brings both leadership and technical expertise to ZMS IT Hub. With 3 years of experience as a Full Stack Software Developer, he delivers innovative solutions and drives organizational success.</p>
                <blockquote className="text-xl text-primary italic mb-8 font-medium">"Leadership is about inspiring others to achieve greatness."</blockquote>
                <div className="flex gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                </div>
                <CoFounderSocials 
                  linkedinUrl="https://www.linkedin.com/in/sohailabbas18/"
                  email="sohailabbas.ceo@gmail.com"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl">
              Our Expert Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Talented professionals who bring your digital visions to life
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherMembers.map((member) => (
              <div
                key={member.id}
                className="transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
              <div className="text-center">
                <Image
                    src={member.imageUrl || '/images/expert.png'}
                    alt={`${member.name}, ${member.position} of ZMS IT Hub`}
                  width={120}
                  height={120}
                  className="mx-auto mb-4 rounded-full shadow-md"
                />
                <h3 className="mb-1 text-xl font-bold text-secondary">
                    {member.name}
                </h3>
                <p className="mb-3 font-semibold text-primary">
                    {member.position}
                </p>
                  {member.bio && (
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {member.bio}
                </p>
                  )}
                <div className="mb-3 flex justify-center gap-4">
                    {member.linkedinUrl && (
                  <a
                        href={member.linkedinUrl}
                    className="text-primary transition-colors hover:text-primary-dark"
                  >
                    <FiLinkedin size={18} />
                  </a>
                    )}
                    {member.email && (
                  <a
                        href={`mailto:${member.email}`}
                    className="text-primary transition-colors hover:text-primary-dark"
                  >
                    <FiMail size={18} />
                  </a>
                    )}
            </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & How We Work */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-secondary">
                Our Values
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-secondary">
                      Innovation First
                    </h3>
                    <p className="text-gray-600">
                      We embrace cutting-edge technologies and creative
                      problem-solving approaches.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-secondary">
                      Client Success
                    </h3>
                    <p className="text-gray-600">
                      Every project is measured by our client's business growth
                      and satisfaction.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-secondary">
                      Quality Code
                    </h3>
                    <p className="text-gray-600">
                      We write clean, maintainable code that stands the test of
                      time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold text-secondary">
                How We Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-secondary">
                      Discovery
                    </h3>
                    <p className="text-gray-600">
                      Deep dive into your business needs and technical
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-secondary">Build</h3>
                    <p className="text-gray-600">
                      Agile development with regular check-ins and iterative
                      improvements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-primary/10 p-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-secondary">
                      Launch
                    </h3>
                    <p className="text-gray-600">
                      Smooth deployment with ongoing support and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to work with our expert team?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Let's discuss how our talented professionals can bring your digital
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg transition-colors hover:bg-gray-100"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
