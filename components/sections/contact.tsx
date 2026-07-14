"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui";
import { fadeIn } from "@/config/animations";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden py-32 bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium backdrop-blur-sm">
            Available for Full-Time Opportunities
          </div>

          <SectionHeader
            title="Let's build together."
            description="Currently seeking Software Engineer or Backend Engineer roles. My inbox is always open for engineering challenges."
            className="mb-0 flex flex-col items-center"
            titleClassName="text-5xl md:text-[4rem] font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground/50 leading-[1.1]"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
            <a href={`mailto:${socials.email}`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2 rounded-full px-8 shadow-[0_0_20px_rgba(20,184,166,0.15)] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <Mail size={18} />
                Send an Email
              </Button>
            </a>
            <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full gap-2 border-border/60 rounded-full px-8 bg-card/40 backdrop-blur-sm">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 border-t border-border/20 w-full mt-10">
            <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <div className="flex items-center gap-2 text-muted-foreground text-sm ml-4">
              <MapPin size={16} className="text-accent" />
              {socials.location}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}