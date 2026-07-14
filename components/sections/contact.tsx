// contact.tsx updates
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-10"
        >
          <div className="flex items-center gap-2">
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"></span>
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
  </span>

  <span>Available for Opportunities</span>
</div>

          <div>
            <H2 className="text-5xl md:text-[4rem] font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground/50 mb-6 leading-[1.1]">
              Let&apos;s build together.
            </H2>
            <Text muted className="text-xl max-w-2xl mx-auto font-light">
              Currently seeking Software Engineer or Backend Engineer roles. 
              My inbox is always open for engineering challenges.
            </Text>
          </div>

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
        </motion.div>
      </Container>
    </Section>
  );
}