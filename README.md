# Rodrigo Antúnez — Portfolio Web

**Sitio en producción:** [rodria45.github.io/rodrigo-antunez-portfolio](https://rodria45.github.io/rodrigo-antunez-portfolio/)

Aplicación web SPA desarrollada con React, TypeScript y Vite para presentar mis proyectos de desarrollo Full Stack, Frontend, Backend y aplicaciones/scripts de escritorio, junto con mis servicios, stack técnico y canales de contacto directo.

---

## Características principales

- **Catálogo de proyectos con filtros por categoría:** pestañas de *Destacados*, *Todos*, *Frontend*, *Backend*, *Full Stack* y *Data & Scripts*, con tarjeta Hero panorámica para el proyecto principal, carrusel de capturas y visor en pantalla completa (*Lightbox*).
- **Fichas tipadas y diferenciadas:** soporte para descripciones bilingües, badges de *Maqueta* o *Código privado (Proyecto de cliente)*, enlaces a GitHub/Demo y contacto directo por WhatsApp.
- **Proyecto Capstone independiente:** sección dedicada al proyecto integrador universitario (**UniGames**).
- **Internacionalización (ES / EN):** cambio instantáneo entre español e inglés con `i18next` y `react-i18next`.
- **Personalización visual y responsive:** selector de acentos de color (`ThemeSwitcher`), transiciones con `framer-motion` y layout CSS modular adaptado a escritorio, móvil, modo horizontal y pantallas duales (`horizontal-viewport-segments`).
- **Despliegue automatizado:** compilación y publicación continua en GitHub Pages mediante GitHub Actions.

---

## Stack tecnológico

- **Core:** React 19, TypeScript, Vite 8
- **Estilos y UI:** CSS modular con design tokens, Framer Motion, Lucide React, React Icons
- **Internacionalización:** `i18next`, `react-i18next`
- **Linting y Build:** `oxlint`, `tsc -b`
- **CI/CD y Hosting:** GitHub Actions y GitHub Pages

---

## Ejecución local

### Requisitos
- Node.js 20 o superior

### Comandos
```bash
git clone https://github.com/RodriA45/rodrigo-antunez-portfolio.git
cd rodrigo-antunez-portfolio
npm install
npm run dev
```

En Windows también podés ejecutar `start.bat` para instalar dependencias (si faltan) e iniciar el servidor de desarrollo automáticamente.

### Scripts disponibles

| Script | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo con Vite |
| `npm run build` | Verifica tipos con `tsc -b` y genera el bundle de producción en `dist/` |
| `npm run lint` | Ejecuta el linter (`oxlint`) sobre el proyecto |
| `npm run preview` | Previsualiza localmente el build generado en `dist/` |

---

## Estructura del proyecto

```text
.
├── .github/workflows/
│   └── deploy.yml          # Pipeline de build y deploy a GitHub Pages
├── public/                 # Favicon, robots.txt, sitemap.xml y preview
├── src/
│   ├── assets/images/      # Capturas optimizadas en formato .webp
│   ├── components/         # Navbar, Hero, AboutMe, Services, Skills, ProjectGrid, ProjectCard, CapstoneProject, etc.
│   ├── data/
│   │   └── projects.ts     # Definición tipada y bilingüe del listado de proyectos
│   ├── locales/            # Diccionarios de traducción (es.json, en.json)
│   ├── App.tsx             # Composición principal de secciones
│   ├── i18n.ts             # Configuración de i18next
│   ├── index.css           # Variables globales y estilos base
│   └── main.tsx            # Punto de entrada
├── index.html
├── package.json
├── start.bat
└── vite.config.ts
```
