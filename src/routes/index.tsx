import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  GithubLink,
  LiveLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import zipptoLanding from "@/assets/projects/zippto-landing.png";
import zipptoCollections from "@/assets/projects/zippto-collections.png";
import zipptoFront from "@/assets/projects/zippto-flashcard-front.png";
import zipptoBack from "@/assets/projects/zippto-flashcard-back.png";
import payraSplitJiraBoard from "@/assets/projects/payrasplit-jira-board.png";
import payraSplitNotionCover from "@/assets/projects/payrasplit-notion-cover.png";
import payraSplitNotionTimelineBacklog from "@/assets/projects/payrasplit-notion-timeline-backlog.png";
import payraSplitTableau from "@/assets/projects/payrasplit-tableau-dashboard.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";

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
  "Automatización",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "R",
  "Tableau",
  "Vercel",
  "Supabase",
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
            Estudiante de Ingeniería Industrial
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
              title="Payra Split — Función de Pagos Compartidos"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/PayraSplit_DashboardTableauES/Dashboard1" />
              }
            >
              <CardBlock label="Problema">
                Dividir gastos compartidos puede ser un dolor de cabeza. Cuando una persona paga por
                todos, las cuentas se complican, o cuando Laura pagó la comida y Felipe las cervezas,
                hay que cruzar cuentas, saber quién le debe a quién, y al final es todo un rollo.
              </CardBlock>
              <CardBlock label="Solución">
                "Payra Split", una función que permite a los usuarios de Payra, dividir gastos al
                instante y ver quién ya pagó. A continuación se muestra un overview del proceso de
                planificación, ejecución y seguimiento del producto. Se utilizó Notion para
                planificar el producto, Jira para gestionar la ejecución de cada fase mediante
                sprints y tareas, y Tableau para analizar las tasas de adopción y uso después del
                lanzamiento.
              </CardBlock>
              <CardBlock label="Resultado">
                Una experiencia más simple para dividir gastos, hacer seguimiento a los pagos y
                saber quién debe a quién, con métricas de adopción y uso para evaluar el desempeño
                de la función.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Planificación de Producto
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitNotionCover, alt: "Resumen del roadmap de Payra Split en Notion" },
                      { src: payraSplitNotionTimelineBacklog, alt: "Cronograma y backlog de Payra Split en Notion" },
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
                        { src: payraSplitJiraBoard, alt: "Tablero Scrum de Payra Split en Jira" },
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
                      { src: payraSplitTableau, alt: "Dashboard de uso y adopción de Payra Split en Tableau" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Zippto — Flashcards Personalizadas"
              tech={["UI/UX Design", "Supabase", "Vercel", "Claude Code"]}
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
                "Zippto", una aplicación web que simplifica la creación y el repaso de flashcards.
                Los usuarios pueden crear colecciones personalizadas y estudiar cualquier tema
                mediante un sistema de repetición espaciada de tres mazos, que prioriza las tarjetas
                que más necesitan práctica.
              </CardBlock>
              <CardBlock label="Resultado">
                Una experiencia de estudio más simple e intuitiva, sin configuraciones complejas ni
                sistemas de repaso confusos.
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
              title="Análisis — Fuga de Clientes y Pérdida de Capital"
              tech={["Power BI", "DAX", "Visualización de Datos"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problema">
                Un banco enfrentaba una alta fuga de clientes sin identificar sus principales
                causas ni el impacto financiero asociado.
              </CardBlock>
              <CardBlock label="Enfoque">
                Se realizó un análisis exploratorio en Power BI para identificar patrones de
                fuga, comparar segmentos y detectar los clientes con mayor riesgo de abandono.
              </CardBlock>
              <CardBlock label="Resultados">
                Se encontró que la pérdida de capital estaba concentrada en clientes con altos
                saldos, generando un impacto financiero significativo. La inactividad surgió
                como la principal señal de alerta, especialmente en Alemania, donde se registró
                la mayor tasa de fuga.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Dashboard de Power BI: Análisis de Fuga de Clientes y Pérdida de Capital"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
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
            Skills & Tools
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
          <p className="text-sm text-muted-foreground">© María José Jiménez</p>
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
