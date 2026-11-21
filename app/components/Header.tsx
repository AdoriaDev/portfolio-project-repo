'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import '../styles/Header.css';

const NAV_ITEMS = [
  { href: '/', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Adoria Stevens, home" onClick={closeMenu}>
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
          <ul className="nav-list">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${pathname === href ? 'active' : ''}`}
                  aria-current={pathname === href ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
