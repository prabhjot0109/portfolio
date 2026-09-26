export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageFit?: "cover" | "contain";
  cardWidth?: number;
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "sih-2024",
    title: "National Winner – Smart India Hackathon (SIH) 2024",
    badge: "SIH Winner",
    image: "/highlights/sih.jpg",
    imageWidth: 1229,
    imageHeight: 860,
    imageFit: "contain",
    cardWidth: 286,
  },
  {
    id: "ieee-grant",
    title: "Tech Lead for $4,000 IEEE HTB Tech4Good Grant Project",
    badge: "IEEE Grant",
    image: "/highlights/ieee.webp",
    imageWidth: 687,
    imageHeight: 860,
    imageFit: "contain",
    cardWidth: 200,
  },
  {
    id: "intellify-winner",
    title: "1st Place – Intellify 3.0 Hackathon Winner for Software Track",
    badge: "1st Place",
    image: "/highlights/intellify.webp",
    imageWidth: 3986,
    imageHeight: 2815,
    imageFit: "contain",
    cardWidth: 283,
  },
  {
    id: "hackwave-winner",
    title: "1st Place – HackWave Hackathon Winner at CDGI, Indore",
    badge: "1st Place",
    image: "/highlights/cdgi.webp",
    imageWidth: 4096,
    imageHeight: 3072,
    imageFit: "contain",
    cardWidth: 267,
  },
  {
    id: "code-for-bharat",
    title: "2nd Place – Code for Bharat 2 & Codespire Hackathons",
    badge: "2nd Place",
    image: "/highlights/code.webp",
    imageWidth: 4080,
    imageHeight: 2956,
    imageFit: "contain",
    cardWidth: 276,
  },
];
