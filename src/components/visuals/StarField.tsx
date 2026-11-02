import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  phase: number;
}
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
interface Mote {
  x: number;
  y: number;
  r: number;
  speed: number;
  sway: number;
  phase: number;
  hue: "gold" | "emerald";
}

/** Pre-render a soft glowing dot once, then stamp it (far cheaper than per-frame gradients). */
function makeGlow(color: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, color);
  grad.addColorStop(0.25, color.replace(/[\d.]+\)$/, "0.55)"));
  grad.addColorStop(1, color.replace(/[\d.]+\)$/, "0)"));
  g.fillStyle = grad;
  g.fillRect(0, 0, 32, 32);
  return c;
}

/**
 * Fixed background canvas:
 *  - faint twinkling stars
 *  - a few drifting "data points" joined by thin constellation lines
 *  - slow rising motes of gold and emerald "dust"
 * Draws one static frame for reduced motion and pauses while the tab is hidden.
 */
export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const goldGlow = makeGlow("rgba(240,210,140,1)");
    const emeraldGlow = makeGlow("rgba(127,214,176,1)");

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let nodes: Node[] = [];
    let motes: Mote[] = [];
    let raf = 0;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const small = width < 640;
      stars = Array.from({ length: Math.round(Math.min(220, (width * height) / 6500)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.15 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
      nodes = Array.from({ length: small ? 12 : 22 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      }));
      motes = Array.from({ length: small ? 12 : 22 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 5 + 3,
        speed: Math.random() * 0.18 + 0.06,
        sway: Math.random() * 0.4 + 0.15,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.8 ? "gold" : "emerald",
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#efe8d6";
      for (const s of stars) {
        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(t / 1500 + s.phase);
        ctx.globalAlpha = s.a * tw;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const maxDist = 160;
      ctx.strokeStyle = "#d9b25f";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < maxDist) {
            ctx.globalAlpha = (1 - d / maxDist) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "#e8cc85";
      for (const n of nodes) {
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const m of motes) {
        const flicker = reduce ? 0.5 : 0.35 + 0.3 * Math.sin(t / 900 + m.phase);
        ctx.globalAlpha = flicker;
        const sprite = m.hue === "gold" ? goldGlow : emeraldGlow;
        ctx.drawImage(sprite, m.x - m.r, m.y - m.r, m.r * 2, m.r * 2);
      }
      ctx.globalAlpha = 1;
    };

    const step = (t: number) => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }
      for (const m of motes) {
        m.y -= m.speed;
        m.x += Math.sin(t / 2400 + m.phase) * m.sway * 0.3;
        if (m.y < -20) {
          m.y = height + 20;
          m.x = Math.random() * width;
        }
      }
      draw(t);
      raf = window.requestAnimationFrame(step);
    };

    const start = () => {
      if (!reduce && !raf) raf = window.requestAnimationFrame(step);
    };
    const stop = () => {
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };
    const onResize = () => {
      setup();
      draw(performance.now());
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    setup();
    draw(0);
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />;
}
