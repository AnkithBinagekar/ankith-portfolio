import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark antialiased`} style={{ colorScheme: 'dark' }}>
      <body className="bg-background text-foreground min-h-screen flex flex-col selection:bg-accent selection:text-background">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}