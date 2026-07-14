"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { PremiumCard, SectionHeader, LogoContainer } from "@/components/ui";
import { fadeIn } from "@/config/animations";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" className="border-b border-border">
      <Container>
        <SectionHeader
          label="02. Experience"
          title="Professional Experience"
        />

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
              <div className="absolute -left-[20px] top-4 h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                <Briefcase size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              <PremiumCard className="p-6 md:p-8 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4 md:gap-6">
                  
                  <div className="flex flex-row gap-4 items-start">
                    {job.logo && <LogoContainer src={job.logo} alt={`${job.company} logo`} />}
                    
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[22px] md:text-[26px] font-bold text-foreground tracking-tight leading-snug">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-1.5">
                        <span className="font-semibold text-foreground/90 text-[17px]">{job.company}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="text-[15px] font-medium">{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1 md:pt-0">
                    <Badge className="bg-background/50 border-border font-mono font-medium tracking-widest text-muted-foreground/90 text-[11px]">
                      {job.dateRange}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {job.description.map((desc, i) => {
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
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}