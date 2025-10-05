import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Case Studies | Successful Software Development Projects | ZMS IT Hub',
  description:
    'Explore our successful software development projects including school management, college management, pharmacy management, and hospital management systems.',
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

export default async function CaseStudiesPage() {
  // Fetch published projects from database
  const projects = await prisma.project.findMany({
    where: {
      status: 'published',
      featured: true, // Only show featured projects as case studies
    },
    orderBy: { createdAt: 'desc' },
  });
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
            {projects.map((project) => (
              <CaseStudyCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={
                  project.description ||
                  'Explore this project to learn more about our development process and results.'
                }
                image={project.featuredImage || '/images/expert.png'}
                imageAlt={`${project.title} - Project Overview`}
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
              Let's discuss how we can help transform your institution with
              innovative software solutions.
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
