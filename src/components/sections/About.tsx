import { about } from "../../data/profile";
import { Panel, Section, SectionHeader } from "../ui/Section";
import { OwlStudy } from "../art/OwlStudy";

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

          <figure className="parchment mt-8 sm:ml-16">
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
