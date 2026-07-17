import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './ContactCTA.css';

export function ContactCTA() {
  return (
    <section className="contact-cta-section" id="contact">
      <div className="container">
        <div className="cta-box glass-panel">
          <h2 className="cta-title">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
          <p className="cta-description">
            Ya sea que busques un desarrollador backend sólido, un frontend detallista, o necesites crear una solución completa desde cero, estoy disponible para conversar.
          </p>
          
          <div className="cta-buttons">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ridriantunez2016@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn">
              <FaEnvelope /> Enviame un Email
            </a>
            <a href="https://wa.me/543865227220" target="_blank" rel="noopener noreferrer" className="btn btn-secondary cta-btn">
              <FaWhatsapp /> Hablemos por WhatsApp
            </a>
          </div>

          <div className="cta-socials">
            <p className="cta-socials-text">O encuéntrame en mis redes profesionales:</p>
            <div className="social-links-row">
              <a href="https://www.linkedin.com/in/rodrigo-antunez-" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/RodriA45" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
