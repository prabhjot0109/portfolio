import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Prabhjot Singh Assi",
  description:
    "Get in touch with Prabhjot Singh Assi – open for AI engineering work, software engineering roles, and technical collaborations.",
  openGraph: {
    title: "Contact | Prabhjot Singh Assi",
    description:
      "Get in touch with Prabhjot Singh Assi – open for AI engineering work, software engineering roles, and technical collaborations.",
    url: "https://prabhjot0109.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Prabhjot Singh Assi",
    description:
      "Get in touch with Prabhjot Singh Assi – open for AI engineering work, software engineering roles, and technical collaborations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
