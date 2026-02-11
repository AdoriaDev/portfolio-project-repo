'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-emails';
import "./Contact.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="name-section">
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='Name'
            {...register('name', { required: true })}
          />
        </div>
        <div className="email-section">
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />
        </div>
        <div className="message-section">
          <label htmlFor='message'>Message:</label>
          <textarea
            rows={4}
            placeholder='Message'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div className="submit-section">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;