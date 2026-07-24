import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { Project } from '../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isHero?: boolean;
}

export function ProjectCard({ project, isHero }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.imageUrls && project.imageUrls.length > 0 
    ? project.imageUrls 
    : (project.imageUrl ? [project.imageUrl] : []);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const setIndex = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    setCurrentImageIndex(idx);
  };

  return (
    <div className={`project-card glass-panel ${isHero ? 'hero-project' : ''}`}>
      {images.length > 0 && (
        <div className="project-image-container">
          <img src={images[currentImageIndex]} alt={project.title} className="project-image" loading="lazy" />
          
          {images.length > 1 && (
            <>
              <button className="carousel-btn prev-btn" onClick={prevImage} aria-label="Imagen anterior">
                <FaChevronLeft size={14} />
              </button>
              <button className="carousel-btn next-btn" onClick={nextImage} aria-label="Siguiente imagen">
                <FaChevronRight size={14} />
              </button>
              <div className="carousel-dots">
                {images.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`carousel-dot ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={(e) => setIndex(e, idx)}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
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
