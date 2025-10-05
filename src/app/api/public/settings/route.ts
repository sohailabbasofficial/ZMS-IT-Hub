import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const settings = await prisma.setting.findMany({
      where: {
        key: {
          startsWith: 'general_',
        },
      },
    });

    // Convert settings array to object
    const settingsObject: Record<string, string | number | boolean | object> =
      {};
    settings.forEach((setting) => {
      const key = setting.key.replace('general_', '');
      let value: string | number | boolean | object = setting.value || '';

      // Parse value based on type
      if (setting.type === 'boolean') {
        value = value === 'true';
      } else if (setting.type === 'number') {
        value = parseInt(value || '0');
      } else if (setting.type === 'json') {
        try {
          value = JSON.parse(value || '{}');
        } catch {
          value = {};
        }
      }

      settingsObject[key] = value;
    });

    return NextResponse.json(settingsObject);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
