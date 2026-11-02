import { Lightbulb, Puzzle, ScanSearch, Users } from "lucide-react";
import { about } from "../../data/profile";
import { Panel, Section, SectionHeader } from "../ui/Section";
import { OwlStudy } from "../art/OwlStudy";

const traitIcons = [ScanSearch, Lightbulb, Puzzle, Users];

export function About() {
  return (
    <Section id="about">
      <Panel className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative z-10 p-6 sm:p-10">
          <SectionHeader id="about" index="02" title="About Me" />
          <p className="mt-3 font-serif sm:pl-16 text-xl italic text-gold-300">{about.subtitle}</p>

          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-parchment/85 sm:pl-16">
            <p>{about.lead}</p>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-parchment/75">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:pl-16" aria-label="How I work">
            {about.traits.map((t, i) => {
              const Icon = traitIcons[i % traitIcons.length];
              return (
                <li key={t} className="group flex flex-col items-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-gold-400/50 bg-night-950/60 text-gold-300 shadow-[0_0_20px_-6px_rgba(217,178,95,0.6)] transition duration-300 group-hover:border-gold-300 group-hover:shadow-[0_0_26px_-4px_rgba(217,178,95,0.8)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-[13px] leading-snug text-parchment/85">{t}</span>
                </li>
              );
            })}
          </ul>

          <figure className="parchment mt-9 sm:ml-16">
            <blockquote className="font-serif text-xl leading-snug text-[#3b2a16] sm:text-[1.35rem]">“{about.quote}”</blockquote>
          </figure>
        </div>

        <div className="relative min-h-[18rem] overflow-hidden lg:min-h-0">
          <OwlStudy labels={[...about.bookLabels].reverse()} className="absolute inset-0 h-full w-full" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-night-900 lg:via-transparent" />
        </div>
      </Panel>
    </Section>
  );
}
