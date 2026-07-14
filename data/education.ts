export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  coursework?: string[];
}

export const educationData: Education[] = [
  {
    id: "pcce",
    degree: "Bachelor of Engineering (Information Technology)",
    institution: "Padre Conceicao College of Engineering (PCCE), Goa",
    duration: "Graduating Jul 2026",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Computer Networks", "Operating Systems", "Machine Learning"],
  },
  {
    id: "agnel",
    degree: "Diploma in Computer Engineering",
    institution: "Agnel Polytechnic Verna, Goa",
    duration: "2019 - 2022",
    coursework: ["Object-Oriented Programming", "Web Development", "Software Engineering", "Microprocessors"],
  }
];