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

    // Get recent activities from database
    const [
      recentUsers,
      recentTeamMembers,
      recentBlogPosts,
      recentProjects,
      recentInquiries,
    ] = await Promise.all([
      prisma.user.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: { id: true, name: true, createdAt: true, updatedAt: true },
      }),
      prisma.teamMember.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: { id: true, name: true, createdAt: true, updatedAt: true },
      }),
      prisma.blogPost.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          createdAt: true,
          updatedAt: true,
          status: true,
        },
      }),
      prisma.project.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          createdAt: true,
          updatedAt: true,
          status: true,
        },
      }),
      prisma.contactInquiry.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          status: true,
        },
      }),
    ]);

    // Create activity items from recent changes
    const activities = [
      ...recentUsers.map((user) => ({
        id: `user-${user.id}`,
        type: 'create' as const,
        entity: 'User',
        description: `New user registered: ${user.name}`,
        user: 'System',
        timestamp: user.createdAt.toISOString(),
        status: 'success' as const,
      })),
      ...recentTeamMembers.map((member) => ({
        id: `team-${member.id}`,
        type: 'create' as const,
        entity: 'Team Member',
        description: `Team member added: ${member.name}`,
        user: session.user.name || 'Admin',
        timestamp: member.createdAt.toISOString(),
        status: 'success' as const,
      })),
      ...recentBlogPosts.map((post) => ({
        id: `blog-${post.id}`,
        type: 'create' as const,
        entity: 'Blog Post',
        description: `Blog post created: ${post.title}`,
        user: session.user.name || 'Admin',
        timestamp: post.createdAt.toISOString(),
        status:
          post.status === 'published'
            ? ('success' as const)
            : ('warning' as const),
      })),
      ...recentProjects.map((project) => ({
        id: `project-${project.id}`,
        type: 'create' as const,
        entity: 'Project',
        description: `Project added: ${project.title}`,
        user: session.user.name || 'Admin',
        timestamp: project.createdAt.toISOString(),
        status:
          project.status === 'published'
            ? ('success' as const)
            : ('warning' as const),
      })),
      ...recentInquiries.map((inquiry) => ({
        id: `inquiry-${inquiry.id}`,
        type: 'create' as const,
        entity: 'Contact Inquiry',
        description: `New inquiry from: ${inquiry.name}`,
        user: inquiry.name,
        timestamp: inquiry.createdAt.toISOString(),
        status:
          inquiry.status === 'new'
            ? ('warning' as const)
            : ('success' as const),
      })),
    ]
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
      .slice(0, 10); // Get latest 10 activities

    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching dashboard activities:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
