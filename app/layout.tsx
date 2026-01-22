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
  title: {
    default: 'Adoria - Software Developer Portfolio',
    template: '%s | Adoria Portfolio'
  },
  description: 'Portfolio showcasing software development projects and technical expertise',
  keywords: ['software developer', 'portfolio', 'next.js', 'typescript', 'zoho', 'api integration'],
  authors: [{ name: 'Adoria', url: 'https://your-portfolio-url.com' }],
  openGraph: {
    title: 'Adoria - Software Developer Portfolio',
    description: 'Explore my technical projects and development expertise',
    type: 'website',
    // Add your portfolio image URL
    images: ['/og-image.png']
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
        
        {/* Optional: Add global modals, tooltips, etc. */}
      </body>
    </html>
  )
}