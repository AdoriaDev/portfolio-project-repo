export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SendEmailResult {
  ok: boolean;
  message: string;
}

export async function sendEmail(data: ContactFormData): Promise<SendEmailResult> {
  try {
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const body = await res.json().catch(() => ({}));

    if (res.ok) {
      return { ok: true, message: "Thanks! Your message has been sent. I'll get back to you soon." };
    }
    if (Array.isArray(body.details) && body.details.length > 0) {
      return { ok: false, message: body.details.join(' ') };
    }
    return { ok: false, message: body.error || 'Something went wrong. Please try again later.' };
  } catch {
    return { ok: false, message: 'Network error. Please check your connection and try again.' };
  }
}
