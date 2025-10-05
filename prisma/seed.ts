import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@zmsithub.com' },
    update: {},
    create: {
      email: 'admin@zmsithub.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'admin',
      isActive: true,
    },
  });

  console.log('Created admin user:', admin);

  // Create some sample team members
  const teamMembers = [
    {
      name: 'Sohail Abbas',
      position: 'Founder & CEO',
      bio: 'Visionary leader with expertise in project management and business strategy.',
      imageUrl: '/images/sohail-abbas.jpg',
      linkedinUrl: 'https://linkedin.com/in/sohailabbas18',
      email: 'sohailabbas.ceo@gmail.com',
      isFounder: true,
      displayOrder: 1,
    },
    {
      name: 'Muhammad Safdar',
      position: 'Co-Founder & CTO',
      bio: 'Technical expert leading our development initiatives.',
      imageUrl: '/images/muhammad-safdar.png',
      linkedinUrl: 'https://linkedin.com/in/muhammadsafdar',
      email: 'safdar@zmsithub.com',
      isFounder: true,
      displayOrder: 2,
    },
  ];

  for (const member of teamMembers) {
    const existing = await prisma.teamMember.findFirst({
      where: { email: member.email },
    });

    if (!existing) {
      await prisma.teamMember.create({
        data: member,
      });
    }
  }

  console.log('Created team members');

  // Create sample settings
  const settings = [
    {
      key: 'site_name',
      value: 'ZMS IT Hub',
      type: 'string',
      description: 'Website name',
    },
    {
      key: 'site_description',
      value: 'Leading software development company in Pakistan',
      type: 'string',
      description: 'Website description',
    },
    {
      key: 'contact_email',
      value: 'info@zmsithub.com',
      type: 'string',
      description: 'Contact email address',
    },
    {
      key: 'contact_phone',
      value: '+92 300 1234567',
      type: 'string',
      description: 'Contact phone number',
    },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log('Created settings');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
