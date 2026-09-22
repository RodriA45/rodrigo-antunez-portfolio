import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

export function ExperienceTimeline() {
  const { t } = useTranslation();

  const timelineData = [
    {
      year: t('timeline.item3.year'),
      title: t('timeline.item3.title'),
      desc: t('timeline.item3.desc')
    },
    {
      year: t('timeline.item2.year'),
      title: t('timeline.item2.title'),
      desc: t('timeline.item2.desc')
    },
    {
      year: t('timeline.item1.year'),
      title: t('timeline.item1.title'),
      desc: t('timeline.item1.desc')
    }
  ];

  return (
    <div className="timeline-container">
      <h3 className="timeline-main-title">{t('timeline.title')}</h3>
      <div className="timeline-track">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item glass-panel"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
