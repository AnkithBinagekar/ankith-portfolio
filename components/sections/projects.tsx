"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Container, Section } from "@/components/ui/container";
import { H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/config/animations";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const standardProjects = projects.filter(p => !p.featured);

  return (
    <Section id="projects" className="border-b border-border relative">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <H2 className="mb-4">Featured Engineering Projects</H2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10"
        >
          {/* Flagship Project */}
          {featuredProject && (
            <motion.div variants={fadeIn} className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="relative flex flex-col lg:flex-row gap-0 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md overflow-hidden h-full z-10 transition-all duration-700 hover:border-accent/40 shadow-xl">
                
                {/* Screenshot Area */}
                <div className="lg:w-1/2 bg-background/50 border-r border-border/30 relative min-h-[300px] flex items-center justify-center p-8">
                   <div className="absolute top-6 left-6">
                      <Badge className="bg-accent text-background border-transparent font-bold">Flagship Project</Badge>
                   </div>
                   <div className="w-full aspect-video rounded-xl border border-border/40 bg-card/50 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                      <ImageIcon className="text-muted-foreground/30 mb-2" size={32} />
                      <span className="text-xs font-mono text-muted-foreground/50">Dashboard UI Placeholder</span>
                   </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 lg:p-12 space-y-8 flex flex-col justify-center">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-4">
                      {featuredProject.title}
                    </h3>
                    <Text muted className="text-lg leading-relaxed">
                      {featuredProject.summary}
                    </Text>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.slice(0, 6).map((tech) => (
                      <Badge key={tech} className="bg-background/80 border-border text-xs">{tech}</Badge>
                    ))}
                  </div>

                  <ul className="space-y-3 border-t border-border/40 pt-6">
                    {featuredProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <CheckCircle2 size={18} className="text-accent shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link href={`/projects/${featuredProject.slug}`}>
                      <Button className="gap-2 group/btn rounded-full px-6">
                        View Case Study
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Standard Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn} className="flex">
                <div className="flex flex-col rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-card/40 hover:border-accent/40 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.1)] w-full overflow-hidden group">
                  
                  {/* Screenshot Area */}
                  <div className="w-full aspect-video bg-background/50 border-b border-border/30 flex items-center justify-center p-6 relative">
                     <div className="w-full h-full rounded-lg border border-border/40 bg-card/50 flex items-center justify-center">
                        <ImageIcon className="text-muted-foreground/30" size={24} />
                     </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                      {project.title}
                    </h3>
                    <Text muted className="text-sm mb-6 flex-grow">
                      {project.summary}
                    </Text>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} className="bg-background/50 border-border/40 text-[11px]">{tech}</Badge>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                      <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-foreground inline-flex items-center gap-1.5 hover:text-accent transition-colors group/link">
                        Read Details
                        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <FaGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}