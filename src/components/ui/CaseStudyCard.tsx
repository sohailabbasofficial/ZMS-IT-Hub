import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface CaseStudyCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  image,
  imageAlt,
}: CaseStudyCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="mb-4 text-gray-600 leading-relaxed">
          {description}
        </p>
        
        {/* View Case Study Button */}
        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center font-medium text-primary transition-colors duration-200 hover:text-primary-dark group-hover:translate-x-1"
        >
          View Case Study
          <FiArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" size={16} />
        </Link>
      </div>
    </div>
  );
}
