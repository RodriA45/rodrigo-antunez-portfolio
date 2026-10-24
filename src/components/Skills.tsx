import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaReact, FaPython, FaNodeJs, FaGitAlt, FaHtml5, 
  FaGamepad, FaMicrochip, FaDesktop, FaVolumeUp 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiMongodb, 
  SiCplusplus, SiFlask, SiExpress, SiSqlite, SiSupabase, 
  SiWebrtc, SiThreedotjs, SiVite, SiPostman, SiFramer, SiPwa, 
  SiArduino, SiSocketdotio 
} from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { TbBrandCSharp } from 'react-icons/tb';
import './Skills.css';

export function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend', 'Frontend & UI'),
      skills: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'HTML5 / CSS3', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'Framer Motion', icon: <SiFramer color="#0055FF" /> },
        { name: 'PWA (Web Apps)', icon: <SiPwa color="#5A0FC8" /> }
      ]
    },
    {
      title: t('skills.backend', 'Backend & Bases de Datos'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress color="#FFFFFF" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Flask', icon: <SiFlask color="#FFFFFF" /> },
        { name: 'C# / .NET 8', icon: <TbBrandCSharp color="#239120" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'SQLite', icon: <SiSqlite color="#003B57" /> },
        { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> }
      ]
    },
    {
      title: t('skills.realtime', 'Tiempo Real, 3D & Multimedia'),
      skills: [
        { name: 'WebRTC (P2P)', icon: <SiWebrtc color="#00A3E0" /> },
        { name: 'Three.js / WebGL', icon: <SiThreedotjs color="#FFFFFF" /> },
        { name: 'Motor 2D (Canvas)', icon: <FaGamepad color="#F16529" /> },
        { name: 'WebSockets', icon: <SiSocketdotio color="#FFFFFF" /> },
        { name: 'Web Audio API', icon: <FaVolumeUp color="#A855F7" /> }
      ]
    },
    {
      title: t('skills.tools', 'Hardware, Desktop & Herramientas'),
      skills: [
        { name: 'Arduino (C++)', icon: <SiArduino color="#00979D" /> },
        { name: 'Protocolo Serial', icon: <FaMicrochip color="#E06C75" /> },
        { name: 'Pygame GUI', icon: <FaDesktop color="#306998" /> },
        { name: 'PowerShell', icon: <VscTerminalPowershell color="#5391FE" /> },
        { name: 'Git & GitHub', icon: <FaGitAlt color="#F05032" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> },
        { name: 'Postman / REST APIs', icon: <SiPostman color="#FF6C37" /> }
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
          <p className="section-subtitle">{t('skills.subtitle', 'Tecnologías y herramientas que domino y aplico en proyectos reales.')}</p>
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
