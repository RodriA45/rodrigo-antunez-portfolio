import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <img src="https://avatars.githubusercontent.com/u/201253675?v=4" alt="Rodrigo Antúnez" className="hero-avatar" />
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-title text-gradient">Rodrigo Antúnez</h1>
          <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
          
          <p className="hero-description">
            Especializado en crear aplicaciones web modernas, rápidas y escalables. 
            Transformando ideas en experiencias digitales de alta calidad.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <div className="social-links">
              <a href="https://github.com/RodriA45" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              {/* Enlace a LinkedIn */}
              <a href="https://www.linkedin.com/in/rodrigo-antunez-9523a6380" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ridriantunez2016@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
              <a href="https://wa.me/543865227220" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
