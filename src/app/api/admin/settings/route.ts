import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { hasPermission } from '@/lib/permissions';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'MANAGE_SETTINGS')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.setting.findMany({
      orderBy: { key: 'asc' },
    });

    // Group settings by category (prefix before first underscore)
    const groupedSettings: Record<
      string,
      Record<string, string | number | boolean | object>
    > = {};

    settings.forEach((setting) => {
      const [category, ...keyParts] = setting.key.split('_');
      const key = keyParts.join('_');

      if (!groupedSettings[category]) {
        groupedSettings[category] = {};
      }

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

      groupedSettings[category][key] = value;
    });

    return NextResponse.json(groupedSettings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !hasPermission(session.user.role, 'MANAGE_SETTINGS')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Flatten the grouped settings back to individual key-value pairs
    const settingsToUpdate: Array<{
      key: string;
      value: string;
      type: string;
    }> = [];

    Object.entries(body).forEach(([category, categorySettings]) => {
      Object.entries(
        categorySettings as Record<string, string | number | boolean | object>
      ).forEach(([key, value]) => {
        const fullKey = `${category}_${key}`;
        let stringValue = String(value);
        let type = 'string';

        if (typeof value === 'boolean') {
          type = 'boolean';
          stringValue = String(value);
        } else if (typeof value === 'number') {
          type = 'number';
          stringValue = String(value);
        } else if (typeof value === 'object') {
          type = 'json';
          stringValue = JSON.stringify(value);
        }

        settingsToUpdate.push({
          key: fullKey,
          value: stringValue,
          type,
        });
      });
    });

    // Update or create settings
    for (const setting of settingsToUpdate) {
      await prisma.setting.upsert({
        where: { key: setting.key },
        update: {
          value: setting.value,
          type: setting.type,
        },
        create: {
          key: setting.key,
          value: setting.value,
          type: setting.type,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
