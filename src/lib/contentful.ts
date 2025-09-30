import { createClient } from 'contentful';
import type {
  BlogPost,
  CaseStudy,
  Service,
  TeamMember,
  JobPosting,
} from '@/types';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: 'preview.contentful.com',
});

export const getClient = (preview = false) =>
  preview ? previewClient : client;

// Blog Posts
export async function getBlogPosts(
  limit = 10,
  preview = false
): Promise<BlogPost[]> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
    limit,
  });

  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    featuredImage: entry.fields.featuredImage,
    author: entry.fields.author,
    publishedAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    tags: entry.fields.tags || [],
    category: entry.fields.category,
    readingTime: entry.fields.readingTime || 5,
  }));
}

export async function getBlogPost(
  slug: string,
  preview = false
): Promise<BlogPost | null> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  if (entries.items.length === 0) return null;

  const entry = entries.items[0] as any;
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    featuredImage: entry.fields.featuredImage,
    author: entry.fields.author,
    publishedAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    tags: entry.fields.tags || [],
    category: entry.fields.category,
    readingTime: entry.fields.readingTime || 5,
  };
}

// Case Studies
export async function getCaseStudies(
  limit = 10,
  preview = false
): Promise<CaseStudy[]> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    order: ['-sys.createdAt'],
    limit,
  });

  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    featuredImage: entry.fields.featuredImage,
    client: entry.fields.client,
    project: entry.fields.project,
    publishedAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  }));
}

export async function getCaseStudy(
  slug: string,
  preview = false
): Promise<CaseStudy | null> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    'fields.slug': slug,
    limit: 1,
  });

  if (entries.items.length === 0) return null;

  const entry = entries.items[0] as any;
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    featuredImage: entry.fields.featuredImage,
    client: entry.fields.client,
    project: entry.fields.project,
    publishedAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  };
}

// Services
export async function getServices(preview = false): Promise<Service[]> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'service',
    order: ['fields.order'],
  });

  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    description: entry.fields.description,
    content: entry.fields.content,
    icon: entry.fields.icon,
    features: entry.fields.features || [],
    benefits: entry.fields.benefits || [],
    process: entry.fields.process || [],
    pricing: entry.fields.pricing,
  }));
}

export async function getService(
  slug: string,
  preview = false
): Promise<Service | null> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'service',
    'fields.slug': slug,
    limit: 1,
  });

  if (entries.items.length === 0) return null;

  const entry = entries.items[0] as any;
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    description: entry.fields.description,
    content: entry.fields.content,
    icon: entry.fields.icon,
    features: entry.fields.features || [],
    benefits: entry.fields.benefits || [],
    process: entry.fields.process || [],
    pricing: entry.fields.pricing,
  };
}

// Team Members
export async function getTeamMembers(preview = false): Promise<TeamMember[]> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'teamMember',
    order: ['fields.order'],
  });

  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    name: entry.fields.name,
    position: entry.fields.position,
    bio: entry.fields.bio,
    avatar: entry.fields.avatar,
    social: entry.fields.social || {},
    skills: entry.fields.skills || [],
    experience: entry.fields.experience || 0,
  }));
}

// Job Postings
export async function getJobPostings(preview = false): Promise<JobPosting[]> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'jobPosting',
    order: ['-sys.createdAt'],
  });

  return entries.items.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    department: entry.fields.department,
    location: entry.fields.location,
    type: entry.fields.type,
    experience: entry.fields.experience,
    description: entry.fields.description,
    requirements: entry.fields.requirements || [],
    benefits: entry.fields.benefits || [],
    salary: entry.fields.salary,
    publishedAt: entry.sys.createdAt,
    applicationDeadline: entry.fields.applicationDeadline,
  }));
}

export async function getJobPosting(
  slug: string,
  preview = false
): Promise<JobPosting | null> {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'jobPosting',
    'fields.slug': slug,
    limit: 1,
  });

  if (entries.items.length === 0) return null;

  const entry = entries.items[0] as any;
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    department: entry.fields.department,
    location: entry.fields.location,
    type: entry.fields.type,
    experience: entry.fields.experience,
    description: entry.fields.description,
    requirements: entry.fields.requirements || [],
    benefits: entry.fields.benefits || [],
    salary: entry.fields.salary,
    publishedAt: entry.sys.createdAt,
    applicationDeadline: entry.fields.applicationDeadline,
  };
}
