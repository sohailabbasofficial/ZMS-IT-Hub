import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Blog | Software Development Insights & Industry News | ZMS IT Hub',
  description:
    'Stay updated with the latest insights on software development, technology trends, and business solutions from ZMS IT Hub experts.',
  keywords: [
    'software development blog',
    'technology insights',
    'business software solutions',
    'custom software development',
    'tech industry news',
    'software development tips',
  ],
};

export default async function BlogPage() {
  // Fetch blog posts from database
  const blogPosts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    orderBy: { publishedAt: 'desc' },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    take: 10, // Limit to 10 posts for pagination
  });

  // Get recent posts for sidebar
  const recentPosts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    orderBy: { publishedAt: 'desc' },
    take: 3,
    select: {
      id: true,
      title: true,
      slug: true,
      publishedAt: true,
    },
  });

  // Get categories (you can implement this based on tags or create a separate categories table)
  const categories = [
    { name: 'All', count: blogPosts.length },
    {
      name: 'Software Development',
      count: blogPosts.filter((post) =>
        post.tags?.includes('Software Development')
      ).length,
    },
    {
      name: 'Technology Trends',
      count: blogPosts.filter((post) =>
        post.tags?.includes('Technology Trends')
      ).length,
    },
    {
      name: 'Business Solutions',
      count: blogPosts.filter((post) =>
        post.tags?.includes('Business Solutions')
      ).length,
    },
    {
      name: 'Industry Insights',
      count: blogPosts.filter((post) =>
        post.tags?.includes('Industry Insights')
      ).length,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Our Blog</h1>
            <p className="mb-8 text-xl text-white/90">
              Stay updated with the latest insights on software development,
              technology trends, and business solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Categories */}
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link
                          href="#"
                          className="flex items-center justify-between text-gray-600 transition-colors duration-200 hover:text-primary"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-400">
                            ({category.count})
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-lg font-semibold text-secondary">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div
                        key={post.id}
                        className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="block transition-colors duration-200 hover:text-primary"
                        >
                          <h4 className="mb-2 text-sm font-medium leading-tight">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <FiCalendar size={12} />
                            <span>
                              {post.publishedAt
                                ? new Date(
                                    post.publishedAt
                                  ).toLocaleDateString()
                                : 'Draft'}
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="rounded-lg bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
                  <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
                  <p className="mb-4 text-sm text-white/90">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border-0 px-4 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/20"
                    />
                    <Button variant="secondary" size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="space-y-8">
                {blogPosts.map((post) => {
                  const tags = post.tags ? JSON.parse(post.tags) : [];
                  return (
                    <article
                      key={post.id}
                      className="card group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Featured Image */}
                        <div className="md:col-span-1">
                          <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary-dark to-primary">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                                <Logo
                                  width={80}
                                  height={80}
                                  showText={false}
                                  href=""
                                />
                              </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/10"></div>
                            <div className="absolute bottom-4 left-4 h-6 w-6 rounded-full bg-white/10"></div>
                            <div className="absolute left-4 top-1/2 h-4 w-4 rounded-full bg-white/10"></div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2">
                          <div className="p-6">
                            {/* Meta Info */}
                            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <FiUser className="mr-1" size={14} />
                                {post.author?.name || 'ZMS IT Hub'}
                              </span>
                              <span className="flex items-center">
                                <FiCalendar className="mr-1" size={14} />
                                {post.publishedAt
                                  ? new Date(
                                      post.publishedAt
                                    ).toLocaleDateString()
                                  : 'Draft'}
                              </span>
                              <span className="flex items-center">
                                <FiClock className="mr-1" size={14} />
                                {post.readingTime
                                  ? `${post.readingTime} min read`
                                  : '5 min read'}
                              </span>
                              {tags.length > 0 && (
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                                  {tags[0]}
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h2 className="mb-4 text-2xl font-bold text-secondary transition-colors duration-200 group-hover:text-primary">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h2>

                            {/* Excerpt */}
                            <p className="mb-6 leading-relaxed text-gray-600">
                              {post.excerpt || 'Read more about this topic...'}
                            </p>

                            {/* Tags */}
                            {tags.length > 0 && (
                              <div className="mb-6 flex flex-wrap gap-2">
                                {tags.map((tag: string) => (
                                  <span
                                    key={tag}
                                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Read More */}
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
                            >
                              Read More
                              <FiArrowRight className="ml-1" size={16} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    disabled
                    className="cursor-not-allowed rounded-lg bg-gray-100 px-4 py-2 text-gray-400"
                  >
                    Previous
                  </button>
                  <button className="rounded-lg bg-primary px-4 py-2 text-white">
                    1
                  </button>
                  <button
                    disabled
                    className="cursor-not-allowed rounded-lg bg-gray-100 px-4 py-2 text-gray-400"
                  >
                    Next
                  </button>
                </div>
              </div>
            </main>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Let's discuss how custom software solutions can drive your
              business forward.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Get Free Consultation
                <FiArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/services">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
