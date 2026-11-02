import type { Accent } from "../../data/types";

/** Literal class names per accent so Tailwind can see them at build time. */
export const accentStyles: Record<
  Accent,
  { text: string; softBg: string; border: string; hoverBorder: string; dot: string; stroke: string; glow: string }
> = {
  gold: {
    text: "text-gold-300",
    softBg: "bg-gold-400/10",
    border: "border-gold-400/25",
    hoverBorder: "hover:border-gold-400/50",
    dot: "bg-gold-400",
    stroke: "#d9b25f",
    glow: "rgba(217,178,95,0.18)",
  },
  emerald: {
    text: "text-emerald-300",
    softBg: "bg-emerald-400/10",
    border: "border-emerald-400/25",
    hoverBorder: "hover:border-emerald-400/50",
    dot: "bg-emerald-400",
    stroke: "#4fbf93",
    glow: "rgba(79,191,147,0.16)",
  },
  violet: {
    text: "text-violet-300",
    softBg: "bg-violet-400/10",
    border: "border-violet-400/25",
    hoverBorder: "hover:border-violet-400/50",
    dot: "bg-violet-400",
    stroke: "#a38be8",
    glow: "rgba(163,139,232,0.16)",
  },
};
