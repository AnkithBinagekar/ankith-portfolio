"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/config/animations";
import { skillsData } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" className="border-b border-border/50">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 md:mb-16"
        >
          <H2>Technical Expertise</H2>
          <Text muted className="mt-4 max-w-2xl">
            A comprehensive overview of the technologies, frameworks, and concepts I use to architect and deploy production-ready systems.
          </Text>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} variants={fadeIn} className="flex flex-col gap-4">
              <h3 className="text-sm font-mono tracking-widest text-secondary uppercase font-semibold">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="hover:-translate-y-0.5 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}