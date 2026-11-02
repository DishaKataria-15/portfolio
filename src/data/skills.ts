import type { SkillGroup } from "./types";

/**
 * Skills & Tools, grouped as on the resume. Tools appear as potion bottles;
 * methods and concepts appear as small tags under each heading.
 * - Add a tool by adding its name to a shelf; add a method to `concepts`.
 * - Bottle symbols are mapped by skill name in components/skills/skillIcons.ts.
 * - Panel placement on the page is set in components/sections/Skills.tsx.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming Languages",
    discipline: "The Foundations",
    potion: "#4f8dff",
    shelves: [{ skills: ["Python", "SQL", "C++"] }],
    concepts: ["OOP"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Visualization",
    discipline: "The Observatory",
    potion: "#f0a63c",
    shelves: [{ skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Excel"] }],
    concepts: ["EDA", "Data Cleaning", "Data Quality Assessment", "Feature Engineering", "Data Preparation", "ETL Fundamentals"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning & Deep Learning",
    discipline: "The Model Workshop",
    potion: "#a171ff",
    shelves: [{ skills: ["Scikit-learn", "Scikit-Surprise", "TensorFlow"] }],
    concepts: [
      "Regression",
      "Classification",
      "Clustering",
      "Forecasting",
      "Anomaly Detection",
      "Collaborative Filtering",
      "Neural Networks",
      "Model Evaluation",
    ],
  },
  {
    id: "genai-nlp",
    title: "Generative AI & NLP",
    discipline: "The Language Archive",
    potion: "#34d1a6",
    shelves: [{ skills: ["Hugging Face", "BERT", "RoBERTa", "NLP", "Ollama"] }],
    concepts: ["LLMs", "RAG", "Prompt Engineering", "Transformers"],
  },
  {
    id: "databases-apis",
    title: "Databases, APIs & Apps",
    discipline: "The Vault",
    potion: "#e45fbf",
    shelves: [{ skills: ["MySQL", "SQL Server", "SQLite", "REST APIs", "Streamlit"] }],
    concepts: ["DBMS", "HTTP/HTTPS"],
  },
  {
    id: "dev-tools",
    title: "Developer Tools & Platforms",
    discipline: "The Workbench",
    potion: "#d9b25f",
    shelves: [{ skills: ["Git", "GitHub", "Jupyter", "Google Colab", "Kaggle", "Streamlit Cloud"] }],
  },
];
