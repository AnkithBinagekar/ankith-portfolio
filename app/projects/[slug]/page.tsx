import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MonitorPlay,
  Code2,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  BookOpen,
  Clock,
  Users,
  Zap
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { Container, Section } from "@/components/ui/container";
import { H1, H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";

// Generate static routes for all projects at build time
export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const { scrollYProgress } = useScroll();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  // Local derived facts mapping for UX demonstration based on available context
  const facts = {
    role: project.slug === "livinglink" ? "Backend Architect" : "Lead Engineer",
    team: project.slug === "livinglink" ? "5 Engineers" : "Solo Project",
    status: "Completed",
    readTime: "4 min read"
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-16 relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Container className="flex gap-12 items-start relative">
        
        {/* Sticky Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:flex flex-col sticky top-32 w-64 shrink-0 space-y-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          
          <div className="space-y-4 border-l border-border/40 pl-4">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-widest block mb-4">Contents</span>
            {["Overview", "Architecture", "Tech Stack", "Challenges", "Lessons"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                {item}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {/* Mobile Back Button */}
          <div className="mb-12 lg:hidden">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>

          {/* Hero Header */}
          <header className="mb-16">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} className="bg-card/50 border-border/40 text-accent/80">{tech}</Badge>
              ))}
            </div>
            
            <H1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
              {project.title}
            </H1>
            
            <Text className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
              {project.description}
            </Text>

            {/* Project Facts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-border/40 bg-card/20 mb-10">
               <div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 mb-1"><Zap size={14}/> Role</span>
                  <span className="text-sm font-semibold text-foreground">{facts.role}</span>
               </div>
               <div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 mb-1"><Users size={14}/> Team Size</span>
                  <span className="text-sm font-semibold text-foreground">{facts.team}</span>
               </div>
               <div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 mb-1"><Clock size={14}/> Status</span>
                  <span className="text-sm font-semibold text-foreground">{facts.status}</span>
               </div>
               <div>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 mb-1"><BookOpen size={14}/> Read Time</span>
                  <span className="text-sm font-semibold text-foreground">{facts.readTime}</span>
               </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button className="gap-2 rounded-full px-6">
                    <FaGithub size={18} /> Repository
                  </Button>
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <Button variant="secondary" className="gap-2 rounded-full px-6">
                    <ExternalLink size={18} /> Live Demo
                  </Button>
                </a>
              )}
            </div>
          </header>

          <div id="overview" className="scroll-mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 py-12 border-y border-border/30">
            <div>
              <h3 className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3 font-bold">The Problem</h3>
              <Text className="text-foreground/80 text-sm leading-relaxed">{project.overview.problem}</Text>
            </div>
            <div>
              <h3 className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3 font-bold">Target Audience</h3>
              <Text className="text-foreground/80 text-sm leading-relaxed">{project.overview.audience}</Text>
            </div>
            <div>
              <h3 className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3 font-bold">The Solution</h3>
              <Text className="text-foreground/80 text-sm leading-relaxed">{project.overview.purpose}</Text>
            </div>
          </div>

          <section id="architecture" className="scroll-mt-32 mb-24">
            <H2 className="mb-8 flex items-center gap-3 text-3xl">
              <Layers className="text-accent" size={28} /> System Architecture
            </H2>
            <div className="w-full aspect-video rounded-3xl border border-border/40 bg-card/20 flex flex-col items-center justify-center mb-8 relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <Layers size={48} className="text-muted-foreground/30 mb-4" />
               <p className="text-muted-foreground font-mono text-sm">{project.architecture.diagramPlaceholder}</p>
            </div>
            <Text className="text-lg text-muted-foreground leading-loose">
              {project.architecture.description}
            </Text>
          </section>

          <section id="tech-stack" className="scroll-mt-32 mb-24 p-8 md:p-12 rounded-[2rem] border border-border/40 bg-gradient-to-b from-card/30 to-background shadow-lg">
            <H2 className="mb-10 flex items-center gap-3 text-3xl">
              <Code2 className="text-accent" size={28} /> Technical Stack
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {project.detailedTechStack.map((stack) => (
                <div key={stack.category}>
                  <h4 className="text-foreground font-bold mb-4 border-b border-border/30 pb-2 flex justify-between items-center">
                    {stack.category}
                  </h4>
                  <ul className="space-y-3">
                    {stack.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center gap-3 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="challenges" className="scroll-mt-32 mb-24">
            <H2 className="mb-8 flex items-center gap-3 text-3xl">
              <Cpu className="text-accent" size={28} /> Engineering Challenges
            </H2>
            <div className="space-y-8 relative border-l-2 border-border/30 pl-8 ml-3">
              {project.engineeringChallenges.map((challenge, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-background border-2 border-accent" />
                  <Text className="text-foreground/90 leading-relaxed">{challenge}</Text>
                </div>
              ))}
            </div>
          </section>

          <section id="lessons" className="scroll-mt-32 mb-24 p-8 md:p-10 rounded-3xl bg-accent/5 border border-accent/10">
             <H2 className="mb-6 text-2xl font-bold">Key Takeaways</H2>
             <ul className="space-y-4">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} /> 
                    <span className="leading-relaxed">{lesson}</span>
                  </li>
                ))}
              </ul>
          </section>
        </main>
      </Container>
    </div>
  );
}