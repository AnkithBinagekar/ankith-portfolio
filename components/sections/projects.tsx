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
    <Section id="projects" className="border-b border-border/50 relative">
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
          {/* Flagship Featured Project */}
          {featuredProject && (
            <motion.div variants={fadeIn} className="relative group">
              {/* Animated Gradient Glow Effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/50 via-purple-500/50 to-accent/50 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative flex flex-col lg:flex-row gap-8 rounded-2xl border border-border bg-surface p-8 lg:p-12 overflow-hidden h-full z-10 transition-colors duration-300 group-hover:border-border/80">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Badge className="bg-accent/10 text-accent border-accent/20">Flagship Project</Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-primary mb-3">
                      {featuredProject.title}
                    </h3>
                    <Text muted className="text-lg">
                      {featuredProject.summary}
                    </Text>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} className="bg-background border-border/60">{tech}</Badge>
                    ))}
                  </div>

                  <ul className="space-y-2.5">
                    {featuredProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-secondary text-sm md:text-base">
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
                    {featuredProject.live && (
                      <a href={featuredProject.live} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="gap-2 border-transparent hover:border-border">
                          <ExternalLink size={16} /> Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Standard Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn} className="flex">
                <div className="flex flex-col justify-between rounded-xl border border-border bg-surface/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:border-border/80 w-full group">
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">
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
                        <li key={idx} className="flex items-start gap-2.5 text-secondary text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 shrink-0 transition-colors group-hover:bg-accent/50" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-auto flex items-center justify-between border-t border-border/40">
                    <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-primary inline-flex items-center gap-1.5 hover:text-accent transition-colors group/link">
                      Read Details
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors">
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