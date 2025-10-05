import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { hasPermission } from '@/lib/permissions';
import { userSchema } from '@/lib/validations';
import bcrypt from 'bcryptjs';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'VIEW_USERS')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        image: true,
        createdAt: true,
        // Don't return password
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'MANAGE_USERS')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Prevent users from modifying their own role or status
    if (session.user.id === params.id) {
      return NextResponse.json(
        { error: 'Cannot modify your own account' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const validatedData = userSchema.parse(body);

    const updateData: {
      name: string;
      email: string;
      role: string;
      image?: string;
      isActive: boolean;
      password?: string;
    } = {
      name: validatedData.name,
      email: validatedData.email,
      role: validatedData.role,
      image: validatedData.image,
      isActive: validatedData.isActive,
    };

    // Hash password if provided
    if (validatedData.password) {
      updateData.password = await bcrypt.hash(validatedData.password, 12);
    }

    const user = await prisma.user.update({
      where: { id: params.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        image: true,
        createdAt: true,
        // Don't return password
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'MANAGE_USERS')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Prevent users from deleting their own account
    if (session.user.id === params.id) {
      return NextResponse.json(
        { error: 'Cannot delete your own account' },
        { status: 403 }
      );
    }

    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
