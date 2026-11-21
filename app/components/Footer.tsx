import Link from 'next/link';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-body">
      <div className="footer-container">
        <div className="social-links">
          <a 
            href="https://github.com/AdoriaDev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/adoria-stevens-170a7111b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <Link href="/contact" className="social-link">
            Email
          </Link>
        </div>
        <p className="copyright-text">
          © {new Date().getFullYear()} Adoria Stevens. All rights reserved.
        </p>
      </div>
    </footer>
  )
}