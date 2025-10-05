import { createClient } from 'contentful';
import type {
  BlogPost,
  CaseStudy,
  Service,
  TeamMember,
  JobPosting,
  ContentfulAsset,
} from '@/types';

// Check if Contentful environment variables are available
const hasContentfulConfig =
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = hasContentfulConfig
  ? createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
    })
  : null;

const previewClient =
  hasContentfulConfig && process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    ? createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
        host: 'preview.contentful.com',
      })
    : null;

export const getClient = (preview = false) => {
  if (!hasContentfulConfig) {
    console.warn('Contentful configuration not found. Using mock data.');
    return null;
  }
  return preview ? previewClient : client;
};

// Blog Posts
export async function getBlogPosts(
  limit = 10,
  preview = false
): Promise<BlogPost[]> {
  const client = getClient(preview);

  if (!client) {
    // Return mock data when Contentful is not configured
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      limit,
    });

    return entries.items.map(
      (entry: {
        sys: { id: string; createdAt: string; updatedAt: string };
        fields: Record<string, unknown>;
      }) => ({
        id: entry.sys.id,
        title: (entry.fields.title as string) || '',
        slug: (entry.fields.slug as string) || '',
        excerpt: (entry.fields.excerpt as string) || '',
        content: (entry.fields.content as string) || '',
        featuredImage: entry.fields.featuredImage as ContentfulAsset,
        author: entry.fields.author as {
          name: string;
          bio: string;
          avatar?: ContentfulAsset;
        },
        publishedAt: entry.sys.createdAt,
        updatedAt: entry.sys.updatedAt,
        tags: (entry.fields.tags as string[]) || [],
        category: (entry.fields.category as string) || '',
        readingTime: (entry.fields.readingTime as number) || 5,
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(
  slug: string,
  preview = false
): Promise<BlogPost | null> {
  const client = getClient(preview);

  if (!client) {
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry = entries.items[0] as {
      sys: { id: string; createdAt: string; updatedAt: string };
      fields: Record<string, unknown>;
    };
    return {
      id: entry.sys.id,
      title: (entry.fields.title as string) || '',
      slug: (entry.fields.slug as string) || '',
      excerpt: (entry.fields.excerpt as string) || '',
      content: (entry.fields.content as string) || '',
      featuredImage: entry.fields.featuredImage as ContentfulAsset,
      author: entry.fields.author as {
        name: string;
        bio: string;
        avatar?: ContentfulAsset;
      },
      publishedAt: entry.sys.createdAt,
      updatedAt: entry.sys.updatedAt,
      tags: (entry.fields.tags as string[]) || [],
      category: (entry.fields.category as string) || '',
      readingTime: (entry.fields.readingTime as number) || 5,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Case Studies
export async function getCaseStudies(
  limit = 10,
  preview = false
): Promise<CaseStudy[]> {
  const client = getClient(preview);

  if (!client) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'caseStudy',
      order: ['-sys.createdAt'],
      limit,
    });

    return entries.items.map(
      (entry: {
        sys: { id: string; createdAt: string; updatedAt: string };
        fields: Record<string, unknown>;
      }) => ({
        id: entry.sys.id,
        title: (entry.fields.title as string) || '',
        slug: (entry.fields.slug as string) || '',
        excerpt: (entry.fields.excerpt as string) || '',
        content: (entry.fields.content as string) || '',
        featuredImage: entry.fields.featuredImage as ContentfulAsset,
        client: entry.fields.client as {
          name: string;
          logo?: ContentfulAsset;
          industry: string;
        },
        project: entry.fields.project as {
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
        },
        publishedAt: entry.sys.createdAt,
        updatedAt: entry.sys.updatedAt,
      })
    );
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getCaseStudy(
  slug: string,
  preview = false
): Promise<CaseStudy | null> {
  const client = getClient(preview);

  if (!client) {
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: 'caseStudy',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry = entries.items[0] as {
      sys: { id: string; createdAt: string; updatedAt: string };
      fields: Record<string, unknown>;
    };
    return {
      id: entry.sys.id,
      title: (entry.fields.title as string) || '',
      slug: (entry.fields.slug as string) || '',
      excerpt: (entry.fields.excerpt as string) || '',
      content: (entry.fields.content as string) || '',
      featuredImage: entry.fields.featuredImage as ContentfulAsset,
      client: entry.fields.client as {
        name: string;
        logo?: ContentfulAsset;
        industry: string;
      },
      project: entry.fields.project as {
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
      },
      publishedAt: entry.sys.createdAt,
      updatedAt: entry.sys.updatedAt,
    };
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

// Services
export async function getServices(preview = false): Promise<Service[]> {
  const client = getClient(preview);

  if (!client) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'service',
      order: ['fields.order'],
    });

    return entries.items.map(
      (entry: {
        sys: { id: string; createdAt: string; updatedAt: string };
        fields: Record<string, unknown>;
      }) => ({
        id: entry.sys.id,
        title: (entry.fields.title as string) || '',
        slug: (entry.fields.slug as string) || '',
        description: (entry.fields.description as string) || '',
        content: (entry.fields.content as string) || '',
        icon: (entry.fields.icon as string) || '',
        features: (entry.fields.features as string[]) || [],
        benefits: (entry.fields.benefits as string[]) || [],
        process:
          (entry.fields.process as {
            step: number;
            title: string;
            description: string;
          }[]) || [],
        pricing: entry.fields.pricing as {
          model: string;
          startingFrom: string;
          description: string;
        },
      })
    );
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getService(
  slug: string,
  preview = false
): Promise<Service | null> {
  const client = getClient(preview);

  if (!client) {
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: 'service',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry = entries.items[0] as {
      sys: { id: string; createdAt: string; updatedAt: string };
      fields: Record<string, unknown>;
    };
    return {
      id: entry.sys.id,
      title: (entry.fields.title as string) || '',
      slug: (entry.fields.slug as string) || '',
      description: (entry.fields.description as string) || '',
      content: (entry.fields.content as string) || '',
      icon: (entry.fields.icon as string) || '',
      features: (entry.fields.features as string[]) || [],
      benefits: (entry.fields.benefits as string[]) || [],
      process:
        (entry.fields.process as {
          step: number;
          title: string;
          description: string;
        }[]) || [],
      pricing: entry.fields.pricing as {
        model: string;
        startingFrom: string;
        description: string;
      },
    };
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Team Members
export async function getTeamMembers(preview = false): Promise<TeamMember[]> {
  const client = getClient(preview);

  if (!client) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'teamMember',
      order: ['fields.order'],
    });

    return entries.items.map(
      (entry: {
        sys: { id: string; createdAt: string; updatedAt: string };
        fields: Record<string, unknown>;
      }) => ({
        id: entry.sys.id,
        name: (entry.fields.name as string) || '',
        position: (entry.fields.position as string) || '',
        bio: (entry.fields.bio as string) || '',
        avatar: entry.fields.avatar as ContentfulAsset,
        social: (entry.fields.social as Record<string, unknown>) || {},
        skills: (entry.fields.skills as string[]) || [],
        experience: (entry.fields.experience as number) || 0,
      })
    );
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// Job Postings
export async function getJobPostings(preview = false): Promise<JobPosting[]> {
  const client = getClient(preview);

  if (!client) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'jobPosting',
      order: ['-sys.createdAt'],
    });

    return entries.items.map(
      (entry: {
        sys: { id: string; createdAt: string; updatedAt: string };
        fields: Record<string, unknown>;
      }) => ({
        id: entry.sys.id,
        title: (entry.fields.title as string) || '',
        slug: (entry.fields.slug as string) || '',
        department: (entry.fields.department as string) || '',
        location: (entry.fields.location as string) || '',
        type:
          (entry.fields.type as
            | 'full-time'
            | 'part-time'
            | 'contract'
            | 'internship') || 'full-time',
        experience: (entry.fields.experience as string) || '',
        description: (entry.fields.description as string) || '',
        requirements: (entry.fields.requirements as string[]) || [],
        benefits: (entry.fields.benefits as string[]) || [],
        salary: entry.fields.salary as
          | {
              min: number;
              max: number;
              currency: string;
            }
          | undefined,
        publishedAt: entry.sys.createdAt,
        applicationDeadline: (entry.fields.applicationDeadline as string) || '',
      })
    );
  } catch (error) {
    console.error('Error fetching job postings:', error);
    return [];
  }
}

export async function getJobPosting(
  slug: string,
  preview = false
): Promise<JobPosting | null> {
  const client = getClient(preview);

  if (!client) {
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: 'jobPosting',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const entry = entries.items[0] as {
      sys: { id: string; createdAt: string; updatedAt: string };
      fields: Record<string, unknown>;
    };
    return {
      id: entry.sys.id,
      title: (entry.fields.title as string) || '',
      slug: (entry.fields.slug as string) || '',
      department: (entry.fields.department as string) || '',
      location: (entry.fields.location as string) || '',
      type:
        (entry.fields.type as
          | 'full-time'
          | 'part-time'
          | 'contract'
          | 'internship') || 'full-time',
      experience: (entry.fields.experience as string) || '',
      description: (entry.fields.description as string) || '',
      requirements: (entry.fields.requirements as string[]) || [],
      benefits: (entry.fields.benefits as string[]) || [],
      salary: entry.fields.salary as
        | {
            min: number;
            max: number;
            currency: string;
          }
        | undefined,
      publishedAt: entry.sys.createdAt,
      applicationDeadline: (entry.fields.applicationDeadline as string) || '',
    };
  } catch (error) {
    console.error('Error fetching job posting:', error);
    return null;
  }
}
