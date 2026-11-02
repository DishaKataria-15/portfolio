/**
 * About illustration: an owl perched beside a stack of labelled books,
 * candlelight and a moonlit window. Original vector artwork.
 */
export function OwlStudy({ className = "", labels }: { className?: string; labels: string[] }) {
  const books = [
    { w: 190, c: "#3c2a1d" },
    { w: 176, c: "#2a2238" },
    { w: 184, c: "#3a2420" },
    { w: 168, c: "#232c40" },
  ];
  return (
    <svg viewBox="0 0 440 400" className={className} role="img" aria-label={`Illustration of an owl beside a candlelit stack of books labelled ${labels.join(", ")}.`}>
      <defs>
        <radialGradient id="ow-candle" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffd88a" stopOpacity="0.7" />
          <stop offset="0.45" stopColor="#f0a944" stopOpacity="0.18" />
          <stop offset="1" stopColor="#f0a944" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ow-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1640" />
          <stop offset="1" stopColor="#2b2a66" />
        </linearGradient>
        <linearGradient id="ow-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b59870" />
          <stop offset="1" stopColor="#6e5436" />
        </linearGradient>
        <linearGradient id="ow-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe2c4" />
          <stop offset="1" stopColor="#cdb48a" />
        </linearGradient>
        <linearGradient id="ow-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a2f1a" />
          <stop offset="1" stopColor="#170e08" />
        </linearGradient>
        <clipPath id="ow-win">
          <path d="M300 170V70q0-50 60-62 60 12 60 62v100z" />
        </clipPath>
      </defs>

      <rect width="440" height="400" fill="#0b0d1c" />
      {/* moonlit window */}
      <g clipPath="url(#ow-win)">
        <rect x="296" y="0" width="130" height="180" fill="url(#ow-sky)" />
        <circle cx="392" cy="50" r="30" fill="#f3e2b3" opacity="0.18" />
        <circle cx="392" cy="50" r="15" fill="#fbf1d2" />
        <circle cx="386" cy="46" r="15" fill="#2b2a66" opacity="0.0" />
        {[[316, 40], [330, 90], [350, 30], [410, 110], [372, 120], [340, 140]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="#fff" opacity="0.8" />
        ))}
        <path d="M296 150l24-18 20 10 26-22 30 20 30-12v52H296z" fill="#0e1430" />
      </g>
      <path d="M300 170V70q0-50 60-62 60 12 60 62v100z" fill="none" stroke="#2a1c12" strokeWidth="8" />
      <path d="M360 8v162M300 96h120" stroke="#2a1c12" strokeWidth="3" />
      <path d="M300 170V70q0-50 60-62 60 12 60 62v100z" fill="none" stroke="#c39a45" strokeOpacity="0.45" />

      {/* shelf behind */}
      <g>
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x={14 + i * 20} y={52 + (i % 3) * 6} width="16" height={58 - (i % 3) * 6} rx="1.5" fill={["#33285a", "#27425e", "#4b2e27", "#2c4a3c", "#4a3d22"][i % 5]} opacity="0.75" />
        ))}
        <rect x="8" y="110" width="252" height="6" fill="#2a1c12" />
      </g>

      {/* desk */}
      <path d="M0 330h440v70H0z" fill="url(#ow-desk)" />
      <path d="M0 330h440" stroke="#8a6238" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* candle glows */}
      <circle cx="58" cy="230" r="80" fill="url(#ow-candle)" />
      <circle cx="404" cy="236" r="70" fill="url(#ow-candle)" />

      {/* stack of books */}
      <g fontFamily="Cormorant Garamond, Georgia, serif" fontSize="15" fill="#e8cc85" textAnchor="middle">
        {books.map((b, i) => {
          const y = 300 - i * 30;
          const x = 236 + (i % 2) * 8;
          return (
            <g key={i}>
              <rect x={x} y={y} width={b.w} height="28" rx="2.5" fill={b.c} />
              <rect x={x} y={y} width={b.w} height="28" rx="2.5" fill="none" stroke="#c39a45" strokeOpacity="0.4" />
              <line x1={x + 12} x2={x + 12} y1={y + 4} y2={y + 24} stroke="#c39a45" strokeOpacity="0.45" />
              <text x={x + b.w / 2 + 4} y={y + 19.5} opacity="0.9">
                {labels[i] ?? ""}
              </text>
            </g>
          );
        })}
      </g>

      {/* owl, standing on a short book */}
      <g>
        <rect x="70" y="306" width="150" height="24" rx="2.5" fill="#2f2440" stroke="#c39a45" strokeOpacity="0.35" />
        {/* tail */}
        <path d="M132 296l14 18 14-18z" fill="#5a4329" />
        {/* body */}
        <ellipse cx="146" cy="236" rx="54" ry="70" fill="url(#ow-body)" />
        {/* wings */}
        <path d="M94 210c-8 34-4 70 20 92 6-30 4-66-6-98z" fill="#5d4630" />
        <path d="M198 210c8 34 4 70-20 92-6-30-4-66 6-98z" fill="#5d4630" />
        <path d="M100 236c4 12 8 26 14 40M192 236c-4 12-8 26-14 40" stroke="#3e2d1d" strokeOpacity="0.7" fill="none" />
        {/* belly with feather chevrons */}
        <ellipse cx="146" cy="250" rx="34" ry="50" fill="url(#ow-belly)" />
        <g stroke="#8a6f4a" strokeOpacity="0.55" fill="none" strokeWidth="1.3">
          {[0, 1, 2, 3, 4].map((r) =>
            [-1, 0, 1].map((c) => (
              <path key={`${r}${c}`} d={`M${140 + c * 14 - (r % 2) * 7} ${222 + r * 14}l5 5 5-5`} />
            )),
          )}
        </g>
        {/* head */}
        <ellipse cx="146" cy="160" rx="50" ry="44" fill="url(#ow-body)" />
        <path d="M100 132l6-30 18 22zM192 132l-6-30-18 22z" fill="#6e5436" />
        {/* facial discs */}
        <circle cx="126" cy="162" r="24" fill="#e7d7b4" />
        <circle cx="166" cy="162" r="24" fill="#e7d7b4" />
        <path d="M146 138c-6 10-6 20 0 28 6-8 6-18 0-28z" fill="#b59870" />
        {/* eyes */}
        <circle cx="126" cy="162" r="14" fill="#f2b844" />
        <circle cx="166" cy="162" r="14" fill="#f2b844" />
        <circle cx="126" cy="162" r="7.5" fill="#120a04" />
        <circle cx="166" cy="162" r="7.5" fill="#120a04" />
        <circle cx="123" cy="158" r="2.6" fill="#fff" />
        <circle cx="163" cy="158" r="2.6" fill="#fff" />
        <circle cx="126" cy="162" r="14" fill="none" stroke="#3e2d1d" strokeOpacity="0.6" />
        <circle cx="166" cy="162" r="14" fill="none" stroke="#3e2d1d" strokeOpacity="0.6" />
        {/* beak */}
        <path d="M140 174l6 14 6-14c-4-3-8-3-12 0z" fill="#d79a3c" />
        {/* feet */}
        <g fill="#d79a3c">
          <path d="M126 302c-2 3-2 5 0 6 2-1 4-1 6 0 2-1 4-1 6 0 1-2 0-4-2-6z" />
          <path d="M152 302c-2 3-2 5 0 6 2-1 4-1 6 0 2-1 4-1 6 0 1-2 0-4-2-6z" />
        </g>
      </g>

      {/* candles */}
      {[
        { x: 52, y: 248, h: 82 },
        { x: 398, y: 172, h: 34 },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="14" height={c.h} rx="2" fill="#efe3c4" />
          <rect x={c.x} y={c.y} width="4" height={c.h} rx="2" fill="#fff8e6" opacity="0.6" />
          <path d={`M${c.x + 2} ${c.y + 6}q-2 10 0 18`} stroke="#efe3c4" strokeWidth="3" strokeLinecap="round" />
          <ellipse
            cx={c.x + 7}
            cy={c.y - 10}
            rx="4.5"
            ry="9"
            fill="#ffd27a"
            className="animate-flicker"
            style={{ transformBox: "fill-box", transformOrigin: "50% 100%", animationDelay: `${i * 0.9}s` }}
          />
          <ellipse cx={c.x + 7} cy={c.y - 8} rx="2" ry="4.5" fill="#fff6dc" />
        </g>
      ))}
    </svg>
  );
}
