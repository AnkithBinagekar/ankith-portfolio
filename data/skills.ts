export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "SQL", "C++", "HTML/CSS"]
  },
  {
    title: "AI / ML",
    skills: ["NLP (TF-IDF, SBERT)", "CrewAI", "LangGraph", "RAG Pipelines", "ChromaDB", "OCR", "Generative AI APIs"]
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "PHP"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Responsive UI", "State Management"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, API Gateway)", "Docker", "Vercel", "Render", "Git", "tmux", "Postman"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    title: "Core CS",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
  }
];