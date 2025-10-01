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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The visionary leaders who built ZMS IT Hub from the ground up</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-8">
                  <Image
                    src="/images/Sohail Abbas.jpg"
                    alt="Sohail Abbas, Co-Founder & CEO of ZMS IT Hub"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Sohail Abbas</h3>
                <p className="text-primary font-semibold mb-4">Founder Of ZMS IT Hub & CEO & Project Manager</p>
                <p className="text-gray-600 mb-6 leading-relaxed">As Founder & CEO of ZMS IT Hub, he leads with vision and strategy while managing projects to ensure successful outcomes. With strong leadership and project management expertise, he drives innovation and growth for clients and teams alike.</p>
                <p className="text-primary italic font-medium mb-6">"Leadership is about inspiring others to achieve greatness."</p>
                 <CoFounderSocials 
                   linkedinUrl="https://linkedin.com/in/sohailabbas18"
                   email="sohailabbas.ceo@gmail.com"
                   size="lg"
                   className="justify-center"
                 />
                 <div className="mt-4">
                   <a 
                     href="https://wa.me/923270651157" 
                     className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                   >
                     <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                     </svg>
                     WhatsApp: +923270651157
                   </a>
                 </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="mb-8">
                  <Image
                    src="/images/muhammad safdar.png"
                    alt="Muhammad Safdar, Co-Founder of ZMS IT Hub"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Muhammad Safdar</h3>
                <p className="text-primary font-semibold mb-4">Business Consultant & Co-Founder of ZMS IT Hub & Principal of Rise College kot Momin & Problem-Solving Expert & Mentor </p>
                <p className="text-gray-600 mb-6 leading-relaxed">With 6+ years of freelancing and consulting experience, he combines business expertise with academic leadership as Principal of Rise College. A fast learner and mentor, known for exceptional problem-solving skills that drive growth and innovation.</p>
                <p className="text-primary italic font-medium mb-6">"Technology should solve real-world problems."</p>
                 <CoFounderSocials 
                   linkedinUrl="https://linkedin.com/in/muhammadsafdar"
                   email="muhammad.safdar@zmsit.com"
                   size="lg"
                   className="justify-center"
                 />
                 <div className="mt-4">
                   <a 
                     href="https://wa.me/03000677362" 
                     className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                   >
                     <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                     </svg>
                     WhatsApp: 03000677362
                   </a>
                 </div>
              </div>
            </div>
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
                    src="/images/Sohail Abbas.jpg"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Talented professionals who bring your digital visions to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Muhammad Kamran - Sales Manager */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/Muhammad Kamran.png"
                  alt="Muhammad Kamran, Sales Manager of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Muhammad Kamran</h3>
                <p className="text-primary font-semibold mb-3">Sales Manager</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Experienced sales professional with a proven track record in building client relationships and driving business growth through strategic partnerships.</p>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Building relationships is the key to success."</p>
              </div>
            </div>

            {/* Ahmad Khan - Google Ads Expert */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/Ahmad Khan.png"
                  alt="Ahmad Khan, Google Ads Expert of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Ahmad Khan</h3>
                <p className="text-primary font-semibold mb-3">Google Ads Expert</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Digital marketing specialist with expertise in Google Ads campaigns, PPC optimization, and conversion rate improvement strategies.</p>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Data-driven marketing delivers results."</p>
              </div>
            </div>

            {/* Isma Sana - Google Ads Expert */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/Isma sana.png"
                  alt="Isma Sana, Google Ads Expert of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Isma Sana</h3>
                <p className="text-primary font-semibold mb-3">Google Ads Expert</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Certified Google Ads professional focused on creating high-performing campaigns that deliver measurable ROI and business growth.</p>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Every click counts towards success."</p>
              </div>
            </div>

            {/* Frazana Ameer - Google Ads Expert */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/Frazna Ameer.png"
                  alt="Frazana Ameer, Google Ads Expert of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Frazana Ameer</h3>
                <p className="text-primary font-semibold mb-3">Google Ads Expert</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Digital advertising expert with deep knowledge of Google Ads platform, audience targeting, and campaign optimization techniques.</p>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Precision targeting drives conversions."</p>
              </div>
            </div>

            {/* Nazmeen - Customer Support */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/Nazmeen.png"
                  alt="Nazmeen, Customer Support of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Nazmeen</h3>
                <p className="text-primary font-semibold mb-3">Customer Support</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Dedicated customer support specialist committed to providing exceptional service and ensuring client satisfaction throughout their journey.</p>
                 <div className="flex justify-center gap-4 mb-3">
                   <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                     <FiLinkedin size={18} />
                   </a>
                   <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                     <FiMail size={18} />
                   </a>
                 </div>
                 <div className="mb-3">
                   <a 
                     href="https://wa.me/923709472900" 
                     className="inline-flex items-center justify-center px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-xs font-medium"
                   >
                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                     </svg>
                     WhatsApp: +923709472900
                   </a>
                 </div>
                 <p className="text-xs text-gray-500 italic">"Customer satisfaction is our priority."</p>
              </div>
            </div>

            {/* Samavia Arshad - Google Ads Expert & Customer Support */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <Image
                  src="/images/Samavia Arshad.jpg"
                  alt="Samavia Arshad, Google Ads Expert & Customer Support of ZMS IT Hub"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold text-secondary mb-1">Samavia Arshad</h3>
                <p className="text-primary font-semibold mb-3">Google Ads Expert & Customer Support</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Versatile professional combining digital marketing expertise with exceptional customer service skills. Specializes in Google Ads campaigns while ensuring outstanding client support.</p>
                <div className="flex justify-center gap-4 mb-3">
                  <a href="https://linkedin.com/in/placeholder" className="text-primary hover:text-primary-dark transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:team@zmsit.com" className="text-primary hover:text-primary-dark transition-colors">
                    <FiMail size={18} />
                  </a>
                </div>
                <p className="text-xs text-gray-500 italic">"Excellence in both marketing and service."</p>
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