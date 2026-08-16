import imgProfesor from '../assets/images/profesor-interactivo.webp';
import imgFinTrack from '../assets/images/fin-track.webp';
import imgJarvis from '../assets/images/jarvis.webp';
import imgTurnos from '../assets/images/turnos-web.webp';
import imgWinOptimizador from '../assets/images/win-optimizador.webp';
import imgCleansweep from '../assets/images/cleansweep.webp';
import imgFixture from '../assets/images/fixture-mundial.webp';
import imgMacEstetica from '../assets/images/mac-estetica-vehicular.webp';
import imgEnglish from '../assets/images/english.webp';
import imgKatja from '../assets/images/katja-handmade.webp';
import imgPataRed from '../assets/images/patared.webp';
import imgStreamFlow from '../assets/images/streamflow.webp';
import imgStreamFlow3 from '../assets/images/streamflow-3.webp';
import imgStreamFlow4 from '../assets/images/streamflow-4.webp';
import imgStreamFlow5 from '../assets/images/streamflow-5.webp';
import imgStreamFlow8 from '../assets/images/streamflow-8.webp';
import imgStreamFlow9 from '../assets/images/streamflow-9.webp';
import imgStreamFlow10 from '../assets/images/streamflow-10.webp';
import imgStreamFlow11 from '../assets/images/streamflow-11.webp';
import imgStreamFlow12 from '../assets/images/streamflow-12.webp';
import imgRutear from '../assets/images/rutear.webp';
import imgRutear2 from '../assets/images/rutear-2.webp';
import imgRutear3 from '../assets/images/rutear-3.webp';
import imgRutear4 from '../assets/images/rutear-4.webp';
import imgRutear5 from '../assets/images/rutear-5.webp';
import imgRutear6 from '../assets/images/rutear-6.webp';
import imgRutear7 from '../assets/images/rutear-7.webp';
import imgPendriMP3 from '../assets/images/pendrimp3.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEn?: string;
  technologies: string[];
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'Data & Scripts';
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  imageUrls?: string[];
  featured?: boolean;
  customCTA?: {
    text: string;
    textEn?: string;
    url: string;
    type?: 'whatsapp' | 'video' | 'github';
  };
  isMockup?: boolean;
}

export const projects: Project[] = [
  {
    id: 'rutear-simulador',
    title: 'Rutear - Simulador de Viajes Inteligente',
    description: 'Plataforma avanzada para la planificación integral de viajes en ruta. Cuenta con un cotizador inteligente que calcula con precisión costos de combustible, peajes, distancias y paradas sugeridas. Incluye mapas interactivos, recomendaciones para el viajero y contactos de emergencia en una interfaz inmersiva y moderna.',
    descriptionEn: 'Advanced platform for comprehensive road trip planning. It features an intelligent quoter that accurately calculates fuel costs, tolls, distances, and suggested stops. Includes interactive maps, traveler recommendations, and emergency contacts in an immersive and modern interface.',
    technologies: ['React', 'JavaScript', 'CSS', 'Map APIs'],
    category: 'Frontend',
    demoUrl: 'https://rutear-simulador-viajes.vercel.app/',
    imageUrl: imgRutear,
    imageUrls: [imgRutear, imgRutear2, imgRutear3, imgRutear4, imgRutear5, imgRutear6, imgRutear7],
    featured: true
  },
  {
    id: 'streamflow-app',
    title: 'StreamFlow',
    description: 'Plataforma avanzada de streaming de video. Incluye sistema de perfiles, televisión en vivo (24/7) y compatibilidad total con Android TV y móviles (descarga directa vía APK o Downloader). Destaca por su rendimiento optimizado, registro de actualizaciones y sistema de acceso VIP, ofreciendo una experiencia inmersiva al estilo Netflix.',
    descriptionEn: 'Advanced video streaming platform. Includes a profile system, live TV (24/7), and full compatibility with Android TV and mobile devices (direct download via APK or Downloader). Stands out for its optimized performance, update logs, and VIP access system, offering an immersive Netflix-style experience.',
    technologies: ['React', 'CSS', 'JavaScript'],
    category: 'Full Stack',
    demoUrl: 'https://streamflow-coral.vercel.app/',
    imageUrl: imgStreamFlow,
    imageUrls: [
      imgStreamFlow,
      imgStreamFlow3,
      imgStreamFlow4,
      imgStreamFlow5,
      imgStreamFlow8,
      imgStreamFlow9,
      imgStreamFlow10,
      imgStreamFlow11,
      imgStreamFlow12
    ],
    featured: true,
    customCTA: {
      text: '¿Quieres disfrutar de las mejores Películas, Series y Anime en tu TV o Celular?',
      textEn: 'Do you want to enjoy the best Movies, Series, and Anime on your TV or Phone?',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  },
  {
    id: 'pendrimp3-organizer',
    title: 'PendriMP3 - Smart Organizer',
    description: 'Aplicación de escritorio portable para descargar música de YouTube y organizarla automáticamente en tu pendrive usando Inteligencia Artificial para categorizar por género y artista.',
    descriptionEn: 'Portable desktop application to download music from YouTube and auto-organize it into your USB drive using AI for genre and artist categorization.',
    technologies: ['React', 'Node.js', 'Desktop App', 'AI Integration'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/RodriA45/PendriMP3',
    imageUrl: imgPendriMP3,
    featured: true
  },
  {
    id: 'patared-veterinaria',
    title: 'PataRed - Red Médica',
    description: 'Plataforma web para una red médica veterinaria. Permite a los usuarios buscar especialistas, consultar cartillas médicas y conocer los planes de cobertura para sus mascotas mediante una interfaz amigable.',
    descriptionEn: 'Web platform for a veterinary medical network. Allows users to search for specialists, check medical directories, and learn about coverage plans for their pets through a user-friendly interface.',
    technologies: ['React', 'CSS', 'JavaScript'],
    category: 'Frontend',
    demoUrl: 'https://obra-social-veterinaria.vercel.app/',
    imageUrl: imgPataRed,
    featured: true,
    isMockup: true
  },
  {
    id: 'katja-handmade',
    title: 'Katja Handmade',
    description: 'Landing page e-commerce para marca de productos artesanales. Destaca por su diseño limpio, estética cuidada y catálogo interactivo para resaltar productos únicos y conectar con los clientes.',
    descriptionEn: 'E-commerce landing page for a handmade products brand. Stands out for its clean design, careful aesthetics, and interactive catalog to highlight unique products and connect with customers.',
    technologies: ['React', 'CSS', 'JavaScript'],
    category: 'Frontend',
    demoUrl: 'https://katja-handmade-web.vercel.app/',
    imageUrl: imgKatja,
    featured: true
  },
  {
    id: 'turnos-pagina-web',
    title: 'Sistema de Gestión de Turnos Web',
    description: 'Plataforma integral desarrollada a medida para un cliente real de seguridad electrónica. Resolvió el problema de solapamiento de horarios automatizando la agenda y enviando notificaciones en tiempo real por WhatsApp y Email. Desplegada exitosamente en producción.',
    descriptionEn: 'Comprehensive web appointment management system custom-developed for a real electronic security client. Solved schedule overlapping by automating the calendar and sending real-time notifications via WhatsApp and Email. Successfully deployed in production.',
    technologies: ['HTML', 'JavaScript', 'Python/Flask', 'PostgreSQL', 'Render'],
    category: 'Full Stack',
    demoUrl: 'https://monitoreo360seguridad.com/',
    imageUrl: imgTurnos,
    featured: true
  },
  {
    id: 'profesor-interactivo',
    title: 'Profesor Interactivo (EdTech)',
    description: 'Plataforma interactiva para docentes. Implementé WebSockets para permitir conexión en tiempo real entre la pizarra digital del profesor y los dispositivos de los alumnos mediante códigos QR, logrando encuestas y feedback anónimo sin latencia.',
    descriptionEn: 'Interactive platform for teachers. I implemented WebSockets to enable real-time connection between the teacher\'s digital whiteboard and students\' devices via QR codes, achieving latency-free anonymous polls and feedback.',
    technologies: ['JavaScript', 'WebSockets', 'HTML/CSS'],
    category: 'Frontend',
    demoUrl: 'https://profesor-interactivo.vercel.app',
    imageUrl: imgProfesor,
    featured: true,
    isMockup: true
  },
  {
    id: 'fintrack-finance-manager',
    title: 'FinTrack App',
    description: 'Aplicación SPA para la gestión de finanzas personales. Construida con un enfoque en la experiencia de usuario (UX) y componentes reutilizables, permitiendo un control de gastos intuitivo y rápido.',
    descriptionEn: 'SPA application for personal finance management. Built with a focus on user experience (UX) and reusable components, allowing for intuitive and fast expense tracking.',
    technologies: ['TypeScript', 'React', 'CSS'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/fintrack-finance-manager',
    imageUrl: imgFinTrack,
    featured: true,
    isMockup: true
  },
  {
    id: 'jarvis-desktop-assistant',
    title: 'Jarvis Voice Assistant',
    description: 'Asistente holográfico de escritorio para Windows. Integración avanzada de APIs de inteligencia artificial (Claude, Gemini) y modelos locales (Ollama) para ejecutar comandos complejos de sistema mediante voz.',
    descriptionEn: 'Holographic desktop assistant for Windows. Advanced integration of AI APIs (Claude, Gemini) and local models (Ollama) to execute complex system commands via voice.',
    technologies: ['Python', 'LLMs API', 'Voice Recognition'],
    category: 'Data & Scripts',
    githubUrl: 'https://github.com/RodriA45/jarvis-desktop-assistant',
    imageUrl: imgJarvis,
    featured: false
  },
  {
    id: 'mac-estetica-vehicular',
    title: 'Landing Page Corporativa',
    description: 'Desarrollo Frontend para MAC Estética Vehicular. Diseño premium con alta conversión, enfocado en performance y SEO, incluyendo un comparador visual interactivo de "antes y después".',
    descriptionEn: 'Corporate Landing Page Frontend development for MAC Estética Vehicular. High-conversion premium design, focused on performance and SEO, including an interactive visual "before and after" comparison.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/mac-estetica-vehicular',
    demoUrl: 'https://rodria45.github.io/mac-estetica-vehicular/',
    imageUrl: imgMacEstetica,
    featured: false,
    isMockup: true
  },
  {
    id: 'english-for-developers',
    title: 'English for Developers',
    description: 'Plataforma SaaS educativa con mecánicas Drag & Drop para que desarrolladores practiquen inglés técnico. Arquitectura robusta y tipado estricto.',
    descriptionEn: 'Educational SaaS platform with Drag & Drop mechanics for developers to practice technical English. Robust architecture and strict typing.',
    technologies: ['React', 'TypeScript', 'CSS'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/english-for-developers',
    imageUrl: imgEnglish,
    featured: false
  },
  {
    id: 'cleansweep-dev',
    title: 'CleanSweep CLI',
    description: 'Herramienta de línea de comandos que automatiza la purga de dependencias y cachés en entornos de desarrollo, optimizando los tiempos de backup en servidores.',
    descriptionEn: 'Command-line tool that automates the purging of dependencies and caches in development environments, optimizing backup times on servers.',
    technologies: ['JavaScript', 'Node.js', 'CLI'],
    category: 'Data & Scripts',
    imageUrl: imgCleansweep,
    featured: false,
    customCTA: {
      text: '¿Quieres un Limpiador de Dependencias y espacio para tus proyectos de programación? Háblame',
      textEn: 'Do you want a Dependency Cleaner and free space for your programming projects? Contact me.',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  },
  {
    id: 'world-cup-2026-tracker',
    title: 'World Cup 2026 Tracker',
    description: 'Fixture interactivo SPA con persistencia de datos local para el Mundial 2026. Lógica de renderizado dinámico y manejo eficiente del estado.',
    descriptionEn: 'Interactive SPA fixture with local data persistence for the 2026 World Cup. Dynamic rendering logic and efficient state management.',
    technologies: ['JavaScript', 'HTML5', 'Local Storage'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/world-cup-2026-tracker',
    demoUrl: 'https://rodria45.github.io/world-cup-2026-tracker/',
    imageUrl: imgFixture,
    featured: false
  },
  {
    id: 'win-optimizador-r45',
    title: 'Win Optimizador R45',
    description: 'Script automatizado para optimización de sistemas operativos, manipulación de registros y protocolos de red a bajo nivel para maximizar rendimiento.',
    descriptionEn: 'Automated script for operating system optimization, manipulating low-level registries and network protocols to maximize performance.',
    technologies: ['PowerShell', 'Windows API'],
    category: 'Data & Scripts',
    imageUrl: imgWinOptimizador,
    featured: false,
    customCTA: {
      text: '¿Quieres una optimización? Háblame',
      textEn: 'Do you want a PC optimization? Contact me.',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  }
];
