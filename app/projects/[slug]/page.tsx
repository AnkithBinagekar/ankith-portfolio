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
  CheckCircle2
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { Container, Section } from "@/components/ui/container";
import { H1, H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Generate static routes for all projects at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = project.nextProjectSlug 
    ? projects.find(p => p.slug === project.nextProjectSlug) 
    : null;

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <Container>
        {/* Navigation Back */}
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-20">
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} className="bg-card/50 backdrop-blur-sm border-border/40 text-accent">
                {tech}
              </Badge>
            ))}
          </div>
          
          <H1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground/80">
            {project.title}
          </H1>
          
          <Text className="text-xl md:text-2xl max-w-3xl text-muted-foreground mb-10 leading-relaxed">
            {project.description}
          </Text>

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button size="lg" className="gap-2">
                  <FaGithub className="h-[18px] w-[18px]" /> View Source Code
                </Button>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="gap-2 border-border/50">
                  <ExternalLink size={18} /> Live Demo
                </Button>
              </a>
            )}
          </div>
        </header>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 py-12 border-y border-border/30">
          <div>
            <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-3">The Problem</h3>
            <Text className="text-foreground/90">{project.overview.problem}</Text>
          </div>
          <div>
            <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-3">Target Audience</h3>
            <Text className="text-foreground/90">{project.overview.audience}</Text>
          </div>
          <div>
            <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-3">The Solution</h3>
            <Text className="text-foreground/90">{project.overview.purpose}</Text>
          </div>
        </div>

        {/* Architecture */}
        <section className="mb-24">
          <H2 className="mb-8 flex items-center gap-3">
            <Layers className="text-accent" /> System Architecture
          </H2>
          
          {/* Architecture Placeholder */}
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl border border-border/40 bg-card/20 flex flex-col items-center justify-center mb-8 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <Server size={48} className="text-muted-foreground/30 mb-4" />
             <p className="text-muted-foreground font-mono text-sm">{project.architecture.diagramPlaceholder}</p>
          </div>
          
          <Text className="text-lg max-w-4xl text-muted-foreground">
            {project.architecture.description}
          </Text>
        </section>

        {/* Tech Stack */}
        <section className="mb-24 p-8 md:p-12 rounded-3xl border border-border/40 bg-card/10">
          <H2 className="mb-10 flex items-center gap-3">
            <Code2 className="text-accent" /> Technical Stack
          </H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {project.detailedTechStack.map((stack) => (
              <div key={stack.category}>
                <h4 className="text-foreground font-semibold mb-4 border-b border-border/30 pb-2">{stack.category}</h4>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Engineering Challenges */}
          <section>
            <H2 className="mb-8 flex items-center gap-3">
              <Cpu className="text-accent" /> Engineering Challenges
            </H2>
            <div className="space-y-6 relative border-l border-border/40 pl-6 ml-3">
              {project.engineeringChallenges.map((challenge, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-border ring-4 ring-background" />
                  <Text className="text-foreground/90">{challenge}</Text>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Highlights */}
          <section>
            <H2 className="mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-accent" /> Implementation Highlights
            </H2>
            <ul className="space-y-5">
              {project.implementationHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/20 hover:border-accent/30 transition-colors">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Screenshots Placeholder Gallery */}
        <section className="mb-24">
          <H2 className="mb-8 flex items-center gap-3">
            <MonitorPlay className="text-accent" /> Interface & Output
          </H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((src, idx) => (
              <div key={idx} className="aspect-video rounded-xl border border-border/40 bg-card/30 flex items-center justify-center overflow-hidden relative group">
                 <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <span className="text-muted-foreground/50 font-mono text-sm">Screenshot Placeholder {idx + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons & Future */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 p-8 rounded-3xl bg-card/20 border border-border/30">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Lessons Learned</h3>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span> {lesson}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Future Roadmap</h3>
            <ul className="space-y-3">
              {project.futureImprovements.map((improvement, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-1">▹</span> {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Project Navigation */}
        {nextProject && (
          <div className="pt-12 border-t border-border/30 flex justify-end">
            <Link href={`/projects/${nextProject.slug}`} className="group text-right">
              <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase block mb-2">Next Project</span>
              <span className="text-2xl md:text-3xl font-bold text-foreground flex items-center justify-end gap-3 group-hover:text-accent transition-colors">
                {nextProject.title}
                <ArrowRight className="transition-transform group-hover:translate-x-2" />
              </span>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}