"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Section } from "@/components/ui/container";
import { H2, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/config/animations";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden py-32 bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for Full-Time Opportunities
          </div>

          <div>
            <H2 className="text-4xl md:text-5xl mb-4">Let&apos;s build together.</H2>
            <Text muted className="text-lg">
              Currently seeking Software Engineer, Backend Engineer, or Full-Stack Developer roles. 
              My inbox is always open for engineering challenges and collaboration opportunities.
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <a href={`mailto:${socials.email}`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2">
                <Mail size={18} />
                Send an Email
              </Button>
            </a>
            <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full gap-2 border-border">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 border-t border-border w-full">
            <a href={socials.links[0].url} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href={socials.links[1].url} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all" aria-label="LinkedIn">
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