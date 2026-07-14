import { Container } from "@/components/ui/container";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-12 mt-24">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-primary font-medium tracking-tight">Ankith Binagekar</span>
          <span className="text-sm text-secondary">
            Building intelligent, scalable systems.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href={`mailto:${socials.email}`} className="text-secondary hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} strokeWidth={1.5} />
          </a>
          <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors" aria-label="GitHub">
            <FaGithub size={18} strokeWidth={1.5} />
          </a>
          <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </Container>
      
      <Container className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary/60">
        <p>&copy; {currentYear} Ankith Binagekar. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, Tailwind, & Framer Motion.</p>
      </Container>
    </footer>
  );
}