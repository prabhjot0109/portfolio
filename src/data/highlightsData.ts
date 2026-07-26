export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "sih-2024",
    title: "National Winner – Smart India Hackathon (SIH) 2024",
    badge: "SIH Winner",
    image: "/highlights/sih.jpg",
  },
  {
    id: "ieee-grant",
    title: "Tech Lead for $4,000 IEEE HTB Tech4Good Grant Project",
    badge: "IEEE Grant",
    image: "/highlights/ieee.webp",
  },
  {
    id: "intellify-winner",
    title: "1st Place – Intellify 3.0 Hackathon Winner for Sofware Track",
    badge: "1st Place",
    image: "/highlights/intellify.webp",
  },
  {
    id: "hackwave-winner",
    title: "1st Place – HackWave Hackathon Winner at CDGI, Indore",
    badge: "1st Place",
    image: "/highlights/cdgi.webp",
  },
  {
    id: "code-for-bharat",
    title: "2nd Place – Code for Bharat 2 & Codespire Hackathons",
    badge: "2nd Place",
    image: "/highlights/code.webp",
  },
];
