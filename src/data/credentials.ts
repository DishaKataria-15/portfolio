import type { Achievement, Certification } from "./types";

/**
 * Certifications. Add `credentialUrl` only when you have a real verification link,
 * and `image` only for a real certificate image placed in /public/certificates.
 */
export const certifications: Certification[] = [
  {
    id: "nptel-dbms",
    title: "Database Management Systems (DBMS)",
    issuer: "NPTEL",
    distinction: "Elite + Silver · Top 5% of learners nationally",
    status: "completed",
    icon: "database",
  },
  {
    id: "python",
    title: "Python Certification Course",
    issuer: "Intellipaat",
    status: "completed",
    icon: "code",
  },
  {
    id: "sql",
    title: "Microsoft SQL Certification Training",
    issuer: "Intellipaat",
    status: "completed",
    icon: "database",
  },
  {
    id: "ai-ds",
    title: "AI & Data Science Training",
    issuer: "Intellipaat & DRISHTI CPS, The TIH of IIT Indore",
    status: "ongoing",
    icon: "brain",
  },
];

export const achievements: Achievement[] = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    description: "Qualified for the internal round of Smart India Hackathon (SIH) 2025.",
    icon: "trophy",
    accent: "gold",
  },
  {
    id: "nptel",
    title: "NPTEL Database Management Systems",
    description: "Ranked among the top 5% of learners nationally; earned Elite+Silver recognition.",
    icon: "medal",
    accent: "emerald",
    relatedHref: "#certifications",
    relatedLabel: "See in Certifications",
  },
  {
    id: "uipath",
    title: "UiPath Community AITR",
    description:
      "Selected as Core Team Domain Trainer and delivered training sessions on RPA and automation fundamentals to student members.",
    icon: "users",
    accent: "violet",
  },
];
