/** Small decorative pieces shared across sections. */

/** Castle silhouette with lit windows, for section backdrops (Journey). */
export function CastleSkyline({ className = "" }: { className?: string }) {
  const lights = [
    [612, 96], [640, 120], [700, 88], [726, 128], [668, 140], [760, 112], [790, 140], [580, 134], [842, 132], [520, 150], [890, 150],
  ];
  return (
    <svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax meet" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cs-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2250" />
          <stop offset="1" stopColor="#080b1c" />
        </linearGradient>
      </defs>
      <path d="M0 190l90-40 80 18 100-50 90 40 70-20V220H0z" fill="#121838" opacity="0.9" />
      <path d="M800 196l90-44 100 26 110-40 100 30V220H800z" fill="#121838" opacity="0.9" />
      <g fill="url(#cs-fade)">
        <path d="M470 220V150l40-10 40 6 30-12h40v-30h20v-40l14-30 14 30v40h18V70l12-40 12 40v34h22V60l16-46 16 46v44h24V84l12-34 12 34v24h20v-12l12-28 12 28v40h30l40 10 40-6 20 10V220z" />
        <rect x="480" y="130" width="12" height="20" />
        <path d="M476 132l10-26 10 26z" />
        <rect x="920" y="140" width="12" height="20" />
        <path d="M916 142l10-24 10 24z" />
      </g>
      <g fill="#f3c76b">
        {lights.map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="3.5" height="6" rx="1" opacity={0.6 + (i % 3) * 0.12} />
        ))}
      </g>
      {[[640, 10], [700, 4], [760, 18]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="#fff" opacity="0.7" />
      ))}
    </svg>
  );
}

/** Quill resting in an inkwell beside a rolled scroll, for the Contact section. */
export function QuillAndInk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="qi-glow" cx="50%" cy="60%" r="50%">
          <stop offset="0" stopColor="#ffd88a" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffd88a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="110" cy="150" rx="110" ry="60" fill="url(#qi-glow)" />
      {/* scroll */}
      <g transform="translate(8 150) rotate(-8)">
        <rect width="110" height="26" rx="13" fill="#e2d2a8" />
        <ellipse cx="110" cy="13" rx="8" ry="13" fill="#c9b285" />
        <ellipse cx="110" cy="13" rx="3" ry="6" fill="#8a6f4a" />
        <path d="M14 9h70M14 16h56" stroke="#8a6f4a" strokeOpacity="0.5" />
      </g>
      {/* inkwell */}
      <path d="M140 196c-10 0-16-6-16-16 0-14 10-22 14-26v-10h28v10c4 4 14 12 14 26 0 10-6 16-16 16z" fill="#141022" stroke="#c39a45" strokeOpacity="0.5" />
      <rect x="136" y="138" width="36" height="8" rx="2" fill="#5a3d22" />
      <path d="M134 170q20 8 40 0" stroke="#7f66cf" strokeOpacity="0.5" fill="none" />
      {/* quill */}
      <path d="M152 140C160 100 176 50 210 6c-8 36-20 70-40 98-6 10-12 22-18 36z" fill="#efe8d6" />
      <path d="M152 140C166 96 184 52 210 6" stroke="#b9ab8c" strokeWidth="1.3" fill="none" />
      <g stroke="#b9ab8c" strokeOpacity="0.7">
        {[30, 50, 70, 90].map((y, i) => (
          <path key={y} d={`M${196 - i * 9} ${y}l-${10 + i * 2} 6`} />
        ))}
      </g>
    </svg>
  );
}
