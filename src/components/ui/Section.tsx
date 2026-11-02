import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Octagonal numbered seal used beside every section title. */
export function OctBadge({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`oct relative grid h-12 w-12 shrink-0 place-items-center bg-gold-400/70 ${className}`}>
      <span className="oct absolute inset-px bg-night-950" />
      <span className="relative font-serif text-lg font-semibold text-gold-200">{n}</span>
    </span>
  );
}

interface HeaderProps {
  id: string;
  index: string;
  /** Plain, recruiter-friendly title, e.g. "Featured Projects". */
  title: string;
  /** Short themed line under the title. */
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({ id, index, title, subtitle, action, className = "" }: HeaderProps) {
  return (
    <div className={`flex flex-wrap items-start justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-4">
        <OctBadge n={index} />
        <div>
          <h2 id={`${id}-heading`} className="font-serif text-3xl font-semibold leading-tight text-gold-100 sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-0.5 text-[15px] text-parchment/75">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

/** A framed, rounded "window" that holds one section, as in the mockup. */
export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`ornate relative overflow-hidden rounded-[1.75rem] border border-gold-400/30 bg-night-900/85 shadow-panel backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Omit the reveal animation (e.g. for the hero). */
  still?: boolean;
}

/** Page section: an anchor target with consistent outer spacing. */
export function Section({ id, children, className = "", still = false }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`relative py-4 sm:py-5 ${className}`}>
      <div className="container-page">{still ? children : <Reveal>{children}</Reveal>}</div>
    </section>
  );
}
