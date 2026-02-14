import '../styles/ProjectCard.css';
import TechLogo from './TechLogo'

interface ProjectProps {
  project: {
    id: number;
    name: string;
    categories: string[];
    description: string;
    technologies: string[];
    logo: string;
    link: string;
  }
}

export default function ProjectCard({ project }: ProjectProps) {
    const logos = [
    {
      id:1,
      name:"ReactJS",
      logo:"logos/react-svgrepo-com.svg"
    },
    {
      id:2,
      name:"NodeJS",
      logo:"logos/nodejs-icon-svgrepo-com.svg"
    },
    {
      id:10,
      name:"JavaScript",
      logo:"logos/javascript-svgrepo-com.svg"
    },
    {
      id:3,
      name:"TypeScript",
      logo:"logos/typescript-icon-svgrepo-com.svg"
    },
    {
      id:4,
      name:"HTML",
      logo:"logos/html-5-svgrepo-com.svg"
    },
    {
      id:5,
      name:"CSS",
      logo:"logos/css-3-svgrepo-com.svg"
    },
    {
      id:6,
      name:"PostgreSQL",
      logo:"logos/postgresql-svgrepo-com.svg"
    },
    {
      id:7,
      name:"NextJS",
      logo:"logos/nextjs-fill-svgrepo-com.svg"
    },
    {
      id:8,
      name:"Arduino",
      logo:"logos/arduino-svgrepo-com.svg"
    },
    {
      id:9,
      name:"Python",
      logo:"logos/python-svgrepo-com.svg"
    },
  ];

  const projectTechLogos = logos.filter(logo => 
    project.technologies.includes(logo.name)
  );

  return (
    <a href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
      <img
        src={project.logo}
        alt={`${project.name} screenshot`}
        className="project-image"
      />
      <div className="project-label">
        <span className="project-name">{project.name}</span>
      </div>
      <div className="project-overlay">
        <span className="project-name">{project.name}</span>
        <p className="project-description">{project.description}</p>
        <div className="tech-logos">
        {projectTechLogos.map((tech) => (
          <TechLogo 
            key={tech.id} 
            tech={tech} 
          />
        ))}
      </div>
      </div>
    </a>
  )
}