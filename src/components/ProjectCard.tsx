import { FaGithub, FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isHero?: boolean;
}

export function ProjectCard({ project, isHero }: ProjectCardProps) {
  return (
    <div className={`project-card glass-panel ${isHero ? 'hero-project' : ''}`}>
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
        {project.customCTA && (
          <div className="custom-cta-box" style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            backgroundColor: 'rgba(37, 211, 102, 0.05)', 
            border: '1px solid rgba(37, 211, 102, 0.3)', 
            borderRadius: 'var(--radius-md)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.75rem' 
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              {project.customCTA.text}
            </p>
            <a href={project.customCTA.url} target="_blank" rel="noopener noreferrer" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#25D366', 
              fontWeight: 600, 
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <FaWhatsapp size={20} /> Hablar por WhatsApp
            </a>
          </div>
        )}
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
