import '../styles/TechLogo.css';

interface TechProps {
  tech: {
      id: number,
      name:string,
      logo:string
  }
}

export default function TechLogo({ tech }: TechProps) {
  return (
    <div className="tech-logo-div">
      <div className="tech-logo-container">
        <img 
          src={tech.logo} 
          alt={`${tech.name} logo`} 
          className="tech-logo"
        />
      </div>
    </div>
  )
}