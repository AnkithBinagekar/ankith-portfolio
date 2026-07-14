export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "resume-analyzer",
    slug: "ai-resume-analyzer",
    title: "AI-Based Resume Analyzer & Career Skill Gap Recommender",
    summary: "An AI-powered ATS platform using NLP and ML pipelines to evaluate resumes against job descriptions.",
    description: "A flagship academic and engineering project leveraging advanced Natural Language Processing to automate resume screening and provide actionable skill gap recommendations.",
    technologies: ["Python", "FastAPI", "React", "Tailwind CSS", "PostgreSQL", "SBERT", "spaCy", "Random Forest", "OCR", "JWT"],
    highlights: [
      "Modular, cloud-ready backend architecture",
      "Explainable AI scoring pipeline using SBERT and Random Forest",
      "Layout-aware OCR document processing for unstructured PDFs",
      "Context-aware RAG pipeline for precision skill gap analysis"
    ],
    github: "https://github.com/AnkithBinagekar/resume-analyzer",
    live: "https://resume-analyzer-demo.com", // Placeholder
    featured: true,
  },
  {
    id: "livinglink",
    slug: "livinglink",
    title: "LivingLink",
    summary: "A modernized application digitizing residential operations with a secure, decoupled architecture.",
    description: "A centralized platform designed to streamline residential society operations, handling automated bookings, maintenance requests, and billing.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],
    highlights: [
      "Decoupled, containerized architectural design",
      "Designed and implemented REST APIs within a 5-person cross-functional engineering team",
      "Secure JWT-based RBAC (Role-Based Access Control) authentication",
      "Scalable relational database schema for high-volume transactions"
    ],
    github: "https://github.com/AnkithBinagekar/livinglink",
    featured: false,
  },
  {
    id: "multi-agent-research",
    slug: "multi-agent-research",
    title: "Multi-Agent Research Assistant",
    summary: "A Python backend coordinating multi-step research workflows using autonomous agents.",
    description: "An advanced agentic orchestration system capable of executing complex research tasks while maintaining context across multiple reasoning steps.",
    technologies: ["CrewAI", "LangGraph", "FastAPI", "Python", "LLMs"],
    highlights: [
      "Multi-agent orchestration with cyclic state management",
      "Integration of localized LLM inference for privacy-first processing",
      "Context-preserving memory architecture across autonomous agents",
      "Asynchronous backend deployment optimized for long-running inference tasks"
    ],
    github: "https://github.com/AnkithBinagekar/multi-agent",
    featured: false,
  }
];