import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronUp } from 'react-icons/fa';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './ProjectGrid.css';

export function ProjectGrid() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('Featured');

  const categories = [
    { id: 'Featured', labelKey: 'projects.filters.featured', fallback: 'Destacados' },
    { id: 'All', labelKey: 'projects.filters.all', fallback: 'Todos' },
    { id: 'Frontend', labelKey: 'projects.filters.frontend', fallback: 'Frontend' },
    { id: 'Backend', labelKey: 'projects.filters.backend', fallback: 'Backend' },
    { id: 'Full Stack', labelKey: 'projects.filters.fullstack', fallback: 'Full Stack' },
    { id: 'Data & Scripts', labelKey: 'projects.filters.data', fallback: 'Data & Scripts' }
  ];

  const filteredProjects = filter === 'Featured'
    ? projects.slice(0, 4)
    : (filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
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
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
              style={{ position: 'relative', background: 'transparent', border: 'none', color: filter === cat.id ? '#fff' : 'var(--text-secondary)' }}
            >
              {filter === cat.id && (
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
                {t(cat.labelKey, cat.fallback)}
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
                const isHero = index === 0 && (filter === 'Featured' || filter === 'All');
                return (
                  <motion.div
                    key={project.id}
                    layout
                    variants={itemVariants}
                    className={isHero ? 'hero-wrapper' : 'project-card-wrapper'}
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

        {filter === 'Featured' && (
          <motion.div 
            className="see-more-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <button 
              className="see-more-card-btn"
              onClick={() => {
                setFilter('All');
              }}
              aria-label={t('projects.see_more_title', '¿Quieres ver más proyectos?')}
            >
              <div className="see-more-text">
                <span className="see-more-title">{t('projects.see_more_title', '¿Quieres ver más proyectos?')}</span>
                <span className="see-more-subtitle">{t('projects.see_more_desc', 'Ver todos los desarrollos y sistemas')}</span>
              </div>
              <div className="see-more-arrow-circle">
                <FaArrowRight className="see-more-icon" />
              </div>
            </button>
          </motion.div>
        )}

        {filter === 'All' && projects.length > 4 && (
          <motion.div 
            className="see-more-wrapper"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="show-less-btn"
              onClick={() => {
                setFilter('Featured');
                const projectsEl = document.getElementById('projects');
                if (projectsEl) {
                  projectsEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <FaChevronUp size={12} />
              <span>{t('projects.show_less', 'Mostrar menos (volver a destacados)')}</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
