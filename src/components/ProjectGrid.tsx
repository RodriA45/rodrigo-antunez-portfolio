import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './ProjectGrid.css';

export function ProjectGrid() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">Una selección de mis mejores trabajos y aplicaciones web.</p>
        
        <div className="project-grid featured">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isHero={index === 0} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h2 className="section-title secondary-title">Otros Proyectos</h2>
            <div className="project-grid">
              {otherProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
