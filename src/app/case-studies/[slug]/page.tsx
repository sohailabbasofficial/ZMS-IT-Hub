import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiCheck, FiArrowRight } from 'react-icons/fi';
import Container from '@/components/ui/Container';

// Case study data - Update these with your actual project details
const caseStudiesData = {
  'school-management-system': {
    title: 'School Management System',
    overview:
      'A comprehensive digital platform designed to streamline school operations by managing students, teachers, fees, and attendance through a centralized system with online fee collection capabilities.',
    challenge:
      'The school was struggling with manual student record management, which led to frequent errors, delays in fee collection, and difficulty in tracking attendance. The administrative workload was overwhelming, and data accuracy was compromised.',
    solution:
      'We developed a centralized data management system with intuitive dashboards for administrators, teachers, and parents. The solution includes automated fee collection, real-time attendance tracking, and comprehensive reporting features.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Material-UI',
      'JWT Authentication',
    ],
    results: [
      'Reduced administrative workload by 50%',
      'Improved data accuracy by 95%',
      'Streamlined fee collection process',
      'Enhanced parent-teacher communication',
      'Real-time attendance tracking',
    ],
    image: '/images/school.png',
    imageAlt: 'School Management System Dashboard',
  },
  'college-management-system': {
    title: 'College Management System',
    overview:
      'A complete solution for managing courses, exams, and student records with automated exam result processing, student enrollment management, and comprehensive academic tracking.',
    challenge:
      'The college faced significant challenges in handling large-scale student data, managing complex course structures, and processing exam results efficiently. Manual processes were time-consuming and error-prone.',
    solution:
      'We created an automated system that handles student records, course management, exam scheduling, and result processing. The solution includes student portals, faculty dashboards, and administrative controls.',
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Express.js',
      'Ant Design',
      'Redis',
    ],
    results: [
      'Improved operational efficiency by 60%',
      'Automated exam result processing',
      'Streamlined student enrollment process',
      'Enhanced academic record management',
      'Reduced manual data entry errors',
    ],
    image: '/images/college.png',
    imageAlt: 'College Management System Interface',
  },
  'pharmacy-management-system': {
    title: 'Pharmacy Management System',
    overview:
      'A digital solution for comprehensive pharmacy operations including inventory management, sales tracking, prescription handling, and automated alerts for stock levels and expiry dates.',
    challenge:
      'The pharmacy was experiencing frequent stock-outs, inventory mismanagement, and difficulties in tracking prescription sales. Manual inventory management led to financial losses and customer dissatisfaction.',
    solution:
      'We developed a real-time inventory tracking system with automated stock alerts, sales management, prescription tracking, and expiry date notifications. The system includes barcode scanning and automated reordering.',
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Barcode Scanner',
      'Push Notifications',
    ],
    results: [
      'Increased operational efficiency by 45%',
      'Reduced inventory losses by 70%',
      'Automated stock level monitoring',
      'Improved prescription tracking',
      'Enhanced customer service quality',
    ],
    image: '/images/pharmacy.png',
    imageAlt: 'Pharmacy Management System Dashboard',
  },
  'hospital-management-system': {
    title: 'Hospital Management System',
    overview:
      'An end-to-end solution for comprehensive hospital operations including patient records management, doctor scheduling, billing automation, and integrated electronic health records (EHR).',
    challenge:
      'The hospital was struggling with paper-based patient records, which slowed down patient care, caused administrative errors, and made it difficult to maintain accurate medical histories and billing records.',
    solution:
      'We implemented a centralized Electronic Health Records (EHR) system with automated appointment scheduling, integrated billing, patient portal, and comprehensive medical record management with secure data access.',
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Express.js',
      'HL7 FHIR',
      'HIPAA Compliance',
    ],
    results: [
      'Faster patient care delivery',
      'Reduced administrative errors by 80%',
      'Streamlined appointment scheduling',
      'Automated billing processes',
      'Improved patient satisfaction',
    ],
    image: '/images/hospital.png',
    imageAlt: 'Hospital Management System Interface',
  },
};

// Generate metadata for each case study
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy =
    caseStudiesData[params.slug as keyof typeof caseStudiesData];

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | ZMS IT Hub',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} | Case Study | ZMS IT Hub`,
    description: `${caseStudy.overview} - Explore our successful software development project and see how we delivered measurable results.`,
    keywords: [
      caseStudy.title.toLowerCase(),
      'case study',
      'software development',
      'management system',
      'ZMS IT Hub',
      'successful project',
    ],
  };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy =
    caseStudiesData[params.slug as keyof typeof caseStudiesData];

  if (!caseStudy) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Case Study Not Found
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            The requested case study could not be found.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            <FiArrowLeft className="mr-2" size={16} />
            Back to Case Studies
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Link
              href="/case-studies"
              className="mb-6 inline-flex items-center text-white/80 transition-colors duration-200 hover:text-white"
            >
              <FiArrowLeft className="mr-2" size={16} />
              Back to Case Studies
            </Link>

            {/* Project Title */}
            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
              {caseStudy.title}
            </h1>

            {/* Project Overview */}
            <p className="text-xl leading-relaxed text-gray-200">
              {caseStudy.overview}
            </p>
          </div>
        </Container>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Challenge */}
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-secondary">
                  Challenge
                </h2>
                <p className="leading-relaxed text-gray-700">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-secondary">
                  Our Solution
                </h2>
                <p className="leading-relaxed text-gray-700">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technologies Used */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-secondary">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Results/Impact */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-secondary">
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FiCheck className="mt-1 text-green-500" size={20} />
                  </div>
                  <p className="text-gray-700">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              Let's discuss how we can help transform your institution with
              innovative software solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-colors duration-200 hover:bg-gray-100"
            >
              Start Your Project With Us
              <FiArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
