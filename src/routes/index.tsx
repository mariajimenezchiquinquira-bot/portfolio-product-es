import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  DocsLink,
  GithubLink,
  LiveLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import paFormulario from "@/assets/projects/formulario.png";
import paFlow from "@/assets/projects/power-automate-flow.png";
import paRequestMail from "@/assets/projects/power-automate-email-detail.png";
import paRequestNotify from "@/assets/projects/power-automate-request-approved-notification.png";
import paApprovedMail from "@/assets/projects/power-automate-email-approved.png";
import zipptoLanding from "@/assets/projects/zippto-landing.png";
import zipptoCollections from "@/assets/projects/zippto-collections.png";
import zipptoFront from "@/assets/projects/zippto-flashcard-front.png";
import zipptoBack from "@/assets/projects/zippto-flashcard-back.png";
import nuSplitJiraBoard from "@/assets/projects/nusplit-jira-board.png";
import nuSplitNotionCover from "@/assets/projects/nusplit-notion-cover.png";
import nuSplitNotionTimelineBacklog from "@/assets/projects/nusplit-notion-timeline-backlog.png";
import nuSplitTableau from "@/assets/projects/nusplit-tableau-dashboard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Portafolio de Producto" },
      {
        name: "description",
        content:
          "Portafolio de María José Jiménez, estudiante de Ingeniería Industrial especializada en desarrollo de producto digital, diseño UX/UI y construcción de productos potenciados con IA para fintech.",
      },
      { property: "og:title", content: "María José Jiménez — Portafolio de Producto" },
      {
        property: "og:description",
        content:
          "Proyectos de analítica, automatización y producto basados en datos e IA, con enfoque en fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SKILLS = [
  "Figma",
  "Claude Design",
  "Lovable",
  "MCP",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Claude Code",
  "R",
  "Tableau",
  "Metodologías Ágiles (Scrum, Kanban)",
  "Diseño UI/UX",
  "IA Generativa",
  "Gestión de Producto",
  "Desarrollo de Producto Digital",
  "Análisis de Negocio",
  "Análisis de Datos",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portafolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Estudiante de Ingeniería Industrial —{" "}
            <span className="text-primary">Énfasis en Producto Digital</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Proyectos
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="Nu Split — Función de Pagos Compartidos"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/NuSplit-DashboardTableau/Dashboard1?publish=yes" />
              }
            >
              <CardBlock label="Problema">
                Dividir gastos compartidos puede ser un dolor de cabeza. Cuando una persona paga por
                todos, tiene que calcular cuánto debe cada quien y luego avisarle a cada amigo cuánto
                enviar, a menudo usando una calculadora, WhatsApp u otra app.
              </CardBlock>
              <CardBlock label="Solución">
                Desarrollé un caso de estudio simulado de BI/producto para "Nu Split", una función
                conceptual que permite a los usuarios de Nubank dividir gastos, solicitar pagos y ver
                quién ya pagó. Planifiqué el ciclo de vida del producto en Notion, gestioné los
                sprints en Jira y construí un dashboard en Tableau con datos simulados para analizar
                las tasas de adopción y finalización.
              </CardBlock>
              <CardBlock label="Resultado">
                Un caso integral que conecta planificación de producto, ejecución ágil y BI para
                medir una funcionalidad desde el concepto hasta el análisis post-lanzamiento.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Planificación de Producto
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: nuSplitNotionCover, alt: "Resumen del roadmap de Nu Split en Notion" },
                      { src: nuSplitNotionTimelineBacklog, alt: "Cronograma y backlog de Nu Split en Notion" },
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Jira — Ejecución de Sprints
                  </p>
                  <div className="mx-auto w-full max-w-2xl">
                    <ProjectImageGrid
                      images={[
                        { src: nuSplitJiraBoard, alt: "Tablero Scrum de Nu Split en Jira" },
                      ]}
                      columns={1}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Tableau — Dashboard de Adopción
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: nuSplitTableau, alt: "Dashboard de uso y adopción de Nu Split en Tableau" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Zippto — Flashcards Personalizadas"
              tech={["HTML", "CSS", "JavaScript", "Supabase", "Vercel", "Claude Code"]}
              actions={
                <>
                  <LiveLink href="https://zippto.vercel.app/landing.html" label="Probar Zippto" />
                  <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/Zippto" />
                </>
              }
            >
              <CardBlock label="Problema">
                Las herramientas tradicionales de flashcards pueden complicar el estudio más de lo
                necesario, con configuraciones complejas, importaciones poco intuitivas y sistemas de
                repaso confusos.
              </CardBlock>
              <CardBlock label="Solución">
                Construí Zippto, una aplicación web multiusuario donde las personas inician sesión con
                Google, crean colecciones personalizadas y diseñan flashcards para cualquier materia.
                Su sistema de repetición espaciada de 3 mazos prioriza las tarjetas que más necesitan
                práctica, manteniendo las sesiones de estudio enfocadas sin complejidad innecesaria.
              </CardBlock>
              <CardBlock label="Resultado">
                Una aplicación web completamente funcional y desplegada, con datos por usuario,
                autenticación, una interfaz personalizada y flujos de estudio intuitivos —
                demostrando la construcción completa de un producto, desde el diseño UI/UX hasta el
                despliegue.
              </CardBlock>
              <ProjectImageGrid
                images={[
                  { src: zipptoLanding, alt: "Página de inicio de Zippto" },
                  { src: zipptoCollections, alt: "Vista de colecciones de Zippto" },
                  { src: zipptoBack, alt: "Reverso de la flashcard de Zippto" },
                  { src: zipptoFront, alt: "Frente de la flashcard de Zippto" },
                ]}
              />
            </ProjectCard>
            <ProjectCard
              title="Automatización de Solicitud de Herramientas Premium"
              tech={["Power Automate"]}
              actions={
                <DocsLink href="/docs/premium-tool-request-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problema">
                Solicitar herramientas premium de IA, diseño o productividad era un proceso disperso
                entre correos y mensajes, con aprobaciones manuales y poca trazabilidad.
              </CardBlock>
              <CardBlock label="Solución">
                Desarrollé un flujo en Power Automate que centraliza y automatiza todo el proceso. Los
                usuarios envían solicitudes a través de Microsoft Forms con detalles como la
                herramienta, la justificación, el costo y la duración de la licencia. El flujo luego
                enruta la solicitud para su aprobación, notifica al solicitante del resultado y
                registra automáticamente cada decisión.
              </CardBlock>
              <CardBlock label="Resultado">
                Convirtió un proceso manual y disperso en un flujo de trabajo estructurado,
                automatizado y totalmente trazable, reduciendo la carga operativa y asegurando que
                cada solicitud quede debidamente documentada.
              </CardBlock>
              <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
                <a
                  href={paFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md sm:row-span-2"
                >
                  <img
                    src={paFlow}
                    alt="Flujo de Power Automate ejecutándose exitosamente"
                    loading="lazy"
                    className="h-full w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                {[
                  { src: paFormulario, alt: "Formulario de solicitud de herramienta premium en Microsoft Forms" },
                  { src: paRequestMail, alt: "Correo de aprobación con los detalles de la solicitud" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
                {[
                  { src: paApprovedMail, alt: "Correo de confirmación de aprobación para el administrador" },
                  { src: paRequestNotify, alt: "Notificación de que la solicitud fue aprobada" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
              </div>
            </ProjectCard>
          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
