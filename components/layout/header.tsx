"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socials } from "@/data/socials";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle blur backdrop on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-medium tracking-tight text-primary hover:text-accent transition-colors z-50">
          Ankith.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-secondary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="sm" className="gap-2">
                <FileText size={14} strokeWidth={1.5} />
                <span>Resume</span>
              </Button>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-secondary hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border p-6 shadow-xl md:hidden flex flex-col gap-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-secondary">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-primary">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 pt-4 border-t border-border">
             <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer" className="w-full">
              <Button variant="primary" className="w-full gap-2">
                <FileText size={16} strokeWidth={1.5} /> Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}