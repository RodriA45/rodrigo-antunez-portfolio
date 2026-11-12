import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from './ThemeSwitcher';
import './Navbar.css';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const logoTimerRef = useRef<number | null>(null);

  const isEnglish = i18n.language?.startsWith('en');

  useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en' : 'es';
  }, [isEnglish]);

  useEffect(() => {
    return () => {
      if (logoTimerRef.current !== null) {
        window.clearTimeout(logoTimerRef.current);
      }
    };
  }, []);

  const setLanguage = (lang: 'es' | 'en') => {
    if ((lang === 'en' && !isEnglish) || (lang === 'es' && isEnglish)) {
      i18n.changeLanguage(lang);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (logoTimerRef.current !== null) {
      window.clearTimeout(logoTimerRef.current);
    }

    setIsLogoExpanded((prev) => {
      const next = !prev;
      if (next) {
        logoTimerRef.current = window.setTimeout(() => {
          setIsLogoExpanded(false);
        }, 3800);
      }
      return next;
    });

    if (window.scrollY > 120) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container container" aria-label={isEnglish ? 'Main navigation' : 'Navegación principal'}>
        <div className="navbar-logo">
          <a
            href="#top"
            onClick={handleLogoClick}
            className={`logo-signature ${isLogoExpanded ? 'is-expanded' : ''}`}
            aria-label="Rodrigo Antunez"
          >
            <span className="logo-word">
              <span className="logo-initial">R</span>
              <span className="logo-dot" aria-hidden="true">.</span>
              <span className="logo-rest logo-rest-first">odrigo</span>
            </span>
            <span className="logo-space" aria-hidden="true">&nbsp;</span>
            <span className="logo-word">
              <span className="logo-initial">A</span>
              <span className="logo-dot" aria-hidden="true">.</span>
              <span className="logo-rest logo-rest-second">ntunez</span>
            </span>
          </a>
        </div>
        
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>{t('nav.skills', isEnglish ? 'Skills' : 'Habilidades')}</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('nav.projects')}</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a></li>
        </ul>

        <div className="navbar-actions">
          <ThemeSwitcher />
          <div className="lang-toggle-group" role="group" aria-label={isEnglish ? 'Select language' : 'Seleccionar idioma'}>
            <button
              type="button"
              className={`lang-option ${!isEnglish ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
              aria-pressed={!isEnglish}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <span className="lang-divider" aria-hidden="true">|</span>
            <button
              type="button"
              className={`lang-option ${isEnglish ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-pressed={isEnglish}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? (isEnglish ? 'Close menu' : 'Cerrar menú') : (isEnglish ? 'Open menu' : 'Abrir menú')}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
}
