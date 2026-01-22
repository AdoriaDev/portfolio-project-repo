// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'
import "../globals.css";

export default function Header() {
  return (
    <header className="relative w-full">
      {/* Logo on top left */}
      <Link href="/" className="absolute top-4 left-4 z-10">
        <span className="text-2xl font-bold bg-gray-200 p-2 rounded">AS</span>
      </Link>
      
      {/* Navigation bar on bottom right */}
      <nav className="fixed bottom-0 right-0 w-full bg-blue-900 text-white py-4 z-50">
        <div className="container mx-auto flex justify-end">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link 
                href="/" 
                className="hover:text-blue-300 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="hover:text-blue-300 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/skills" 
                className="hover:text-blue-300 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-blue-300 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}