# Contexto del proyecto — Portafolio de Producto en Español (María José Jiménez)

Este archivo resume la estructura de este proyecto y los cambios hechos con ayuda de Claude, para tener contexto rápido en futuras sesiones.

## Datos generales

- Proyecto: React + Vite, versión en español del portafolio de producto (`portfolio-product-es`)
- Ubicación: `C:\Users\alura\Downloads\Claude\PortfolioHTML\portfolio-product-es`
- Repositorio: `github.com/mariajimenezchiquinquira-bot/portfolio-product-es`, rama `master`
- Este proyecto es una copia independiente de `portfolio-product` (la versión en inglés, en `C:\Users\alura\Downloads\Claude\PortfolioHTML\portfolio-product`, rama `main`). Se creó como proyecto separado —código propio, sin compartir `.git`— porque además del idioma, las imágenes también iban a cambiar (capturas de pantalla en español en vez de en inglés).
- Todo el contenido del portafolio vive en `src/routes/index.tsx`
- Las imágenes de los proyectos están en `src/assets/projects/`
- Los textos de los botones reutilizables (GitHub, documentación, dashboard) viven en `src/components/portfolio/ProjectCard.tsx`

## Flujo de deployment

El proyecto está conectado a **Vercel** (repo de GitHub enlazado directamente), con su propio link de despliegue distinto al del portafolio en inglés. El deployment es automático:

```
cd "C:\Users\alura\Downloads\Claude\PortfolioHTML\portfolio-product-es"
git add -A
git commit -m "mensaje descriptivo"
git push origin master
```

Al hacer push a `master`, Vercel detecta el commit y publica el nuevo build solo, normalmente en uno o dos minutos.

### Problema conocido: `.git/index.lock` atascado

Cuando Claude (desde Cowork) escribe archivos directamente en esta carpeta (imágenes, PDFs, código), a veces queda un archivo `.git/index.lock` atascado que bloquea el siguiente `git add` en la terminal con el error:

```
fatal: Unable to create '.../index.lock': File exists.
```

Solución: correr `rm -f .git/index.lock` en Git Bash (dentro de la carpeta del proyecto) antes de `git add -A`.

## Cambios realizados hasta ahora

### Creación del proyecto (traducción inicial)
- Se copió `portfolio-product` completo (código, componentes, configuración) sin `.git` ni `node_modules`.
- Se tradujo todo el texto visible de `src/routes/index.tsx` al español: título y meta SEO, encabezado, secciones "Proyectos" y "Skills" (antes "Habilidades"), y el contenido de los 3 proyectos (Nu Split, Zippto, Automatización de Solicitud de Herramientas Premium) en formato Problema/Solución/Resultado.
- Las imágenes se dejaron igual que en inglés como marcador de posición inicial, para reemplazarlas después por capturas en español.

### Nu Split — Función de Pagos Compartidos
- Imagen de portada de Notion (`nusplit-notion-cover.png`) reemplazada por una captura nueva de la página "Nu Split — Product Roadmap" en Notion.
- El botón de Tableau ahora dice "Ver Dashboard" (antes "View Dashboard") y apunta a: `https://public.tableau.com/app/profile/maria.jimenez7845/viz/NuSplit-DashboardTableau/Dashboard1?publish=yes`

### Premium Tool Request Automation (Power Automate)
- El botón que antes decía "How It Works" pasó primero a "Cómo Funciona" y finalmente quedó como **"Ver Documentación"**.
- El PDF al que apunta ese botón (`public/docs/premium-tool-request-automation-technical-documentation.pdf`) fue reemplazado por la versión en español del documento técnico (mismo nombre de archivo, para no tener que tocar el código).

### Traducción de botones reutilizables (`ProjectCard.tsx`)
Aplican a todos los proyectos del portafolio que usan estos componentes:
- `GithubLink`: "View on GitHub" → **"Ver en GitHub"**
- `DocsLink`: "How It Works" → **"Ver Documentación"**
- `TableauLink`: "View Dashboard" → **"Ver Dashboard"**

### Sección de habilidades
- El encabezado de esa sección se cambió de "Habilidades" a **"Skills"** (a petición explícita de la usuaria, en inglés dentro del portafolio en español).

## Pendiente / a futuro

- Reemplazar las imágenes restantes de Zippto y de Premium Tool Request Automation por capturas en español (si aplica — algunas ya se actualizaron con capturas reales del flujo ejecutado, ver commits del repo).
- Revisar si el remote de git tiene algún token incrustado en la URL (buena práctica de seguridad, ya señalado como pendiente en el portafolio en inglés).
