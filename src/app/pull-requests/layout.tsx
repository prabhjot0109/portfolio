import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Contributions | Prabhjot Singh Assi",
  description: "Pull requests, open-source contributions, and community involvement of Prabhjot Singh Assi.",
  openGraph: {
    title: "Open Source Contributions | Prabhjot Singh Assi",
    description: "Pull requests, open-source contributions, and community involvement of Prabhjot Singh Assi.",
    url: "https://prabhjotsinghassi.vercel.app/pull-requests",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Contributions | Prabhjot Singh Assi",
    description: "Pull requests, open-source contributions, and community involvement of Prabhjot Singh Assi.",
  },
};

export default function PullRequestsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
