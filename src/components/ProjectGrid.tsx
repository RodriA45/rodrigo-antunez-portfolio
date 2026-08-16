import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './ProjectGrid.css';

export function ProjectGrid() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Data & Scripts'];

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{t('projects.featured_title')}</h2>
          <p className="section-subtitle">{t('projects.featured_subtitle')}</p>
        </motion.div>
        
        <div className="filters-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? t('projects.filters.all', 'Todos') : cat}
            </button>
          ))}
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => {
                const isHero = index === 0 && filter === 'All' && project.featured;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    className={isHero ? 'hero-wrapper' : ''}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} isHero={isHero} />
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t('projects.empty_title', 'Próximamente más proyectos')}</h3>
                <p>{t('projects.empty_desc', 'Aún no he subido proyectos exclusivos para esta categoría, pero estoy trabajando en cosas nuevas.')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
