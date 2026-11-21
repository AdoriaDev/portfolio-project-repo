import '../styles/ProjectCard.css';
import Link from 'next/link';
import TechLogo from './TechLogo'

interface ProjectProps {
  project: {
    id: number;
    name: string;
    categories: string[];
    summary: string;
    description: string;
    technologies: string[];
    logo: string;
    imageAlt: string;
    link: string;
    linkLabel: string;
    repo?: string;
    caseStudy?: string;
  }
}

export default function ProjectCard({ project }: ProjectProps) {
    const logos = [
    {
      id:1,
      name:"ReactJS",
      logo:"/logos/react-svgrepo-com.svg"
    },
    {
      id:2,
      name:"NodeJS",
      logo:"/logos/nodejs-icon-svgrepo-com.svg"
    },
    {
      id:10,
      name:"JavaScript",
      logo:"/logos/javascript-svgrepo-com.svg"
    },
    {
      id:3,
      name:"TypeScript",
      logo:"/logos/typescript-icon-svgrepo-com.svg"
    },
    {
      id:4,
      name:"HTML",
      logo:"/logos/html-5-svgrepo-com.svg"
    },
    {
      id:5,
      name:"CSS",
      logo:"/logos/css-3-svgrepo-com.svg"
    },
    {
      id:6,
      name:"PostgreSQL",
      logo:"/logos/postgresql-svgrepo-com.svg"
    },
    {
      id:7,
      name:"NextJS",
      logo:"/logos/nextjs-fill-svgrepo-com.svg"
    },
    {
      id:8,
      name:"Arduino",
      logo:"/logos/arduino-svgrepo-com.svg"
    },
    {
      id:9,
      name:"Python",
      logo:"/logos/python-svgrepo-com.svg"
    },
  ];

  const projectTechLogos = logos.filter(logo => 
    project.technologies.includes(logo.name)
  );

  return (
    <article className="project-card">
      <a
        href={project.link}
        className="project-media"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name}: ${project.linkLabel}`}
      >
        <img src={project.logo} alt={project.imageAlt} className="project-image" />
        <div className="project-overlay" aria-hidden="true">
          <p className="project-description">{project.description}</p>
        </div>
      </a>
      <div className="project-body">
        <h2 className="project-name">{project.name}</h2>
        <p className="project-summary">{project.summary}</p>
        <p className="project-description project-description-inline">{project.description}</p>
        <ul className="tech-logos" aria-label="Technologies used">
          {projectTechLogos.map((tech) => (
            <TechLogo key={tech.id} tech={tech} />
          ))}
        </ul>
        <div className="project-actions">
          <a href={project.link} className="project-button project-button-primary" target="_blank" rel="noopener noreferrer">
            {project.linkLabel} ↗
          </a>
          {project.caseStudy && (
            <Link href={project.caseStudy} className="project-button">
              Case study
            </Link>
          )}
          {project.repo && (
            <a href={project.repo} className="project-button" target="_blank" rel="noopener noreferrer">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
