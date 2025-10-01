import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import CaseStudyCard from '@/components/ui/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Case Studies | Successful Software Development Projects | ZMS IT Hub',
  description: 'Explore our successful software development projects including school management, college management, pharmacy management, and hospital management systems.',
  keywords: [
    'case studies',
    'software development projects',
    'school management system',
    'college management system',
    'pharmacy management system',
    'hospital management system',
    'successful projects',
    'ZMS IT Hub projects',
  ],
};

// Case studies data - Update these with your actual project details
const caseStudies = [
  {
    slug: 'school-management-system',
    title: 'School Management System',
    description: 'Digital platform to manage students, teachers, fees, and attendance with centralized data management and online fee collection.',
    image: '/images/school.png',
    imageAlt: 'School Management System Dashboard',
  },
  {
    slug: 'college-management-system',
    title: 'College Management System',
    description: 'Complete solution for courses, exams, and student management with automated exam results and streamlined processes.',
    image: '/images/college.png',
    imageAlt: 'College Management System Interface',
  },
  {
    slug: 'pharmacy-management-system',
    title: 'Pharmacy Management System',
    description: 'Digital stock & sales management for pharmacies with real-time inventory tracking and automated alerts.',
    image: '/images/pharmacy.png',
    imageAlt: 'Pharmacy Management System Dashboard',
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    description: 'End-to-end solution for patient records, doctors, and billing with centralized EHR and appointment system.',
    image: '/images/hospital.png',
    imageAlt: 'Hospital Management System Interface',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              Our Case Studies
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              Explore how we helped institutions transform with technology
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                slug={caseStudy.slug}
                title={caseStudy.title}
                description={caseStudy.description}
                image={caseStudy.image}
                imageAlt={caseStudy.imageAlt}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-secondary lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Let's discuss how we can help transform your institution with innovative software solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
              >
                Start Your Project With Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                View Our Services
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}