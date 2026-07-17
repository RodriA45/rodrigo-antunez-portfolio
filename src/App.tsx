import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactCTA } from './components/ContactCTA';

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Hero />
        <AboutMe />
        <ProjectGrid />
        <ContactCTA />
      </main>
      
      <footer className="footer" style={{ textAlign: 'center', padding: 'var(--spacing-lg) var(--spacing-md)', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', marginTop: 'var(--spacing-xl)' }}>
        <p>© {new Date().getFullYear()} Rodrigo Antúnez. Desarrollador Full Stack.</p>
      </footer>
    </div>
  );
}

export default App;
