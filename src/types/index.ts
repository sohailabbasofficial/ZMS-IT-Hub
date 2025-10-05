// Contentful CMS Types
export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: Record<string, string | number | boolean | object>;
}

// Blog Post Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: ContentfulAsset;
  author: {
    name: string;
    bio: string;
    avatar?: ContentfulAsset;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readingTime: number;
}

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: ContentfulAsset;
  client: {
    name: string;
    logo?: ContentfulAsset;
    industry: string;
  };
  project: {
    duration: string;
    teamSize: number;
    technologies: string[];
    challenges: string[];
    solutions: string[];
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
  };
  publishedAt: string;
  updatedAt: string;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    model: string;
    startingFrom: string;
    description: string;
  };
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar?: ContentfulAsset;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: string[];
  experience: number;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
  source?: string;
}

// Job Posting Types
export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  publishedAt: string;
  applicationDeadline?: string;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  interests?: string[];
  source?: string;
}
