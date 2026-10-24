import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaGamepad, FaDatabase, FaShieldAlt, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { ImageModal } from './ImageModal';
import imgUniGames1 from '../assets/images/unigames-1.webp';
import imgUniGames2 from '../assets/images/unigames-2.png';
import './CapstoneProject.css';

export function CapstoneProject() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const images = [imgUniGames1, imgUniGames2];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="capstone-section" id="capstone">
      <div className="container">
        <motion.div 
          className="capstone-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="capstone-badge">
              <FaGraduationCap /> {isEnglish ? 'University Degree Capstone Project' : 'Proyecto Final de Graduación'}
            </span>
            <span className="capstone-team-badge">
              <FaUsers /> {isEnglish ? 'Teamwork (3 Developers)' : 'Trabajo en Equipo (3 Integrantes)'}
            </span>
          </div>
          <h2 className="section-title">
            {isEnglish ? 'Academic Graduation Showcase' : 'Proyecto Integrador Universitario'}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {isEnglish 
              ? 'Final capstone project to obtain my Associate Degree in Programming, developed collaboratively with fellow colleagues.' 
              : 'Proyecto integrador con el cual culmino mi formación en la Tecnicatura Universitaria en Programación, desarrollado de forma colaborativa en equipo.'}
          </p>
        </motion.div>

        <motion.div 
          className="capstone-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="capstone-visual" onClick={() => setIsLightboxOpen(true)}>
            <img 
              src={images[currentImageIndex]} 
              alt="UniGames Screenshot" 
              className="capstone-image" 
              loading="lazy" 
            />
            {images.length > 1 && (
              <>
                <button className="capstone-carousel-btn prev" onClick={prevImage} aria-label="Anterior">
                  <FaChevronLeft size={14} />
                </button>
                <button className="capstone-carousel-btn next" onClick={nextImage} aria-label="Siguiente">
                  <FaChevronRight size={14} />
                </button>
                <div className="capstone-dots">
                  {images.map((_, idx) => (
                    <button 
                      key={idx} 
                      className={`capstone-dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      aria-label={`Imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="capstone-info">
            <h3 className="capstone-title">UniGames</h3>
            <p className="capstone-subtitle">
              {isEnglish 
                ? 'Mini-Games Platform & Custom 2D Canvas Engine' 
                : 'Plataforma Web de Juegos & Motor 2D Propio'}
            </p>
            
            <p className="capstone-desc">
              {isEnglish 
                ? 'Interactive Single Page Application engineered for rapid pop-culture mini-games and pixel-art adventures. Built from scratch with our custom HTML5 Canvas engine (engine2d.js) handling physics, particles, and collision detection. Incorporates Supabase Auth with Google OAuth, local PostgreSQL synchronization, friends system, 1v1 real-time duels, and a full administrative dashboard with user sanctions.'
                : 'Aplicación web interactiva (SPA) que reúne minijuegos temáticos y aventuras pixel-art impulsadas por un motor 2D propio desarrollado desde cero en HTML5 Canvas (engine2d.js) con físicas, partículas y colisiones. Integra autenticación con Supabase y Google OAuth sincronizado con PostgreSQL, sistema de amigos, duelos 1v1 y un panel de administración completo con moderación y estadísticas.'}
            </p>

            <div className="capstone-features-grid">
              <div className="capstone-feature-item">
                <FaGamepad className="capstone-feature-icon" />
                <span>{isEnglish ? 'Custom 2D Canvas Engine (engine2d.js)' : 'Motor 2D Nativo en Canvas'}</span>
              </div>
              <div className="capstone-feature-item">
                <FaDatabase className="capstone-feature-icon" />
                <span>{isEnglish ? 'PostgreSQL & Supabase Synchronization' : 'PostgreSQL + Supabase Sync'}</span>
              </div>
              <div className="capstone-feature-item">
                <FaShieldAlt className="capstone-feature-icon" />
                <span>{isEnglish ? 'Admin Panel & Moderation Tools' : 'Panel de Administración & Reportes'}</span>
              </div>
              <div className="capstone-feature-item">
                <FaUsers className="capstone-feature-icon" />
                <span>{isEnglish ? '1v1 Duels & Friends System' : 'Duelos 1v1 & Sistema de Amigos'}</span>
              </div>
            </div>

            <div className="capstone-tech-tags">
              {['Node.js', 'Express.js', 'PostgreSQL', 'Supabase Auth', 'Motor 2D Canvas', 'JavaScript', 'HTML5/CSS3'].map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="capstone-actions">
              <a 
                href="https://unigames-server.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="capstone-btn capstone-btn-primary"
              >
                <FaExternalLinkAlt size={16} /> {isEnglish ? 'Play UniGames Live' : 'Jugar / Probar UniGames'}
              </a>
            </div>
          </div>
        </motion.div>

        <ImageModal 
          images={images}
          currentIndex={currentImageIndex}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
          onPrev={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
        />
      </div>
    </section>
  );
}
