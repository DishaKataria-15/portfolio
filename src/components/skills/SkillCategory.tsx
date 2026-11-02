import type { ReactNode } from "react";
import type { SkillGroup } from "../../data/types";
import { SkillBottle } from "./SkillBottle";

interface Props {
  group: SkillGroup;
  number: number;
  /** Grid classes for the bottle rows (responsive column counts). */
  shelfCols: string;
  /** Layout classes for the panel itself (grid spans). */
  className?: string;
  /** Optional decorative layer drawn behind the bottles. */
  decor?: ReactNode;
}

/** Small octagonal gold emblem holding the category number. */
function Emblem({ n, color }: { n: number; color: string }) {
  return (
    <span aria-hidden="true" className="oct relative grid h-9 w-9 shrink-0 place-items-center" style={{ background: color }}>
      <span className="oct absolute inset-px bg-night-950" />
      <span className="oct absolute inset-[3px] border border-gold-400/40" />
      <span className="relative font-serif text-[15px] font-semibold text-gold-200">{String(n).padStart(2, "0")}</span>
    </span>
  );
}

/** One discipline: emblem + title, then one or more shelves of potion bottles. */
export function SkillCategory({ group, number, shelfCols, className = "", decor }: Props) {
  const titleId = `skill-cat-${group.id}`;
  const multi = group.shelves.length > 1;
  return (
    <section
      aria-labelledby={titleId}
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-night-950/55 p-5 sm:p-6 ${className}`}
      style={{
        borderColor: `${group.potion}40`,
        backgroundImage: `radial-gradient(85% 60% at 50% 100%, ${group.potion}1f, transparent 70%)`,
      }}
    >
      {decor}
      <header className="relative flex items-center gap-3">
        <Emblem n={number} color={`${group.potion}aa`} />
        <div className="min-w-0">
          <h3 id={titleId} className="font-serif text-xl font-semibold leading-tight text-gold-100">
            {group.title}
          </h3>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]" style={{ color: group.potion }}>
            {group.discipline}
          </p>
        </div>
      </header>
      {/* thin gold rule under the heading, full width of the panel content */}
      <div aria-hidden="true" className="relative mt-4 h-px bg-gradient-to-r from-gold-400/50 via-gold-400/25 to-transparent" />

      {group.concepts && group.concepts.length > 0 && (
        <ul className="relative mt-4 flex flex-wrap gap-1.5" aria-label={`${group.title}: methods and concepts`}>
          {group.concepts.map((c) => (
            <li
              key={c}
              className="rounded-full border px-2.5 py-0.5 text-[12px] leading-snug text-parchment/85"
              style={{ borderColor: `${group.potion}55`, background: `${group.potion}12` }}
            >
              {c}
            </li>
          ))}
        </ul>
      )}

      {/* shelves sit at the bottom so shelf lines align across panels in the same row */}
      <div className={`relative mt-9 flex flex-1 flex-col justify-end ${multi ? "gap-8 sm:grid sm:grid-cols-2 sm:gap-x-6" : ""}`}>
        {group.shelves.map((shelf, i) => (
          <div key={shelf.label ?? i} className="flex flex-col">
            {shelf.label && (
              <p className="mb-4 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-parchment/70">
                <span className="h-1.5 w-1.5 rotate-45" style={{ background: group.potion }} aria-hidden="true" />
                {shelf.label}
              </p>
            )}
            <ul className={`grid gap-y-8 ${multi ? "grid-cols-2" : shelfCols}`} aria-label={shelf.label ?? `${group.title} skills`}>
              {shelf.skills.map((skill) => (
                <SkillBottle key={skill} skill={skill} color={group.potion} groupId={group.id} groupTitle={group.title} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
