import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import { NextRequest } from 'next/server';

export async function requireAdminAuth(request?: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('Unauthorized: No session found');
  }

  if (session.user.role !== 'admin') {
    throw new Error('Unauthorized: Admin role required');
  }

  return session;
}

export async function requireAuth(request?: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('Unauthorized: No session found');
  }

  return session;
}
