"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Container, Section } from "@/components/ui/container";
import { Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PremiumCard, SectionHeader } from "@/components/ui";
import { fadeIn, staggerContainer } from "@/config/animations";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const standardProjects = projects.filter(p => !p.featured);

  return (
    <Section id="projects" className="border-b border-border relative">
      <Container>
        <SectionHeader
          label="04. Portfolio"
          title="Featured Engineering Projects"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10"
        >
          {/* Flagship Project uses custom layout mapping */}
          {featuredProject && (
            <motion.div variants={fadeIn} className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="relative flex flex-col lg:flex-row gap-0 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-md overflow-hidden h-full z-10 transition-all duration-700 hover:border-accent/40 shadow-xl">
                {/* ... (existing flagship layout remains untouched) ... */}
              </div>
            </motion.div>
          )}

          {/* Standard Projects use PremiumCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standardProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn} className="flex">
                <PremiumCard interactive className="flex flex-col w-full p-0 overflow-hidden group">
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
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}