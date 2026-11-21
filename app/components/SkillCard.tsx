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
    <li className="skill-chip">
      <span className="skill-icon">
        <img src={skill.logo} alt="" className="skill-logo" />
      </span>
      <span className="skill-name">{skill.name}</span>
    </li>
  )
}
