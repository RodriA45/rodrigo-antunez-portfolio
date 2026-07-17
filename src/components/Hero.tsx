import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiFlask } from 'react-icons/si';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <img src="https://avatars.githubusercontent.com/u/201253675?v=4" alt="Rodrigo Antúnez" className="hero-avatar" />
          <h1 className="hero-title text-gradient">Desarrollador Full Stack.</h1>
          <h2 className="hero-subtitle">Transformo ideas en soluciones de software reales.</h2>
          
          <p className="hero-description">
            Especializado en Python, React y arquitecturas backend. Diseño y desarrollo aplicaciones web escalables, intuitivas y enfocadas en resolver problemas de negocio reales.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver mis proyectos
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contactarme
            </a>
          </div>

          <div className="tech-stack-banner">
            <p className="tech-stack-title">TECNOLOGÍAS CORE</p>
            <div className="tech-stack-icons">
              <FaPython title="Python" />
              <FaReact title="React" />
              <SiTypescript title="TypeScript" />
              <SiFlask title="Flask" />
              <SiPostgresql title="PostgreSQL" />
              <FaNodeJs title="Node.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
