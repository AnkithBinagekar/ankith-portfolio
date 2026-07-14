"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
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
          <Text muted className="max-w-2xl">
            A selection of production-ready systems showcasing AI engineering, backend development, cloud deployment, and full-stack software development.
          </Text>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {featuredProject && (
            <motion.div variants={fadeIn} className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/30 via-accent/10 to-accent/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative flex flex-col lg:flex-row gap-8 rounded-2xl border border-border bg-card p-8 lg:p-12 overflow-hidden h-full z-10 transition-colors duration-300 group-hover:border-accent/50">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Badge className="bg-accent/10 text-accent border-accent/20">Flagship Project</Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground mb-3">
                      {featuredProject.title}
                    </h3>
                    <Text muted className="text-lg">
                      {featuredProject.summary}
                    </Text>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} className="bg-background border-border text-[11px]">{tech}</Badge>
                    ))}
                  </div>

                  <ul className="space-y-2.5">
                    {featuredProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link href={`/projects/${featuredProject.slug}`}>
                      <Button className="gap-2 group/btn">
                        View Case Study
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                    {featuredProject.github && (
                      <a href={featuredProject.github} target="_blank" rel="noreferrer">
                        <Button variant="secondary" className="gap-2">
                          <FaGithub size={16} /> Source Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn} className="flex">
                <div className="flex flex-col justify-between rounded-xl border border-border bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:border-accent/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] w-full group">
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <Text muted className="text-base">
                      {project.summary}
                    </Text>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-background border-border/40 text-[11px]">{tech}</Badge>
                      ))}
                    </div>

                    <ul className="space-y-2 py-4">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 shrink-0 transition-colors group-hover:bg-accent/80 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-auto flex items-center justify-between border-t border-border/40">
                    <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-foreground inline-flex items-center gap-1.5 hover:text-accent transition-all hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] group/link">
                      Read Details
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-all">
                        <FaGithub size={20} />
                      </a>
                    )}
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