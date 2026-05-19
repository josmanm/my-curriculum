# My Curriculum

Portafolio personal construido con React y Vite para presentar informacion de perfil, habilidades, proyectos, estudios, experiencia y contacto.

## Stack

- React 18
- Vite 5
- React Router
- Redux Toolkit
- Styled Components

## Scripts

- `npm run dev`: inicia el entorno de desarrollo
- `npm run build`: genera el build de produccion
- `npm run preview`: sirve el build localmente
- `npm run lint`: ejecuta ESLint
- `npm run deploy`: publica `dist/` con `gh-pages`

## Estructura

```text
src/
  components/   Componentes reutilizables
  data/         Datos locales de skills, estudios y experiencia
  pages/        Vistas principales
  router/       Configuracion de rutas
  services/     Capa de acceso a datos
  store/        Estado global
  styles/       Temas y estilos compartidos
```

## Fuente de datos

El proyecto usa datos locales en `src/data/` como fuente unica dentro de la aplicacion.
Los servicios de `src/services/` exponen esos datos para mantener una capa de acceso consistente desde los componentes.

## Rutas principales

- `/home`
- `/skills`
- `/projects`
- `/education`
- `/experience`
- `/resumen`
- `/contact`
- `/:id` para el detalle de una tecnologia

## Desarrollo local

1. Instala dependencias con `npm install`.
2. Ejecuta `npm run dev`.
3. Abre la URL que muestra Vite en la terminal.

## Despliegue

El proyecto esta configurado para GitHub Pages.

- La base publica esta definida en `vite.config.js` como `/my-curriculum/`.
- El workflow de GitHub Actions construye y publica el contenido de `dist/` al hacer push a `main`.

## Estado actual

- Tema claro/oscuro manejado con Redux
- Navegacion con `HashRouter`
- Build y lint funcionando
