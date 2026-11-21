import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';

export function sanitizeInput(input: unknown): string {
    if (typeof input !== 'string') return '';
    return sanitizeHtml(input.trim(), {
        allowedTags: [],
        allowedAttributes: {}
    });
}

export const EmailSchema = z.object({
    email: z.email(),

    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters')
        .regex(/^[\p{L}\s'.-]+$/u, 'Name contains invalid characters'),

    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message cannot exceed 500 characters')
});