import { z } from 'zod';

// Team Member Schema
export const teamMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position is required'),
  bio: z.string().optional(),
  imageUrl: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  isFounder: z.boolean(),
  displayOrder: z.number(),
  isActive: z.boolean(),
});

// Project Schema
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  content: z.string().optional(),
  featuredImage: z.string().url().optional().or(z.literal('')),
  gallery: z.array(z.string().url()).optional(),
  technologies: z.array(z.string()).optional(),
  clientName: z.string().optional(),
  projectUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  status: z.enum(['draft', 'published', 'archived']),
  featured: z.boolean(),
  completedAt: z.date().optional(),
});

// Service Schema
export const serviceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  content: z.string().optional(),
  icon: z.string().optional(),
  featuredImage: z.string().url().optional().or(z.literal('')),
  priceRange: z.string().optional(),
  duration: z.string().optional(),
  isActive: z.boolean(),
  displayOrder: z.number(),
});

// Blog Post Schema
export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  featuredImage: z.string().url().optional().or(z.literal('')),
  status: z.enum(['draft', 'published', 'archived']),
  featured: z.boolean(),
  publishedAt: z.date().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  tags: z.array(z.string()).optional(),
  readingTime: z.number().optional(),
});

// User Schema
export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .optional(),
  role: z.enum(['admin', 'editor', 'viewer']),
  image: z.string().url().optional().or(z.literal('')),
  isActive: z.boolean(),
});

// Contact Inquiry Schema
export const contactInquirySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  status: z.enum(['new', 'in_progress', 'resolved', 'closed']),
  assignedTo: z.string().optional(),
  notes: z.string().optional(),
});

// Setting Schema
export const settingSchema = z.object({
  key: z.string().min(1, 'Key is required'),
  value: z.string().optional(),
  type: z.enum(['string', 'number', 'boolean', 'json']),
  description: z.string().optional(),
});

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(1, 'Password is required'),
});

export type TeamMemberInput = z.infer<typeof teamMemberSchema>;
export type ProjectInput = z.infer<typeof projectSchema>;
export type ServiceInput = z.infer<typeof serviceSchema>;
export type BlogPostInput = z.infer<typeof blogPostSchema>;
export type UserInput = z.infer<typeof userSchema>;
export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
export type SettingInput = z.infer<typeof settingSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
