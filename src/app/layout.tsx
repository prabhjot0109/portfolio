import type { Metadata } from "next";
import { Geist, Geist_Mono, Doto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dotoFont = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prabhjotsinghassi.vercel.app"),
  title: "Prabhjot Singh Assi",
  description:
    "AI Engineer building Gen AI systems at scale.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Prabhjot Singh Assi",
    description:
      "AI Engineer building Gen AI systems at scale.",
    url: "https://prabhjotsinghassi.vercel.app",
    siteName: "Prabhjot Singh Assi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prabhjot Singh Assi – AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhjot Singh Assi",
    description: "AI Engineer building Gen AI systems at scale.",
    creator: "@prabhjotnovus",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prabhjot Singh Assi",
  "url": "https://prabhjotsinghassi.vercel.app",
  "jobTitle": "AI Engineer",
  "description": "AI Engineer building Gen AI systems at scale.",
  "sameAs": [
    "https://github.com/prabhjot0109",
    "https://x.com/prabhjotnovus",
    "https://www.linkedin.com/in/prabhjotsinghassi"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Generative AI",
    "Machine Learning",
    "Full Stack Development",
    "Python",
    "TypeScript",
    "Next.js",
    "LangChain",
    "PyTorch"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${dotoFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


