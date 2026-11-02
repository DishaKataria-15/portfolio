import type { SocialLink } from "./types";

export const profile = {
  name: "Disha Kataria",
  /** Hero copy */
  welcome: "Welcome to my",
  heroTitle: ["World of", "Data Wizardry"],
  tagline: "Turning data into insights, and ideas into impact.",
  heroIntro:
    "a final-year CSE student exploring the magic of AI, Data Science and Data Engineering to build real-world solutions.",
  initials: "DK",
  eyebrow: "Computer Science • AI & Data",
  headline: "AI/ML • Data Science • Data Engineering",
  intro:
    "I build data-driven solutions using machine learning, analytical methods and programming, from cleaning and exploring datasets to training and evaluating models.",
  status: "Open to Internships & Entry-Level Opportunities",
  email: "dishakataria1505@gmail.com",
  institution: "Acropolis Institute of Technology & Research, Indore",
};

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/DishaKataria-15",
    handle: "DishaKataria-15",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/dishakataria15",
    handle: "dishakataria15",
  },
  {
    id: "kaggle",
    label: "Kaggle",
    href: "https://www.kaggle.com/dishakataria1510",
    handle: "dishakataria1510",
  },
];

export const about = {
  subtitle: "More than just a student…",
  lead: "A curious mind, a problem solver and an aspiring AI & Data Engineer. I love exploring how data, algorithms and technology can create meaningful impact in the real world.",
  traits: ["Analytical Thinker", "Continuous Learner", "Problem Solver", "Team Player"],
  quote: "Like magic, data reveals what's invisible. And I love discovering those hidden stories.",
  /** Book spines in the owl illustration, top to bottom. */
  bookLabels: ["Curiosity", "Data", "Algorithms", "Real-world Impact"],
  paragraphs: [
    "I'm a Computer Science and Engineering student at Acropolis Institute of Technology & Research, Indore, interested in the intersection of machine learning, data science and data engineering.",
    "I enjoy exploring datasets, building predictive models and turning technical ideas into practical solutions. Through projects involving fraud detection, recommendation systems and misinformation analysis, I've been developing my skills in data processing, model evaluation and applied machine learning.",
  ],
  interests: [
    {
      title: "Applied Machine Learning",
      description: "Training, comparing and evaluating models on real, messy datasets.",
      accent: "gold" as const,
    },
    {
      title: "Data Analysis and Insights",
      description: "Exploring data to find patterns and explain what the numbers mean.",
      accent: "emerald" as const,
    },
    {
      title: "Data Systems and Engineering",
      description: "Preparing and shaping data so models and analysis can rely on it.",
      accent: "violet" as const,
    },
  ],
};

/** Navigation order. Each id must match a section id on the page. */
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;
