import imgProfesor from '../assets/images/profesor-interactivo.png';
import imgFinTrack from '../assets/images/fin-track.png';
import imgJarvis from '../assets/images/jarvis.png';
import imgTurnos from '../assets/images/turnos-web.png';
import imgWinOptimizador from '../assets/images/win-optimizador.png';
import imgCleansweep from '../assets/images/cleansweep.png';
import imgFixture from '../assets/images/fixture-mundial.png';
import imgMacEstetica from '../assets/images/mac-estetica-vehicular.png';
import imgEnglish from '../assets/images/english.png';
import imgKatja from '../assets/images/katja-handmade.png';
import imgPataRed from '../assets/images/patared.png';
import imgStreamFlow from '../assets/images/streamflow.png';

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
    id: 'streamflow-app',
    title: 'StreamFlow',
    description: 'Plataforma de streaming de video con diseño moderno e interfaz inmersiva. Desarrollada para ofrecer una experiencia de usuario fluida, navegación por categorías y visualización de contenido al estilo Netflix.',
    technologies: ['React', 'CSS', 'JavaScript'],
    imageUrl: imgStreamFlow,
    featured: true
  },
  {
    id: 'patared-veterinaria',
    title: 'PataRed - Red Médica',
    description: 'Plataforma web para una red médica veterinaria. Permite a los usuarios buscar especialistas, consultar cartillas médicas y conocer los planes de cobertura para sus mascotas mediante una interfaz amigable.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://obra-social-veterinaria.vercel.app/',
    imageUrl: imgPataRed,
    featured: true
  },
  {
    id: 'katja-handmade',
    title: 'Katja Handmade',
    description: 'Landing page e-commerce para marca de productos artesanales. Destaca por su diseño limpio, estética cuidada y catálogo interactivo para resaltar productos únicos y conectar con los clientes.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: 'https://katja-handmade-web.vercel.app/',
    imageUrl: imgKatja,
    featured: true
  },
  {
    id: 'turnos-pagina-web',
    title: 'Sistema de Gestión de Turnos Web',
    description: 'Plataforma integral desarrollada a medida para un cliente real de seguridad electrónica. Resolvió el problema de solapamiento de horarios automatizando la agenda y enviando notificaciones en tiempo real por WhatsApp y Email. Desplegada exitosamente en producción.',
    technologies: ['HTML', 'JavaScript', 'Python/Flask', 'PostgreSQL', 'Render'],
    demoUrl: 'https://monitoreo360seguridad.com/',
    imageUrl: imgTurnos,
    featured: true
  },
  {
    id: 'profesor-interactivo',
    title: 'Profesor Interactivo (EdTech)',
    description: 'Plataforma interactiva para docentes. Implementé WebSockets para permitir conexión en tiempo real entre la pizarra digital del profesor y los dispositivos de los alumnos mediante códigos QR, logrando encuestas y feedback anónimo sin latencia.',
    technologies: ['JavaScript', 'WebSockets', 'HTML/CSS'],
    demoUrl: 'https://profesor-interactivo.vercel.app',
    imageUrl: imgProfesor,
    featured: true
  },
  {
    id: 'fintrack-finance-manager',
    title: 'FinTrack App',
    description: 'Aplicación SPA para la gestión de finanzas personales. Construida con un enfoque en la experiencia de usuario (UX) y componentes reutilizables, permitiendo un control de gastos intuitivo y rápido.',
    technologies: ['TypeScript', 'React', 'CSS'],
    githubUrl: 'https://github.com/RodriA45/fintrack-finance-manager',
    imageUrl: imgFinTrack,
    featured: true
  },
  {
    id: 'jarvis-desktop-assistant',
    title: 'Jarvis Voice Assistant',
    description: 'Asistente holográfico de escritorio para Windows. Integración avanzada de APIs de inteligencia artificial (Claude, Gemini) y modelos locales (Ollama) para ejecutar comandos complejos de sistema mediante voz.',
    technologies: ['Python', 'LLMs API', 'Voice Recognition'],
    githubUrl: 'https://github.com/RodriA45/jarvis-desktop-assistant',
    imageUrl: imgJarvis,
    featured: false
  },
  {
    id: 'mac-estetica-vehicular',
    title: 'Landing Page Corporativa',
    description: 'Desarrollo Frontend para MAC Estética Vehicular. Diseño premium con alta conversión, enfocado en performance y SEO, incluyendo un comparador visual interactivo de "antes y después".',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RodriA45/mac-estetica-vehicular',
    demoUrl: 'https://rodria45.github.io/mac-estetica-vehicular/',
    imageUrl: imgMacEstetica,
    featured: false
  },
  {
    id: 'english-for-developers',
    title: 'English for Developers',
    description: 'Plataforma SaaS educativa con mecánicas Drag & Drop para que desarrolladores practiquen inglés técnico. Arquitectura robusta y tipado estricto.',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/RodriA45/english-for-developers',
    imageUrl: imgEnglish,
    featured: false
  },
  {
    id: 'cleansweep-dev',
    title: 'CleanSweep CLI',
    description: 'Herramienta de línea de comandos que automatiza la purga de dependencias y cachés en entornos de desarrollo, optimizando los tiempos de backup en servidores.',
    technologies: ['JavaScript', 'Node.js', 'CLI'],
    githubUrl: 'https://github.com/RodriA45/cleansweep-dev',
    imageUrl: imgCleansweep,
    featured: false
  },
  {
    id: 'world-cup-2026-tracker',
    title: 'World Cup 2026 Tracker',
    description: 'Fixture interactivo SPA con persistencia de datos local para el Mundial 2026. Lógica de renderizado dinámico y manejo eficiente del estado.',
    technologies: ['JavaScript', 'HTML5', 'Local Storage'],
    githubUrl: 'https://github.com/RodriA45/world-cup-2026-tracker',
    demoUrl: 'https://rodria45.github.io/world-cup-2026-tracker/',
    imageUrl: imgFixture,
    featured: false
  },
  {
    id: 'win-optimizador-r45',
    title: 'Win Optimizador R45',
    description: 'Script automatizado para optimización de sistemas operativos, manipulación de registros y protocolos de red a bajo nivel para maximizar rendimiento.',
    technologies: ['PowerShell', 'Windows API'],
    githubUrl: 'https://github.com/RodriA45/win-optimizador-r45',
    imageUrl: imgWinOptimizador,
    featured: false
  }
];
