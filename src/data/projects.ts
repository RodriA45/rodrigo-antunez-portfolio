import imgEstelar1 from '../assets/images/estelar-1.png';
import imgEstelar2 from '../assets/images/estelar-2.png';
import imgEstelar3 from '../assets/images/estelar-3.png';
import imgEstelar4 from '../assets/images/estelar-4.png';
import imgEstelar5 from '../assets/images/estelar-5.png';
import imgEstelar6 from '../assets/images/estelar-6.png';
import imgEstelar7 from '../assets/images/estelar-7.png';
import imgEstelar8 from '../assets/images/estelar-8.png';
import imgEstelar9 from '../assets/images/estelar-9.png';
import imgEstelar10 from '../assets/images/estelar-10.png';
import imgEstelar11 from '../assets/images/estelar-11.png';
import imgEstelar12 from '../assets/images/estelar-12.png';
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

import imgDragonBall1 from '../assets/images/Dragon-ball-web-1.png';
import imgDragonBall2 from '../assets/images/Dragon-ball-web-2.png';
import imgDragonBall3 from '../assets/images/Dragon-ball-web-3.png';
import imgDragonBall4 from '../assets/images/Dragon-ball-web-4.png';
import imgDragonBall5 from '../assets/images/Dragon-ball-web-5.png';
import imgDragonBall6 from '../assets/images/Dragon-ball-web-6.png';

import imgURLMiner1 from '../assets/images/url-miner-1.png';
import imgURLMiner2 from '../assets/images/url-miner-2.png';
import imgURLMiner3 from '../assets/images/url-miner-3.png';
import imgURLMiner4 from '../assets/images/url-miner-4.png';
import imgURLMiner5 from '../assets/images/url-miner-5.png';

import imgGruaRobotica1 from '../assets/images/grua-robotica-1.png';
import imgGruaRobotica2 from '../assets/images/grua-robotica-2.png';
import imgGruaRobotica3 from '../assets/images/grua-robotica-3.jpg';

import imgHogarMiCasita1 from '../assets/images/hogar-mi-casita-1.png';
import imgHogarMiCasita2 from '../assets/images/hogar-mi-casita-2.png';


import imgCastWeb1 from '../assets/images/castweb-1.png';
import imgCastWeb2 from '../assets/images/castweb-2.png';

import imgSIGE1 from '../assets/images/sige-1.png';
import imgSIGE2 from '../assets/images/sige-2.png';
import imgSIGE3 from '../assets/images/sige-3.png';
import imgSIGE4 from '../assets/images/sige-4.png';

import imgTallerMotos1 from '../assets/images/taller-motos-1.png';
import imgTallerMotos2 from '../assets/images/taller-motos-2.png';
import imgTallerMotos3 from '../assets/images/taller-motos-3.png';
import imgTallerMotos4 from '../assets/images/taller-motos-4.png';

import imgReflex1 from '../assets/images/reflex-trackmanager-1.png';

import imgTurnoNoche1 from '../assets/images/turno-noche-1.png';
import imgTurnoNoche2 from '../assets/images/turno-noche-2.png';

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
    id: 'url-miner-extractor',
    title: 'URL Miner - Smart Extractor & Live Text Bridge',
    description: 'Suite web avanzada de extracción masiva de URLs y puente de texto en tiempo real (v3.2.0). Incluye motor de minado con regex de alta precisión, filtros por dominio o extensión, formateador en lote (HTML/Markdown), puente "Live Drop" efímero entre dispositivos mediante salas o QR sin registro, limpieza de analítica (UTM, fbclid), historial local y temas dinámicos Neo-Brutalist y Matrix.',
    descriptionEn: 'Advanced web suite for bulk URL extraction and real-time live text bridging (v3.2.0). Features a high-precision regex mining engine, domain/extension filtering, batch link formatter (HTML/Markdown), ephemeral "Live Drop" bridge between devices via room codes or QR without accounts, tracking parameter sanitizer (UTM, fbclid), local history, and dynamic Neo-Brutalist & Matrix themes.',
    technologies: ['React', 'TypeScript', 'Live Drop P2P', 'Tailwind / Neo-Brutalist', 'Regex Engine', 'Privacy-First'],
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
    description: 'Plataforma web desplegada en producción para un cliente real de salud y cuidado del adulto mayor, con sedes en Buenos Aires y Tucumán. Construida con React, arquitectura PWA instalable, optimización SEO con metadatos estructurados (Schema.org JSON-LD MedicalOrganization), atención médica 24/7 y contacto directo por WhatsApp.',
    descriptionEn: 'Live production web platform for a healthcare and elder care client with facilities in Buenos Aires and Tucumán. Built with React, installable PWA architecture, advanced SEO with structured schema (Schema.org JSON-LD MedicalOrganization), 24/7 care showcase, and instant WhatsApp integration.',
    technologies: ['React', 'TypeScript', 'PWA', 'SEO & Schema.org', 'Vite', 'Producción Real'],
    category: 'Frontend',
    demoUrl: 'https://hogar-mi-casita.onrender.com/',
    imageUrl: imgHogarMiCasita1,
    imageUrls: [imgHogarMiCasita1, imgHogarMiCasita2],
    featured: true
  },

  {
    id: 'grua-robotica-4dof',
    title: 'Grúa Robótica 4-DOF (Control Serial)',
    description: 'Sistema integral de control en tiempo real para brazo robótico articulado de 4 grados de libertad (4-DOF). Desarrollado con interfaz gráfica de escritorio en Python (Pygame), comunicación serial continua y microcontrolador Arduino UNO con interpolación cinemática suave para proteger los servomotores SG90. Soporta mandos USB (PlayStation, Xbox) con filtro de zona muerta y modo teclado automático.',
    descriptionEn: 'Comprehensive real-time control system for a 4-DOF articulated robotic arm. Engineered with a Python (Pygame) desktop GUI, low-latency serial communication, and an Arduino UNO microcontroller with smooth kinematic interpolation to protect SG90 servo motors. Features USB gamepad support (PlayStation, Xbox) with deadzone filtering and automatic keyboard fallback.',
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
    description: 'Herramienta web moderna para la transmisión y recepción de pantalla y audio en tiempo real con latencia ultrabaja. Basada en tecnología WebRTC Peer-to-Peer, permite vincular dos dispositivos al instante mediante un código seguro de 4 dígitos sin configuraciones complejas ni instalaciones de software.',
    descriptionEn: 'Modern web tool for sharing and receiving screen and audio in real time with ultra-low latency. Powered by WebRTC Peer-to-Peer technology, it enables instant pairing between devices using a secure 4-digit code without complicated setups or software installations.',
    technologies: ['WebRTC', 'JavaScript', 'CSS3 Moderno', 'P2P Streaming', 'Real-Time'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/castweb',
    demoUrl: 'https://castweb-wheat.vercel.app/',
    imageUrl: imgCastWeb1,
    imageUrls: [imgCastWeb1, imgCastWeb2],
    featured: true
  },
  {
    id: 'sige-gestion-escolar',
    title: 'SIGE - Sistema Integral de Gestión Escolar',
    description: 'Software de escritorio corporativo (.exe) para la gestión educativa y seguimiento de alumnos. Incluye módulo de auditoría de actividad para trazabilidad de operaciones, alertas de inasistencias y promedios por trimestre, exportación masiva de planillas a Excel, sistema de backups integrales en ZIP y tema visual claro/oscuro.',
    descriptionEn: 'Corporate desktop software (.exe) for educational administration and student academic monitoring. Includes activity audit logs for operation traceability, attendance and grade threshold alerts by trimester, bulk Excel exports, automated ZIP backups, and light/dark theme switching.',
    technologies: ['Desktop App (.exe)', 'Bases de Datos', 'Auditoría', 'Excel Exports', 'Seguridad & Backup'],
    category: 'Data & Scripts',
    imageUrl: imgSIGE2,
    imageUrls: [imgSIGE2, imgSIGE1, imgSIGE3, imgSIGE4],
    featured: true,
    customCTA: {
      text: '¿Quieres un sistema de gestión escolar para tu institución o colegio? Háblame',
      textEn: 'Do you want a school management system for your institution or school? Contact me.',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  },
  {
    id: 'el-turno-noche-hospital',
    title: 'El Turno Noche: Hospital San Anselmo (3D)',
    description: 'Videojuego de terror psicológico episódico en 3D que corre 100% nativo en el navegador mediante Three.js y Vite. Inspirado en Fears to Fathom y Resident Evil, incluye 5 capítulos de tensión narrativa, cinemáticas analógicas VHS (1984), mecánicas de sigilo en casilleros, linterna física con cookies ópticos, audio espacial sintetizado proceduralmente (Web Audio API) y controles táctiles para móviles.',
    descriptionEn: 'Episodic 3D psychological horror web game running 100% natively in the browser using Three.js and Vite. Inspired by Fears to Fathom and Resident Evil, it features 5 chapters, retro VHS cutscenes (1984), locker stealth mechanics, physics-based flashlight projection, procedural 3D spatial audio (Web Audio API), and mobile touch controls.',
    technologies: ['Three.js', 'WebGL', 'Vite', 'Web Audio API', 'Procedural PBR', 'JavaScript'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RodriA45/el-turno-noche-hospital',
    demoUrl: 'https://el-turno-noche-hospital.vercel.app/',
    imageUrl: imgTurnoNoche1,
    imageUrls: [imgTurnoNoche1, imgTurnoNoche2],
    featured: true
  },
  {
    id: 'taller-motos-antunez',
    title: 'Taller Antúnez - CRM & Gestión SQLite v7.0',
    description: 'Sistema integral de gestión de taller mecánico y órdenes de servicio, migrado y optimizado a SQLite en su versión 7.0. Administra clientes frecuentes, ingresos de vehículos con fotografías adjuntas, facturación de tickets PDF, avisos automatizados a clientes vía WhatsApp y resumen económico con gráficos de ingresos de los últimos 6 meses.',
    descriptionEn: 'Comprehensive workshop management and service order system, migrated and optimized with SQLite in version 7.0. Manages frequent clients, vehicle intake with photo attachments, PDF ticket billing, automated WhatsApp customer notifications, and monthly economic summaries with historic income charts.',
    technologies: ['SQLite', 'Desktop App', 'WhatsApp API', 'Reportes PDF', 'Métricas & Gráficos'],
    category: 'Data & Scripts',
    imageUrl: imgTallerMotos1,
    imageUrls: [imgTallerMotos1, imgTallerMotos2, imgTallerMotos3, imgTallerMotos4],
    featured: false,
    customCTA: {
      text: '¿Quieres un sistema de gestión para tu taller mecánico o negocio? Háblame',
      textEn: 'Do you want a management system for your workshop or business? Contact me.',
      url: 'https://wa.me/5493865227220',
      type: 'whatsapp'
    }
  },
  {
    id: 'reflex-trackmanager',
    title: 'Reflex TrackManager 2026 (.NET 8 & ImGui)',
    description: 'Modernización e ingeniería inversa de la herramienta comunitaria de gestión de pistas para MX vs ATV Reflex. Migración del backend a .NET 8, reemplazo de llamadas síncronas por HttpClient asíncrono para evitar bloqueos de interfaz, eliminación de endpoints AWS caídos, corrección del parser de Steam y desarrollo de overlay in-game en C++ con Dear ImGui y MinHook.',
    descriptionEn: 'Modernization and reverse engineering of the community track management utility for MX vs ATV Reflex. Migrated backend to .NET 8, replaced legacy synchronous calls with asynchronous HttpClient, removed defunct AWS cloud servers causing startup crashes, fixed Steam library parser, and implemented a custom C++ in-game overlay via Dear ImGui and MinHook.',
    technologies: ['C#', '.NET 8', 'C++', 'Dear ImGui', 'MinHook', 'Reverse Engineering'],
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
    description: 'Experiencia inmersiva 3D en el navegador que permite explorar nuestro sistema solar y exoplanetas cinematográficos (como los de Interstellar). Incluye un tour espacial guiado, texturas de alta resolución, controles orbitales interactivos y efectos de iluminación astronómica en tiempo real.',
    descriptionEn: 'Immersive 3D browser experience to explore our solar system and cinematic exoplanets. Includes a guided space tour, high-resolution textures, interactive orbital controls, and real-time realistic astronomical lighting effects.',
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
