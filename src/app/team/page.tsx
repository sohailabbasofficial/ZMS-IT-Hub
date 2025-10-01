import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import CoFounderSocials from '@/components/ui/CoFounderSocials';

export const metadata: Metadata = {
  title: 'Our Team | Web Development Team Karachi | ZMS IT Hub',
  description: 'Meet Karachi\'s premier web development team at ZMS IT Hub. Expert developers, designers, and innovators building your digital future.',
  keywords: ['web development team', 'Karachi', 'software studio', 'web developers', 'tech team'],
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Expert Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Passionate professionals dedicated to delivering exceptional digital solutions for your business success.</p>
        </div>
      </header>

      {/* Co-Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Co-Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The visionary leaders who built ZMS IT Hub from the ground up</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-8">
                  <Image
                    src="/images/cofounder1.jpg"
                    alt="Muhammad Zain, Co-Founder of ZMS IT Hub"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Muhammad Zain</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-600 mb-6 leading-relaxed">Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code, user-centered design, and creating digital solutions that drive business growth.</p>
                <p className="text-primary italic font-medium mb-6">"Building tomorrow's digital solutions today."</p>
                <CoFounderSocials 
                  linkedinUrl="https://linkedin.com/in/muhammadzain"
                  email="muhammad.zain@zmsit.com"
                  size="lg"
                  className="justify-center"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-8">
                  <Image
                    src="/images/cofounder2.jpg"
                    alt="Sarah Ahmed, Co-Founder of ZMS IT Hub"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Sarah Ahmed</h3>
                <p className="text-primary font-semibold mb-4">Co-Founder</p>
                <p className="text-gray-600 mb-6 leading-relaxed">UI/UX designer specializing in creating intuitive digital experiences. Expert in user research, modern design systems, and transforming complex problems into elegant solutions.</p>
                <p className="text-primary italic font-medium mb-6">"Design is not just how it looks, but how it works."</p>
                <CoFounderSocials 
                  linkedinUrl="https://linkedin.com/in/sarahahmed"
                  email="sarah.ahmed@zmsit.com"
                  size="lg"
                  className="justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="mb-8">
                  <Image
                    src="/images/ceo.jpg"
                    alt="Ali Hassan, CEO of ZMS IT Hub"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto shadow-xl"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">Ali Hassan</h2>
                <p className="text-primary font-semibold text-xl mb-6">Chief Executive Officer</p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">Leading ZMS IT Hub's strategic vision with 10+ years in tech leadership. Former senior developer at multinational companies, now focused on empowering Pakistani businesses through innovative technology solutions and digital transformation.</p>
                <blockquote className="text-xl text-primary italic mb-8 font-medium">"Technology should solve real problems, not create new ones."</blockquote>
                <div className="flex gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                </div>
                <CoFounderSocials 
                  linkedinUrl="https://linkedin.com/in/alihassan"
                  email="ali.hassan@zmsit.com"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Talented professionals who bring your digital visions to life</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/team1.jpg"
                  alt="Fatima Khan, CTO of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Fatima Khan</h3>
                <p className="text-primary font-semibold mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Technical architect with expertise in cloud infrastructure and scalable systems. Leads our development methodology and ensures code quality across all projects.</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  <li>• Cloud Architecture</li>
                  <li>• System Design</li>
                  <li>• Code Quality</li>
                </ul>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Great code is written for humans to read."</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/team2.jpg"
                  alt="Usman Malik, Lead Designer of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Usman Malik</h3>
                <p className="text-primary font-semibold mb-3">Lead Designer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Creative director with 6+ years in digital design. Specializes in brand identity, user experience, and creating memorable digital interactions.</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  <li>• Brand Identity</li>
                  <li>• User Experience</li>
                  <li>• Digital Design</li>
                </ul>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Design creates emotional connections."</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/team3.jpg"
                  alt="Ayesha Sheikh, Senior Frontend Developer of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Ayesha Sheikh</h3>
                <p className="text-primary font-semibold mb-3">Senior Frontend Developer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">React and Vue.js specialist focused on creating responsive, accessible web applications. Passionate about performance optimization and modern web standards.</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  <li>• React & Vue.js</li>
                  <li>• Performance Optimization</li>
                  <li>• Web Standards</li>
                </ul>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Frontend is where magic happens."</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/team4.jpg"
                  alt="Hassan Raza, Senior Backend Developer of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Hassan Raza</h3>
                <p className="text-primary font-semibold mb-3">Senior Backend Developer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Database architect and API specialist with expertise in Node.js and Python. Builds robust server-side solutions that scale with business growth.</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  <li>• Node.js & Python</li>
                  <li>• Database Design</li>
                  <li>• API Development</li>
                </ul>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Backend is the foundation of everything."</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/team5.jpg"
                  alt="Zara Ali, Project Manager of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Zara Ali</h3>
                <p className="text-primary font-semibold mb-3">Project Manager</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Agile methodology expert ensuring smooth project delivery. Coordinates between clients and development teams for optimal results.</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  <li>• Agile Methodology</li>
                  <li>• Project Delivery</li>
                  <li>• Client Coordination</li>
                </ul>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Success is in the details."</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/team6.jpg"
                  alt="Omar Khan, QA & DevOps Engineer of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Omar Khan</h3>
                <p className="text-primary font-semibold mb-3">QA & DevOps Engineer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Quality assurance specialist with DevOps expertise. Ensures reliable deployments and maintains high standards across all our products.</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  <li>• Quality Assurance</li>
                  <li>• DevOps</li>
                  <li>• Deployment</li>
                </ul>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Quality is never an accident."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">Our Values</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Innovation First</h3>
                    <p className="text-gray-600">We embrace cutting-edge technologies and creative problem-solving approaches.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Client Success</h3>
                    <p className="text-gray-600">Every project is measured by our client's business growth and satisfaction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Quality Code</h3>
                    <p className="text-gray-600">We write clean, maintainable code that stands the test of time.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">How We Work</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Discovery</h3>
                    <p className="text-gray-600">Deep dive into your business needs and technical requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Build</h3>
                    <p className="text-gray-600">Agile development with regular check-ins and iterative improvements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Launch</h3>
                    <p className="text-gray-600">Smooth deployment with ongoing support and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with our expert team?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how our talented professionals can bring your digital vision to life.</p>
          <Link href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}