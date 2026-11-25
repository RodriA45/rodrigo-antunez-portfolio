<div align="center">
  <a href="https://rodria45.github.io/rodrigo-antunez-portfolio/" target="_blank">
    <img src=".github/assets/hero.svg" alt="Rodrigo Antúnez — Full Stack Developer Portfolio" width="100%" />
  </a>

  <br /><br />

  <a href="https://github.com/RodriA45/rodrigo-antunez-portfolio/actions/workflows/deploy.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/RodriA45/rodrigo-antunez-portfolio/deploy.yml?branch=main&style=for-the-badge&label=Deploy&color=10b981" alt="GitHub Pages Deploy Status" />
  </a>
  <a href="https://rodria45.github.io/rodrigo-antunez-portfolio/">
    <img src="https://img.shields.io/badge/Demo-Live%20Portfolio-3b82f6?style=for-the-badge" alt="Live Portfolio" />
  </a>
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite 8" />
</div>

---

## Preview

<div align="center">
  <a href="https://rodria45.github.io/rodrigo-antunez-portfolio/" target="_blank">
    <img src="preview.png" alt="Vista previa del Portfolio de Rodrigo Antúnez" width="880" />
  </a>
</div>

---

## Arquitectura y flujo de despliegue

<div align="center">
  <img src=".github/assets/architecture.svg" alt="Flujo de arquitectura y despliegue continuo" width="100%" />
</div>

---

## Aspectos clave

| Área | Implementación |
| :--- | :--- |
| **Catálogo dinámico** | Esquema tipado en [`src/data/projects.ts`](src/data/projects.ts) con filtros (*Destacados*, *Todos*, *Frontend*, *Backend*, *Full Stack*, *Data & Scripts*), carruseles multi-imagen y visor *Lightbox*. |
| **Bilingüe (ES / EN)** | Cambio instantáneo de idioma con `i18next` y `react-i18next` usando diccionarios en `src/locales/` y traducciones por proyecto. |
| **Temas y UI adaptable** | Selector de 4 paletas de acento (`ThemeSwitcher`), animaciones con `framer-motion` y diseño responsive para desktop, móvil, horizontal y pantallas duales (`horizontal-viewport-segments`). |
| **Secciones** | `Hero`, `AboutMe`, `Services`, `Skills`, `ProjectGrid`, `CapstoneProject` (**UniGames**) y `ContactCTA`. |
| **CI/CD** | Pipeline en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) con jobs separados de `build` y `deploy` hacia GitHub Pages. |

---

<details>
<summary><strong>Ejecución local y scripts disponibles</strong></summary>

### Requisitos
- Node.js 20 o superior

### Instalación y desarrollo
```bash
git clone https://github.com/RodriA45/rodrigo-antunez-portfolio.git
cd rodrigo-antunez-portfolio
npm install
npm run dev
```

En Windows podés ejecutar `start.bat` para instalar dependencias (si faltan) e iniciar el servidor local automáticamente.

### Scripts (`package.json`)
| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Levanta el servidor de desarrollo con Vite |
| `npm run build` | Verifica tipos (`tsc -b`) y genera el bundle optimizado en `dist/` |
| `npm run lint` | Ejecuta el linter (`oxlint`) |
| `npm run preview` | Sirve localmente el build de producción |

</details>

<details>
<summary><strong>Estructura de carpetas</strong></summary>

```text
.
├── .github/
│   ├── assets/             # SVGs animados usados en este README
│   └── workflows/
│       └── deploy.yml      # Build y despliegue automático a GitHub Pages
├── public/                 # Favicon, robots.txt, sitemap.xml y preview
├── src/
│   ├── assets/images/      # Capturas de proyectos optimizadas en .webp
│   ├── components/         # Navbar, Hero, AboutMe, Services, Skills, ProjectGrid, ProjectCard, CapstoneProject, ContactCTA, ThemeSwitcher
│   ├── data/
│   │   └── projects.ts     # Listado tipado y bilingüe de proyectos
│   ├── locales/            # Diccionarios de traducción (es.json, en.json)
│   ├── App.tsx             # Orquestación principal de secciones
│   ├── i18n.ts             # Configuración de i18next
│   ├── index.css           # Design tokens y temas de color
│   └── main.tsx            # Punto de entrada
├── package.json
├── start.bat
└── vite.config.ts
```

</details>
