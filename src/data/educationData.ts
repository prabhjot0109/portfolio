export type EducationItem = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
  coursework?: string[];
  highlights?: string[];
  logo?: string;
};

export const educationData: EducationItem[] = [
  {
    id: "aitr",
    degree: "B.Tech in Computer Science & Engineering",
    field: "Specialization in Artificial Intelligence & Machine Learning (AI & ML)",
    institution: "Acropolis Institute of Technology and Research",
    location: "Indore, India",
    period: "2022 – 2026",
    logo: "/achievements/acropolis.png",
    description: [
      "Completed Bachelor of Technology with focus on Deep Learning, Generative AI, and Scalable Backend Systems.",
      "Served as Tech Lead for the $4,000 IEEE HTB Tech4Good Grant-funded Harvesting Hope - Krishi project.",
      "Winner of Smart India Hackathon 2024 and 6x national hackathon awardee.",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "System Design",
      "Machine Learning",
      "Deep Learning",
      "Artificial Intelligence",
      "Natural Language Processing",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
    ],
    highlights: [
      "Winner, Smart India Hackathon 2024",
      "Tech Lead, $4,000 IEEE HTB Tech4Good Grant Project",
      "6x National Hackathon Winner",
    ],
  },
];
