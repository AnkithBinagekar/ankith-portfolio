"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { H2, Text } from "@/components/ui/typography";
import { fadeIn } from "@/config/animations";

export function About() {
  return (
    <Section id="about" className="bg-card/30 border-y border-border">
      <Container>
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl"
        >
          <H2 className="mb-8">Engineering Philosophy</H2>
          
          <div className="space-y-6">
            <Text muted className="text-lg">
              I am a software engineer focused on bridging the gap between artificial intelligence and scalable backend infrastructure. Currently in my final year of Information Technology Engineering, I specialize in building end-to-end systems—from developing RAG pipelines and coordinating multi-agent workflows to deploying containerized applications on AWS.
            </Text>
            
            <Text muted className="text-lg">
              My engineering philosophy centers on writing clean, maintainable code and architecting cloud-native solutions that solve complex, real-world problems. Whether I am optimizing inference pipelines to process multi-modality MRI datasets or designing secure, decoupled enterprise platforms, I approach every project with a strict focus on performance, reliability, and scale.
            </Text>

            <Text muted className="text-lg">
              I am driven by the challenge of translating demanding technical requirements into elegant, production-ready systems, utilizing tools like React, FastAPI, Docker, and modern Generative AI frameworks.
            </Text>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}