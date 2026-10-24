# 💻 Rodrigo Antúnez | Portfolio Web

🔗 **Sitio en vivo:** [rodria45.github.io/rodrigo-antunez-portfolio](https://rodria45.github.io/rodrigo-antunez-portfolio/)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> Portafolio interactivo de alto impacto diseñado para exhibir mi experiencia, sistemas en producción, proyectos de hardware/robótica, aplicaciones web en tiempo real y videojuegos 3D como Desarrollador Full Stack.

---

## ✨ Características y Secciones Principales

- **Proyecto Final de Graduación (Capstone Project - UniGames):** Sección exclusiva e independiente dedicada al proyecto integrador universitario con motor 2D en Canvas, autenticación con Supabase, PostgreSQL y enlace para jugar en vivo.
- **Showcase de Proyectos con Formato Hero + Grid:**
  - **Proyecto Hero Destacado:** El proyecto principal se presenta en un banner panorámico de 500px con tarjeta flotante en *glassmorphism* y controles integrados.
  - **Grid de Proyectos Alineado:** Tarjetas estandarizadas con carruseles de imágenes navegables, modal de inspección en pantalla completa (*Lightbox*) y alturas perfectamente balanceadas.
  - **Filtro Inteligente y Botón "¿Quieres ver más proyectos?":** Carga inicial optimizada de 4 proyectos destacados con expansión fluida hacia la totalidad de desarrollos y botón para volver a destacados.
- **Sistemas en Producción y Casos Reales:**
  - **URL Miner:** Suite de extracción y filtrado masivo de URLs con puente *Live Drop* efímero entre dispositivos.
  - **Hogar Mi Casita:** Plataforma en producción para cliente real de salud gerontológica (PWA instalable, Schema.org SEO, WhatsApp).
  - **Grúa Robótica 4-DOF:** Control en tiempo real con Arduino UNO, comunicación serial, GUI en Python (Pygame) y soporte para joystick.
  - **CastWeb:** Transmisión P2P de pantalla y audio en tiempo real con WebRTC sin instalación de software.
  - **El Turno Noche: Hospital San Anselmo:** Videojuego 3D en el navegador con Three.js, shaders retro VHS y audio espacial procedural.
  - **SIGE y Taller Antúnez:** Software de gestión con bases de datos, auditoría, exportaciones a Excel/PDF y botones de cotización directa por WhatsApp.
- **Soporte Bilingüe Nativo (i18n):** Traducción instantánea entre Español e Inglés con persistencia de idioma.
- **Estética Dark Mode & Glassmorphism:** Micro-interacciones fluidas impulsadas por Framer Motion, diseño responsivo para móviles, tablets y monitores ultrawide.
- **Contacto Directo:** Enlaces rápidos a WhatsApp, email pre-completado y redes profesionales sin intermediarios.

---

## 🛠️ Stack Tecnológico

- **Frontend:** React 18, TypeScript, Framer Motion, React Icons.
- **Gráficos & Tiempo Real:** Three.js, WebGL, WebRTC (P2P Data & Media Streams), HTML5 Canvas.
- **Estilos:** Vanilla CSS moderno con variables de diseño (Design Tokens), arquitectura modular sin frameworks pesados.
- **Build Tool:** Vite 8.
- **Internacionalización:** i18next & react-i18next.
- **CI/CD & Hosting:** GitHub Actions & GitHub Pages.

---

## 🚀 Despliegue Local (Getting Started)

### 1. Clonar el repositorio
```bash
git clone https://github.com/RodriA45/rodrigo-antunez-portfolio.git
cd rodrigo-antunez-portfolio
```

### 2. Modo Automático (Windows)
Haz doble clic en `start.bat`. El script verificará las dependencias, instalará los paquetes necesarios e iniciará el servidor de desarrollo local automáticamente.

### 3. Modo Manual (Cualquier Sistema Operativo)
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

El servidor local se iniciará habitualmente en `http://localhost:5173/` o `http://localhost:5174/`.

---

## 📁 Estructura del Proyecto

```plaintext
src/
├── assets/images/       # Capturas reales en alta resolución de cada proyecto
├── components/          # Componentes modulares (Hero, CapstoneProject, ProjectGrid, ProjectCard, etc.)
├── data/
│   └── projects.ts      # Esquema centralizado y tipado de proyectos
├── locales/             # Diccionarios de traducción (es.json, en.json)
├── App.tsx              # Componente principal con orquestación de secciones
└── main.tsx             # Punto de entrada de la aplicación
```

---

**© 2026 Rodrigo Antúnez.**  
Desarrollador Full Stack | Transformando ideas en software real de alto impacto.