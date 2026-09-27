import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Prabhjot Singh Assi",
  description:
    "Work history, engineering roles, MLOps, RAG platforms, and technical leadership of Prabhjot Singh Assi.",
  openGraph: {
    title: "Experience | Prabhjot Singh Assi",
    description:
      "Work history, engineering roles, MLOps, RAG platforms, and technical leadership of Prabhjot Singh Assi.",
    url: "https://prabhjot0109.vercel.app/experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Prabhjot Singh Assi",
    description:
      "Work history, engineering roles, MLOps, RAG platforms, and technical leadership of Prabhjot Singh Assi.",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
