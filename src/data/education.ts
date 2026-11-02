import type { JourneyEntry } from "./types";

/** Timeline for the Journey section, newest first (left to right on desktop). */
export const journey: JourneyEntry[] = [
  {
    id: "btech",
    period: "2023 – Present",
    icon: "graduation",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Acropolis Institute of Technology & Research, Indore",
    facts: [
      { label: "CGPA", value: "8.56" },
      { label: "Expected", value: "June 2027" },
    ],
    current: true,
  },
  {
    id: "class-12",
    period: "2023",
    icon: "book",
    title: "Class XII",
    institution: "The Millennium School, Indore",
    facts: [{ label: "Score", value: "84.4%" }],
  },
  {
    id: "class-10",
    period: "2021",
    icon: "school",
    title: "Class X",
    institution: "Sri Sathya Sai Vidya Vihar, Indore",
    facts: [{ label: "Score", value: "95%" }],
  },
];
