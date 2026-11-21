import '../styles/TechLogo.css';

interface TechProps {
  tech: {
    id: number;
    name: string;
    logo: string;
  }
}

export default function TechLogo({ tech }: TechProps) {
  return (
    <li className="tech-logo-item" title={tech.name}>
      <img src={tech.logo} alt={tech.name} className="tech-logo" />
    </li>
  )
}
