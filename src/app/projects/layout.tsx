import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Prabhjot Singh Assi",
  description:
    "Explore AI engineering projects, Gen AI applications, full-stack systems, and open-source software built by Prabhjot Singh Assi.",
  openGraph: {
    title: "Projects | Prabhjot Singh Assi",
    description:
      "Explore AI engineering projects, Gen AI applications, full-stack systems, and open-source software built by Prabhjot Singh Assi.",
    url: "https://prabhjot0109.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Prabhjot Singh Assi",
    description:
      "Explore AI engineering projects, Gen AI applications, full-stack systems, and open-source software built by Prabhjot Singh Assi.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
