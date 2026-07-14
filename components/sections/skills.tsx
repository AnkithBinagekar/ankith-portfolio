"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { PremiumCard, SectionHeader } from "@/components/ui";
import { fadeIn, staggerContainer } from "@/config/animations";
import { skillsData } from "@/data/skills";

const TARGET_SKILLS = ["Python", "FastAPI", "React.js", "AWS (EC2, S3, API Gateway)", "Docker", "PostgreSQL", "NLP (TF-IDF, SBERT)"];

export function Skills() {
  return (
    <Section id="skills" className="border-b border-border bg-background">
      <Container>
        <SectionHeader
          label="03. Skills"
          title="Technical Expertise"
          description="A comprehensive overview of the technologies and frameworks I use to architect production-ready systems. Core proficiencies are highlighted."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} variants={fadeIn}>
              <PremiumCard interactive className="flex flex-col gap-5 p-6 h-full">
                <h3 className="text-[11px] font-mono tracking-[0.25em] font-semibold uppercase text-muted-foreground/80">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const isHighlighted = TARGET_SKILLS.includes(skill);
                    return (
                      <Badge 
                        key={skillIndex} 
                        className={isHighlighted 
                          ? "bg-accent/10 border-accent/30 text-accent shadow-[0_0_10px_rgba(20,184,166,0.1)] hover:bg-accent/20 hover:border-accent/50 cursor-default transition-all" 
                          : "bg-background/50 border-border/40 cursor-default hover:border-border/80 transition-all"
                        }
                      >
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}