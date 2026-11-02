/** Faint decorative layers for the Skills laboratory. All aria-hidden. */

/** Neural-network / constellation lines for the Generative AI & NLP panel. */
export function NeuralConstellation({ color }: { color: string }) {
  const layers = [
    [30, 60, 90],
    [20, 45, 70, 95],
    [35, 65, 95],
  ];
  const xs = [40, 200, 360];
  const nodes = layers.flatMap((ys, li) => ys.map((y) => [xs[li], y] as const));
  const edges: [number, number, number, number][] = [];
  for (let l = 0; l < layers.length - 1; l++)
    for (const a of layers[l]) for (const b of layers[l + 1]) edges.push([xs[l], a, xs[l + 1], b]);
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 120"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-x-0 bottom-[4.5rem] h-[42%] w-full opacity-[0.12]"
    >
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.6" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="#05070f" stroke={color} strokeWidth="1" />
      ))}
    </svg>
  );
}

/** An alchemical circle: square, triangle and rings, very faint behind the heading. */
export function AlchemyCircle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="-100 -100 200 200" className={`pointer-events-none ${className}`} fill="none" stroke="#d9b25f">
      <circle r="96" strokeOpacity="0.35" />
      <circle r="88" strokeOpacity="0.2" strokeDasharray="2 5" />
      <rect x="-56" y="-56" width="112" height="112" strokeOpacity="0.3" transform="rotate(45)" />
      <path d="M0-74L64 37H-64z" strokeOpacity="0.32" />
      <circle r="32" strokeOpacity="0.3" />
      {Array.from({ length: 24 }, (_, i) => (
        <line key={i} x1="0" y1="-96" x2="0" y2={i % 6 === 0 ? -84 : -90} strokeOpacity="0.35" transform={`rotate(${i * 15})`} />
      ))}
    </svg>
  );
}
