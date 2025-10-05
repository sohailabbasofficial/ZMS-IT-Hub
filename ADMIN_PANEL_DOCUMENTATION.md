# Admin Panel Development Documentation

## ZMS IT Hub Website - Complete Admin Panel Guide

### 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [Database Design](#database-design)
4. [Authentication System](#authentication-system)
5. [Admin Panel Features](#admin-panel-features)
6. [Implementation Steps](#implementation-steps)
7. [File Structure](#file-structure)
8. [API Routes](#api-routes)
9. [Components](#components)
10. [Security Considerations](#security-considerations)
11. [Deployment](#deployment)

---

## Overview

This documentation provides a complete guide for creating an admin panel for the ZMS IT Hub website. The admin panel will allow administrators to manage content, users, projects, and other website data through a secure web interface.

### Key Features

- **Content Management**: Manage team members, projects, services, blog posts
- **User Management**: Handle user accounts, roles, and permissions
- **Analytics Dashboard**: View website statistics and performance metrics
- **File Management**: Upload and manage images, documents
- **Settings Management**: Configure website settings and preferences

---

## Architecture & Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **React Query/TanStack Query** - Data fetching and caching

### Backend

- **Next.js API Routes** - Server-side API endpoints
- **Prisma** - Database ORM
- **PostgreSQL/MySQL** - Primary database
- **NextAuth.js** - Authentication system
- **Cloudinary/AWS S3** - File storage

### Additional Tools

- **Chart.js/Recharts** - Data visualization
- **React Table** - Data tables
- **React DnD** - Drag and drop functionality
- **Date-fns** - Date manipulation

---

## Database Design

### Core Tables

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor', 'viewer') DEFAULT 'viewer',
  avatar_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Team members table
CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(500),
  linkedin_url VARCHAR(500),
  email VARCHAR(255),
  phone VARCHAR(50),
  is_founder BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects/Case Studies table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content TEXT,
  featured_image VARCHAR(500),
  gallery JSON, -- Array of image URLs
  technologies JSON, -- Array of technology names
  client_name VARCHAR(255),
  project_url VARCHAR(500),
  github_url VARCHAR(500),
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  featured BOOLEAN DEFAULT false,
  completed_at DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content TEXT,
  icon VARCHAR(255), -- Icon name or URL
  featured_image VARCHAR(500),
  price_range VARCHAR(100),
  duration VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  author_id INTEGER REFERENCES users(id),
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  seo_title VARCHAR(255),
  seo_description TEXT,
  tags JSON, -- Array of tag names
  reading_time INTEGER, -- Minutes
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact inquiries table
CREATE TABLE contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status ENUM('new', 'in_progress', 'resolved', 'closed') DEFAULT 'new',
  assigned_to INTEGER REFERENCES users(id),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Website settings table
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value TEXT,
  type ENUM('string', 'number', 'boolean', 'json') DEFAULT 'string',
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- File uploads table
CREATE TABLE file_uploads (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INTEGER,
  mime_type VARCHAR(100),
  uploaded_by INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Authentication System

### NextAuth.js Configuration

```typescript
// lib/auth.ts
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.is_active) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password_hash
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar_url,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
        session.user.avatar = token.avatar as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
};
```

### Role-Based Access Control

```typescript
// lib/permissions.ts
export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
} as const;

export const PERMISSIONS = {
  // User management
  MANAGE_USERS: [ROLES.ADMIN],
  VIEW_USERS: [ROLES.ADMIN, ROLES.EDITOR],

  // Content management
  MANAGE_CONTENT: [ROLES.ADMIN, ROLES.EDITOR],
  PUBLISH_CONTENT: [ROLES.ADMIN, ROLES.EDITOR],
  VIEW_CONTENT: [ROLES.ADMIN, ROLES.EDITOR, ROLES.VIEWER],

  // Settings
  MANAGE_SETTINGS: [ROLES.ADMIN],
  VIEW_ANALYTICS: [ROLES.ADMIN, ROLES.EDITOR],

  // File management
  UPLOAD_FILES: [ROLES.ADMIN, ROLES.EDITOR],
  DELETE_FILES: [ROLES.ADMIN],
} as const;

export function hasPermission(
  userRole: string,
  permission: keyof typeof PERMISSIONS
): boolean {
  return PERMISSIONS[permission].includes(userRole as any);
}
```

---

## Admin Panel Features

### 1. Dashboard

- **Overview Statistics**: Total projects, team members, blog posts, inquiries
- **Recent Activity**: Latest content updates, new inquiries
- **Analytics Charts**: Website traffic, popular pages, conversion rates
- **Quick Actions**: Add new content, manage pending items

### 2. Content Management

- **Team Members**: Add, edit, delete team member profiles
- **Projects**: Manage case studies and portfolio items
- **Services**: Update service offerings and descriptions
- **Blog Posts**: Create and manage blog content with rich text editor

### 3. User Management

- **User Accounts**: Manage admin users and their roles
- **Role Assignment**: Assign permissions based on user roles
- **Activity Logs**: Track user actions and changes

### 4. File Management

- **Media Library**: Upload and organize images, documents
- **Image Optimization**: Automatic resizing and compression
- **File Organization**: Folder structure and tagging system

### 5. Settings & Configuration

- **Site Settings**: Company information, contact details
- **SEO Settings**: Meta tags, social media settings
- **Email Configuration**: SMTP settings, email templates

---

## Implementation Steps

### Step 1: Project Setup

```bash
# Install required dependencies
npm install @prisma/client prisma next-auth @next-auth/prisma-adapter
npm install react-hook-form @hookform/resolvers zod
npm install @tanstack/react-query @tanstack/react-query-devtools
npm install recharts react-table @tanstack/react-table
npm install bcryptjs @types/bcryptjs
npm install cloudinary multer @types/multer
npm install react-quill quill
```

### Step 2: Database Setup

```bash
# Initialize Prisma
npx prisma init

# Create and run migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

### Step 3: Environment Variables

```env
# .env.local
DATABASE_URL="postgresql://username:password@localhost:5432/zms_admin"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Cloudinary (for file uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

---

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── team/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── users/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── files/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   └── api/
│       ├── auth/
│       │   └── [...nextauth]/
│       │       └── route.ts
│       ├── admin/
│       │   ├── team/
│       │   │   ├── route.ts
│       │   │   └── [id]/
│       │   │       └── route.ts
│       │   ├── projects/
│       │   │   ├── route.ts
│       │   │   └── [id]/
│       │   │       └── route.ts
│       │   ├── blog/
│       │   │   ├── route.ts
│       │   │   └── [id]/
│       │   │       └── route.ts
│       │   ├── users/
│       │   │   ├── route.ts
│       │   │   └── [id]/
│       │   │       └── route.ts
│       │   ├── files/
│       │   │   └── route.ts
│       │   └── settings/
│       │       └── route.ts
│       └── upload/
│           └── route.ts
├── components/
│   ├── admin/
│   │   ├── layout/
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── AdminHeader.tsx
│   │   │   └── AdminBreadcrumb.tsx
│   │   ├── dashboard/
│   │   │   ├── StatsCards.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   ├── AnalyticsChart.tsx
│   │   │   └── QuickActions.tsx
│   │   ├── forms/
│   │   │   ├── TeamMemberForm.tsx
│   │   │   ├── ProjectForm.tsx
│   │   │   ├── BlogPostForm.tsx
│   │   │   ├── UserForm.tsx
│   │   │   └── SettingsForm.tsx
│   │   ├── tables/
│   │   │   ├── DataTable.tsx
│   │   │   ├── TeamTable.tsx
│   │   │   ├── ProjectsTable.tsx
│   │   │   ├── BlogTable.tsx
│   │   │   └── UsersTable.tsx
│   │   ├── ui/
│   │   │   ├── FileUpload.tsx
│   │   │   ├── RichTextEditor.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ConfirmDialog.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   └── auth/
│   │       ├── LoginForm.tsx
│   │       └── ProtectedRoute.tsx
│   └── ui/
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   ├── permissions.ts
│   ├── validations.ts
│   ├── utils.ts
│   ├── cloudinary.ts
│   └── email.ts
├── hooks/
│   ├── useAuth.ts
│   ├── usePermissions.ts
│   ├── useFileUpload.ts
│   └── useLocalStorage.ts
└── types/
    ├── admin.ts
    ├── auth.ts
    └── api.ts
```

---

## API Routes

### Team Management API

```typescript
// app/api/admin/team/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { hasPermission } from '@/lib/permissions';
import { teamMemberSchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'VIEW_CONTENT')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { position: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [teamMembers, total] = await Promise.all([
      prisma.teamMember.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { display_order: 'asc' },
      }),
      prisma.teamMember.count({ where }),
    ]);

    return NextResponse.json({
      data: teamMembers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'MANAGE_CONTENT')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = teamMemberSchema.parse(body);

    const teamMember = await prisma.teamMember.create({
      data: validatedData,
    });

    return NextResponse.json(teamMember, { status: 201 });
  } catch (error) {
    console.error('Error creating team member:', error);
    return NextResponse.json(
      { error: 'Failed to create team member' },
      { status: 500 }
    );
  }
}
```

### File Upload API

```typescript
// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { hasPermission } from '@/lib/permissions';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'UPLOAD_FILES')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Upload to Cloudinary
    const uploadResult = await uploadToCloudinary(file);

    // Save file record to database
    const fileRecord = await prisma.fileUpload.create({
      data: {
        filename: uploadResult.public_id,
        original_name: file.name,
        file_path: uploadResult.secure_url,
        file_size: file.size,
        mime_type: file.type,
        uploaded_by: parseInt(session.user.id),
      },
    });

    return NextResponse.json({
      id: fileRecord.id,
      url: uploadResult.secure_url,
      filename: file.name,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
```

---

## Components

### Admin Layout Component

```typescript
// components/admin/layout/AdminLayout.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import LoadingSpinner from '../ui/LoadingSpinner';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/admin/login');
      return;
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### Data Table Component

```typescript
// components/admin/tables/DataTable.tsx
'use client';

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { useState } from 'react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchPlaceholder?: string;
  onRowClick?: (row: TData) => void;
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  searchPlaceholder = 'Search...',
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="flex items-center justify-between">
        <input
          placeholder={searchPlaceholder}
          value={globalFilter ?? ''}
          onChange={(event) => setGlobalFilter(String(event.target.value))}
          className="max-w-sm rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Table */}
      <div className="rounded-md border bg-white">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b bg-gray-50">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b hover:bg-gray-50 ${
                    onRowClick ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3 text-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{' '}
          of {table.getFilteredRowModel().rows.length} results
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
```

### Rich Text Editor Component

```typescript
// components/admin/ui/RichTextEditor.tsx
'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing...',
  height = '300px',
}: RichTextEditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
  ];

  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ height }}
      />
    </div>
  );
}
```

---

## Security Considerations

### 1. Authentication & Authorization

- **Strong Password Policy**: Minimum 8 characters, mixed case, numbers, symbols
- **Session Management**: Secure JWT tokens with proper expiration
- **Role-Based Access**: Granular permissions based on user roles
- **Two-Factor Authentication**: Optional 2FA for enhanced security

### 2. Data Validation

- **Input Sanitization**: Validate and sanitize all user inputs
- **SQL Injection Prevention**: Use Prisma ORM with parameterized queries
- **XSS Protection**: Sanitize HTML content and use CSP headers
- **File Upload Security**: Validate file types, sizes, and scan for malware

### 3. API Security

- **Rate Limiting**: Prevent API abuse with request limits
- **CORS Configuration**: Restrict cross-origin requests
- **HTTPS Only**: Force SSL/TLS encryption
- **API Key Management**: Secure storage of sensitive keys

### 4. Data Protection

- **Encryption**: Encrypt sensitive data at rest and in transit
- **Backup Strategy**: Regular automated backups with encryption
- **Audit Logging**: Track all admin actions and changes
- **GDPR Compliance**: Data privacy and user rights management

---

## Deployment

### Production Environment Setup

```bash
# Build the application
npm run build

# Set production environment variables
export NODE_ENV=production
export DATABASE_URL="your-production-db-url"
export NEXTAUTH_SECRET="your-production-secret"
export NEXTAUTH_URL="https://yourdomain.com"

# Run database migrations
npx prisma migrate deploy

# Start the application
npm start
```

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Getting Started

### 1. Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd zms-admin-panel

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up database
npx prisma migrate dev
npx prisma generate

# Create initial admin user
npm run seed
```

### 2. Development

```bash
# Start development server
npm run dev

# Access admin panel
# http://localhost:3000/admin
```

### 3. Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Support & Maintenance

### Regular Tasks

- **Database Backups**: Daily automated backups
- **Security Updates**: Monthly dependency updates
- **Performance Monitoring**: Monitor response times and errors
- **User Access Review**: Quarterly review of user permissions

### Troubleshooting

- **Check logs**: `tail -f logs/admin.log`
- **Database issues**: Verify connection and run migrations
- **Authentication problems**: Check NextAuth configuration
- **File upload issues**: Verify Cloudinary/S3 configuration

---

## Conclusion

This documentation provides a comprehensive guide for building a robust admin panel for the ZMS IT Hub website. The implementation follows modern best practices for security, scalability, and maintainability.

For additional support or customization requests, please contact the development team.

---

**Last Updated**: October 2024  
**Version**: 1.0  
**Author**: ZMS IT Hub Development Team
