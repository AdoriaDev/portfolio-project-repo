'use client';
import { useState } from 'react';
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="name-section">
          <input 
            type="text"
            placeholder="Name"
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email-section">
          <input 
            type="email"
            placeholder="Email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="message-section">
          <textarea 
            placeholder="Message"
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}