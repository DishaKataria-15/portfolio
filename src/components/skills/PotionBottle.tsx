import type { LucideIcon } from "lucide-react";

/**
 * One potion bottle: round-bottomed glass flask with a narrow neck, an antique-gold
 * cork and base, coloured liquid, and a softly lit symbol inside.
 * Every bottle uses identical geometry; only the colour and symbol change.
 */
export function PotionBottle({ color, Icon, uid }: { color: string; Icon: LucideIcon; uid: string }) {
  // SVG ids must be unique and free of spaces/symbols ("Power BI", "C++").
  const id = `pb-${uid.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
  const body = "M43 40v9C27 55 17 69 17 85c0 19 15 34 33 34s33-15 33-34c0-16-10-30-26-36v-9z";

  return (
    <div className="relative h-[7.25rem] w-[5.25rem]">
      {/* soft glow behind the glass; intensifies on hover/focus */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[62%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80"
        style={{ background: `radial-gradient(closest-side, ${color}, transparent)` }}
      />
      <svg viewBox="0 0 100 140" className="relative h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-cork`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9c7a33" />
            <stop offset="0.45" stopColor="#f3e2b3" />
            <stop offset="1" stopColor="#9c7a33" />
          </linearGradient>
          <linearGradient id={`${id}-liq`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.95" />
            <stop offset="1" stopColor={color} stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="0.5" stopColor={color} stopOpacity="0.35" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
          <clipPath id={`${id}-clip`}>
            <path d={body} />
          </clipPath>
        </defs>

        {/* glass interior */}
        <path d={body} fill="#0a1024" fillOpacity="0.7" />
        <g clipPath={`url(#${id}-clip)`}>
          <rect x="10" y="68" width="80" height="60" fill={`url(#${id}-liq)`} />
          <ellipse cx="50" cy="68" rx="34" ry="3.2" fill="#ffffff" fillOpacity="0.35" />
          <circle cx="50" cy="88" r="26" fill={`url(#${id}-core)`} />
          {[
            [36, 106, 2],
            [60, 110, 1.6],
            [66, 98, 1.2],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity="0.6" className="potion-bubble" style={{ animationDelay: `${i * 0.45}s` }} />
          ))}
        </g>
        {/* glass outline + highlights */}
        <path d={body} fill="none" stroke="#e9e4d6" strokeOpacity="0.6" strokeWidth="1.4" />
        <path d="M27 73c-4 6-5 14-3 22" stroke="#fff" strokeOpacity="0.55" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        <path d="M46 42v8" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" />
        {/* lip + cork */}
        <rect x="38" y="35" width="24" height="5" rx="2.5" fill="#e9e4d6" fillOpacity="0.28" stroke="#e9e4d6" strokeOpacity="0.5" strokeWidth="0.8" />
        <path d="M41 35V22c0-3 2-5 4-5h10c2 0 4 2 4 5v13z" fill={`url(#${id}-cork)`} />
        <path d="M41 26h18" stroke="#6b4f1e" strokeOpacity="0.55" strokeWidth="1" />
        {/* antique-gold base ring */}
        <ellipse cx="50" cy="122" rx="24" ry="3.5" fill="none" stroke="#d9b25f" strokeOpacity="0.85" strokeWidth="1.4" />
        <path d="M30 124h40l3 6H27z" fill="#c39a45" fillOpacity="0.9" />
        <path d="M27 130h46" stroke="#f3e2b3" strokeOpacity="0.6" />
      </svg>
      {/* the symbol, centred in the liquid */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 text-white"
        style={{ filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 2px rgba(255,255,255,0.8))` }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
    </div>
  );
}
