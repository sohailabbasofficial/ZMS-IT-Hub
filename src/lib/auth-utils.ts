import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export async function requireAdminAuth() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('Unauthorized: No session found');
  }

  if (session.user.role !== 'admin') {
    throw new Error('Unauthorized: Admin role required');
  }

  return session;
}

export async function requireAuth() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('Unauthorized: No session found');
  }

  return session;
}
