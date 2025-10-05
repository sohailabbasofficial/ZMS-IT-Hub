import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Save the inquiry to the database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        subject: validatedData.subject || 'General Inquiry',
        message: validatedData.message,
        status: 'new',
      },
    });

    // Here you could also send an email notification
    // await sendEmailNotification(inquiry);

    return NextResponse.json({
      success: true,
      message:
        "Your message has been sent successfully. We'll get back to you within 24 hours.",
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form data and try again.',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to send message. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}
