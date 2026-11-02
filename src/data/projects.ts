import type { Project } from "./types";

/**
 * Projects shown as flip cards in "Featured Projects".
 * To add a project, copy one object below and edit it.
 *
 * - githubUrl: the real repository link. Without it the card shows "Repository link coming soon".
 * - dates: leave undefined if not confirmed (nothing is shown rather than a guess).
 * - evaluation.rows[].values: use null for anything not recorded. Never guess.
 *
 * Nexora figures come from its README and docs/TESTING.md.
 * Fraud-detection figures below are copied from the recorded outputs of
 * credit_card_fraud_detection.ipynb in the project repository.
 */
export const projects: Project[] = [
  {
    id: "nexora",
    title: "Nexora: Data-to-Model Platform",
    category: "Data Engineering · ML",
    dates: "October – November 2026",
    status: "Live demo",
    accent: "violet",
    visual: "nexora",
    summary:
      "A Streamlit application that takes a spreadsheet, database or API from upload to a trained, evaluated model in one guided flow: validate, clean with domain-aware rules, explore, then train and compare models, detect anomalies or forecast.",
    frontTags: ["Python", "Streamlit", "Scikit-learn"],
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "statsmodels", "Plotly", "SQLite", "Pytest"],

    objective:
      "Make the full path from messy data to a trustworthy model usable in one place, while guarding against the common mistakes: silent data changes, data leakage and over-optimistic test scores.",
    dataset: "CSV / Excel upload, read-only SQL databases and web APIs · synthetic sample data with recorded ground truth",
    approach: [
      "Data quality: rule engine with 18 domain profiles (from my DataSentinel project), profiling, and a cleaning plan where every step has a plain-language reason; ambiguous fixes wait for the user.",
      "ML Studio: regression, classification and clustering with 34 registered models, leakage and target checks, class-imbalance handling, cross-validation and bounded tuning.",
      "Anomaly detection (Isolation Forest, LOF, One-Class SVM and more) and time-series forecasting backtested against naive baselines.",
    ],
    metrics: [
      { label: "Tests passing", value: "753", note: "test report, 28 Oct 2026" },
      { label: "Models", value: "34", note: "regression · classification · clustering" },
      { label: "Domain profiles", value: "18" },
    ],
    implementation: [
      "Every preprocessing, resampling and selection step is fitted on training rows only; the test set is used once, and tests prove it.",
      "Source data is never modified; each preparation run is reconciled and logged, and experiments are saved with their settings and seed.",
      "Deployed on Streamlit Community Cloud in a public mode where each visitor gets a private workspace deleted within 24 hours.",
    ],
    githubUrl: "https://github.com/DishaKataria-15/nexora",
    liveUrl: "https://nexora-dk.streamlit.app",
  },
  {
    id: "verity",
    title: "VERITY: Evidence-First AI Answer Engine",
    category: "Generative AI · LLMs",
    dates: "September 2026 – Present",
    status: "In development",
    accent: "emerald",
    visual: "verity",
    summary:
      "An AI answer engine that answers from live web sources, splits its answer into single-fact claims and checks every claim against every source, marking each as supported, contradicted or disputed.",
    frontTags: ["Python", "LLM", "Pytest"],
    technologies: ["Python", "Ollama (Qwen3 1.7B)", "Tavily Search API", "BeautifulSoup", "Pytest"],

    objective:
      "Give answers people can check: every factual claim is tied to the evidence that supports or contradicts it, instead of a single unverified response.",
    approach: [
      "Retrieves web sources with the Tavily search API and extracts readable page text with BeautifulSoup.",
      "A local Qwen3 (1.7B) model, run through Ollama, answers using only the retrieved evidence.",
      "The answer is split into single-fact claims; each claim is checked against each source as Supported, Weakly supported, Contradicted or Insufficient evidence.",
      "When sources disagree on a claim, it is marked Disputed.",
    ],
    metrics: [],
    implementation: [
      "The model must cite an evidence passage by number; the passage shown is taken from the source itself, never written by the model.",
      "Deterministic safeguard: a Supported verdict needs at least 60% of the claim's key terms in the cited passage, otherwise it is downgraded to Weakly supported.",
      "Unit tests for each pipeline stage with Pytest.",
    ],
    githubUrl: "https://github.com/DishaKataria-15/VERITY",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection using ML",
    category: "Machine Learning",
    dates: "January – February 2026",
    accent: "gold",
    visual: "fraud",
    summary:
      "Compared four classifiers on 284K+ transactions where only 0.17% are fraud, using SMOTE on the training data. Random Forest gave the best balance: 0.84 F1 on the fraud class and 99.94% overall accuracy on held-out data.",
    frontTags: ["Python", "Scikit-learn", "SMOTE"],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "SMOTE", "Matplotlib", "Seaborn"],

    objective:
      "Identify fraudulent card transactions despite severe class imbalance, and find which of four classification models performs best.",
    dataset: "284,807 transactions · 492 fraud (0.17%)",
    approach: [
      "70/30 train–test split; SMOTE applied to the training set only (199,028 genuine and 199,028 fraud samples).",
      "Trained and compared Logistic Regression, Decision Tree, Random Forest and SVM (RBF kernel).",
    ],
    metrics: [
      { label: "F1-score", value: "0.84", note: "Random Forest · fraud class" },
      { label: "Precision / Recall", value: "0.90 / 0.79", note: "Random Forest · fraud class" },
      { label: "Accuracy", value: "99.94%", note: "Random Forest · overall" },
    ],
    evaluation: {
      method:
        "Held-out test set of 85,443 transactions (156 fraud). Precision, recall and F1 are for the fraud class; accuracy is overall.",
      columns: ["Accuracy", "Precision", "Recall", "F1-score"],
      rows: [
        { model: "Logistic Regression", values: ["97.67%", "0.06", "0.85", "0.12"] },
        { model: "Decision Tree", values: ["99.76%", "0.42", "0.74", "0.53"] },
        { model: "Random Forest", values: ["99.94%", "0.90", "0.79", "0.84"], highlight: true },
        { model: "SVM (RBF)", values: ["98.92%", "0.13", "0.84", "0.22"] },
      ],
      note: "Logistic Regression caught the most fraud (recall 0.85) but flagged many genuine transactions (precision 0.06). Random Forest kept recall high with far fewer false alarms.",
    },
    implementation: [
      "Pandas and NumPy for cleaning and inspection; amount standardised with StandardScaler.",
      "Scikit-learn models with imbalanced-learn SMOTE; Matplotlib and Seaborn for class-balance and comparison plots.",
    ],
    githubUrl: "https://github.com/DishaKataria-15/credit-card-fraud-detection",
  },
  {
    id: "netflix-recommender",
    title: "Netflix Recommendation System",
    category: "Recommender Systems",
    dates: "March – April 2026",
    accent: "emerald",
    visual: "recommender",
    summary:
      "Built a movie recommendation engine using SVD-based collaborative filtering on the Netflix Prize dataset (24M+ ratings from 470K+ customers), reaching an RMSE of about 1.05 and generating personalised top-10 recommendations.",
    frontTags: ["Python", "SVD", "Surprise"],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Surprise"],

    objective: "Recommend movies each customer is likely to enjoy from a very large, sparse ratings dataset.",
    dataset: "Netflix Prize · 24M+ ratings · 470K+ customers · 4,499 movies",
    approach: [
      "Parsed the raw Netflix Prize file into a structured dataset and analysed rating distributions to understand user behaviour.",
      "Applied 60th-percentile filtering, keeping roughly the top 40% of most-rated movies and most-active customers, to cut sparsity and noise.",
      "SVD-based collaborative filtering with the Scikit-Surprise library.",
    ],
    metrics: [
      { label: "RMSE", value: "≈1.05", note: "3-fold cross-validation" },
      { label: "Output", value: "Top-10", note: "personalised per user" },
    ],
    evaluation: {
      method: "3-fold cross-validation",
      columns: ["RMSE"],
      rows: [{ model: "SVD (collaborative filtering)", values: ["≈1.05"], highlight: true }],
    },
    implementation: [
      "Predicted and ranked ratings for movies each customer had not yet rated to build their top-10 list.",
      "Filtering reduced noise and improved training efficiency.",
    ],
    githubUrl: "https://github.com/DishaKataria-15/Netflix-Recommendation-System",
  },
  {
    id: "fake-news",
    title: "Fake News Detection and Tracing Platform",
    category: "NLP / Deep Learning",
    dates: "February – June 2026",
    accent: "violet",
    visual: "misinformation",
    collaborative: true,
    summary:
      "Contributed to a team-built misinformation detection platform using BERT and RoBERTa. I supported data analysis, model evaluation documentation and real-time spread monitoring.",
    frontTags: ["BERT", "RoBERTa", "NLP"],
    technologies: ["Python", "Machine Learning", "BERT", "RoBERTa", "NLP"],

    objective:
      "Distinguish authentic content from fake news and help understand how flagged misinformation spreads across networks.",
    approach: [
      "Text classification with BERT- and RoBERTa-based models.",
      "Real-time analysis mechanisms for monitoring how flagged items spread.",
    ],
    metrics: [],
    evaluation: {
      method: "Model evaluation workflow documented by the team to choose an architecture for deployment.",
      columns: ["Result"],
      rows: [
        { model: "BERT-based classifier", values: [null] },
        { model: "RoBERTa-based classifier", values: [null] },
      ],
      note: "Evaluation figures are not published on this site.",
    },
    implementation: [
      "My contribution: data analysis and documentation of the model evaluation workflow.",
      "Collaborated on the real-time spread analysis mechanisms.",
    ],
    githubUrl: "https://github.com/DishaKataria-15/fake-news-detection-platform",
  },
  {
    id: "covid-forecasting",
    title: "COVID-19 Data Analysis & Forecasting",
    category: "Data Analysis · Time Series",
    accent: "gold",
    visual: "forecast",
    summary:
      "Explored 49K+ daily country and province records of the pandemic's first six months, compared the US, China and India, and forecast the next 7 days of confirmed, recovered, active and death counts with Prophet.",
    frontTags: ["Pandas", "Seaborn", "Prophet"],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Prophet", "Plotly"],

    objective:
      "Understand how confirmed, recovered, active and death counts evolved worldwide, and project short-term trends.",
    dataset: "49,068 records · 188 days (22 Jan – 27 Jul 2020) · 10 columns",
    approach: [
      "Cleaned and aggregated daily records globally and by country.",
      "Compared confirmed, recovered, active and death trends for the US, China and India.",
      "Fitted Prophet time-series models to forecast 7 days ahead for each of the four counts.",
    ],
    metrics: [
      { label: "Forecast horizon", value: "7 days" },
      { label: "Series forecast", value: "4", note: "confirmed · recovered · active · deaths" },
    ],
    implementation: [
      "Trend and country-comparison charts with Matplotlib and Seaborn; an interactive Plotly world map of active cases.",
      "Forecasts include Prophet's uncertainty intervals; they have not yet been back-tested against held-out dates.",
    ],
    githubUrl: "https://github.com/DishaKataria-15/covid19-analysis-and-forecasting",
  },
];
