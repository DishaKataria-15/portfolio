import { skillGroups } from "../../data/skills";
import { Panel, Section, SectionHeader } from "../ui/Section";
import { SkillCategory } from "../skills/SkillCategory";
import { AlchemyCircle, NeuralConstellation } from "../skills/LabDecor";

/**
 * Layout only (content lives in data/skills.ts).
 *
 * Desktop (12 columns), three rows of two panels; each row pairs a short shelf with a long one:
 *   Programming (4) | Data Analysis & Visualization (8)
 *   Machine Learning (4) | Generative AI & NLP (8)
 *   Databases, APIs & Apps (6) | Developer Tools & Platforms (6)
 * Tablet (2 columns): the two three-bottle panels side by side, the rest full width.
 * Phone: one column, three bottles per shelf.
 */
const layout: Record<string, { span: string; cols: string }> = {
  programming: { span: "xl:col-span-4", cols: "grid-cols-3" },
  "data-analysis": { span: "md:col-span-2 xl:col-span-8", cols: "grid-cols-3 sm:grid-cols-4 xl:grid-cols-7" },
  "machine-learning": { span: "xl:col-span-4", cols: "grid-cols-3" },
  "genai-nlp": { span: "md:col-span-2 xl:col-span-8", cols: "grid-cols-3 sm:grid-cols-5" },
  "databases-apis": { span: "md:col-span-2 xl:col-span-6", cols: "grid-cols-3 sm:grid-cols-5" },
  "dev-tools": { span: "md:col-span-2 xl:col-span-6", cols: "grid-cols-3 sm:grid-cols-6" },
};
const fallback = { span: "md:col-span-2 xl:col-span-6", cols: "grid-cols-2 sm:grid-cols-4" };

export function Skills() {
  return (
    <Section id="skills">
      <Panel className="lab-bg p-5 sm:p-9">
        <AlchemyCircle className="absolute -right-16 -top-16 h-64 w-64 opacity-25 motion-safe:animate-spin-slower" />
        <SectionHeader id="skills" index="03" title="Skills & Tools" subtitle="My spellbook of technologies, bottled by discipline." />

        <div className="relative mt-8 grid gap-4 md:grid-flow-row-dense md:grid-cols-2 xl:grid-cols-12 xl:gap-5">
          {skillGroups.map((group, i) => {
            const l = layout[group.id] ?? fallback;
            return (
              <SkillCategory
                key={group.id}
                group={group}
                number={i + 1}
                shelfCols={l.cols}
                className={l.span}
                decor={group.id === "genai-nlp" ? <NeuralConstellation color={group.potion} /> : undefined}
              />
            );
          })}
        </div>
      </Panel>
    </Section>
  );
}
