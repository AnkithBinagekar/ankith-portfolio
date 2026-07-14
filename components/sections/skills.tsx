"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/config/animations";
import { skillsData } from "@/data/skills";

const TARGET_SKILLS = ["Python", "FastAPI", "React.js", "AWS (EC2, S3, API Gateway)", "Docker", "PostgreSQL", "NLP (TF-IDF, SBERT)"];

export function Skills() {
  return (
    <Section id="skills" className="border-b border-border bg-background">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <H2>Technical Expertise</H2>
          <Text muted className="mt-4 max-w-2xl">
            A comprehensive overview of the technologies and frameworks I use to architect production-ready systems. Core proficiencies are highlighted.
          </Text>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn} 
              className="flex flex-col gap-5 p-6 rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm transition-all duration-500 hover:bg-card/40 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(20,184,166,0.05)]"
            >
              <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase font-semibold">
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
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}