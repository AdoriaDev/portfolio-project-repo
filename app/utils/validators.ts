import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

export function sanitizeInput(input: string): string {
    return sanitizeHtml(input, {
        allowedTags: [],
        allowedAttributes: {}
    });
}

export const EmailSchema = z.object({
    email: z.email(),

    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message cannot exceed 500 chracters')
});