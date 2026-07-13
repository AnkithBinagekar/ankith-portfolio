"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/config/animations";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" className="border-b border-border/50 bg-surface/10">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <H2>Professional Experience</H2>
        </motion.div>

        <div className="relative border-l border-border/60 ml-3 md:ml-4 space-y-12 pb-8">
          {experiences.map((job, index) => (
            <motion.div
              key={job.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-border ring-4 ring-background shadow-[0_0_0_4px_var(--bg-background)] transition-colors duration-300 group-hover:bg-accent" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
                  <div className="flex items-center gap-2 text-secondary mt-1">
                    <span className="font-medium text-primary/80">{job.company}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>
                <div className="text-sm font-mono text-secondary mt-1 md:mt-0 whitespace-nowrap">
                  {job.dateRange}
                </div>
              </div>

              <ul className="mt-4 space-y-3 mb-6">
                {job.description.map((desc, i) => {
                  // Highlighting measurable achievements for impact
                  const highlightedDesc = desc
                    .replace(/10\+ interactive dashboards/g, '<strong class="text-primary font-medium">10+ interactive dashboards</strong>')
                    .replace(/4-modality MRI datasets/g, '<strong class="text-primary font-medium">4-modality MRI datasets</strong>')
                    .replace(/ngrok to an AWS API Gateway/g, '<strong class="text-primary font-medium">ngrok to an AWS API Gateway</strong>')
                    .replace(/filtering 150\+ generated slices down to 60/g, '<strong class="text-primary font-medium">filtering 150+ generated slices down to 60</strong>');

                  return (
                    <li key={i} className="text-secondary leading-relaxed flex items-start">
                      <span className="mr-3 mt-2 h-1 w-1 rounded-full bg-border flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: highlightedDesc }} />
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Badge key={i} className="bg-transparent border-border/60">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}