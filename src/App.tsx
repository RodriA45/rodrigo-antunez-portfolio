import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      
      <footer className="footer" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} Rodrigo Antúnez. Desarrollador Full Stack.</p>
      </footer>
    </div>
  );
}

export default App;
