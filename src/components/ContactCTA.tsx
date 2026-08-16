import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './ContactCTA.css';

export function ContactCTA() {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');

  const handleWhatsApp = () => {
    const text = encodeURIComponent(message || 'Hola Rodrigo, me interesa contactar contigo.');
    window.open(`https://wa.me/543865227220?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const text = encodeURIComponent(message || 'Hola Rodrigo,\n\n');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=rodrigo.antunez.dev@gmail.com&su=Contacto desde Portafolio&body=${text}`, '_blank');
  };

  return (
    <section className="contact-cta-section" id="contact">
      <div className="container">
        <motion.div 
          className="cta-box glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta-title">{t('contact.title')}</h2>
          <p className="cta-description">{t('contact.description')}</p>
          
          <div className="simple-contact-form">
            <textarea 
              placeholder={t('contact.message')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-textarea"
              rows={4}
            />
          </div>

          <div className="cta-buttons" style={{ marginTop: '1.5rem' }}>
            <button onClick={handleEmail} className="btn btn-primary cta-btn">
              <FaEnvelope /> {t('contact.email_btn')}
            </button>
            <button onClick={handleWhatsApp} className="btn btn-secondary cta-btn">
              <FaWhatsapp /> {t('contact.whatsapp_btn')}
            </button>
          </div>

          <div className="cta-socials">
            <p className="cta-socials-text">{t('contact.socials')}</p>
            <div className="social-links-row">
              <a href="https://www.linkedin.com/in/rodrigo-antunez-" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/RodriA45" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
