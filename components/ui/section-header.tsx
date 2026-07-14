"use client";

import { motion } from "framer-motion";
import { H2, Text } from "@/components/ui/typography";
import { fadeIn } from "@/config/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({ label, title, description, className, titleClassName }: SectionHeaderProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className={cn("mb-12 md:mb-16", className)}
    >
      {label && (
        <span className="text-xs font-mono uppercase tracking-widest text-accent mb-3 block font-semibold">
          {label}
        </span>
      )}
      <H2 className={cn("mb-4", titleClassName)}>{title}</H2>
      {description && (
        <Text muted className={cn("max-w-2xl", className?.includes("items-center") ? "mx-auto text-center" : "")}>
          {description}
        </Text>
      )}
    </motion.div>
  );
}