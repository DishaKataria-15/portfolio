import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, Database, ExternalLink, GitBranch, RotateCcw, Sparkles, Users } from "lucide-react";
import type { Evaluation, Project } from "../../data/types";
import { accentStyles } from "../ui/accent";
import { SocialIcon } from "../ui/SocialIcon";
import { ProjectArt } from "../art/ProjectArt";

/** Attributes that make a hidden card face unfocusable and unclickable. */
const inertProps = (hidden: boolean) =>
  (hidden ? { inert: "", "aria-hidden": true, "data-hidden": "true" } : { "data-hidden": "false" }) as Record<string, unknown>;

function BackHeading({ children, accent }: { children: string; accent: string }) {
  return (
    <h4 className={`flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] ${accent}`}>
      <span className="h-px w-3 bg-current opacity-60" aria-hidden="true" />
      {children}
    </h4>
  );
}

/** One compact panel per model, so every metric is visible at any card width. */
function ModelResults({ evaluation, accentText }: { evaluation: Evaluation; accentText: string }) {
  const hasMissing = evaluation.rows.some((r) => r.values.some((v) => v === null));
  return (
    <div className="mt-3">
      <ul className="space-y-2" aria-label="Results by model">
        {evaluation.rows.map((row) => (
          <li
            key={row.model}
            className={`rounded-xl border px-3 py-2.5 ${row.highlight ? "border-gold-400/35 bg-gold-400/[0.07]" : "border-white/[0.08] bg-night-950/40"}`}
          >
            <p className={`flex items-center gap-1.5 text-[13px] font-medium ${row.highlight ? "text-parchment" : "text-parchment/80"}`}>
              {row.highlight && <Sparkles className={`h-3 w-3 shrink-0 ${accentText}`} aria-hidden="true" />}
              {row.model}
            </p>
            <dl className="mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1">
              {evaluation.columns.map((c, i) => (
                <div key={c} className="flex items-baseline justify-between gap-2">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-mist">{c}</dt>
                  <dd className={`font-mono text-[12px] ${row.values[i] === null ? "text-mist/50" : `${accentText} font-semibold`}`}>
                    {row.values[i] ?? (
                      <>
                        <span aria-hidden="true">—</span>
                        <span className="sr-only">not recorded</span>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11.5px] leading-relaxed text-mist">
        <span className="text-parchment/80">Method:</span> {evaluation.method}
        {evaluation.note && <> {evaluation.note}</>}
        {hasMissing && (
          <span className="block text-mist/80">
            <span aria-hidden="true">—</span> not yet recorded
          </span>
        )}
      </p>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion() ?? false;
  const frontButton = useRef<HTMLButtonElement>(null);
  const backPanel = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const a = accentStyles[project.accent];
  const titleId = `${project.id}-title`;

  // Move focus to the face that is now visible (not on first render).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const t = window.setTimeout(
      () => {
        if (flipped && backPanel.current) {
          backPanel.current.scrollTop = 0;
          backPanel.current.focus({ preventScroll: true });
        } else frontButton.current?.focus({ preventScroll: true });
      },
      reduce ? 60 : 320,
    );
    return () => window.clearTimeout(t);
  }, [flipped, reduce]);

  return (
    <article aria-labelledby={titleId} className={`flip-scene h-full ${reduce ? "flip-static" : ""}`}>
      <div className={`flip-inner h-full ${flipped ? "is-flipped" : ""}`}>
        {/* ---------- FRONT ---------- */}
        <div
          {...inertProps(flipped)}
          className={`flip-face group relative flex h-full flex-col overflow-hidden rounded-2xl border ${a.border} bg-night-850 shadow-panel transition-colors duration-300 ${a.hoverBorder}`}
        >
          <div className="relative h-44 overflow-hidden">
            {project.image ? (
              <img src={project.image.src} alt={project.image.alt} className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                <ProjectArt type={project.visual} />
              </div>
            )}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night-850 via-transparent to-transparent" />
            <span className="absolute left-4 top-3 font-serif text-2xl font-semibold text-parchment drop-shadow">{String(index + 1).padStart(2, "0")}</span>
            <span className={`absolute bottom-3 left-4 rounded-full border ${a.border} bg-night-950/80 px-2.5 py-0.5 text-[11.5px] ${a.text} backdrop-blur`}>
              {project.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 id={titleId} className="font-serif text-[1.45rem] font-semibold leading-tight text-parchment">
              {project.title}
            </h3>
            {(project.dates || project.status) && (
              <p className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11.5px] text-gold-200/80">
                {project.dates && (
                  <span>
                    <span className="sr-only">Dates: </span>
                    {project.dates}
                  </span>
                )}
                {project.status && (
                  <span className={`rounded-full border ${a.border} ${a.softBg} px-2 py-px font-sans text-[11px] ${a.text}`}>{project.status}</span>
                )}
              </p>
            )}
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-mist">{project.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key technologies">
              {project.frontTags.map((t) => (
                <li key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11.5px] text-parchment/85">
                  {t}
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className={`mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium ${a.text}`}>
              View Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>

          {/* whole front is one control */}
          <button
            ref={frontButton}
            type="button"
            onClick={() => setFlipped(true)}
            aria-label={`View project: ${project.title}. Shows objective, approach, results and repository.`}
            className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-offset-[-4px]"
          />
        </div>

        {/* ---------- BACK (scrolls inside the card) ---------- */}
        <div
          {...inertProps(!flipped)}
          className={`flip-face flip-back absolute inset-0 flex flex-col overflow-hidden rounded-2xl border ${a.border} bg-night-900 shadow-panel`}
          onKeyDown={(e) => e.key === "Escape" && setFlipped(false)}
        >
          <div className="flex items-start justify-between gap-3 border-b border-white/[0.07] px-5 pb-3 pt-4">
            <div className="min-w-0">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist">{project.dates ?? project.status ?? project.category}</p>
              <p className="mt-0.5 font-serif text-lg font-semibold leading-snug text-parchment">{project.title}</p>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[12px] text-mist transition hover:border-gold-400/50 hover:text-gold-200"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Return
            </button>
          </div>

          <div
            ref={backPanel}
            tabIndex={-1}
            role="region"
            aria-label={`${project.title} details`}
            className="thin-scroll relative flex-1 overflow-y-auto px-5 pb-5 pt-4 outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-gold-400/40"
          >
            {project.collaborative && (
              <p className={`mb-4 inline-flex items-center gap-1.5 rounded-full border ${a.border} ${a.softBg} px-2.5 py-0.5 text-[11px] ${a.text}`}>
                <Users className="h-3 w-3" aria-hidden="true" />
                Team project · my contribution noted below
              </p>
            )}
            <div className="space-y-5">
              <section>
                <BackHeading accent={a.text}>Objective</BackHeading>
                <p className="mt-2 text-[13.5px] leading-relaxed text-parchment/85">{project.objective}</p>
              </section>

              {project.dataset && (
                <section>
                  <BackHeading accent={a.text}>Dataset & scale</BackHeading>
                  <p className="mt-2 flex items-start gap-2 rounded-lg border border-white/[0.08] bg-night-950/50 px-3 py-1.5 font-mono text-[12px] text-parchment/90">
                    <Database className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`} aria-hidden="true" />
                    {project.dataset}
                  </p>
                </section>
              )}

              <section>
                <BackHeading accent={a.text}>Approach</BackHeading>
                <ul className="mt-2 space-y-1.5">
                  {project.approach.map((s) => (
                    <li key={s.slice(0, 30)} className="flex gap-2.5 text-[13.5px] leading-relaxed text-mist">
                      <span className={`mt-[0.55rem] h-1 w-1 shrink-0 rotate-45 ${a.dot}`} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </section>

              {(project.metrics.length > 0 || project.evaluation) && (
              <section>
                <BackHeading accent={a.text}>Results</BackHeading>
                {project.metrics.length > 0 && (
                  <dl className="mt-2.5 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <div key={m.label} className={`rounded-lg border ${a.border} ${a.softBg} px-3 py-1.5`}>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">{m.label}</dt>
                        <dd className={`font-serif text-xl font-semibold leading-tight ${a.text}`}>{m.value}</dd>
                        {m.note && <dd className="text-[10.5px] text-mist">{m.note}</dd>}
                      </div>
                    ))}
                  </dl>
                )}
                {project.evaluation && <ModelResults evaluation={project.evaluation} accentText={a.text} />}
              </section>
              )}

              <section>
                <BackHeading accent={a.text}>Implementation</BackHeading>
                <ul className="mt-2 space-y-1.5">
                  {project.implementation.map((s) => (
                    <li key={s.slice(0, 30)} className="flex gap-2.5 text-[13.5px] leading-relaxed text-mist">
                      <span className={`mt-[0.55rem] h-1 w-1 shrink-0 rotate-45 ${a.dot}`} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technology stack">
                  {project.technologies.map((t) => (
                    <li key={t} className="rounded-md border border-white/[0.08] px-2 py-0.5 font-mono text-[11px] text-mist">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            {/* fade hints that the details continue below */}
            <div aria-hidden="true" className="pointer-events-none sticky -bottom-5 -mx-5 -mb-5 h-10 bg-gradient-to-t from-night-900 to-transparent" />
          </div>

          {/* repository row stays pinned at the bottom of the card */}
          <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.07] bg-night-900 px-5 py-3.5">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-1.5">
                <SocialIcon id="github" />
                View repository
                <span className="sr-only"> for {project.title} on GitHub (opens in a new tab)</span>
              </a>
            ) : (
              <p className="inline-flex items-center gap-2 text-[13px] text-mist">
                <GitBranch className="h-4 w-4 text-mist/70" aria-hidden="true" />
                Repository link coming soon
              </p>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-1.5">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live demo
                <span className="sr-only"> of {project.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
