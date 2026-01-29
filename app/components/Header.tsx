import Link from 'next/link'
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="logo-text">AS</span>
      </Link>
      
      <nav className="nav-container">
        <div className="container mx-auto nav-content">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}