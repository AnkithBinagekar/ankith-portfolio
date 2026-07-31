import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";
import { serializeJsonLd, siteConfig } from "@/lib/site";
import { socials } from "@/data/socials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.title,
    template: "%s | Ankith Binagekar",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Ankith Binagekar",
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "React",
    "FastAPI",
    "AWS",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    // TODO: Add a branded 1200x630 Open Graph image before production launch.
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url.toString(),
        jobTitle: "Software Engineer",
        email: socials.email,
        sameAs: socials.links.map((link) => link.url),
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url.toString(),
        description: siteConfig.description,
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} dark antialiased`} style={{ colorScheme: 'dark' }}>
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only fixed left-6 top-6 z-[60] rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-lg ring-1 ring-border focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
