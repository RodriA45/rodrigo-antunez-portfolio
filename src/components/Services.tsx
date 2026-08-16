import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaCogs } from 'react-icons/fa';
import './Services.css';

export function Services() {
  const { t } = useTranslation();

  const servicesList = [
    {
      id: 'web',
      icon: <FaLaptopCode size={32} color="var(--accent-primary)" />,
      titleKey: 'services.web.title',
      descKey: 'services.web.desc'
    },
    {
      id: 'landing',
      icon: <FaRocket size={32} color="var(--accent-primary)" />,
      titleKey: 'services.landing.title',
      descKey: 'services.landing.desc'
    },
    {
      id: 'systems',
      icon: <FaCogs size={32} color="var(--accent-primary)" />,
      titleKey: 'services.systems.title',
      descKey: 'services.systems.desc'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={service.id}
              className="service-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{t(service.titleKey)}</h3>
              <p className="service-desc">{t(service.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
