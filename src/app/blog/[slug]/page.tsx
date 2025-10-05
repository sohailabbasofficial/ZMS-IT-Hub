import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Image from 'next/image';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const blogPost = await prisma.blogPost.findUnique({
    where: { slug: params.slug, status: 'published' },
    select: {
      title: true,
      seoTitle: true,
      seoDescription: true,
      excerpt: true,
      featuredImage: true,
    },
  });

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blogPost.seoTitle || blogPost.title,
    description: blogPost.seoDescription || blogPost.excerpt || '',
    openGraph: {
      title: blogPost.seoTitle || blogPost.title,
      description: blogPost.seoDescription || blogPost.excerpt || '',
      images: blogPost.featuredImage ? [blogPost.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await prisma.blogPost.findUnique({
    where: { slug: params.slug, status: 'published' },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  if (!blogPost) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const parseTags = (tagsString?: string) => {
    if (!tagsString) return [];
    try {
      return JSON.parse(tagsString);
    } catch {
      return tagsString.split(',').map((tag) => tag.trim());
    }
  };

  const tags = parseTags(blogPost.tags || '');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {blogPost.title}
            </h1>
            {blogPost.excerpt && (
              <p className="mb-6 text-xl text-gray-600">{blogPost.excerpt}</p>
            )}
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>By {blogPost.author.name}</span>
              <span>•</span>
              <span>
                {formatDate(
                  (blogPost.publishedAt || blogPost.createdAt).toString()
                )}
              </span>
              {blogPost.readingTime && (
                <>
                  <span>•</span>
                  <span>{blogPost.readingTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blogPost.featuredImage && (
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Image
            src={blogPost.featuredImage}
            alt={blogPost.title}
            width={800}
            height={256}
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed text-gray-800">
              {blogPost.content}
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                {blogPost.author.image ? (
                  <Image
                    src={blogPost.author.image}
                    alt={blogPost.author.name || 'Author'}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-medium text-gray-600">
                    {(blogPost.author.name || 'A').charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {blogPost.author.name}
                </h3>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="mx-auto max-w-4xl px-4 pb-8">
        <a
          href="/blog"
          className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
        >
          ← Back to Blog
        </a>
      </div>
    </div>
  );
}
