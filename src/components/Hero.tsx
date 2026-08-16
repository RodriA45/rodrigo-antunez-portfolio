import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiFlask } from 'react-icons/si';
import './Hero.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-container container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://avatars.githubusercontent.com/u/201253675?v=4" alt="Rodrigo Antúnez" className="hero-avatar" />
          <h1 className="hero-title text-gradient">{t('hero.title')}</h1>
          <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {t('hero.btn_projects')}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t('hero.btn_contact')}
            </a>
          </div>

          <motion.div 
            className="tech-stack-banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="tech-stack-title">{t('hero.tech_title')}</p>
            <div className="tech-stack-icons">
              <FaPython title="Python" />
              <FaReact title="React" />
              <SiTypescript title="TypeScript" />
              <SiFlask title="Flask" />
              <SiPostgresql title="PostgreSQL" />
              <FaNodeJs title="Node.js" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
