import { GraduationCap } from "lucide-react";
import { degree, schooling } from "../../data/education";
import { Panel, Section, SectionHeader } from "../ui/Section";

export function Education() {
  return (
    <Section id="education">
      <Panel className="p-6 sm:p-10">
        <SectionHeader id="education" index="06" title="Academic Foundations" subtitle="Education at a glance." />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
          <article className="relative overflow-hidden rounded-2xl border border-gold-400/35 bg-gradient-to-br from-gold-400/[0.09] to-transparent p-6">
            <GraduationCap aria-hidden="true" className="absolute -bottom-4 -right-3 h-28 w-28 text-gold-400/[0.07]" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-gold-300">Undergraduate degree</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-parchment">{degree.qualification}</h3>
            <p className="mt-1 text-[14px] text-mist">{degree.institution}</p>
            <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">Expected graduation</dt>
                <dd className="font-serif text-2xl text-gold-200">{degree.graduation}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">CGPA</dt>
                <dd className="font-serif text-2xl text-gold-200">
                  {degree.cgpa}
                  <span className="text-base text-mist"> / {degree.cgpaScale}</span>
                </dd>
              </div>
            </dl>
          </article>
          {schooling.map((s) => (
            <article key={s.id} className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-night-950/40 p-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
                  {s.qualification} · {s.year}
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-parchment">{s.institution}</h3>
              </div>
              <p className="mt-4 font-serif text-3xl text-gold-200">
                <span className="sr-only">Score: </span>
                {s.score}
              </p>
            </article>
          ))}
        </div>
      </Panel>
    </Section>
  );
}
