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
    title: "Intellify 3.0 Hackathon Winner",
    organization: "Marwadi University, Rajkot",
    year: "2025",
    product: "Best Software Solution",
    description:
      "National level hackathon winner recognized for creating the best software solution.",
    impact: "National recognition for innovation excellence",
    iconName: "Trophy",
  },
  {
    id: "code-for-bharat-s2",
    title: "Code for Bharat Season 2",
    organization: "Tech Masters India, Microsoft Office",
    year: "2025",
    product: "1st Runner-up",
    description:
      "Secured 1st runner-up among top teams across India in the National Project Building Challenge.",
    impact: "Recognized for innovation and execution",
    iconName: "Trophy",
  },
  {
    id: "sih-2024",
    title: "SIH 2024 Winner",
    organization: "MoE's IC & AICTE",
    year: "2024",
    product: "AI Sign Language Translator",
    description:
      "Won against 10,000+ teams nationwide with Signify - An AI-powered ISL translator.",
    impact: "40+ ISL gestures, 90%+ accuracy",
    iconName: "Medal",
    imageSrc: "/Screenshot%202026-02-07%20234301.png",
  },
  {
    id: "ieee-grant-2024",
    title: "IEEE Tech4Good Grant",
    organization: "IEEE HTB",
    year: "2024",
    product: "Krishi Agriculture Platform",
    description:
      "$4000 grant for IoT-enabled smart agriculture platform empowering farmers.",
    impact: "10+ farmers impacted, 20% yield improvement",
    iconName: "Target",
    imageSrc: "/Experience-image/Google_Summer_of_Code_sun_logo_2022.svg (1).png",
  },
  {
    id: "hackwave-2024",
    title: "HackWave Winner",
    organization: "CDGI, Indore",
    year: "2024",
    product: "PARAS Transport ML Model",
    description:
      "First place for urban transport optimization using machine learning.",
    impact: "Traffic congestion reduction solution",
    iconName: "Award",
  },
  {
    id: "prayatna-2024",
    title: "Prayatna 3rd Runner-up",
    organization: "AITR, Indore",
    year: "2024",
    product: "Med.AI Healthcare Platform",
    description:
      "AI-powered healthcare diagnostic assistant with computer vision.",
    impact: "15% diagnostic accuracy improvement",
    iconName: "Star",
  },
  {
    id: "codespire-2023",
    title: "Codespire 2023 Runner-up",
    organization: "AITR, Indore",
    year: "2023",
    product: "Innovative Software Solution",
    description:
      "Early achievement demonstrating exceptional problem-solving skills.",
    impact: "Technical excellence recognition",
    iconName: "TrendingUp",
  },
];
