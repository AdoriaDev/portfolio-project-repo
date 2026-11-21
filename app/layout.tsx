// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

// Initialize the Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

// Metadata for the entire application
export const metadata: Metadata = {
  metadataBase: new URL('https://adoria-stevens-portfolio.onrender.com'),
  title: {
    default: 'Adoria Stevens – Full-Stack Developer',
    template: '%s | Adoria Stevens'
  },
  description: 'Portfolio showcasing software development projects and technical expertise',
  keywords: ['software developer', 'full-stack developer', 'portfolio', 'react', 'next.js', 'node.js', 'typescript', 'api integration'],
  authors: [{ name: 'Adoria Stevens', url: 'https://adoria-stevens-portfolio.onrender.com' }],
  openGraph: {
    title: 'Adoria Stevens – Full-Stack Developer',
    description: 'Explore my technical projects and development expertise',
    type: 'website',
    images: ['/logos/me.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        <Footer />

      </body>
    </html>
  )
}