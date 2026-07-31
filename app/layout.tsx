import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/providers/motion-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ankith Binagekar | Software Engineer",
    template: "%s | Ankith Binagekar",
  },
  description: "AI & Full-Stack Developer building scalable cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} dark antialiased`} style={{ colorScheme: 'dark' }}>
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-background">
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
