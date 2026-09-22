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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

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
        
        <div className="filters-container glass-panel">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              style={{ position: 'relative', background: 'transparent', border: 'none', color: filter === cat ? '#fff' : 'var(--text-secondary)' }}
            >
              {filter === cat && (
                <motion.div
                  layoutId="active-filter"
                  className="filter-active-bg"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'var(--accent-primary)',
                    borderRadius: '100px',
                    zIndex: 0
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1 }}>
                {cat === 'All' ? t('projects.filters.all', 'Todos') : cat}
              </span>
            </button>
          ))}
        </div>

        <motion.div 
          layout 
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={filter} /* Force re-render animation when filter changes */
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => {
                const isHero = index === 0 && filter === 'All' && project.featured;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    variants={itemVariants}
                    className={isHero ? 'hero-wrapper' : ''}
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
