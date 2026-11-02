import { StarField } from "./StarField";

/** A celestial-chart ring: degree ticks, zodiac-like divisions and orbit circles. Pure decoration. */
function CelestialChart({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  return (
    <svg viewBox="-200 -200 400 400" className={className} fill="none" aria-hidden="true">
      <g stroke="#d9b25f">
        <circle r="196" strokeOpacity="0.16" />
        <circle r="182" strokeOpacity="0.1" />
        <circle r="140" strokeOpacity="0.08" strokeDasharray="2 6" />
        <circle r="96" strokeOpacity="0.1" />
        <circle r="40" strokeOpacity="0.08" />
        {ticks.map((deg) => (
          <line
            key={deg}
            x1="0"
            y1={deg % 30 === 0 ? -196 : -190}
            x2="0"
            y2="-182"
            strokeOpacity={deg % 30 === 0 ? 0.3 : 0.14}
            transform={`rotate(${deg})`}
          />
        ))}
        {Array.from({ length: 12 }, (_, i) => (
          <line key={i} x1="0" y1="-182" x2="0" y2="-96" strokeOpacity="0.06" transform={`rotate(${i * 30})`} />
        ))}
        <path d="M0 -140 L121 70 L-121 70 Z" strokeOpacity="0.07" />
        <path d="M0 140 L121 -70 L-121 -70 Z" strokeOpacity="0.05" />
      </g>
      <circle cx="0" cy="-140" r="3" fill="#e8cc85" fillOpacity="0.5" />
      <circle cx="121" cy="70" r="2" fill="#7fd6b0" fillOpacity="0.5" />
      <circle cx="-96" cy="0" r="2.5" fill="#a38be8" fillOpacity="0.5" />
    </svg>
  );
}

/**
 * Site-wide layered backdrop, fixed behind everything:
 * vignette + coloured lantern glows + slowly turning celestial charts + star/dust canvas.
 */
export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#0d1430_0%,#080c1a_45%,#04060d_100%)]" />
      <div className="absolute -left-40 top-[15%] h-[32rem] w-[32rem] rounded-full bg-gold-500/[0.07] blur-[110px] animate-drift" />
      <div className="absolute -right-32 top-[45%] h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.09] blur-[110px] animate-drift [animation-delay:-12s]" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-emerald-500/[0.07] blur-[110px] animate-drift [animation-delay:-6s]" />
      <CelestialChart className="absolute -right-48 -top-48 h-[44rem] w-[44rem] opacity-70 animate-spin-slow" />
      <CelestialChart className="absolute -bottom-64 -left-56 h-[38rem] w-[38rem] opacity-40 animate-spin-slower" />
      {/* vignette keeps edges dark so text in the centre stays crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(3,4,10,0.75)_100%)]" />
      <StarField />
    </div>
  );
}
