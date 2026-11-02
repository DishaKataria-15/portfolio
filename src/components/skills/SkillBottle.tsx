import { PotionBottle } from "./PotionBottle";
import { iconFor } from "./skillIcons";

/**
 * A bottle standing on its stretch of shelf, with the skill name on the shelf's
 * edge. Shelf segments have no gaps between them, so a row of bottles forms one
 * continuous gold shelf exactly as wide as its contents.
 */
export function SkillBottle({ skill, color, groupId, groupTitle }: { skill: string; color: string; groupId: string; groupTitle: string }) {
  const tipId = `tip-${groupId}-${skill}`.replace(/[^a-zA-Z0-9_-]/g, "_");
  return (
    <li
      tabIndex={0}
      aria-describedby={tipId}
      className="group relative flex flex-col items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950"
    >
      {/* tooltip */}
      <span
        id={tipId}
        role="tooltip"
        className="pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 -translate-y-full w-max max-w-[11rem] text-center leading-snug rounded-md border border-gold-400/40 bg-night-950/95 px-2.5 py-1 text-[11.5px] text-parchment opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <span className="font-semibold" style={{ color }}>
          {skill}
        </span>
        <span className="text-mist"> · {groupTitle}</span>
      </span>

      <div className="transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:group-focus-visible:-translate-y-1.5">
        <PotionBottle color={color} Icon={iconFor(skill)} uid={`${groupId}-${skill}`} />
      </div>

      {/* shelf segment: thin antique-gold edge over dark wood */}
      <div aria-hidden="true" className="mt-0.5 h-[7px] w-full border-t border-gold-300/80 bg-gradient-to-b from-[#6b4a2a] to-[#22160c] shadow-[0_8px_12px_-6px_rgba(0,0,0,0.9)]" />
      <span className="mt-2.5 min-h-[2.5em] px-0.5 text-center text-[13px] font-medium leading-tight text-parchment sm:px-1 sm:text-[14px]">{skill}</span>
    </li>
  );
}
