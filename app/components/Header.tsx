'use client';

import Link from 'next/link'
import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="logo-text">AS</span>
      </Link>
      
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-content">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}