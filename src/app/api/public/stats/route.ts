import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get real statistics from database
    const [teamMembersCount, projectsCount] = await Promise.all([
      prisma.teamMember.count({ where: { isActive: true } }),
      prisma.project.count({ where: { status: 'published' } }),
    ]);

    // Get years of experience from settings or use default
    const experienceSetting = await prisma.setting.findUnique({
      where: { key: 'general_years_experience' },
    });

    const stats = {
      projects: projectsCount || 3,
      teamMembers: teamMembersCount || 10,
      yearsExperience: experienceSetting
        ? parseInt(experienceSetting.value || '3')
        : 3,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Return default stats if database fails
    return NextResponse.json({
      projects: 3,
      teamMembers: 10,
      yearsExperience: 3,
    });
  }
}
