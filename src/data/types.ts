/**
 * Shared content types. Every section of the site renders from the arrays in
 * this folder, so adding an entry is a matter of adding one object.
 */

export type Accent = "gold" | "emerald" | "violet";

export interface SocialLink {
  id: "github" | "linkedin" | "kaggle";
  label: string;
  href: string;
  handle: string;
}

export interface Metric {
  label: string;
  value: string;
  /** Optional clarifying note shown under the metric (e.g. "reported result"). */
  note?: string;
}

/** Built-in abstract visual for a project card front. Use "none" if you add an image instead. */
export type ProjectVisual = "fraud" | "recommender" | "misinformation" | "verity" | "forecast" | "nexora" | "none";

/**
 * A model-comparison table. Use `null` for any value that has not been recorded:
 * it renders as "Not recorded" rather than being guessed.
 */
export interface Evaluation {
  /** How the figures were obtained, e.g. "3-fold cross-validation". */
  method: string;
  /** Metric names, e.g. ["Accuracy", "Precision", "Recall", "F1-score"]. */
  columns: string[];
  rows: {
    model: string;
    /** One value per column, in the same order. null = not recorded. */
    values: (string | null)[];
    /** Marks the model the headline result comes from. */
    highlight?: boolean;
  }[];
  /** Optional caveat shown under the table. */
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  /** Short label shown above the title, e.g. "Machine Learning". */
  category: string;
  /** Leave undefined if not confirmed; nothing is shown instead of a guess. */
  dates?: string;
  /** Optional status pill, e.g. "In development". */
  status?: string;
  accent: Accent;
  visual: ProjectVisual;
  /** One or two sentences for the card front. */
  summary: string;
  /** A few tags for the card front (full stack is listed on the back). */
  frontTags: string[];
  technologies: string[];

  /* ---- Card back ---- */
  objective: string;
  /** Dataset and scale, when documented. */
  dataset?: string;
  /** Approach and algorithms, short points. */
  approach: string[];
  /** Headline results shown as chips. */
  metrics: Metric[];
  /** Per-model comparison table. */
  evaluation?: Evaluation;
  /** Key implementation details, short points. */
  implementation: string[];
  /** Mark collaborative work so it is labelled clearly. */
  collaborative?: boolean;

  /** Leave undefined until you have the real link; the card shows "Repository link coming soon". */
  githubUrl?: string;
  /** Optional live demo link. No button appears without it. */
  liveUrl?: string;
  /** Optional real screenshot placed in /public/projects; replaces the built-in visual. */
  image?: { src: string; alt: string };
}

/** One shelf of potion bottles inside a skill category. */
export interface SkillShelf {
  /** Optional small label for a sub-group, e.g. "Developer Tools". */
  label?: string;
  skills: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  /** Themed subtitle, kept short. */
  discipline: string;
  /** Accent colour for this category's potions and glow (any CSS colour). */
  potion: string;
  /** Skills arranged as one or more labelled shelves. */
  shelves: SkillShelf[];
  /** Methods and concepts practised in this discipline, shown as small tags (not bottles). */
  concepts?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  distinction?: string;
  status: "completed" | "ongoing";
  icon: "code" | "database" | "brain";
  /** Add only a real verification URL. A "View credential" link appears when set. */
  credentialUrl?: string;
  /** Optional real certificate image placed in /public/certificates. */
  image?: { src: string; alt: string };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: "trophy" | "medal" | "users";
  accent: Accent;
  /** Optional in-page anchor that relates this item to another section. */
  relatedHref?: string;
  relatedLabel?: string;
}

export interface JourneyEntry {
  id: string;
  period: string;
  /** Icon shown above the timeline dot. */
  icon: "school" | "book" | "graduation" | "trophy";
  title: string;
  institution: string;
  facts: { label: string; value: string }[];
  current?: boolean;
}

export interface EducationEntry {
  id: string;
  qualification: string;
  institution: string;
  year: string;
  score: string;
}
