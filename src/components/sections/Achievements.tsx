import { Award, BrainCircuit, Code2, Database, ExternalLink, Medal, Sparkles, Trophy, Users, type LucideIcon } from "lucide-react";
import { achievements, certifications } from "../../data/credentials";
import type { Achievement, Certification } from "../../data/types";
import { Panel, SectionHeader } from "../ui/Section";

const achIcons: Record<Achievement["icon"], LucideIcon> = { trophy: Trophy, medal: Medal, users: Users };
const certIcons: Record<Certification["icon"], LucideIcon> = { code: Code2, database: Database, brain: BrainCircuit };

/**
 * Achievements and Certifications share one panel (as in the design).
 * Each keeps its own anchor so the navigation links still land correctly.
 */
export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="h-full">
      <Panel className="h-full p-6 sm:p-9">
        <SectionHeader id="achievements" index="06" title="Achievements & Certifications" />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-gold-300">Key Achievements</h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => {
                const Icon = achIcons[item.icon];
                return (
                  <li key={item.id} className="group flex items-start gap-3.5 rounded-xl border border-white/[0.08] bg-night-950/40 p-4 transition hover:border-gold-400/40">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold-400/30 bg-gold-400/10 text-gold-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[14.5px] font-semibold text-parchment">{item.title}</p>
                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-mist">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="certifications" className="scroll-mt-28">
            <h3 className="font-serif text-xl font-semibold text-gold-300">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => {
                const Icon = certIcons[cert.icon];
                const ongoing = cert.status === "ongoing";
                return (
                  <li key={cert.id} className="flex items-start gap-3.5 rounded-xl border border-white/[0.08] bg-night-950/40 p-4 transition hover:border-gold-400/40">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${ongoing ? "bg-violet-400/10 text-violet-300" : "bg-night-600/60 text-sky-200"}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14.5px] font-semibold text-parchment">{cert.title}</p>
                      <p className="mt-0.5 text-[13px] text-mist">
                        {cert.issuer}
                        {cert.distinction && <span className="text-gold-200"> · {cert.distinction}</span>}
                      </p>
                      <p className={`mt-1 text-[12.5px] font-medium ${ongoing ? "text-gold-300" : "text-emerald-300"}`}>{ongoing ? "Currently ongoing" : "Completed"}</p>
                      {cert.credentialUrl && (
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-1.5 inline-flex items-center gap-1 text-[12.5px] text-gold-200">
                          View credential
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          <span className="sr-only"> for {cert.title} (opens in a new tab)</span>
                        </a>
                      )}
                    </div>
                    {ongoing ? (
                      <Sparkles className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
                    ) : (
                      <Award className="h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Panel>
    </section>
  );
}
