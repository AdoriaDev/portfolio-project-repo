import '../styles/SkillCard.css';

interface SkillProps {
  skill: {
    id: number;
    name: string;
    categories: string[];
    logo: string;
  }
}

export default function SkillCard({ skill }: SkillProps) {
  return (
    <div className="skill-card">
      <div className="skill-logo-container">
        <img 
          src={skill.logo} 
          alt={`${skill.name} logo`} 
          className="skill-logo"
        />
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  )
}