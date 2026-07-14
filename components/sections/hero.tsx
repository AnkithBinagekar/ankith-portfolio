"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { MapPin, ArrowRight, Download } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { H1, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/config/animations";
import { socials } from "@/data/socials";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <Section 
        className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh] group"
      >
        {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Mouse-reactive Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 184, 166, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl flex flex-col items-center gap-8"
        >
          <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-3">
            <Badge className="bg-card/40 backdrop-blur-md border border-border/50 shadow-[0_0_15px_rgba(20,184,166,0.05)] text-muted-foreground px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for Opportunities
            </Badge>
            <Badge className="bg-transparent border-transparent text-muted-foreground/80 flex items-center gap-1.5">
              <MapPin size={14} className="text-accent/70" />
              {socials.location}
            </Badge>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <Text className="text-muted-foreground tracking-[0.2em] uppercase text-xs font-mono font-bold">
              Ankith Binagekar
            </Text>
            <H1 className="text-5xl md:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground/50 pb-2">
              Architecting Intelligent Systems & Scalable Infrastructure.
            </H1>
            <Text muted className="text-xl md:text-2xl font-medium tracking-wide max-w-2xl mx-auto text-muted-foreground/90">
              AI Engineer <span className="text-border mx-3 font-light">|</span> Backend Engineer <span className="text-border mx-3 font-light">|</span> Full-Stack
            </Text>
          </motion.div>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-5 mt-4">
            <a href="#projects">
              <Button size="lg" className="gap-2 group shadow-[0_0_20px_rgba(20,184,166,0.15)] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                View Case Studies
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/Ankith-Binagekar.pdf" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg" className="gap-2 bg-card/30 backdrop-blur-md">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
    </div>
  );
}