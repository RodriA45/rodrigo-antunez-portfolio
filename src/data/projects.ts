import imgEstelar1 from '../assets/images/estelar-1.webp';
import imgEstelar2 from '../assets/images/estelar-2.webp';
import imgEstelar3 from '../assets/images/estelar-3.webp';
import imgEstelar4 from '../assets/images/estelar-4.webp';
import imgEstelar5 from '../assets/images/estelar-5.webp';
import imgEstelar6 from '../assets/images/estelar-6.webp';
import imgEstelar7 from '../assets/images/estelar-7.webp';
import imgEstelar8 from '../assets/images/estelar-8.webp';
import imgEstelar9 from '../assets/images/estelar-9.webp';
import imgEstelar10 from '../assets/images/estelar-10.webp';
import imgEstelar11 from '../assets/images/estelar-11.webp';
import imgEstelar12 from '../assets/images/estelar-12.webp';
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
import imgStreamFlow13 from '../assets/images/streamflow-13.webp';
import imgStreamFlow14 from '../assets/images/streamflow-14.webp';
import imgStreamFlow15 from '../assets/images/streamflow-15.webp';
import imgStreamFlow16 from '../assets/images/streamflow-16.webp';
import imgStreamFlow17 from '../assets/images/streamflow-17.webp';
import imgRutear from '../assets/images/rutear.webp';
import imgRutear2 from '../assets/images/rutear-2.webp';
import imgRutear3 from '../assets/images/rutear-3.webp';
import imgRutear4 from '../assets/images/rutear-4.webp';
import imgRutear5 from '../assets/images/rutear-5.webp';
import imgRutear6 from '../assets/images/rutear-6.webp';
import imgRutear7 from '../assets/images/rutear-7.webp';
import imgPendriMP3 from '../assets/images/pendrimp3.webp';

import imgDragonBall1 from '../assets/images/Dragon-ball-web-1.webp';
import imgDragonBall2 from '../assets/images/Dragon-ball-web-2.webp';
import imgDragonBall3 from '../assets/images/Dragon-ball-web-3.webp';
import imgDragonBall4 from '../assets/images/Dragon-ball-web-4.webp';
import imgDragonBall5 from '../assets/images/Dragon-ball-web-5.webp';
import imgDragonBall6 from '../assets/images/Dragon-ball-web-6.webp';

import imgURLMiner1 from '../assets/images/url-miner-1.webp';
import imgURLMiner2 from '../assets/images/url-miner-2.webp';
import imgURLMiner3 from '../assets/images/url-miner-3.webp';
import imgURLMiner4 from '../assets/images/url-miner-4.webp';
import imgURLMiner5 from '../assets/images/url-miner-5.webp';

import imgGruaRobotica1 from '../assets/images/grua-robotica-1.webp';
import imgGruaRobotica2 from '../assets/images/grua-robotica-2.webp';
import imgGruaRobotica3 from '../assets/images/grua-robotica-3.webp';

import imgHogarMiCasita1 from '../assets/images/hogar-mi-casita-1.webp';
import imgHogarMiCasita2 from '../assets/images/hogar-mi-casita-2.webp';


import imgCastWeb1 from '../assets/images/castweb-1.webp';
import imgCastWeb2 from '../assets/images/castweb-2.webp';

import imgSIGE1 from '../assets/images/sige-1.webp';
import imgSIGE2 from '../assets/images/sige-2.webp';
import imgSIGE3 from '../assets/images/sige-3.webp';
import imgSIGE4 from '../assets/images/sige-4.webp';

import imgTallerMotos1 from '../assets/images/taller-motos-1.webp';
import imgTallerMotos2 from '../assets/images/taller-motos-2.webp';
import imgTallerMotos3 from '../assets/images/taller-motos-3.webp';
import imgTallerMotos4 from '../assets/images/taller-motos-4.webp';

import imgReflex1 from '../assets/images/reflex-trackmanager-1.webp';

import imgTurnoNoche1 from '../assets/images/turno-noche-1.webp';
import imgTurnoNoche2 from '../assets/images/turno-noche-2.webp';

import imgLatinoStream1 from '../assets/images/latino-stream-1.webp';
import imgLatinoStream2 from '../assets/images/latino-stream-2.webp';
import imgLatinoStream3 from '../assets/images/latino-stream-3.webp';
import imgLatinoStream4 from '../assets/images/latino-stream-4.webp';
import imgLatinoStream5 from '../assets/images/latino-stream-5.webp';
import imgLatinoStream6 from '../assets/images/latino-stream-6.webp';

import imgDriverVault1 from '../assets/images/drivervault-1.webp';
import imgDriverVault2 from '../assets/images/drivervault-2.webp';

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
  isPrivateClient?: boolean;
}

export const projects: Project[] = [
  {
    id: 'url-miner-extractor',
    title: 'URL Miner - Smart Extractor & Live Text Bridge',
    description: 'Extrae y limpia enlaces masivamente desde texto sucio o HTML, y comparte fragmentos efímeros entre dispositivos por QR sin cuentas ni backend.',
    descriptionEn: 'Bulk-extract and sanitize URLs from raw text or HTML, and bridge ephemeral snippets across devices via QR without accounts.',
    technologies: ['React', 'TypeScript', 'Live Drop P2P', 'Regex Engine', 'Privacy-First'],
    category: 'Frontend',
    demoUrl: 'https://url-miner.vercel.app/',
    githubUrl: 'https://github.com/RodriA45/URL-Miner',
    imageUrl: imgURLMiner1,
    imageUrls: [
      imgURLMiner1, imgURLMiner2, imgURLMiner3, imgURLMiner4, imgURLMiner5
    ],
    featured: true
  },
  {
    id: 'hogar-mi-casita',
    title: 'Hogar Mi Casita - Cuidado Gerontológico',
    description: 'Plataforma web en producción para residencia gerontológica con sedes en Buenos Aires y Tucumán, optimizada para búsquedas locales y contacto directo por WhatsApp.',
    descriptionEn: 'Live production web platform for a geriatric care organization in Buenos Aires and Tucumán, optimized for local SEO and instant WhatsApp inquiries.',
    technologies: ['React', 'TypeScript', 'PWA', 'SEO & Schema.org', 'Vite', 'Producción Real'],
    category: 'Frontend',
    demoUrl: 'https://hogar-mi-casita.onrender.com/',
    imageUrl: imgHogarMiCasita1,
    imageUrls: [imgHogarMiCasita1, imgHogarMiCasita2],
    featured: true,
    isPrivateClient: true
  },

  {
    id: 'grua-robotica-4dof',
    title: 'Grúa Robótica 4-DOF (Control Serial)',
    description: 'Sistema de teleoperación en tiempo real para brazo robótico de 4 ejes con cinemática suave que protege los servomotores y soporte para mandos USB o teclado.',
    descriptionEn: 'Real-time teleoperation system for a 4-DOF robotic arm featuring smooth kinematic interpolation to protect servos and USB gamepad or keyboard control.',
    technologies: ['Python', 'Arduino UNO (C++)', 'Pygame GUI', 'Protocolo Serial', 'Robótica & Hardware'],
    category: 'Data & Scripts',
    githubUrl: 'https://github.com/RodriA45/Grua-Robotica-4dof',
    imageUrl: imgGruaRobotica1,
    imageUrls: [imgGruaRobotica1, imgGruaRobotica2, imgGruaRobotica3],
    featured: true
  },
  {
    id: 'castweb-p2p',
    title: 'CastWeb - Screen Sharing P2P',
    description: 'Comparte pantalla y audio entre dispositivos al instante con un código de 4 dígitos, logrando transmisión directa de latencia ultrabaja sin instalar software.',
    descriptionEn: 'Share screen and audio instantly between devices with a 4-digit pairing code, achieving ultra-low latency P2P streaming with zero installation.',
    technologies: ['WebRTC', 'JavaScript', 'CSS3 Moderno', 'P2P Streaming', 'Real-Time'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/castweb',
    demoUrl: 'https://castweb-wheat.vercel.app/',
    imageUrl: imgCastWeb1,
    imageUrls: [imgCastWeb1, imgCastWeb2],
    featured: true
  },
  {
    id: 'latino-stream-scraper-api',
    title: 'LatinoStream - Scraper API & Reproductor Propio',
    description: 'API REST en Python (Swagger) y scraper multiserver para cine, anime latino y TV en vivo (+2.800 canales). Incluye extractores sin anuncios, proxy HLS con subtítulos, auto-fallback, /api/health y tests pytest.',
    descriptionEn: 'Python REST API (Swagger) and multi-server scraper for Latino movies, anime, and Live TV (+2,800 channels). Features ad-free extractors, HLS subtitle proxy, auto-fallback, /api/health, and pytest tests.',
    technologies: ['Python', 'Web Scraping', 'OpenAPI 3.1', 'HLS Proxy', 'pytest'],
    category: 'Backend',
    imageUrl: imgLatinoStream1,
    imageUrls: [
      imgLatinoStream1,
      imgLatinoStream6,
      imgLatinoStream4,
      imgLatinoStream2,
      imgLatinoStream5,
      imgLatinoStream3
    ],
    featured: true,
    customCTA: {
      text: '¿Necesitas una API de scraping o backend a medida?',
      textEn: 'Need a custom scraping API or backend architecture?',
      url: 'https://wa.me/5493865227220?text=Hola%20Rodrigo,%20vi%20tu%20proyecto%20de%20API%20Scraper%20y%20reproductor%20y%20me%20interesa%20un%20desarrollo%20similar.',
      type: 'whatsapp'
    }
  },
  {
    id: 'sige-gestion-escolar',
    title: 'SIGE - Sistema Integral de Gestión Escolar',
    description: 'Software de escritorio (.exe) para gestión escolar y académica. Incluye auditoría de actividad, alertas de inasistencias y notas, exportación a Excel, backups en ZIP y tema claro/oscuro.',
    descriptionEn: 'Desktop software (.exe) for school administration and student tracking. Includes activity audit logs, attendance and grade alerts, Excel exports, ZIP backups, and light/dark themes.',
    technologies: ['Desktop App (.exe)', 'Bases de Datos', 'Auditoría', 'Excel & ZIP'],
    category: 'Data & Scripts',
    imageUrl: imgSIGE2,
    imageUrls: [imgSIGE2, imgSIGE1, imgSIGE3, imgSIGE4],
    featured: true,
    customCTA: {
      text: '¿Querés un sistema escolar para tu institución?',
      textEn: 'Want a school management system for your institution?',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  },
  {
    id: 'el-turno-noche-hospital',
    title: 'El Turno Noche: Hospital San Anselmo (3D)',
    description: 'Juego 3D de terror psicológico en el navegador con Three.js y Vite. Incluye 5 capítulos, estética VHS, sigilo en casilleros, linterna física, audio espacial Web Audio y controles táctiles.',
    descriptionEn: 'Browser-based 3D psychological horror game built with Three.js and Vite. Features 5 chapters, VHS aesthetics, locker stealth, physics flashlight, Web Audio 3D sound, and touch controls.',
    technologies: ['Three.js', 'WebGL', 'Vite', 'Web Audio API', 'JavaScript'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/el-turno-noche-hospital',
    demoUrl: 'https://el-turno-noche-hospital.vercel.app/',
    imageUrl: imgTurnoNoche1,
    imageUrls: [imgTurnoNoche1, imgTurnoNoche2],
    featured: true
  },
  {
    id: 'taller-motos-antunez',
    title: 'Taller Antunez - CRM & Gestión SQLite v7.0',
    description: 'Sistema de taller mecánico v7.0 optimizado con SQLite. Gestiona clientes, órdenes con fotos, tickets PDF, avisos por WhatsApp y resumen económico con gráficos de ingresos.',
    descriptionEn: 'Mechanical workshop CRM v7.0 powered by SQLite. Manages clients, photo service orders, PDF receipts, automated WhatsApp alerts, and monthly income analytics charts.',
    technologies: ['SQLite', 'Desktop App', 'WhatsApp API', 'PDF & Gráficos'],
    category: 'Data & Scripts',
    imageUrl: imgTallerMotos1,
    imageUrls: [imgTallerMotos1, imgTallerMotos2, imgTallerMotos3, imgTallerMotos4],
    featured: false,
    customCTA: {
      text: '¿Querés un sistema de gestión para tu taller o negocio?',
      textEn: 'Want a management system for your workshop or business?',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  },
  {
    id: 'drivervault-windows',
    title: 'DriverVault - Respaldo de Drivers Windows',
    description: 'App portable para Windows (.exe) en C# y .NET 8 WPF. Escanea drivers vía WMI/SetupAPI, los organiza por carpetas y genera instalador .bat, reporte HTML/TXT, ZIP y tests xUnit.',
    descriptionEn: 'Portable Windows desktop app (.exe) in C# and .NET 8 WPF. Scans drivers via WMI/SetupAPI into organized folders and generates a .bat installer, HTML/TXT report, ZIP, and xUnit tests.',
    technologies: ['C#', '.NET 8 WPF', 'Windows API', 'xUnit', 'Desktop (.exe)'],
    category: 'Data & Scripts',
    githubUrl: 'https://github.com/RodriA45/DriverVault-Windows',
    imageUrl: imgDriverVault1,
    imageUrls: [imgDriverVault1, imgDriverVault2],
    featured: true
  },
  {
    id: 'reflex-trackmanager',
    title: 'Reflex TrackManager 2026 (.NET 8 & ImGui)',
    description: 'Modernización e ingeniería inversa para MX vs ATV Reflex: migración a .NET 8 asíncrono, corrección del parser de Steam y overlay in-game en C++ con Dear ImGui y MinHook.',
    descriptionEn: 'Modernization and reverse engineering for MX vs ATV Reflex: async .NET 8 migration, Steam library parser fix, and a custom C++ in-game overlay built with Dear ImGui and MinHook.',
    technologies: ['C#', '.NET 8', 'C++', 'Dear ImGui', 'MinHook'],
    category: 'Data & Scripts',
    githubUrl: 'https://github.com/RodriA45/Reflex-TrackManager-2026',
    imageUrl: imgReflex1,
    imageUrls: [imgReflex1],
    featured: false
  },
  {
    id: 'dragonball-web-experience',
    title: 'SaiyanVerse - DBZ Web Experience',
    description: 'Experiencia inmersiva web basada en el universo de Dragon Ball. Destaca por su diseño oscuro premium (Dark Mode UI), animaciones avanzadas de scroll, cursores personalizados e integración de lectura de manga.',
    descriptionEn: 'Immersive web experience based on the Dragon Ball universe. Stands out for its premium dark design (Dark Mode UI), advanced scroll animations, custom cursors, and integrated manga reading.',
    technologies: ['HTML5', 'CSS3', 'Vanilla JS', 'UI/UX'],
    category: 'Frontend',
    demoUrl: 'https://rodria45.github.io/dragonball-web-experience/',
    githubUrl: 'https://github.com/RodriA45/dragonball-web-experience',
    imageUrl: imgDragonBall1,
    imageUrls: [
      imgDragonBall1, imgDragonBall2, imgDragonBall3, imgDragonBall4, imgDragonBall5, imgDragonBall6
    ],
    featured: true
  },
  {
    id: 'estelar-3d',
    title: 'Estelar - Exploración Cósmica',
    description: 'Experiencia web 3D interactiva para explorar el sistema solar y exoplanetas. Incluye tour guiado, texturas HD, controles orbitales e iluminación astronómica en tiempo real.',
    descriptionEn: 'Interactive 3D web experience to explore our solar system and exoplanets. Features a guided tour, HD textures, orbital controls, and real-time astronomical lighting.',
    technologies: ['React', 'Three.js', 'WebGL', 'Framer Motion'],
    category: 'Frontend',
    demoUrl: 'https://estelar-3-d.vercel.app/',
    githubUrl: 'https://github.com/RodriA45/Estelar-3D',
    imageUrl: imgEstelar1,
    imageUrls: [
      imgEstelar1, imgEstelar2, imgEstelar3, imgEstelar4, 
      imgEstelar5, imgEstelar6, imgEstelar7, imgEstelar8, 
      imgEstelar9, imgEstelar10, imgEstelar11, imgEstelar12
    ],
    featured: true
  },
  {
    id: 'rutear-simulador',
    title: 'Rutear - Simulador de Viajes Inteligente',
    description: 'Plataforma web para planificar viajes en ruta. Calcula costos de combustible, peajes, distancias y paradas con mapas interactivos, recomendaciones y contactos de emergencia.',
    descriptionEn: 'Web platform for road trip planning. Accurately calculates fuel costs, tolls, distances, and stops with interactive maps, travel tips, and emergency contacts.',
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
    description: 'Plataforma de streaming con temáticas estacionales dinámicas, TV en vivo y Deportes (+210 canales HD con proxy estable, zonas y agenda deportiva), perfiles y soporte Android TV/APK.',
    descriptionEn: 'Streaming platform with dynamic seasonal themes, Live TV & Sports (+210 HD channels with stable proxy, regional feeds, and sports schedule), profiles, and Android TV/APK support.',
    technologies: ['React', 'IPTV / HLS', 'Android TV', 'Temáticas Dinámicas'],
    category: 'Full Stack',
    demoUrl: 'https://streamflow-coral.vercel.app/',
    imageUrl: imgStreamFlow,
    imageUrls: [
      imgStreamFlow,
      imgStreamFlow12,
      imgStreamFlow13,
      imgStreamFlow14,
      imgStreamFlow15,
      imgStreamFlow16,
      imgStreamFlow17,
      imgStreamFlow3,
      imgStreamFlow4,
      imgStreamFlow5,
      imgStreamFlow8,
      imgStreamFlow9,
      imgStreamFlow10,
      imgStreamFlow11
    ],
    featured: true,
    customCTA: {
      text: '¿Querés ver películas, series y TV en tu celular o TV?',
      textEn: 'Want movies, series, and Live TV on your TV or phone?',
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
    description: 'Sistema web de turnos en producción para cliente de seguridad electrónica. Automatiza la agenda evitando solapamientos con avisos en tiempo real por WhatsApp y Email.',
    descriptionEn: 'Production web appointment system for an electronic security client. Automates overlap-free scheduling with real-time WhatsApp and Email notifications.',
    technologies: ['HTML', 'JavaScript', 'Python/Flask', 'PostgreSQL', 'Render'],
    category: 'Full Stack',
    demoUrl: 'https://monitoreo360seguridad.com/',
    imageUrl: imgTurnos,
    featured: true,
    isPrivateClient: true
  },
  {
    id: 'profesor-interactivo',
    title: 'Profesor Interactivo (EdTech)',
    description: 'Plataforma EdTech con WebSockets que conecta la pizarra del docente con celulares de alumnos vía QR para encuestas y feedback anónimo en tiempo real sin latencia.',
    descriptionEn: 'EdTech platform using WebSockets to link a teacher\'s board with student phones via QR codes for zero-latency live polls and anonymous feedback.',
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
      text: '¿Querés un limpiador de espacio para tus proyectos?',
      textEn: 'Want a dependency and space cleaner for your projects?',
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
