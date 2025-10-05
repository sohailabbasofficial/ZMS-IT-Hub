import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { hasPermission } from '@/lib/permissions';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'VIEW_DASHBOARD')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get analytics data from database
    const [
      totalInquiries,
      recentInquiries,
      totalProjects,
      publishedProjects,
      totalBlogPosts,
      publishedBlogPosts,
      activeTeamMembers,
    ] = await Promise.all([
      prisma.contactInquiry.count(),
      prisma.contactInquiry.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
      }),
      prisma.project.count(),
      prisma.project.count({ where: { status: 'published' } }),
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: 'published' } }),
      prisma.teamMember.count({ where: { isActive: true } }),
    ]);

    // Calculate conversion rates and growth
    const inquiryConversionRate =
      totalInquiries > 0
        ? Math.round((publishedProjects / totalInquiries) * 100)
        : 0;
    const projectGrowthRate =
      totalProjects > 0
        ? Math.round((publishedProjects / totalProjects) * 100)
        : 0;
    const contentGrowthRate =
      totalBlogPosts > 0
        ? Math.round((publishedBlogPosts / totalBlogPosts) * 100)
        : 0;

    const analytics = {
      monthlyVisitors: totalInquiries * 10, // Estimate based on inquiries
      pageViews: totalInquiries * 20, // Estimate based on inquiries
      conversionRate: inquiryConversionRate,
      teamGrowth: activeTeamMembers,
      projectSuccess: projectGrowthRate,
      contentEngagement: contentGrowthRate,
      recentActivity: recentInquiries,
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
