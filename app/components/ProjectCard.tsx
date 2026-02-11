import '../styles/ProjectCard.css';

interface ProjectProps {
  project: {
    id: number;
    name: string;
    categories: string[];
    description: string;
    logo: string;
    link: string;
  }
}

export default function ProjectCard({ project }: ProjectProps) {
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
      </div>
    </a>
  )
}