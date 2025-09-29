import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service | ZMS IT Hub',
  description: 'Terms of Service for ZMS IT Hub website. Read our terms and conditions for using our services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white section-padding">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              These terms and conditions govern your use of our website and services.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound 
              by the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials 
              on ZMS IT Hub's website for personal, non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on ZMS IT Hub's website are provided on an 'as is' basis. 
              ZMS IT Hub makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall ZMS IT Hub or its suppliers be liable for any damages 
              arising out of the use or inability to use the materials on this website.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on ZMS IT Hub's website could include technical, 
              typographical, or photographic errors. We do not warrant that any of the 
              materials on its website are accurate, complete, or current.
            </p>

            <h2>Links</h2>
            <p>
              ZMS IT Hub has not reviewed all of the sites linked to our website and 
              is not responsible for the contents of any such linked site.
            </p>

            <h2>Modifications</h2>
            <p>
              ZMS IT Hub may revise these terms of service for its website at any time 
              without notice. By using this website, you are agreeing to be bound by 
              the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance 
              with the laws of Pakistan.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: zmsithub@gmail.com</li>
              <li>Phone: +92 370 9472900</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
