export interface Experience {
  id: string;
  role: string;
  company: string;
  logo?: string;
  location: string;
  dateRange: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "mevreon",
    role: "AI & Full-Stack Developer Intern",
    company: "Mevreon.ai",
    logo: "/companies/MevreonLogo.webp",
    location: "Remote (Part-Time)",
    dateRange: "Jul 2025 - Present",
    description: [
      "Migrated 3 AI healthcare proof-of-concepts from Streamlit to React and FastAPI architectures, establishing scalable medical imaging and oncology workflows.",
      "Developed containerized backend services on AWS EC2 for inference pipelines, utilizing Docker and MONAI SegResNet to process 4-modality MRI datasets.",
      "Improved deployment reliability and stable frontend integration by migrating from ngrok to an AWS API Gateway and Elastic IP infrastructure.",
      "Built 10+ interactive dashboards for patient analytics and optimized MRI slice visualization by filtering 150+ generated slices down to 60 clinically relevant outputs."
    ],
    skills: ["React", "FastAPI", "AWS EC2", "AWS API Gateway", "Docker", "MONAI", "Python"]
  },
  {
    id: "grit-city",
    role: "Web Developer Intern",
    company: "The Grit City",
    logo: "/companies/TGC.png",
    location: "Panjim, Goa",
    dateRange: "Jul 2024 - Aug 2024",
    description: [
      "Created and customized a functional website prototype using Wix, contributing to wireframing, CMS management, SEO improvements, and content workflows for student and company engagement."
    ],
    skills: ["Wix", "CMS", "SEO", "Wireframing"]
  },
  {
    id: "hexcoderz",
    role: "UI/UX & Web Intern",
    company: "Hexcoderz",
    logo: "/companies/hexcoderz.avif",
    location: "Vasco da Gama, Goa",
    dateRange: "Sep 2021 - Nov 2021",
    description: [
      "Developed 'OverClocked PCs,' a web-based computer store mini-project using HTML, CSS, JavaScript, PHP, and MySQL with product browsing and PC configuration workflows."
    ],
    skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
  }
];