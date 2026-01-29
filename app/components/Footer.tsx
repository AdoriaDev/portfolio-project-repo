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
          <a 
            href="mailto:your-email@example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            Email
          </a>
        </div>
        <p className="copyright-text">
          © {new Date().getFullYear()} Adoria. All rights reserved.
        </p>
      </div>
    </footer>
  )
}