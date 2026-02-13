'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-emails';
import "./Contact.css";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define your validation schema
const ContactSchema = z.object({
  email: z.email(),
  name: z.string().trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name cannot exceed 50 characters' }),
  message: z.string().trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(500, { message: 'Message cannot exceed 500 characters' })
});

export type FormData = z.infer<typeof ContactSchema>;

const Contact: FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(ContactSchema)
  });

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <div>
        <div className="contact-container">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="name-section">
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                placeholder='Name'
                {...register('name')}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>
            <div className="email-section">
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                placeholder='Email'
                {...register('email')}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
            <div className="message-section">
              <label htmlFor='message'>Message:</label>
              <textarea
                rows={4}
                placeholder='Message'
                {...register('message')}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>
            <div className="submit-section">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;