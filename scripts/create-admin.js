import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createSecureAdmin() {
  try {
    console.log('🔐 Creating secure admin user...');

    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@zmsithub.com' },
    });

    if (existingAdmin) {
      console.log('⚠️ Admin user already exists. Updating password...');

      // Update existing admin with new secure password
      const hashedPassword = await bcrypt.hash('SecureAdmin2025!', 12);

      await prisma.user.update({
        where: { email: 'admin@zmsithub.com' },
        data: {
          password: hashedPassword,
          role: 'admin',
          isActive: true,
          name: 'System Administrator',
        },
      });

      console.log('✅ Admin password updated successfully');
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash('SecureAdmin2025!', 12);

      const admin = await prisma.user.create({
        data: {
          email: 'admin@zmsithub.com',
          password: hashedPassword,
          name: 'System Administrator',
          role: 'admin',
          isActive: true,
        },
      });

      console.log('✅ Admin user created successfully');
    }

    console.log('🔐 Admin credentials:');
    console.log('Email: admin@zmsithub.com');
    console.log('Password: SecureAdmin2025!');
    console.log('');
    console.log('⚠️ IMPORTANT: Change this password after first login!');
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createSecureAdmin();
