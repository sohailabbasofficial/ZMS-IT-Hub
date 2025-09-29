import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
      New Contact Form Submission from ZMS IT Hub Website

      Contact Details:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Company: ${data.company || 'Not provided'}
      Service: ${data.service}
      Budget: ${data.budget || 'Not specified'}
      Timeline: ${data.timeline || 'Not specified'}

      Message:
      ${data.message}

      ---
      This message was sent from the ZMS IT Hub contact form.
      Time: ${new Date().toISOString()}
    `;

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission - ${data.name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Send confirmation email to client
    const confirmationContent = `
      Dear ${data.name},

      Thank you for reaching out to ZMS IT Hub!

      We have received your message regarding "${data.service}" and will get back to you within 24 hours.

      Here's a summary of your inquiry:
      Service: ${data.service}
      Budget: ${data.budget || 'Not specified'}
      Timeline: ${data.timeline || 'Not specified'}

      If you have any urgent questions, please don't hesitate to call us at +92 370 9472900.

      Best regards,
      ZMS IT Hub Team
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'Thank you for contacting ZMS IT Hub',
      text: confirmationContent,
      html: confirmationContent.replace(/\n/g, '<br>'),
    });

    // Optional: Send to webhook (CRM integration)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
            source: 'website_contact_form',
          }),
        });
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

