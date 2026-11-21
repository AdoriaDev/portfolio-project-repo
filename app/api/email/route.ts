import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EmailSchema, sanitizeInput } from '@/app/utils/validators';
import { rateLimiter } from '@/app/utils/rate-limiter';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try{
    const body = await request.json().catch(() => ({}));

    const ip = 
      request.headers.get('x-forwarded-for')?.split(',')[0] || 
      request.headers.get('x-real-ip') || 
      'unknown';

    if(!rateLimiter.canSendEmail(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    const sanitizedBody = {
      email: sanitizeInput(body.email),
      name: sanitizeInput(body.name),
      message: sanitizeInput(body.message)
    };

    const validatedData = EmailSchema.parse(sanitizedBody);

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
      secure: true,
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${validatedData.name} (${validatedData.email})`,
      text: validatedData.message,
      headers: {
        'X-Mailer': 'Portfolio Website'
      }
    };

    await new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if(err) reject(err);
        else resolve();
      });
    });

    return NextResponse.json({
      message: 'Email sent successfully'
    });
  } catch (err: unknown) {
    console.error('Full error details:', err);
    if (err instanceof ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: err.issues.map(issue => issue.message)
        }, 
        { status: 400 }
      );
    }
    if (err instanceof Error) {
      console.error('Email send error:', err.message);
    }
    return NextResponse.json(
      { error: "Sorry, your message couldn't be sent right now. Please try again later or reach out on LinkedIn." }, 
      { status: 500 }
    );
  }
}