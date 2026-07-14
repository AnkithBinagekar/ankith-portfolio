import { Container } from "@/components/ui/container";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border py-12 bg-background">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-foreground font-bold tracking-tight text-lg">Ankith Binagekar</span>
          <span className="text-sm text-muted-foreground">
            Building intelligent, scalable systems.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href={`mailto:${socials.email}`} className="text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-all" aria-label="Email">
            <Mail size={20} strokeWidth={1.5} />
          </a>
          <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-all" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-all" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </Container>
      
      <Container className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
        <p>&copy; {currentYear} Ankith Binagekar. All rights reserved.</p>
        <p className="flex items-center gap-1.5 flex-wrap justify-center">
          Built with 
          <span className="font-medium text-muted-foreground">Next.js</span> • 
          <span className="font-medium text-muted-foreground">React</span> • 
          <span className="font-medium text-muted-foreground">TypeScript</span> • 
          <span className="font-medium text-muted-foreground">Tailwind CSS</span> • 
          <span className="font-medium text-muted-foreground">Framer Motion</span>
        </p>
      </Container>
    </footer>
  );
}