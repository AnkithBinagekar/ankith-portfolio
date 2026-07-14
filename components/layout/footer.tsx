// footer.tsx updates
import { Container } from "@/components/ui/container";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/10 bg-background pt-20 pb-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="text-foreground font-extrabold tracking-tighter text-2xl">Ankith.</span>
          <span className="text-sm font-medium text-muted-foreground">
            Building intelligent, scalable systems.
          </span>
        </div>

        <div className="flex items-center gap-6 bg-card/20 p-2 rounded-full border border-border/30">
          <a href={`mailto:${socials.email}`} className="p-3 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300" aria-label="Email">
            <Mail size={20} strokeWidth={2} />
          </a>
          <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="p-3 rounded-full text-muted-foreground hover:text-[#0077b5] hover:bg-card transition-all duration-300" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </Container>
      
      <Container className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/50 border-t border-border/10 pt-8">
        <p>&copy; {currentYear} Ankith Binagekar. All rights reserved.</p>
        <p className="flex items-center gap-2 flex-wrap justify-center font-mono">
          BUILT WITH 
          <span className="text-muted-foreground/80">NEXT.JS</span> • 
          <span className="text-muted-foreground/80">TYPESCRIPT</span> • 
          <span className="text-muted-foreground/80">TAILWIND</span>
        </p>
      </Container>
    </footer>
  );
}