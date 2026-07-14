"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { H2 } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/config/animations";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" className="border-b border-border">
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

        <div className="relative border-l border-border/40 ml-4 md:ml-6 space-y-12 pb-8">
          {experiences.map((job, index) => (
            <motion.div
              key={job.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Connector & Logo Placeholder */}
              <div className="absolute -left-[20px] top-4 h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                <Briefcase size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Premium Glass Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm transition-all duration-500 hover:bg-card/40 hover:border-border/80">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">{job.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-2">
                      <span className="font-semibold text-foreground/90">{job.company}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                  <Badge className="bg-background/50 border-border shrink-0">
                    {job.dateRange}
                  </Badge>
                </div>

                <ul className="space-y-4 mb-8">
                  {job.description.map((desc, i) => {
                    
                    // Upgraded inline styles for WCAG AA contrast and premium aesthetic
                    const highlightPill = "inline-flex items-baseline px-2 py-0.5 rounded-md bg-accent/10 text-foreground font-semibold text-sm border border-accent/30 mx-1";
                    const highlightText = "font-semibold text-foreground";

                    const highlightedDesc = desc
                      .replace(/10\+ interactive dashboards/g, `<span class="${highlightPill}">10+ dashboards</span>`)
                      .replace(/4-modality MRI datasets/g, `<span class="${highlightPill}">4-modality MRI datasets</span>`)
                      .replace(/ngrok to an AWS API Gateway/g, `<span class="${highlightPill}">AWS API Gateway</span>`)
                      .replace(/filtering 150\+ generated slices down to 60/g, `<span class="${highlightText}">filtering 150+ slices down to 60</span>`);

                    return (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent/50 transition-colors shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: highlightedDesc }} />
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} className="bg-background/40 border-border/40 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}