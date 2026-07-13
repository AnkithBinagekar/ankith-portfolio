export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  keyLearnings: string;
  teamContext?: string;
}

export const projects: Project[] = [
  {
    slug: "ai-resume-analyzer",
    title: "AI-Based Resume Analyzer",
    shortDescription: "An AI-powered ATS platform using NLP and ML pipelines to evaluate resumes against job descriptions.",
    techStack: ["React", "FastAPI", "Python", "SBERT", "ChromaDB", "Groq LLMs", "AWS EC2"],
    githubUrl: "https://github.com/AnkithBinagekar/resume-analyzer",
    overview: "Built an AI-powered ATS platform using NLP and ML pipelines to evaluate and rank resumes against job descriptions.",
    problem: "Recruiters spend excessive time manually parsing unstructured resumes to find relevant candidate skills.",
    solution: "Implemented layout-aware PDF parsing and OCR pipelines (PyMuPDF, Tesseract, Groq LLMs) to extract insights from scanned documents.",
    architecture: "Integrated RAG (ChromaDB, Groq) and deployed the JWT-secured platform across AWS EC2, Render, and Vercel.",
    challenges: "Handling highly unstructured and variably formatted PDF documents required a robust, layout-aware OCR pipeline.",
    keyLearnings: "Deepened expertise in configuring RAG pipelines and vector databases for highly specific domain retrieval."
  },
  {
    slug: "multi-agent-research",
    title: "Multi-Agent Research Assistant",
    shortDescription: "A Python backend coordinating multi-step research workflows using CrewAI and LangGraph.",
    techStack: ["Python", "CrewAI", "LangGraph", "Ollama"],
    githubUrl: "https://github.com/AnkithBinagekar/multi-agent",
    overview: "Developed a CrewAI and LangGraph Python backend to coordinate multi-step research workflows.",
    problem: "Automating complex, multi-step research tasks that require context retention across different queries.",
    solution: "Implemented local LLM inference using Ollama for context-aware research generation coordinated by autonomous agents.",
    architecture: "A localized Python backend leveraging CrewAI for agent orchestration and LangGraph for cyclic state management.",
    challenges: "Managing state and memory effectively across multiple agent interactions without losing initial user context.",
    keyLearnings: "Mastered local LLM deployment and modern agentic orchestration frameworks."
  },
  {
    slug: "livinglink",
    title: "LivingLink",
    shortDescription: "A MERN application digitizing residential operations with decoupled architecture.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    githubUrl: "https://github.com/AnkithBinagekar/livinglink",
    overview: "Developed a MERN application digitizing residential operations, implementing REST APIs for bookings, payments, and maintenance.",
    problem: "Residential societies rely on fragmented, paper-based systems for operations and billing.",
    solution: "Designed a centralized portal with JWT-based RBAC, handling bookings, payments, and maintenance requests.",
    architecture: "A decoupled MERN architecture deployed using Vercel (Frontend), Render (Backend), and MongoDB Atlas (Database).",
    challenges: "Ensuring secure, role-based access control across different user types (Admin, Resident, Staff).",
    keyLearnings: "Gained comprehensive experience in building and deploying a secure, full-stack enterprise application.",
    teamContext: "Collaborated in a cross-functional engineering team alongside Salika Shaikh, Vaishali Naik, Utkarsha Mayekar, and Navisha Shetkar to design and implement the system architecture."
  }
];