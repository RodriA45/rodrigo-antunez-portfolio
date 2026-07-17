# Portafolio de Rodrigo Antúnez

Bienvenido al código fuente de mi portafolio personal. Este proyecto es una aplicación web dinámica construida para mostrar mis proyectos más destacados, habilidades y trayectoria como Desarrollador Full Stack.

## 🚀 Tecnologías Utilizadas

- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**: Framework súper rápido para el frontend.
- **TypeScript**: Para un código más robusto, estructurado y libre de errores.
- **CSS Puro (Vanilla CSS)**: Sistema de diseño propio (Dark Theme, Glassmorphism).
- **React Icons**: Para la iconografía de la web (GitHub, LinkedIn, etc.).

## 📂 ¿Cómo agregar o quitar proyectos?

Los proyectos no dependen de la API de GitHub para que puedas mantener tus repositorios en privado si lo deseas. Toda la información se carga desde un archivo de configuración local.

Para editar tus proyectos, abre el archivo:
`src/data/projects.ts`

Ahí podrás modificar el array `projects` agregando el título, descripción, tecnologías y enlaces de cada uno de tus trabajos.

## 🛠️ Instalación y Uso Local

Para levantar este proyecto en tu propia computadora:

**La forma más fácil (Windows):**
Simplemente haz doble clic en el archivo `start.bat`. Este script instalará las dependencias automáticamente (si es la primera vez) e iniciará el servidor.

**Manualmente por terminal:**
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🌐 Despliegue (Deploy)

Puedes compilar el proyecto para producción ejecutando:
```bash
npm run build
```
Esto generará una carpeta `dist/` con los archivos optimizados listos para subir a plataformas como Vercel, Netlify o GitHub Pages.
