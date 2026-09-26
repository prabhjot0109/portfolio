import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Prabhjot Singh Assi",
  description: "Academic background, degrees, certifications, and coursework of Prabhjot Singh Assi.",
  openGraph: {
    title: "Education | Prabhjot Singh Assi",
    description: "Academic background, degrees, certifications, and coursework of Prabhjot Singh Assi.",
    url: "https://prabhjot0109.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education | Prabhjot Singh Assi",
    description: "Academic background, degrees, certifications, and coursework of Prabhjot Singh Assi.",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
