import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactCTA } from './components/ContactCTA';
import { BackToTop } from './components/BackToTop';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="spotlight"></div>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
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
