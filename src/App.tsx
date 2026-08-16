import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactCTA } from './components/ContactCTA';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <AboutMe />
        <Services />
        <Skills />
        <ProjectGrid />
        <ContactCTA />
      </main>
      
      <footer className="footer" style={{ textAlign: 'center', padding: 'var(--spacing-lg) var(--spacing-md)', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', marginTop: 'var(--spacing-xl)' }}>
        <p>© {new Date().getFullYear()} Rodrigo Antúnez. Desarrollador Full Stack.</p>
      </footer>
      <BackToTop />
    </div>
  );
}

export default App;
