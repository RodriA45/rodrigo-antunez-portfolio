import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card glass-panel">
      {project.imageUrl && (
        <div className="project-image-container">
          <img src={project.imageUrl} alt={project.title} className="project-image" loading="lazy" />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
      
      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Ver código en GitHub">
            <FaGithub size={20} />
            <span>Código</span>
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link" aria-label="Ver demo en vivo">
            <FaExternalLinkAlt size={20} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
