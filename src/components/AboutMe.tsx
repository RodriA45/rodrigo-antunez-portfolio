import './AboutMe.css';

export function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Sobre mí</h2>
            <p className="about-text">
              Con 19 años y finalizando mi Tecnicatura en Programación en la UTN, ya he dado el salto al mundo real desarrollando sistemas Full Stack para clientes.
            </p>
            <p className="about-text">
              Me apasiona construir software desde la base de datos hasta la interfaz de usuario, asegurando que cada pieza no solo funcione perfecto, sino que sea intuitiva, rápida y escale con el tiempo.
            </p>
            <p className="about-text">
              Más allá del código, busco entender el modelo de negocio para que las soluciones que programo generen un impacto real y cuantificable.
            </p>
          </div>
          <div className="about-stats glass-panel">
            <div className="stat-item">
              <h3 className="stat-number">19</h3>
              <p className="stat-label">Años</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">UTN</h3>
              <p className="stat-label">Formación Técnica</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">+5</h3>
              <p className="stat-label">Tecnologías Dominadas</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Compromiso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
