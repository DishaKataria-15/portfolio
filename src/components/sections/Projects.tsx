import { projects } from "../../data/projects";
import { Panel, Section, SectionHeader } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ProjectCard } from "./ProjectCard";

/** Grid classes so that incomplete last rows sit in the centre at every breakpoint. */
function cardPlacement(i: number, n: number) {
  const classes = ["xl:col-span-2"];
  // tablet: 2 per row; a lone last card is centred at half width
  if (n % 2 === 1 && i === n - 1) classes.push("md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:mx-0 xl:w-auto");
  // desktop: 3 per row; a last row of two starts one column in, a last row of one starts two in
  const lastRowStart = n - (n % 3 || 3);
  if (n % 3 === 2 && i === lastRowStart) classes.push("xl:col-start-2");
  if (n % 3 === 1 && i === lastRowStart) classes.push("xl:col-start-3");
  return classes.join(" ");
}

export function Projects() {
  return (
    <Section id="projects">
      <Panel className="p-6 sm:p-10">
        <SectionHeader
          id="projects"
          index="04"
          title="Featured Projects"
          subtitle="A few of my recent experiments. Select “View Project” to flip a card."
        />
        {/* 6-column grid on desktop (three cards per row); a short last row is centred */}
        <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.id} delay={(i % 3) * 0.08} className={cardPlacement(i, projects.length)}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </ul>
      </Panel>
    </Section>
  );
}
