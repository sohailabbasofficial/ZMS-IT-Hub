import { NextResponse } from 'next/server';
import { requireAdminAuth } from '@/lib/auth-utils';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await requireAdminAuth();

    // Get real statistics from database
    const [
      teamMembersCount,
      usersCount,
      activeUsersCount,
      projectsCount,
      blogPostsCount,
      inquiriesCount,
    ] = await Promise.all([
      prisma.teamMember.count({ where: { isActive: true } }),
      prisma.user.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.project.count({ where: { status: 'published' } }),
      prisma.blogPost.count({ where: { status: 'published' } }),
      prisma.contactInquiry.count(),
    ]);

    const stats = {
      teamMembers: teamMembersCount,
      projects: projectsCount,
      blogPosts: blogPostsCount,
      inquiries: inquiriesCount,
      totalUsers: usersCount,
      activeUsers: activeUsersCount,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);

    if (error instanceof Error && error.message.includes('Unauthorized')) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
