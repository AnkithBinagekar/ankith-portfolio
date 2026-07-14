export interface TechStackCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[]; // For homepage badges
  highlights: string[]; // For homepage highlights
  github?: string;
  live?: string;
  featured: boolean;
  
  // New Fields for Case Study Pages
  overview: {
    problem: string;
    audience: string;
    purpose: string;
  };
  architecture: {
    description: string;
    diagramPlaceholder: string;
  };
  detailedTechStack: TechStackCategory[];
  engineeringChallenges: string[];
  implementationHighlights: string[];
  screenshots: string[]; // Placeholder URLs
  lessonsLearned: string[];
  futureImprovements: string[];
  nextProjectSlug?: string;
}

export const projects: Project[] = [
  {
    id: "resume-analyzer",
    slug: "ai-resume-analyzer",
    title: "AI-Based Resume Analyzer",
    summary: "An AI-powered ATS platform using NLP and ML pipelines to evaluate resumes against job descriptions.",
    description: "A flagship academic and engineering project leveraging advanced Natural Language Processing to automate resume screening and provide actionable skill gap recommendations.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "SBERT", "ChromaDB", "Groq"],
    highlights: [
      "Modular, cloud-ready backend architecture",
      "Explainable AI scoring pipeline using SBERT and Random Forest",
      "Layout-aware OCR document processing for unstructured PDFs"
    ],
    github: "https://github.com/AnkithBinagekar/resume-analyzer",
    featured: true,
    
    overview: {
      problem: "Recruiters and hiring managers spend excessive time manually parsing unstructured, variably formatted resumes to identify skill matches, often leading to bias or missed talent.",
      audience: "HR professionals, technical recruiters, and job seekers looking to optimize their resumes.",
      purpose: "To build a scalable, AI-driven pipeline that automates candidate screening, extracts structural data from complex PDFs, and provides an explainable similarity score."
    },
    architecture: {
      description: "The system utilizes a React frontend communicating securely via JWT with a FastAPI backend. Uploaded PDFs are processed using PyMuPDF and Tesseract OCR. The extracted text is embedded using SBERT and stored in a ChromaDB vector database. A Groq LLM powers the RAG pipeline to generate context-aware skill gap reports. The entire system is containerized and deployed across AWS EC2 and Vercel.",
      diagramPlaceholder: "Architecture Diagram: React (Vercel) <-> FastAPI (AWS EC2) <-> ChromaDB & PostgreSQL"
    },
    detailedTechStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS", "Axios"] },
      { category: "Backend", items: ["FastAPI", "Python 3.10", "JWT Auth"] },
      { category: "Database", items: ["PostgreSQL", "ChromaDB"] },
      { category: "AI / ML", items: ["SBERT", "spaCy", "Tesseract OCR", "Groq LLM", "Random Forest"] },
      { category: "Deployment", items: ["AWS EC2", "Vercel", "Docker", "Render"] }
    ],
    engineeringChallenges: [
      "Handling highly unstructured and variably formatted PDF documents required developing a robust, layout-aware OCR pipeline.",
      "Optimizing the SBERT embedding generation to run efficiently within constrained cloud environments without spiking memory usage.",
      "Designing an explainable scoring algorithm that didn't just act as a 'black box' LLM wrapper, but utilized deterministic ML models (Random Forest) alongside vector similarity."
    ],
    implementationHighlights: [
      "Built a fault-tolerant OCR pipeline capable of falling back to layout-aware parsing when native text extraction fails.",
      "Implemented a SBERT semantic similarity engine to map abstract candidate experiences to concrete job requirements.",
      "Integrated ChromaDB for high-speed retrieval in the RAG pipeline, enabling instantaneous context injection for the Groq LLM.",
      "Secured the platform with a robust JWT authentication flow, ensuring user data and uploaded documents remain isolated."
    ],
    screenshots: [
      "/images/placeholder-1.jpg",
      "/images/placeholder-2.jpg"
    ],
    lessonsLearned: [
      "Deepened expertise in configuring RAG pipelines and vector databases for highly specific domain retrieval.",
      "Learned the critical trade-offs between processing speed and extraction accuracy when dealing with raw document formats."
    ],
    futureImprovements: [
      "Implement a fine-tuned open-source LLM (like Llama 3) to reduce dependency on third-party APIs.",
      "Add WebSocket support for real-time parsing progress updates on the frontend."
    ],
    nextProjectSlug: "medical-image-segmentation"
  },
  {
    id: "medical-image-segmentation",
    slug: "medical-image-segmentation",
    title: "Medical Image Segmentation Platform",
    summary: "A high-performance pipeline for multi-modality MRI processing and oncological analytics.",
    description: "Developed containerized backend services for inference pipelines, processing complex medical imaging data for tumor analysis.",
    technologies: ["FastAPI", "MONAI", "PyTorch", "React", "AWS EC2"],
    highlights: [
      "Processed 4-modality MRI datasets for clinical applications",
      "Migrated infrastructure from Streamlit to scalable React/FastAPI",
      "Deployed containerized inference endpoints on AWS EC2"
    ],
    github: "https://github.com/AnkithBinagekar/medical-segmentation",
    featured: false,
    
    overview: {
      problem: "Analyzing raw patient data for brain tumor growth requires immense computational power and precise data patching. Previous Streamlit-based proof-of-concepts were unstable under the load of heavy 3D MRI volumes.",
      audience: "Oncologists, radiologists, and medical researchers.",
      purpose: "To establish a scalable, stable, and highly optimized medical imaging workflow capable of executing complex inference scripts and generating registered patches."
    },
    architecture: {
      description: "The application relies on a decoupled architecture. The React frontend provides interactive visualization dashboards. The backend, built with FastAPI, orchestrates the PyTorch and MONAI SegResNet inference models. Data is ingested, patched, and processed within Docker containers deployed on AWS EC2, with an AWS API Gateway managing traffic.",
      diagramPlaceholder: "Architecture Diagram: React Dashboard <-> AWS API Gateway <-> Dockerized FastAPI (AWS EC2) <-> PyTorch/MONAI Model"
    },
    detailedTechStack: [
      { category: "Frontend", items: ["React", "Interactive Dashboards"] },
      { category: "Backend", items: ["FastAPI", "Python"] },
      { category: "AI / ML", items: ["PyTorch", "MONAI SegResNet", "Image Processing"] },
      { category: "Cloud & DevOps", items: ["AWS EC2", "AWS API Gateway", "Elastic IP", "Docker"] }
    ],
    engineeringChallenges: [
      "Managing memory consumption when processing massive 4-modality MRI datasets during the inference phase.",
      "Migrating from a local ngrok tunnel to a production-ready AWS API Gateway and Elastic IP infrastructure without downtime.",
      "Filtering over 150+ generated medical image slices down to the 60 most clinically relevant outputs to prevent dashboard lag."
    ],
    implementationHighlights: [
      "Engineered automated data patching scripts to handle raw patient data, ensuring registered patches were perfectly aligned for model ingestion.",
      "Containerized the entire PyTorch inference pipeline using Docker, guaranteeing environment consistency across local and AWS EC2 deployments.",
      "Built 10+ interactive dashboards for patient analytics, focusing on high-performance React visualization of MRI slices."
    ],
    screenshots: [
      "/images/placeholder-3.jpg",
      "/images/placeholder-4.jpg"
    ],
    lessonsLearned: [
      "Gained significant experience in handling heavy computational workloads in cloud environments.",
      "Learned how to effectively bridge the gap between pure data science models and production-ready web interfaces."
    ],
    futureImprovements: [
      "Integrate WebGL for native 3D volume rendering directly in the browser.",
      "Implement a queueing system (like Celery/Redis) for asynchronous inference job processing."
    ],
    nextProjectSlug: "livinglink"
  },
  {
    id: "livinglink",
    slug: "livinglink",
    title: "LivingLink",
    summary: "A modernized MERN application digitizing residential operations with a secure, decoupled architecture.",
    description: "A centralized platform designed to streamline residential society operations, handling automated bookings, maintenance requests, and billing.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker", "MongoDB Atlas"],
    highlights: [
      "Decoupled, containerized architectural design",
      "Secure JWT-based RBAC authentication",
      "Scalable database schema for high-volume transactions"
    ],
    github: "https://github.com/AnkithBinagekar/livinglink",
    featured: false,
    
    overview: {
      problem: "Residential societies rely on fragmented, paper-based, or outdated software systems for operations, leading to inefficiencies in billing, maintenance tracking, and facility booking.",
      audience: "Society administrators, residents, and maintenance staff.",
      purpose: "To digitize and centralize residential operations into a single, cohesive, and secure enterprise application."
    },
    architecture: {
      description: "A decoupled MERN stack application. The React frontend is deployed on Vercel. The Node.js/Express backend, exposing RESTful APIs, runs on Render. Data is securely managed and scaled using MongoDB Atlas. Authentication is handled statelessly via JWT, implementing strict Role-Based Access Control (RBAC).",
      diagramPlaceholder: "Architecture Diagram: React (Vercel) <-> REST APIs (Render) <-> MongoDB Atlas"
    },
    detailedTechStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS", "State Management"] },
      { category: "Backend", items: ["Node.js", "Express.js", "JWT Auth"] },
      { category: "Database", items: ["MongoDB Atlas", "Mongoose"] },
      { category: "Deployment", items: ["Vercel", "Render"] }
    ],
    engineeringChallenges: [
      "Designing a robust RBAC system that securely isolated data between Admins, Staff, and standard Residents.",
      "Collaborating effectively within a 5-person cross-functional engineering team, requiring strict Git branching strategies and API contract definitions.",
      "Ensuring the REST APIs were optimized to handle concurrent requests for facility bookings without race conditions."
    ],
    implementationHighlights: [
      "Designed a decoupled MERN architecture prioritizing separation of concerns and independent scalability.",
      "Implemented a stateless JWT authentication flow to secure sensitive user data and transaction records.",
      "Engineered comprehensive REST APIs to handle the complete lifecycle of bookings, payments, and maintenance tickets.",
      "Designed a highly interactive dashboard architecture to give administrators a bird's-eye view of society operations."
    ],
    screenshots: [
      "/images/placeholder-5.jpg"
    ],
    lessonsLearned: [
      "Mastered the complexities of managing state and permissions in a multi-tenant enterprise application.",
      "Refined collaborative engineering skills, focusing on clean code reviews and API documentation."
    ],
    futureImprovements: [
      "Migrate the database to PostgreSQL to better enforce relational integrity for financial transactions.",
      "Add automated email/SMS notifications for maintenance updates."
    ],
    nextProjectSlug: "ai-resume-analyzer"
  }
];