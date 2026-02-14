'use client';

import Link from 'next/link'
import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggle clicked', isMenuOpen); // Debug log
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="logo-text">AS</span>
      </Link>
      
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-content">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link" onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}