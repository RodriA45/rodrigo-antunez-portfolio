import { useTranslation } from 'react-i18next';
import './AboutMe.css';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about-text">
              {t('about.p1')}
            </p>
            <p className="about-text">
              {t('about.p2')}
            </p>
            <p className="about-text">
              {t('about.p3')}
            </p>
          </div>
          <div className="about-stats glass-panel">
            <div className="stat-item">
              <h3 className="stat-number">19</h3>
              <p className="stat-label">{t('about.stat1_label')}</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">UTN</h3>
              <p className="stat-label">{t('about.stat2_label')}</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">+5</h3>
              <p className="stat-label">{t('about.stat3_label')}</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">{t('about.stat4_label')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
