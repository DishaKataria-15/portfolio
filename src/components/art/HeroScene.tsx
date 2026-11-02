/**
 * Hero illustration: a researcher's study at night. An arched window opens onto
 * a castle across a lake; a reader and her cat sit at a desk with candles, a
 * stack of books and a crystal ball showing a small chart.
 * Original vector artwork drawn in code (no external assets).
 */

const STARS = Array.from({ length: 70 }, (_, i) => {
  const x = 196 + ((i * 97) % 250);
  const y = 50 + ((i * 53) % 200);
  return { x, y, r: (i % 5) * 0.25 + 0.5, o: 0.4 + (i % 4) * 0.15 };
});

const LEFT_BOOKS = [
  [6, 14, "#3d2a4d"], [22, 10, "#24395a"], [34, 16, "#4b2e27"], [52, 9, "#2c4a3c"], [63, 14, "#5a4826"],
  [79, 11, "#3a2f55"], [92, 15, "#27425e"], [109, 10, "#552f31"], [121, 13, "#2f4a3a"], [136, 12, "#4a3d22"],
  [150, 14, "#33285a"],
] as const;

function Shelf({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})${flip ? " scale(-1 1)" : ""}`}>
      {LEFT_BOOKS.map(([bx, w, c], i) => {
        const h = 54 + ((i * 7) % 18);
        return (
          <g key={i}>
            <rect x={bx} y={70 - h} width={w} height={h} rx="1.5" fill={c} />
            <rect x={bx + 2} y={70 - h + 8} width={w - 4} height="2" fill="#d9b25f" opacity="0.35" />
          </g>
        );
      })}
      <rect x="0" y="70" width="170" height="7" fill="#2a1c12" />
      <rect x="0" y="70" width="170" height="1.5" fill="#6b4a2c" opacity="0.6" />
    </g>
  );
}

export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 560" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-label="Illustration of a study at night: an arched window looks out on a castle across a lake, while a reader and her cat sit at a candlelit desk with books and a crystal ball.">
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a1538" />
          <stop offset="0.55" stopColor="#1d2560" />
          <stop offset="1" stopColor="#433573" />
        </linearGradient>
        <linearGradient id="hs-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c2558" />
          <stop offset="1" stopColor="#0a0f2a" />
        </linearGradient>
        <radialGradient id="hs-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff6da" stopOpacity="0.9" />
          <stop offset="0.35" stopColor="#f3e2b3" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f3e2b3" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hs-candle" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffd88a" stopOpacity="0.75" />
          <stop offset="0.4" stopColor="#f0a944" stopOpacity="0.22" />
          <stop offset="1" stopColor="#f0a944" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hs-ball" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#9fd8ff" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#5b4bc4" stopOpacity="0.45" />
          <stop offset="1" stopColor="#1a1446" stopOpacity="0.85" />
        </radialGradient>
        <linearGradient id="hs-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a2f1a" />
          <stop offset="1" stopColor="#170e08" />
        </linearGradient>
        <linearGradient id="hs-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c0f22" />
          <stop offset="1" stopColor="#120d14" />
        </linearGradient>
        <radialGradient id="hs-windowlight" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#6e6ad8" stopOpacity="0.28" />
          <stop offset="1" stopColor="#6e6ad8" stopOpacity="0" />
        </radialGradient>
        <clipPath id="hs-window">
          <path d="M196 362V172Q196 70 320 46Q444 70 444 172V362Z" />
        </clipPath>
      </defs>

      {/* room */}
      <rect width="640" height="560" fill="url(#hs-wall)" />
      <Shelf x={8} y={60} />
      <Shelf x={8} y={160} />
      <Shelf x={8} y={260} />
      <Shelf x={632} y={170} flip />
      <Shelf x={632} y={270} flip />
      <rect width="640" height="560" fill="url(#hs-windowlight)" />

      {/* window view */}
      <g clipPath="url(#hs-window)">
        <rect x="190" y="40" width="260" height="330" fill="url(#hs-sky)" />
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity={s.o} className={i % 6 === 0 ? "animate-twinkle" : undefined} />
        ))}
        <path d="M232 92l22 18 26-6 20 16M360 70l18 14 24-4" stroke="#e8cc85" strokeOpacity="0.35" strokeWidth="0.8" fill="none" />
        <circle cx="398" cy="100" r="60" fill="url(#hs-moon)" />
        <circle cx="398" cy="100" r="19" fill="#fbf1d2" />
        <circle cx="391" cy="95" r="3" fill="#e9dcb4" />
        <circle cx="404" cy="106" r="2" fill="#e9dcb4" />
        {/* far mountains */}
        <path d="M190 262l40-26 30 14 34-30 40 28 32-20 40 24 30-14 14 8V300H190z" fill="#18204a" />
        {/* castle */}
        <g fill="#0a0e24">
          <path d="M228 300v-34l26-10 28 6 32-8 38 6 30-8 30 10 18 6v32z" />
          <rect x="300" y="196" width="44" height="84" />
          <rect x="314" y="150" width="16" height="50" />
          <path d="M312 152l10-40 10 40z" />
          <rect x="268" y="214" width="16" height="66" />
          <path d="M265 216l11-34 11 34z" />
          <rect x="356" y="206" width="16" height="74" />
          <path d="M353 208l11-38 11 38z" />
          <rect x="246" y="236" width="12" height="44" />
          <path d="M244 238l8-24 8 24z" />
          <rect x="384" y="230" width="12" height="50" />
          <path d="M382 232l8-26 8 26z" />
          <rect x="292" y="232" width="60" height="48" />
          <path d="M292 234l30-18 30 18z" />
        </g>
        <g fill="#f3c76b">
          {[
            [318, 170], [306, 210], [334, 214], [318, 236], [272, 230], [360, 222], [362, 244], [250, 252],
            [388, 248], [300, 252], [340, 256], [276, 256], [312, 262],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="3.2" height="5" rx="1" opacity={0.75 + (i % 3) * 0.08} />
          ))}
        </g>
        {/* lake + reflections */}
        <rect x="190" y="298" width="260" height="70" fill="url(#hs-lake)" />
        <g stroke="#f3c76b" strokeLinecap="round">
          {[[300, 310, 14], [320, 318, 10], [270, 322, 8], [360, 314, 12], [336, 330, 7], [252, 334, 6]].map(([x, y, w], i) => (
            <line key={i} x1={x} y1={y} x2={x + w} y2={y} strokeOpacity={0.45 - i * 0.04} strokeWidth="1.4" />
          ))}
        </g>
        <path d="M390 312h16M393 322h10M396 334h6" stroke="#fbf1d2" strokeOpacity="0.5" strokeLinecap="round" />
      </g>

      {/* window frame */}
      <path d="M196 362V172Q196 70 320 46Q444 70 444 172V362Z" fill="none" stroke="#2a1c12" strokeWidth="12" />
      <path d="M196 362V172Q196 70 320 46Q444 70 444 172V362Z" fill="none" stroke="#c39a45" strokeOpacity="0.55" strokeWidth="1.2" />
      <path d="M320 50v312M258 120v242M382 120v242M200 190h240" stroke="#2a1c12" strokeWidth="3.5" />
      <path d="M320 50v312M200 190h240" stroke="#c39a45" strokeOpacity="0.3" strokeWidth="0.8" />
      <rect x="182" y="356" width="276" height="12" rx="2" fill="#3a2717" />

      {/* hanging banner */}
      <g>
        <line x1="512" y1="18" x2="512" y2="34" stroke="#c39a45" strokeOpacity="0.6" />
        <rect x="472" y="30" width="80" height="4" rx="2" fill="#7a5a2c" />
        <path d="M476 34h72v190l-36 22-36-22z" fill="#251a4f" stroke="#c39a45" strokeOpacity="0.7" strokeWidth="1.2" />
        <path d="M482 40h60v178l-30 18-30-18z" fill="none" stroke="#c39a45" strokeOpacity="0.35" strokeWidth="0.8" />
        <g transform="translate(512 80)" stroke="#e8cc85" fill="none" strokeWidth="1">
          <circle r="14" strokeOpacity="0.6" />
          <path d="M0-20l4 16 16 4-16 4-4 16-4-16-16-4 16-4z" fill="#e8cc85" fillOpacity="0.85" stroke="none" />
        </g>
        <g fontFamily="Cormorant Garamond, Georgia, serif" fill="#f0dcae" textAnchor="middle" fontSize="13">
          <text x="512" y="124">AI</text>
          <text x="512" y="144">ML</text>
          <text x="512" y="164">Data Science</text>
          <text x="512" y="184">Data</text>
          <text x="512" y="200">Engineering</text>
        </g>
      </g>

      {/* desk */}
      <path d="M0 400L640 392V560H0z" fill="url(#hs-desk)" />
      <path d="M0 400L640 392" stroke="#8a6238" strokeOpacity="0.55" strokeWidth="1.5" />

      {/* candle glows */}
      {[
        [178, 300],
        [226, 330],
        [596, 330],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="70" fill="url(#hs-candle)" />
      ))}

      {/* book stack */}
      <g fontFamily="Cormorant Garamond, Georgia, serif" fontSize="12" letterSpacing="1.5" fill="#d9b25f">
        {[
          { x: 30, y: 376, w: 176, c: "#3c2a1d", t: "POSSIBILITIES" },
          { x: 40, y: 352, w: 160, c: "#2a2238", t: "DATA" },
          { x: 34, y: 328, w: 166, c: "#3a2420", t: "MODELS" },
          { x: 46, y: 304, w: 150, c: "#232c40", t: "ALGORITHMS" },
        ].map((b) => (
          <g key={b.t}>
            <rect x={b.x} y={b.y} width={b.w} height="22" rx="2" fill={b.c} />
            <rect x={b.x} y={b.y} width={b.w} height="22" rx="2" fill="none" stroke="#c39a45" strokeOpacity="0.35" />
            <line x1={b.x + 10} x2={b.x + 10} y1={b.y + 3} y2={b.y + 19} stroke="#c39a45" strokeOpacity="0.4" />
            <line x1={b.x + b.w - 10} x2={b.x + b.w - 10} y1={b.y + 3} y2={b.y + 19} stroke="#c39a45" strokeOpacity="0.4" />
            <text x={b.x + b.w / 2} y={b.y + 15.5} textAnchor="middle" opacity="0.8">
              {b.t}
            </text>
          </g>
        ))}
      </g>

      {/* candles */}
      {[
        { x: 172, y: 262, h: 40 },
        { x: 220, y: 290, h: 30 },
        { x: 590, y: 292, h: 40 },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="12" height={c.h} rx="2" fill="#efe3c4" />
          <rect x={c.x} y={c.y} width="4" height={c.h} rx="2" fill="#fff8e6" opacity="0.6" />
          <line x1={c.x + 6} y1={c.y} x2={c.x + 6} y2={c.y - 4} stroke="#2a1c12" strokeWidth="1" />
          <ellipse
            cx={c.x + 6}
            cy={c.y - 10}
            rx="4"
            ry="8"
            fill="#ffd27a"
            className="animate-flicker"
            style={{ transformBox: "fill-box", transformOrigin: "50% 100%", animationDelay: `${i * 0.7}s` }}
          />
          <ellipse cx={c.x + 6} cy={c.y - 8} rx="1.8" ry="4" fill="#fff6dc" />
          <rect x={c.x - 4} y={c.y + c.h} width="20" height="4" rx="2" fill="#7a5a2c" />
        </g>
      ))}

      {/* reader, seen from behind, rim-lit by the window */}
      <g fill="#060814">
        <path d="M274 474c2-48 14-78 32-92l10-6h14l10 6c18 14 30 44 32 92z" />
        <circle cx="322" cy="300" r="25" />
        {/* long hair falling over the shoulders */}
        <path d="M297 298c-2 36-6 74-14 112 22 12 56 12 78 0-8-38-12-76-14-112-2-18-12-28-25-28s-23 10-25 28z" fill="#0a0b1a" />
      </g>
      <path d="M299 290c3-14 12-22 23-22s20 8 23 22" stroke="#b7b2ff" strokeOpacity="0.5" strokeWidth="1.3" fill="none" />
      <path d="M297 310c-2 30-6 62-12 92M347 310c2 30 6 62 12 92" stroke="#b7b2ff" strokeOpacity="0.14" fill="none" />

      {/* cat */}
      <g fill="#05060e">
        <path d="M386 470c-6-30 0-58 18-68 2-12 2-22-4-32l10 8c6-2 12-2 18 0l10-8c-6 10-6 20-4 32 18 10 24 38 18 68z" />
        <path d="M448 466c16-2 30-10 34-26" stroke="#05060e" strokeWidth="7" strokeLinecap="round" fill="none" />
      </g>
      <path d="M400 370l10 8c6-2 12-2 18 0l10-8" stroke="#a9a3ff" strokeOpacity="0.4" fill="none" />

      {/* open book on the desk */}
      <g>
        <path d="M206 520l110-12 4 40-118 8z" fill="#e9dcbc" />
        <path d="M320 508l112 10 2 40-110-10z" fill="#f2e7cc" />
        <path d="M320 508v40" stroke="#8a6f4a" strokeOpacity="0.6" />
        <g stroke="#8a6f4a" strokeOpacity="0.45">
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="224" y1={526 + i * 6} x2="304" y2={518 + i * 6} />
          ))}
          <path d="M338 524l20-6 16 4 22-10 18 6" fill="none" stroke="#5b4bc4" strokeOpacity="0.6" />
        </g>
      </g>

      {/* crystal ball */}
      <g>
        <circle cx="530" cy="420" r="70" fill="#5b4bc4" opacity="0.12" />
        <path d="M498 470h64l-8 18h-48z" fill="#3a2717" />
        <rect x="492" y="486" width="76" height="8" rx="3" fill="#5a3d22" />
        <circle cx="530" cy="430" r="44" fill="url(#hs-ball)" />
        <circle cx="530" cy="430" r="44" fill="none" stroke="#c4b2f5" strokeOpacity="0.5" />
        <g>
          <rect x="508" y="436" width="7" height="14" rx="1" fill="#7fd6b0" opacity="0.85" />
          <rect x="519" y="428" width="7" height="22" rx="1" fill="#a38be8" opacity="0.9" />
          <rect x="530" y="420" width="7" height="30" rx="1" fill="#e98bd0" opacity="0.85" />
          <rect x="541" y="412" width="7" height="38" rx="1" fill="#7fd6b0" opacity="0.85" />
          <path d="M506 426l14-6 12 4 20-16" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.5" fill="none" />
          <path d="M548 405l6 2-2 6" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.5" fill="none" />
        </g>
        <ellipse cx="515" cy="410" rx="10" ry="6" fill="#fff" opacity="0.25" transform="rotate(-30 515 410)" />
      </g>

      {/* foreground dust */}
      {[[120, 180], [460, 120], [580, 80], [90, 330], [610, 250]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#ffd88a" opacity="0.6" className="animate-twinkle" style={{ animationDelay: `${i}s` }} />
      ))}
    </svg>
  );
}
