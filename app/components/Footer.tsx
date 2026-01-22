import "../globals.css";

export default function Footer() {
  return (
    <footer className="footerBody py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com/AdoriaDev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/adoria-stevens-170a7111b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>
        <a 
            href="https://www.linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
        >
            Email
        </a>
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Adoria. All rights reserved.
        </p>
      </div>
    </footer>
  )
}