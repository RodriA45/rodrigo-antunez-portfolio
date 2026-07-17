import imgProfesor from '../assets/images/profesor-interactivo.png';
import imgFinTrack from '../assets/images/fin-track.png';
import imgJarvis from '../assets/images/jarvis.png';
import imgTurnos from '../assets/images/turnos-web.png';
import imgWinOptimizador from '../assets/images/win-optimizador.png';
import imgCleansweep from '../assets/images/cleansweep.png';
import imgFixture from '../assets/images/fixture-mundial.png';
import imgMacEstetica from '../assets/images/mac-estetica-vehicular.png';
import imgEnglish from '../assets/images/english.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'profesor-interactivo',
    title: 'Profesor Interactivo',
    description: 'Plataforma web interactiva para docentes. Permite reproducir videos, usar una pizarra digital en vivo y conectar con los alumnos mediante códigos QR para recibir preguntas anónimas, calificaciones y encuestas en tiempo real.',
    technologies: ['JavaScript', 'WebSockets', 'HTML/CSS'],
    demoUrl: 'https://profesor-interactivo.vercel.app',
    imageUrl: imgProfesor,
    featured: true
  },
  {
    id: 'fintrack-finance-manager',
    title: 'FinTrack',
    description: 'Aplicación web moderna para la gestión inteligente de finanzas personales, presupuestos y control de gastos.',
    technologies: ['TypeScript', 'React', 'CSS'],
    githubUrl: 'https://github.com/RodriA45/fintrack-finance-manager',
    imageUrl: imgFinTrack,
    featured: true
  },
  {
    id: 'jarvis-desktop-assistant',
    title: 'Jarvis Desktop Assistant',
    description: 'Asistente de voz holográfico para Windows con telemetría en tiempo real y soporte híbrido dinámico (Claude API, Gemini API y Ollama local).',
    technologies: ['Python', 'LLMs', 'Voice Recognition'],
    githubUrl: 'https://github.com/RodriA45/jarvis-desktop-assistant',
    imageUrl: imgJarvis,
    featured: true
  },
  {
    id: 'turnos-pagina-web',
    title: 'Sistema de Reservas Web',
    description: 'Sistema web de reserva de turnos con panel admin, notificaciones automáticas por WhatsApp y Gmail.',
    technologies: ['HTML', 'JavaScript', 'Backend API'],
    demoUrl: 'https://monitoreo360seguridad.com/',
    imageUrl: imgTurnos,
    featured: true
  },
  {
    id: 'win-optimizador-r45',
    title: 'Win Optimizador R45',
    description: 'La herramienta definitiva de optimización de Windows para gamers hardcore, con 0 Input Lag y TCP NoDelay integrado. Exprime hasta el último FPS.',
    technologies: ['PowerShell', 'Windows API'],
    githubUrl: 'https://github.com/RodriA45/win-optimizador-r45',
    imageUrl: imgWinOptimizador,
    featured: false
  },
  {
    id: 'cleansweep-dev',
    title: 'CleanSweep Dev',
    description: 'Herramienta CLI que purga inteligentemente dependencias, cachés de compilación y contenedores de Docker en segundos, optimizando proyectos para backups en la nube.',
    technologies: ['JavaScript', 'Node.js', 'CLI'],
    githubUrl: 'https://github.com/RodriA45/cleansweep-dev',
    imageUrl: imgCleansweep,
    featured: false
  },
  {
    id: 'world-cup-2026-tracker',
    title: 'World Cup 2026 Tracker',
    description: 'Fixture interactivo en tiempo real para el Mundial de Fútbol 2026. SPA desarrollada en Vanilla JS y CSS con persistencia local.',
    technologies: ['JavaScript', 'HTML5', 'Local Storage'],
    githubUrl: 'https://github.com/RodriA45/world-cup-2026-tracker',
    demoUrl: 'https://rodria45.github.io/world-cup-2026-tracker/',
    imageUrl: imgFixture,
    featured: false
  },
  {
    id: 'mac-estetica-vehicular',
    title: 'MAC Estética Vehicular',
    description: 'Landing page premium e interactiva para MAC Estética Vehicular. Diseño oscuro de alta fidelidad, comparador antes/después interactivo y optimización móvil.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RodriA45/mac-estetica-vehicular',
    demoUrl: 'https://rodria45.github.io/mac-estetica-vehicular/',
    imageUrl: imgMacEstetica,
    featured: false
  },
  {
    id: 'english-for-developers',
    title: 'English for Developers',
    description: 'Plataforma web interactiva (estilo SaaS) para que estudiantes de programación y desarrolladores practiquen su inglés técnico. Incluye quizzes drag-and-drop.',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/RodriA45/english-for-developers',
    imageUrl: imgEnglish,
    featured: false
  }
];
