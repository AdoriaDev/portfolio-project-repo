'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail, type SendEmailResult } from '../utils/send-emails';
import "./Contact.css";

const ContactSchema = z.object({
  name: z.string().trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name cannot exceed 50 characters' })
    .regex(/^[\p{L}\s'.-]+$/u, { message: 'Name can only contain letters, spaces, apostrophes, periods and hyphens' }),
  email: z.email({ message: 'Please enter a valid email address' }),
  message: z.string().trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(500, { message: 'Message cannot exceed 500 characters' })
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<SendEmailResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema)
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus(null);
    const result = await sendEmail(data);
    setStatus(result);
    if (result.ok) reset();
  }

  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <div className="contact-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
          <div className="name-section">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={!!errors.name}
              {...register('name')}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
          <div className="email-section">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="message-section">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={6}
              placeholder="What would you like to talk about?"
              aria-invalid={!!errors.message}
              {...register('message')}
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
          <div className="submit-section">
            <button className="submit-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </div>
          {status && (
            <p
              role="status"
              className={status.ok ? 'form-status form-status-success' : 'form-status form-status-error'}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
