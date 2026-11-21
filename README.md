# Adoria Stevens – Portfolio

Personal portfolio site for Adoria Stevens, a full-stack developer working with React, Next.js, Node.js and TypeScript.

**Live site:** https://adoria-stevens-portfolio.onrender.com

## Features

- **Filterable skills** – the skills grid can be filtered from the About page, or tailored with URL parameters (see below).
- **Projects** – project cards with descriptions and tech stacks, shown on hover on desktop and inline on touch devices.
- **Contact form** – validated on the client and server with Zod, sanitized with `sanitize-html`, rate limited per IP, and delivered with Nodemailer.
- **Résumé download** – a PDF served from `public/`.
- Responsive layout for desktop and mobile.

## Tailoring the skills section with URL parameters

The home page reads two optional query parameters, so a link sent with an application can lead with the most relevant skills:

| Parameter | Example | Shows |
| --- | --- | --- |
| `skills` | `/?skills=React,TypeScript,PostgreSQL` | Exactly these skills, in this order |
| `category` | `/?category=webdev,db` | Every skill in any of these categories |

Categories: `generic` (default), `webdev`, `OOP`, `ui/ux`, `db`, `ai`, `iot`, `team`, `transferrable`. Matching is case-insensitive, and unknown values fall back to the general skill set. If both parameters are given, `skills` wins.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- Tailwind CSS and plain CSS modules per component
- Zod and React Hook Form for validation
- Nodemailer for email

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

The contact form needs two environment variables, for example in `.env.local`:

```bash
MY_EMAIL=your-gmail-address@gmail.com
MY_PASSWORD=your-gmail-app-password
```

`MY_PASSWORD` should be a Gmail [app password](https://support.google.com/accounts/answer/185833), not your account password.

## Deployment

Deployed on [Render](https://render.com) using `render.yaml` (`npm install && npm run build`, then `npm run start`).
