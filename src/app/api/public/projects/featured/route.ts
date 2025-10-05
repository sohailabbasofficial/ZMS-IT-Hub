import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      where: {
        status: 'published',
        featured: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 6, // Limit to 6 featured projects
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

