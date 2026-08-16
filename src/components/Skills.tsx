import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiMongodb, SiCplusplus } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import './Skills.css';

export function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: 'Backend & Data',
      skills: [
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'C#', icon: <TbBrandCSharp color="#239120" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'SQL / APIs', icon: <FaDatabase color="#f5f5f5" /> }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'Vite', icon: <span style={{ fontWeight: 'bold', color: '#646CFF' }}>V</span> }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="skills-header"
        >
          <h2 className="section-title">{t('skills.title', 'Habilidades Técnicas')}</h2>
          <p className="section-subtitle">{t('skills.subtitle', 'Tecnologías con las que trabajo en el día a día.')}</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title} 
              className="skill-category-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
