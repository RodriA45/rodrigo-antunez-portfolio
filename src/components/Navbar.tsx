import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from './ThemeSwitcher';
import './Navbar.css';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <a href="#">R.A.</a>
        </div>
        
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a></li>
        </ul>

        <div className="navbar-actions">
          <ThemeSwitcher />
          <button className="lang-toggle-btn" onClick={toggleLanguage} aria-label="Cambiar idioma">
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menú">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
