import { BookOpen, GraduationCap, Landmark, Trophy, type LucideIcon } from "lucide-react";
import { journey } from "../../data/education";
import type { JourneyEntry } from "../../data/types";
import { Panel, Section, SectionHeader } from "../ui/Section";
import { CastleSkyline } from "../art/Decor";

const icons: Record<JourneyEntry["icon"], LucideIcon> = {
  school: Landmark,
  book: BookOpen,
  graduation: GraduationCap,
  trophy: Trophy,
};

export function Journey() {
  return (
    <Section id="journey">
      <Panel className="p-6 pb-0 sm:p-10 sm:pb-0">
        <SectionHeader id="journey" index="05" title="My Journey" subtitle="Key milestones, from school in Indore to Computer Science at AITR." />

        <ol
          className="relative mt-10 grid gap-8 pb-10 md:grid-cols-[repeat(var(--n),minmax(0,1fr))] md:gap-4"
          style={{ ["--n" as string]: journey.length, ["--edge" as string]: `${50 / journey.length}%` }}
        >
          {/* dotted gold path: horizontal on desktop (centre of first to centre of last milestone), vertical on mobile */}
          <span aria-hidden="true" className="absolute left-[1.45rem] top-2 h-[calc(100%-3rem)] border-l border-dashed border-gold-400/50 md:left-[var(--edge)] md:right-[var(--edge)] md:top-[4.6rem] md:h-0 md:w-auto md:border-l-0 md:border-t" />
          {journey.map((m) => {
            const Icon = icons[m.icon];
            return (
              <li key={m.id} className="relative flex gap-4 md:flex-col md:items-center md:gap-0 md:text-center">
                <span
                  className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border bg-night-950 md:h-14 md:w-14 ${
                    m.current ? "border-gold-300 text-gold-200 shadow-[0_0_24px_-4px_rgba(217,178,95,0.7)]" : "border-gold-400/50 text-gold-300"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                {/* dot on the line (desktop) */}
                <span aria-hidden="true" className="relative z-10 mt-2.5 hidden h-3 w-3 rounded-full border border-gold-300 bg-gold-400 shadow-[0_0_10px_rgba(217,178,95,0.8)] md:block" />
                <div className="md:mt-4">
                  <p className="font-serif text-xl font-semibold text-gold-200">{m.period}</p>
                  <h3 className="mt-0.5 text-[15px] font-medium leading-snug text-parchment">{m.title}</h3>
                  <p className="mt-0.5 text-[13.5px] leading-snug text-mist">{m.institution}</p>
                  {m.facts.length > 0 && (
                    <dl className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[13px] md:justify-center">
                      {m.facts.map((f) => (
                        <div key={f.label} className="flex gap-1">
                          <dt className="text-mist">{f.label}:</dt>
                          <dd className="font-semibold text-gold-300">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        <div aria-hidden="true" className="pointer-events-none -mx-6 h-28 sm:-mx-10 sm:h-44">
          <CastleSkyline className="h-full w-full" />
        </div>
      </Panel>
    </Section>
  );
}
