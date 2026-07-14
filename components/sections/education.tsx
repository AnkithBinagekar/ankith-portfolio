"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { H2 } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/config/animations";
import { educationData } from "@/data/education";

export function Education() {
  return (
    <Section id="education" className="border-b border-border bg-card/10">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12"
        >
          <H2 className="flex items-center gap-3">
            <GraduationCap className="text-accent drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]" size={32} />
            Education
          </H2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeIn}
              className="flex flex-col md:flex-row md:items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 md:p-8 transition-all hover:border-accent/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.05)]"
            >
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground mt-1">
                    {edu.institution}
                  </p>
                </div>

                {edu.coursework && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {edu.coursework.map((course, idx) => (
                      <Badge key={idx} className="bg-background border-border">
                        {course}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="md:text-right shrink-0">
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {edu.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}