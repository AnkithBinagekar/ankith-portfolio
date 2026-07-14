"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Download } from "lucide-react";
import { Container, Section } from "@/components/ui/container"; // Assuming Section was exported alongside Container
import { Button } from "@/components/ui/button";
import { H1, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/config/animations";
import { socials } from "@/data/socials";

export function Hero() {
  return (
    <Section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Vercel-inspired subtle radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-3">
            <Badge className="bg-surface/50 backdrop-blur border-border/50 text-secondary">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Opportunities
            </Badge>
            <Badge className="bg-transparent border-transparent text-secondary flex items-center gap-1">
              <MapPin size={12} strokeWidth={2} />
              {socials.location}
            </Badge>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4">
            <Text className="text-secondary tracking-widest uppercase text-sm font-mono font-semibold">
              Ankith Binagekar
            </Text>
            <H1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
              Architecting Intelligent Systems & Scalable Infrastructure.
            </H1>
            <Text muted className="text-lg md:text-xl max-w-2xl mx-auto mt-4">
              AI Engineer <span className="text-border mx-2">|</span> Backend Engineer <span className="text-border mx-2">|</span> Full-Stack Developer
            </Text>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a href="#projects">
              <Button size="lg" className="gap-2 group">
                View Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg" className="gap-2">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}