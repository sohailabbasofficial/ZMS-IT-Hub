'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FiSave, FiEye, FiArrowLeft, FiTrash2 } from 'react-icons/fi';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  author: {
    id: string;
    name: string;
    image?: string;
  };
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    status: 'draft' as 'draft' | 'published' | 'archived',
    featured: false,
    seoTitle: '',
    seoDescription: '',
    tags: '',
  });

  useEffect(() => {
    fetchBlogPost();
  }, [params.id]);

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setBlogPost(data);
        setFormData({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt || '',
          content: data.content,
          featuredImage: data.featuredImage || '',
          status: data.status,
          featured: data.featured,
          seoTitle: data.seoTitle || '',
          seoDescription: data.seoDescription || '',
          tags: data.tags || '',
        });
      } else {
        console.error('Failed to fetch blog post');
        router.push('/admin/blog');
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      router.push('/admin/blog');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      seoTitle: prev.seoTitle || title,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/blog/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags
            ? JSON.stringify(formData.tags.split(',').map((tag) => tag.trim()))
            : null,
        }),
      });

      if (response.ok) {
        const updatedPost = await response.json();
        setBlogPost(updatedPost);
        alert('Blog post updated successfully!');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to update blog post');
      }
    } catch (error) {
      console.error('Error updating blog post:', error);
      alert('Error updating blog post');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm(
        'Are you sure you want to delete this blog post? This action cannot be undone.'
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/blog/${params.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/admin/blog');
      } else {
        alert('Failed to delete blog post');
      }
    } catch (error) {
      console.error('Error deleting blog post:', error);
      alert('Error deleting blog post');
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="py-12 text-center">
        <div className="text-lg text-gray-500">Blog post not found</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <FiArrowLeft className="mr-2 h-4 w-4" />
            Back
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Blog Post</h1>
            <p className="text-gray-600">
              Last updated: {new Date(blogPost.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200"
          >
            <FiEye className="mr-2 h-4 w-4" />
            {previewMode ? 'Edit' : 'Preview'}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          >
            <FiTrash2 className="mr-2 h-4 w-4" />
            Delete
          </button>
          <button
            type="submit"
            form="blog-form"
            disabled={saving}
            className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <FiSave className="mr-2 h-4 w-4" />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleTitleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog post title"
              />
            </div>

            {/* Slug */}
            <div>
              <label
                htmlFor="slug"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Slug *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="blog-post-slug"
              />
              <p className="mt-1 text-sm text-gray-500">
                URL: /blog/{formData.slug}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label
                htmlFor="excerpt"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Brief description of the blog post"
              />
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Content *
              </label>
              {previewMode ? (
                <div className="min-h-96 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2">
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: formData.content.replace(/\n/g, '<br>'),
                    }}
                  />
                </div>
              ) : (
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={20}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your blog post content here..."
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-lg font-medium text-gray-900">
                Publish
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="featured"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Featured post
                  </label>
                </div>
                {blogPost.publishedAt && (
                  <div className="text-sm text-gray-500">
                    Published: {new Date(blogPost.publishedAt).toLocaleString()}
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-lg font-medium text-gray-900">
                Featured Image
              </h3>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* SEO */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-lg font-medium text-gray-900">SEO</h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="seoTitle"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    SEO Title
                  </label>
                  <input
                    type="text"
                    id="seoTitle"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="SEO optimized title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="seoDescription"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    SEO Description
                  </label>
                  <textarea
                    id="seoDescription"
                    name="seoDescription"
                    value={formData.seoDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Meta description for search engines"
                  />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-lg font-medium text-gray-900">Tags</h3>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="tag1, tag2, tag3"
              />
              <p className="mt-1 text-sm text-gray-500">
                Separate tags with commas
              </p>
            </div>

            {/* Author Info */}
            <div className="rounded-lg border bg-white p-4">
              <h3 className="mb-4 text-lg font-medium text-gray-900">Author</h3>
              <div className="text-sm text-gray-600">
                <div>Name: {blogPost.author.name}</div>
                <div>
                  Created: {new Date(blogPost.createdAt).toLocaleString()}
                </div>
                <div>
                  Last Updated: {new Date(blogPost.updatedAt).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
