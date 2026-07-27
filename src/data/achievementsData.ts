export type Achievement = {
  id: string;
  title: string;
  organization: string;
  year: string;
  product: string;
  description: string;
  impact: string;
  iconName: "Trophy" | "Target" | "Award" | "Star" | "TrendingUp" | "Medal" | "Crown";
  imageSrc?: string;
};

export const majorAchievements: Achievement[] = [
  {
    id: "intellify-3",
    title: "Intellify 3.0 Hackathon",
    organization: "Marwadi University, Rajkot",
    year: "2025",
    product: "Winner",
    description:
      "National level hackathon winner recognized for creating the best software solution.",
    impact: "Best Software Solution",
    iconName: "Trophy",
    imageSrc: "/achievements/marwadi.png",
  },
  {
    id: "code-for-bharat-s2",
    title: "Code for Bharat Season 2",
    organization: "Tech Masters India, Microsoft Office",
    year: "2025",
    product: "1st Runner-up",
    description:
      "Secured 1st runner-up among top teams across India in the National Project Building Challenge.",
    impact: "Won against 500+ teams nationwide",
    iconName: "Trophy",
    imageSrc: "/achievements/microsoft.svg",
  },
  {
    id: "sih-2024",
    title: "SIH 2024 Hackathon",
    organization: "MoE's IC & AICTE",
    year: "2024",
    product: "Winner for PS ID 1716",
    description:
      "Won against 10,000+ teams nationwide with Signify - An AI-powered ISL translator.",
    impact: "40+ ISL gestures, 90%+ accuracy",
    iconName: "Medal",
    imageSrc: "/achievements/sih.jpg",
  },
  {
    id: "ieee-grant-2024",
    title: "IEEE Tech4Good Grant",
    organization: "IEEE HTB",
    year: "2024",
    product: "Worked as Tech Lead",
    description:
      "$4000 grant for IoT-enabled smart agriculture platform empowering farmers.",
    impact: "10+ farmers impacted",
    iconName: "Target",
    imageSrc: "/achievements/ieee.svg",
  },
  {
    id: "hackwave-2024",
    title: "HackWave Hackathon",
    organization: "CDGI, Indore",
    year: "2024",
    product: "Winner",
    description:
      "First place for urban transport optimization using machine learning.",
    impact: "Traffic congestion reduction solution",
    iconName: "Award",
    imageSrc: "/achievements/cdgi.png",
  },
  {
    id: "prayatna-2024",
    title: "Prayatna Hackathon",
    organization: "AITR, Indore",
    year: "2024",
    product: "3rd Runner-up",
    description:
      "AI-powered healthcare diagnostic assistant with computer vision.",
    impact: "ML model for X ray report analysis",
    iconName: "Star",
    imageSrc: "/achievements/acropolis.png",
  },
  {
    id: "codespire-2023",
    title: "Codespire Hackathon",
    organization: "AITR, Indore",
    year: "2023",
    product: "1st Runner-up",
    description:
      "Smart Python based Audio analysis software using advanced statistical methods.",
    impact: "Smart Audio Analysis Software",
    iconName: "TrendingUp",
    imageSrc: "/achievements/acropolis.png",
  },
];
