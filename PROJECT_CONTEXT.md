# Contexto del proyecto — Portafolio de Producto en Español (María José Jiménez)

Este archivo resume la estructura de este proyecto y los cambios hechos con ayuda de Claude, para tener contexto rápido en futuras sesiones.

## Datos generales

- Proyecto: React + Vite, versión en español del portafolio de producto (`portfolio-product-es`)
- Ubicación: `C:\Users\alura\Documents\Claude\PortfolioHTML\portfolio-product-es`
- Repositorio: `github.com/mariajimenezchiquinquira-bot/portfolio-product-es`, rama `master`
- Este proyecto es una copia independiente de `portfolio-product` (la versión en inglés, en `C:\Users\alura\Documents\Claude\PortfolioHTML\portfolio-product`, rama `main`). Se creó como proyecto separado —código propio, sin compartir `.git`— porque además del idioma, las imágenes también iban a cambiar (capturas de pantalla en español en vez de en inglés).\n- Nota: todos los proyectos de este portafolio (y de `portfolio-bi-es` y `portfolio-data-analysis-es`) también se reunieron, sin duplicados, en un cuarto portafolio consolidado llamado `EStodo-portfolio` (repo de GitHub `TodoSpanish`), para tenerlos todos juntos en un solo lugar. Los cambios hechos ahí son independientes de los de este proyecto — no se sincronizan automáticamente entre sí.
- Todo el contenido del portafolio vive en `src/routes/index.tsx`
- Las imágenes de los proyectos están en `src/assets/projects/`
- Los textos de los botones reutilizables (GitHub, documentación, dashboard) viven en `src/components/portfolio/ProjectCard.tsx`

## Flujo de deployment

El proyecto está conectado a **Vercel** (repo de GitHub enlazado directamente), con su propio link de despliegue distinto al del portafolio en inglés. El deployment es automático:

```
cd "C:\Users\alura\Documents\Claude\PortfolioHTML\portfolio-product-es"
git add -A
git commit -m "mensaje descriptivo"
git push origin master
```

Al hacer push a `master`, Vercel detecta el commit y publica el nuevo build solo, normalmente en uno o dos minutos.

### Quién hace el `git push`

Claude (desde Cowork) puede escribir archivos y hacer `git add` + `git commit` directamente en esta carpeta, pero **no tiene credenciales de GitHub**, así que no puede hacer `git push`. Por eso, el flujo habitual es:

1. Claude hace los cambios, los deja en `git add -A` + `git commit` (commit local listo).
2. **María José hace el `git push` manualmente**, abriendo Git Bash en esta carpeta y corriendo `git push`.
3. Una vez el push termina, Vercel redespliega solo.

Si después de un cambio el sitio publicado no se ve actualizado, lo primero a revisar es si falta ese `git push` (con `git status` o `git log` se puede ver si hay commits locales sin subir). Lo segundo, si el push ya se hizo, es la caché del navegador — refrescar con `Ctrl + Shift + R` suele resolverlo.

### Problema conocido: `.git/index.lock` atascado

Cuando Claude (desde Cowork) escribe archivos directamente en esta carpeta (imágenes, PDFs, código), a veces queda un archivo `.git/index.lock` atascado que bloquea el siguiente `git add` en la terminal con el error:

```
fatal: Unable to create '.../index.lock': File exists.
```

Solución: correr `find .git -name "*.lock" -delete` en Git Bash (dentro de la carpeta del proyecto) antes de `git add -A`. Si el archivo no se puede borrar por permisos, Claude debe pedir permiso de eliminación en la carpeta conectada antes de reintentar.

## Cambios realizados hasta ahora

### Encabezado principal
- Se quitó "— Énfasis en Producto Digital" del subtítulo bajo el nombre. Ahora solo dice "Estudiante de Ingeniería Industrial".

### Creación del proyecto (traducción inicial)
- Se copió `portfolio-product` completo (código, componentes, configuración) sin `.git` ni `node_modules`.
- Se tradujo todo el texto visible de `src/routes/index.tsx` al español: título y meta SEO, encabezado, secciones "Proyectos" y "Skills" (antes "Habilidades"), y el contenido de los 3 proyectos (Nu Split, Zippto, Automatización de Solicitud de Herramientas Premium) en formato Problema/Solución/Resultado.
- Las imágenes se dejaron igual que en inglés como marcador de posición inicial, para reemplazarlas después por capturas en español.

### Nu Split → Payra Split (rebranding a banco ficticio)
- Se reemplazó "Nu Split" / "Nubank" por **"Payra Split"** / **"Payra"** en todo el texto visible y en el código (título de la card, imports, alt text de imágenes), porque el producto original usaba el nombre de un banco real.
- Los archivos de imagen se renombraron de `nusplit-*.png` a `payrasplit-*.png` para que coincidan con las nuevas rutas de import.
- Texto de Problema/Solución/Resultado reescrito:
  - **Problema:** "Dividir gastos compartidos puede ser un dolor de cabeza. Cuando una persona paga por todos, las cuentas se complican, o cuando Laura pagó la comida y Felipe las cervezas, hay que cruzar cuentas, saber quién le debe a quién, y al final es todo un rollo."
  - **Solución:** "Payra Split", una función que permite a los usuarios de Payra dividir gastos al instante y ver quién ya pagó, con overview de Notion (planificación), Jira (sprints/tareas) y Tableau (adopción y uso).
  - **Resultado:** "Una experiencia más simple para dividir gastos, hacer seguimiento a los pagos y saber quién debe a quién, con métricas de adopción y uso para evaluar el desempeño de la función."
- Las 4 imágenes del proyecto (`payrasplit-notion-cover.png`, `payrasplit-notion-timeline-backlog.png`, `payrasplit-jira-board.png`, `payrasplit-tableau-dashboard.png`) se reemplazaron por capturas reales con la marca "Payra", tomadas de Notion/Jira/Tableau ya renombrados.
- El botón de Tableau dice "Ver Dashboard" y apunta a la versión en español del dashboard: `https://public.tableau.com/app/profile/maria.jimenez7845/viz/PayraSplit_DashboardTableauES/Dashboard1`
  (Nota: este link es distinto al usado en `portfolio-bi` y `portfolio-product`, que en inglés usan el nombre ficticio "Splitly" y apuntan a `SplitlySplit-DashboardBI`. Cada portafolio quedó con su propio nombre ficticio y su propio link — no se sincronizaron entre sí a petición de la usuaria.)

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

### Zippto — Flashcards Personalizadas
- Texto de Solución y Resultado reescrito:
  - **Solución:** "Zippto", una aplicación web que simplifica la creación y el repaso de flashcards. Los usuarios pueden crear colecciones personalizadas y estudiar cualquier tema mediante un sistema de repetición espaciada de tres mazos, que prioriza las tarjetas que más necesitan práctica.
  - **Resultado:** "Una experiencia de estudio más simple e intuitiva, sin configuraciones complejas ni sistemas de repaso confusos."
- Las 4 imágenes del proyecto se reemplazaron por capturas reales de la app:
  - `zippto-landing.png` (fila 1, izquierda): landing pública "Estudia a tu manera".
  - `zippto-collections.png` (fila 1, derecha): dashboard interno "¡Hola, María!" con colecciones.
  - `zippto-flashcard-front.png` (fila 2, izquierda): frente de una flashcard (ejemplo "boost").
  - `zippto-flashcard-back.png` (fila 2, derecha): reverso de esa misma flashcard.
  - Nota: los nombres de archivo (`landing`, `collections`, `front`, `back`) ya no describen 100% el contenido real de cada imagen — se mantuvieron los nombres originales del código y solo se reemplazó el contenido, para no tener que tocar los imports en `index.tsx`.

### Automatización — Solicitud Herramientas de Pago (antes "Premium Tool Request Automation")
- Título cambiado varias veces hasta quedar en su forma final: **"Automatización — Solicitud Herramientas de Pago"** (con raya larga "—", no guion corto).
- Texto de Problema/Solución/Resultado reescrito con foco en herramientas como Claude Pro y Canva Pro, en vez de herramientas genéricas de IA/diseño/productividad.
- Tags bajo el título ajustados hasta quedar en: **Power Automate · Process Automation** (se probó agregar y luego quitar "Process Improvement").

### Zippto — Flashcards Personalizadas
- En la lista de tecnologías bajo el título, se quitó "CSS" y luego "HTML" y "JavaScript", dejando finalmente: **UI/UX Design · Supabase · Vercel · Claude Code**.

### Sección de habilidades y footer
- El encabezado de la sección de habilidades se cambió de "Skills" a **"Skills & Tools"**.
- Se quitó "Figma" de la lista de skills y se agregó **"Automatización"**.
- El copyright del footer se cambió de "© 2026 María José Jiménez" a **"© María José Jiménez"** (sin año).

### Eliminación del proyecto de Automatización — Solicitud Herramientas de Pago
- Se eliminó por completo el tercer proyecto del portafolio (Power Automate / Process Automation).
- Se borraron sus imágenes (`formulario.png`, `power-automate-flow.png`, `power-automate-email-detail.png`, `power-automate-request-approved-notification.png`, `power-automate-email-approved.png`) y el PDF de documentación técnica (`premium-tool-request-automation-technical-documentation.pdf`).
- Se quitó el import y uso del componente `DocsLink` en `index.tsx`, ya que solo lo usaba este proyecto.

## Pendiente / a futuro

- Revisar si el remote de git tiene algún token incrustado en la URL (buena práctica de seguridad, ya señalado como pendiente en el portafolio en inglés).
