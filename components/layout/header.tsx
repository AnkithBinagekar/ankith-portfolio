"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socials } from "@/data/socials";
import { AnimatePresence, motion } from "framer-motion";



export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Intersection Observer for Active Section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 border-b border-transparent",
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] supports-[backdrop-filter]:bg-background/40"
          : "bg-transparent py-2"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-bold tracking-tighter text-lg text-foreground hover:text-accent transition-all z-50">
          Ankith Binagekar
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1 bg-card/30 rounded-full px-4 py-1.5 border border-border/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeSection === link.id 
                      ? "bg-accent/10 text-accent" 
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub size={18} strokeWidth={2} />
            </a>
            <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin size={18} strokeWidth={2} />
            </a>
            <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="sm" className="gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4">
                <FileText size={14} strokeWidth={2} />
                Resume
              </Button>
            </a>
          </div>
        </nav>

        <button
          className="md:hidden z-50 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="px-4 py-3 rounded-lg text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex justify-center">
                 <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer" className="w-full">
                  <Button variant="primary" size="lg" className="w-full gap-2 rounded-xl">
                    <FileText size={18} /> Download Resume
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}