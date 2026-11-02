/**
 * Header illustrations for project cards. Each is an original, abstract scene;
 * only figures present in the project data appear as text.
 */

function Frame({ children, tint }: { children: React.ReactNode; tint: string }) {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`pa-bg-${tint}`} cx="60%" cy="45%" r="75%">
          <stop offset="0" stopColor={tint} stopOpacity="0.45" />
          <stop offset="1" stopColor="#060914" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="#060914" />
      <rect width="400" height="200" fill={`url(#pa-bg-${tint})`} />
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={i} cx={(i * 71) % 400} cy={(i * 37) % 200} r={(i % 3) * 0.4 + 0.5} fill="#fff" opacity={0.25 + (i % 4) * 0.12} />
      ))}
      {children}
    </svg>
  );
}

export function FraudArt() {
  return (
    <Frame tint="#2d5bd6">
      {/* scattered transactions, one flagged */}
      <g>
        {Array.from({ length: 22 }, (_, i) => {
          const x = 40 + ((i * 53) % 330);
          const y = 30 + ((i * 29) % 150);
          return <circle key={i} cx={x} cy={y} r="2.2" fill="#7fb4ff" opacity="0.55" />;
        })}
        <circle cx="312" cy="58" r="5" fill="#ff6b8a" />
        <circle cx="312" cy="58" r="12" fill="none" stroke="#ff6b8a" strokeOpacity="0.6" className="animate-twinkle" />
      </g>
      {/* circuit lines */}
      <path d="M20 160h70l20-20h60M260 40h40l12 18M300 170h80" stroke="#7fb4ff" strokeOpacity="0.35" fill="none" />
      {/* glowing card */}
      <g transform="translate(120 60) skewX(-14) rotate(-6)">
        <rect width="170" height="104" rx="12" fill="#3b6df0" opacity="0.18" transform="translate(-6 -6) scale(1.07)" />
        <rect width="170" height="104" rx="12" fill="#0d1a4a" stroke="#8fbaff" strokeWidth="1.5" />
        <rect x="18" y="30" width="28" height="22" rx="4" fill="#e8cc85" />
        <path d="M18 41h28M32 30v22" stroke="#9c7a33" strokeWidth="1" />
        <g fill="#cfe0ff" opacity="0.9">
          {[0, 1, 2, 3].map((g) => (
            <rect key={g} x={18 + g * 36} y="68" width="28" height="6" rx="2" />
          ))}
        </g>
        <rect x="18" y="84" width="60" height="5" rx="2" fill="#cfe0ff" opacity="0.5" />
        <circle cx="140" cy="86" r="9" fill="#ff6b8a" opacity="0.8" />
        <circle cx="152" cy="86" r="9" fill="#ffb86b" opacity="0.7" />
      </g>
      {/* shield */}
      <g transform="translate(300 116)">
        <path d="M0 0l22 8v16c0 14-10 24-22 30-12-6-22-16-22-30V8z" fill="#0d1a4a" stroke="#8fbaff" strokeWidth="1.3" />
        <path d="M-8 22l6 6 12-12" stroke="#7fd6b0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

export function RecommenderArt() {
  return (
    <Frame tint="#3c49c9">
      {/* film reel */}
      <g transform="translate(118 104)">
        <circle r="58" fill="#0f1640" stroke="#93a4ff" strokeWidth="1.5" />
        <circle r="58" fill="none" stroke="#93a4ff" strokeOpacity="0.25" strokeWidth="10" />
        {[0, 60, 120, 180, 240, 300].map((d) => (
          <circle key={d} cx={Math.cos((d * Math.PI) / 180) * 32} cy={Math.sin((d * Math.PI) / 180) * 32} r="12" fill="#060914" stroke="#93a4ff" strokeOpacity="0.6" />
        ))}
        <circle r="8" fill="#93a4ff" />
      </g>
      <path d="M150 158c40 20 90 16 120-6" stroke="#93a4ff" strokeOpacity="0.5" strokeWidth="6" fill="none" />
      {/* screen with tiles */}
      <g transform="translate(222 46)">
        <rect width="150" height="96" rx="8" fill="#0d1338" stroke="#93a4ff" strokeWidth="1.3" />
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={i}
            x={12 + (i % 5) * 26}
            y={14 + Math.floor(i / 5) * 38}
            width="20"
            height="30"
            rx="3"
            fill={i === 2 || i === 6 ? "#7fd6b0" : "#3b4ab0"}
            opacity={i === 2 || i === 6 ? 0.9 : 0.6}
          />
        ))}
        <rect x="56" y="100" width="38" height="6" rx="2" fill="#93a4ff" opacity="0.5" />
      </g>
      {/* stars for ratings */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} transform={`translate(${240 + i * 18} 170) scale(0.5)`} d="M0-12l3.5 7.5 8 1-6 5.6 1.6 8-7.1-4-7.1 4 1.6-8-6-5.6 8-1z" fill={i < 4 ? "#e8cc85" : "#3b4ab0"} />
      ))}
    </Frame>
  );
}

export function MisinformationArt() {
  return (
    <Frame tint="#5a3fc4">
      {/* network */}
      <g stroke="#b9a6ff" strokeOpacity="0.35">
        <path d="M40 150l50-30 40 20 40-40M300 170l40-30 30 10M330 60l30 30" fill="none" />
      </g>
      {[[40, 150], [90, 120], [130, 140], [170, 100], [300, 170], [340, 140], [370, 150], [330, 60], [360, 90]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#0d0f2a" stroke="#c4b2f5" />
      ))}
      {/* newspaper */}
      <g transform="translate(150 34) rotate(-6)">
        <rect width="150" height="120" rx="4" fill="#e9e4f6" opacity="0.94" />
        <rect x="10" y="10" width="130" height="26" rx="2" fill="#1d1640" />
        <text x="75" y="29" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="17" fill="#f3eaff" letterSpacing="1">
          FAKE NEWS
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="10" y={46 + i * 12} width={i % 2 ? 60 : 72} height="5" rx="2" fill="#6f6894" opacity="0.6" />
        ))}
        <rect x="88" y="46" width="52" height="40" rx="2" fill="#a38be8" opacity="0.5" />
        {[0, 1].map((i) => (
          <rect key={i} x="88" y={94 + i * 12} width="52" height="5" rx="2" fill="#6f6894" opacity="0.6" />
        ))}
      </g>
      {/* magnifying glass */}
      <g transform="translate(286 108)">
        <circle r="30" fill="#a38be8" fillOpacity="0.12" stroke="#d8ccff" strokeWidth="4" />
        <circle r="30" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="1" />
        <path d="M22 22l26 26" stroke="#8a6238" strokeWidth="8" strokeLinecap="round" />
        <path d="M-14-12a18 18 0 0 1 12-8" stroke="#fff" strokeOpacity="0.7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

export function VerityArt() {
  // three sources feeding one claim, with verdict marks
  const sources = [
    [70, 46],
    [70, 100],
    [70, 154],
  ];
  return (
    <Frame tint="#1f9e86">
      {sources.map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x + 34} ${y}C150 ${y} 160 100 196 100`} stroke="#6fe3c6" strokeOpacity="0.45" fill="none" strokeDasharray={i === 2 ? "4 4" : undefined} />
          <rect x={x - 34} y={y - 16} width="68" height="32" rx="5" fill="#0b1a24" stroke="#6fe3c6" strokeOpacity="0.6" />
          <rect x={x - 26} y={y - 8} width="40" height="4" rx="2" fill="#6fe3c6" opacity="0.6" />
          <rect x={x - 26} y={y + 2} width="28" height="4" rx="2" fill="#6fe3c6" opacity="0.35" />
        </g>
      ))}
      {/* claim card */}
      <g transform="translate(196 62)">
        <rect width="120" height="76" rx="8" fill="#0d1f2a" stroke="#9ff0dc" strokeWidth="1.3" />
        <text x="12" y="20" fontFamily="ui-monospace, monospace" fontSize="10" fill="#9ff0dc" letterSpacing="1">CLAIM</text>
        <rect x="12" y="30" width="96" height="5" rx="2" fill="#cfeee6" opacity="0.7" />
        <rect x="12" y="41" width="72" height="5" rx="2" fill="#cfeee6" opacity="0.5" />
        <rect x="12" y="54" width="54" height="13" rx="6.5" fill="#1f9e86" opacity="0.55" />
        <path d="M20 61l4 4 8-8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* magnifier */}
      <g transform="translate(330 64)">
        <circle r="22" fill="#6fe3c6" fillOpacity="0.1" stroke="#c8fff1" strokeWidth="3" />
        <path d="M16 16l18 18" stroke="#8a6238" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* verdict chips */}
      <g fontFamily="ui-monospace, monospace" fontSize="9">
        <rect x="216" y="152" width="62" height="16" rx="8" fill="#1f9e86" opacity="0.35" />
        <text x="247" y="163" textAnchor="middle" fill="#c8fff1">SUPPORTED</text>
        <rect x="286" y="152" width="58" height="16" rx="8" fill="#e8cc85" opacity="0.25" />
        <text x="315" y="163" textAnchor="middle" fill="#f3e2b3">DISPUTED</text>
      </g>
    </Frame>
  );
}

export function ForecastArt() {
  // observed curve, then a dashed forecast inside a shaded uncertainty band
  const obs = "M30 160C80 158 110 150 140 136S200 98 236 82";
  return (
    <Frame tint="#b07a2a">
      {/* faint globe */}
      <g transform="translate(320 70)" stroke="#e8cc85" strokeOpacity="0.25" fill="none">
        <circle r="44" />
        <ellipse rx="18" ry="44" />
        <ellipse rx="36" ry="44" />
        <path d="M-44 0h88M-38-22h76M-38 22h76" />
      </g>
      {/* axes */}
      <path d="M30 174h340M30 174V30" stroke="#e9e4d6" strokeOpacity="0.2" />
      {[60, 100, 140].map((y) => (
        <path key={y} d={`M30 ${y}h340`} stroke="#e9e4d6" strokeOpacity="0.06" />
      ))}
      {/* uncertainty band */}
      <path d="M236 82L300 50L340 36L340 76L300 82L236 86Z" fill="#f0a63c" opacity="0.18" />
      <path d={obs} stroke="#f0a63c" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M236 82L300 64L340 56" stroke="#f3e2b3" strokeWidth="2" strokeDasharray="5 5" fill="none" />
      <path d="M236 30v144" stroke="#f3e2b3" strokeOpacity="0.35" strokeDasharray="2 4" />
      <text x="242" y="168" fontFamily="ui-monospace, monospace" fontSize="10" fill="#f3e2b3" opacity="0.8">+7 days</text>
      {[[30, 160], [80, 158], [140, 136], [200, 100], [236, 82]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#ffd27a" />
      ))}
    </Frame>
  );
}

export function NexoraArt() {
  // messy table -> cleaning plan -> model -> chart
  return (
    <Frame tint="#6b4fd0">
      {/* messy table */}
      <g transform="translate(26 48)">
        <rect width="92" height="104" rx="6" fill="#0e0f2c" stroke="#b9a6ff" strokeOpacity="0.6" />
        {[0, 1, 2, 3, 4, 5].map((r) => (
          <g key={r}>
            <rect x="8" y={10 + r * 15} width="34" height="7" rx="2" fill="#b9a6ff" opacity={r === 2 ? 0 : 0.45} />
            <rect x="48" y={10 + r * 15} width="36" height="7" rx="2" fill={r === 4 ? "#ff7a9a" : "#b9a6ff"} opacity={r === 4 ? 0.8 : 0.3} />
          </g>
        ))}
        <rect x="6" y="38" width="38" height="11" rx="2" fill="none" stroke="#ff7a9a" strokeDasharray="2 2" />
      </g>
      <path d="M124 100h30" stroke="#d8ccff" strokeOpacity="0.6" strokeWidth="1.5" />
      <path d="M150 95l6 5-6 5" stroke="#d8ccff" strokeOpacity="0.8" fill="none" />
      {/* cleaning checklist */}
      <g transform="translate(160 58)">
        <rect width="80" height="84" rx="6" fill="#141238" stroke="#d8ccff" strokeOpacity="0.7" />
        {[0, 1, 2, 3].map((r) => (
          <g key={r} transform={`translate(10 ${14 + r * 18})`}>
            <rect width="10" height="10" rx="2" fill="none" stroke="#7fd6b0" />
            {r < 3 && <path d="M2 5l2.5 2.5 4-5" stroke="#7fd6b0" strokeWidth="1.6" fill="none" />}
            <rect x="16" y="2" width={r % 2 ? 36 : 46} height="6" rx="2" fill="#d8ccff" opacity="0.45" />
          </g>
        ))}
      </g>
      <path d="M246 100h22" stroke="#d8ccff" strokeOpacity="0.6" strokeWidth="1.5" />
      <path d="M264 95l6 5-6 5" stroke="#d8ccff" strokeOpacity="0.8" fill="none" />
      {/* model network + rising chart */}
      <g transform="translate(280 52)">
        {[[0, 14], [0, 48], [0, 82]].flatMap(([x1, y1]) =>
          [[46, 30], [46, 66]].map(([x2, y2]) => <line key={`${y1}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b9a6ff" strokeOpacity="0.45" />),
        )}
        {[[46, 30], [46, 66]].map(([x, y]) => (
          <line key={y} x1={x} y1={y} x2="88" y2="48" stroke="#b9a6ff" strokeOpacity="0.45" />
        ))}
        {[[0, 14], [0, 48], [0, 82], [46, 30], [46, 66]].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="5" fill="#141238" stroke="#d8ccff" />
        ))}
        <circle cx="88" cy="48" r="7" fill="#a38be8" />
      </g>
      <path d="M268 176l24-10 22 4 26-16 28-12" stroke="#7fd6b0" strokeWidth="2" fill="none" strokeLinecap="round" />
    </Frame>
  );
}

export function ProjectArt({ type }: { type: "fraud" | "recommender" | "misinformation" | "verity" | "forecast" | "nexora" | "none" }) {
  if (type === "fraud") return <FraudArt />;
  if (type === "recommender") return <RecommenderArt />;
  if (type === "misinformation") return <MisinformationArt />;
  if (type === "verity") return <VerityArt />;
  if (type === "forecast") return <ForecastArt />;
  if (type === "nexora") return <NexoraArt />;
  return null;
}
