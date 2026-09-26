import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Prabhjot Singh Assi",
  description: "National hackathon victories, grants, awards, and technical recognitions of Prabhjot Singh Assi.",
  openGraph: {
    title: "Achievements | Prabhjot Singh Assi",
    description: "National hackathon victories, grants, awards, and technical recognitions of Prabhjot Singh Assi.",
    url: "https://prabhjot0109.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements | Prabhjot Singh Assi",
    description: "National hackathon victories, grants, awards, and technical recognitions of Prabhjot Singh Assi.",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
