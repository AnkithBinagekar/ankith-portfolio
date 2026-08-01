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
  technologies: string[];
  highlights: string[];
  featured: boolean;
  github?: string;
  live?: string;

  thumbnail: string;

  heroImagePlaceholder: string;
  architectureDiagramPlaceholder: string;
  documentation: {
    problem: string;
    solution: string;
    technicalDecisions: string[];
    challenges: string[];
    tradeOffs: string[];
    results: string[];
  };
  detailedTechStack: TechStackCategory[];
  nextProjectSlug?: string;
}

export const projects: Project[] = [
  {
    id: "resume-analyzer",
    slug: "ai-resume-analyzer",
    title: "AI-Based Resume Analyzer",
    summary: "An AI-powered ATS platform using NLP and ML pipelines.",
    description: "A specialized RAG pipeline leveraging advanced Natural Language Processing to automate resume screening and provide actionable skill gap recommendations.",
    technologies: ["FastAPI", "React", "SBERT", "ChromaDB", "Groq"],
    highlights: [
      "Modular, cloud-ready backend architecture",
      "Explainable AI scoring pipeline using SBERT and Random Forest",
      "Layout-aware OCR document processing for unstructured PDFs"
    ],
   featured: true,
github: "https://github.com/AnkithBinagekar/resume-analyzer",

thumbnail: "/projects/resume-analyzer.png",

heroImagePlaceholder: "Dashboard UI: Extracted candidate metrics and skill gap scoring.",
    architectureDiagramPlaceholder: "Mermaid Diagram: PDF Ingestion -> OCR -> SBERT -> ChromaDB -> Groq LLM",
    documentation: {
      problem: "Standard regex-based ATS platforms fail to capture semantic meaning and struggle with non-standard or image-based PDF layouts, leading to high false-negative rates for qualified candidates.",
      solution: "A scalable pipeline that uses layout-aware parsing and OCR for ingestion, vectorizes experience using SBERT, and generates explainable skill gap reports via a Retrieval-Augmented Generation (RAG) architecture.",
      technicalDecisions: [
        "Implemented a dual-pass extraction system, falling back to Tesseract OCR only when PyMuPDF detects low-confidence native text.",
        "Selected local ChromaDB over managed cloud vector databases to minimize network latency and reduce initial infrastructure costs.",
        "Integrated a Random Forest classifier alongside vector similarity to prevent the LLM from acting as a pure 'black box'."
      ],
      challenges: [
        "Handling the extreme variability of PDF encoding and layout structures without dropping critical data points.",
        "Constraining the Groq LLM context window effectively via RAG to prevent hallucinated candidate skills."
      ],
      tradeOffs: [
        "Latency vs. Extraction Accuracy: Running OCR on multi-page scanned documents significantly increased processing time, but was necessary to ensure zero data loss on image-heavy PDFs."
      ],
      results: [
        "Established a highly accurate, explainable scoring pipeline.",
        "Successfully containerized and deployed the JWT-secured platform across AWS EC2 and Vercel."
      ]
    },
    detailedTechStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS"] },
      { category: "Backend", items: ["FastAPI", "Python 3.10", "JWT"] },
      { category: "AI / ML", items: ["SBERT", "Tesseract OCR", "Groq LLMs", "Random Forest"] },
      { category: "Infrastructure", items: ["AWS EC2", "Vercel", "Docker"] }
    ],
    nextProjectSlug: "medical-image-segmentation"
  },
  {
    id: "medical-image-segmentation",
    slug: "medical-image-segmentation",
    title: "Medical Image Segmentation Platform",
    summary: "A high-performance pipeline for multi-modality MRI processing.",
    description: "Containerized backend services for inference pipelines, processing complex medical imaging data for tumor analysis.",
    technologies: ["FastAPI", "MONAI", "PyTorch", "AWS EC2"],
    highlights: [
      "Processed 4-modality MRI datasets for clinical applications",
      "Migrated infrastructure from Streamlit to scalable React/FastAPI",
      "Deployed containerized inference endpoints on AWS EC2"
    ],
    featured: false,
github: "https://github.com/AnkithBinagekar/medical-segmentation",

thumbnail: "/projects/medical-segmentation.jpeg",

heroImagePlaceholder: "Technical Visual: Raw MRI slice vs. SegResNet segmented output.",
    architectureDiagramPlaceholder: "AWS Architecture: React -> API Gateway -> Dockerized FastAPI -> PyTorch Inference",
    documentation: {
      problem: "Initial medical imaging models were built as brittle Streamlit proof-of-concepts, which suffered from severe memory bloat and UI instability when processing heavy 3D MRI volumes.",
      solution: "A decoupled, containerized microservices architecture utilizing a React SPA for interactive visualization and an AWS EC2-hosted FastAPI service for PyTorch inference orchestration.",
      technicalDecisions: [
        "Engineered automated data patching scripts to handle raw patient data, ensuring registered patches were perfectly aligned before model ingestion.",
        "Migrated the network layer from temporary ngrok tunnels to a production-ready AWS API Gateway with an Elastic IP."
      ],
      challenges: [
        "Managing memory spikes and avoiding Out-Of-Memory (OOM) errors during the PyTorch inference phase on massive 4-modality datasets.",
        "Handling the serialization and efficient transmission of heavy medical image tensors to a web client."
      ],
      tradeOffs: [
        "Data Fidelity vs. Dashboard Performance: Implemented backend filtering to reduce 150+ generated MRI slices down to 60 clinically relevant outputs. While data was discarded, it ensured the React dashboards remained highly responsive."
      ],
      results: [
        "Deployed stable, containerized AWS inference endpoints.",
        "Built 10+ interactive dashboards for seamless patient analytics."
      ]
    },
    detailedTechStack: [
      { category: "Frontend", items: ["React", "Interactive Dashboards"] },
      { category: "Backend", items: ["FastAPI", "Python"] },
      { category: "AI / ML", items: ["PyTorch", "MONAI SegResNet"] },
      { category: "Cloud", items: ["AWS EC2", "AWS API Gateway", "Docker"] }
    ],
    nextProjectSlug: "livinglink"
  },
  {
    id: "livinglink",
    slug: "livinglink",
    title: "LivingLink",
    summary: "A decoupled MERN application digitizing residential operations.",
    description: "A centralized platform designed to streamline residential society operations, handling automated bookings, maintenance requests, and billing.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    highlights: [
      "Decoupled, containerized architectural design",
      "Secure JWT-based RBAC authentication",
      "Scalable database schema for high-volume transactions"
    ],
    featured: false,
github: "https://github.com/AnkithBinagekar/livinglink",

thumbnail: "/projects/livinglink.png",

heroImagePlaceholder: "Admin Dashboard: Centralized maintenance and booking oversight.",
    architectureDiagramPlaceholder: "Deployment Diagram: Vercel (Frontend) -> Render (REST APIs) -> MongoDB Atlas",
    documentation: {
      problem: "Residential societies rely on fragmented communication channels and paper-based ledgers, resulting in operational inefficiencies and a lack of transparency for residents.",
      solution: "A centralized, cross-platform enterprise application featuring a decoupled architecture, RESTful APIs, and strict Role-Based Access Control (RBAC).",
      technicalDecisions: [
        "Designed stateless JWT authentication middleware to securely isolate administrative functions from standard resident actions.",
        "Co-engineered the platform within a 5-person cross-functional team, enforcing strict Git branching and API contract definitions."
      ],
      challenges: [
        "Preventing race conditions in the facility booking system during concurrent requests.",
        "Designing a scalable NoSQL schema that could simulate relational integrity for financial and booking records."
      ],
      tradeOffs: [
        "NoSQL vs. SQL: Opted for MongoDB for rapid schema iteration during development. This required writing complex application-layer logic to enforce data relationships (e.g., cascading deletes) that PostgreSQL would handle natively."
      ],
      results: [
        "Successfully deployed a secure, full-stack enterprise application.",
        "Digitized the complete lifecycle of bookings, payments, and maintenance tickets."
      ]
    },
    detailedTechStack: [
      { category: "Frontend", items: ["React", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js", "JWT"] },
      { category: "Database", items: ["MongoDB Atlas", "Mongoose"] },
      { category: "Infrastructure", items: ["Vercel", "Render"] }
    ]
  }
];
