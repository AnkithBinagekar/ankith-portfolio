import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Monitor, GitCommitHorizontal, CheckCircle2, AlertTriangle, Scale, Target, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { H1, H2, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const url = `/projects/${project.slug}`;
  const title = `${project.title} | ${siteConfig.name}`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      title,
      description: project.description,
    },
    twitter: {
      card: "summary",
      title,
      description: project.description,
    },
  };
}

export default async function EngineeringCaseStudy({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  const nextProject = project.nextProjectSlug
    ? projects.find(p => p.slug === project.nextProjectSlug)
    : null;

  const docSections = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "implementation", label: "Implementation" },
    { id: "results", label: "Results" },
    { id: "stack", label: "Tech Stack" },
  ];

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: absoluteUrl("/#projects"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: absoluteUrl(`/projects/${project.slug}`),
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-16 relative font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbStructuredData) }}
      />

      <Container className="mb-16 border-b border-border/30 pb-12">
        <div className="mb-12">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} className="bg-accent/10 border-accent/20 text-accent">{tech}</Badge>
          ))}
        </div>

        <H1 className="mb-6">{project.title}</H1>
        <Text className="text-xl max-w-3xl text-muted-foreground mb-8">
          {project.description}
        </Text>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <Button asChild size="md" className="gap-2 rounded-full px-6">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} repository (opens in a new tab)`}>
                <FaGithub aria-hidden="true" size={16} /> Repository
              </a>
            </Button>
          )}
          {project.live && (
            <Button asChild variant="secondary" size="md" className="gap-2 rounded-full px-6">
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo (opens in a new tab)`}>
                <ExternalLink aria-hidden="true" size={16} /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </Container>

      <Container className="flex flex-col lg:flex-row gap-16 items-start relative">

        <aside className="hidden lg:flex flex-col sticky top-32 w-48 shrink-0">
          <span className="text-xs font-mono font-semibold text-foreground uppercase tracking-widest mb-4">
            Contents
          </span>
          <nav aria-label="Case study contents" className="space-y-3 border-l border-border/40 pl-4">
            {docSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-[14px] font-medium text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="flex-1 min-w-0 max-w-3xl space-y-24 pb-24">

          <section id="overview" className="scroll-mt-32 space-y-12">
            <div className="w-full aspect-[16/10] rounded-2xl border border-border/40 bg-card/20 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
               <Monitor aria-hidden="true" size={48} className="text-muted-foreground/30 mb-4" />
               <p className="text-muted-foreground font-mono text-sm max-w-md text-center px-4">
                 [{project.heroImagePlaceholder}]
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[13px] font-mono tracking-widest text-muted-foreground uppercase mb-4 font-semibold flex items-center gap-2">
                  <Target size={16} className="text-accent" /> The Problem
                </h3>
                <Text className="text-foreground/90 leading-relaxed">{project.documentation.problem}</Text>
              </div>
              <div>
                <h3 className="text-[13px] font-mono tracking-widest text-muted-foreground uppercase mb-4 font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" /> The Solution
                </h3>
                <Text className="text-foreground/90 leading-relaxed">{project.documentation.solution}</Text>
              </div>
            </div>
          </section>

          <section id="architecture" className="scroll-mt-32 space-y-8">
            <H2 className="border-b border-border/30 pb-4">System Architecture</H2>
            <div className="w-full aspect-[21/9] rounded-2xl border border-border/40 bg-card/10 flex flex-col items-center justify-center overflow-hidden border-dashed">
               <Layers aria-hidden="true" size={40} className="text-muted-foreground/40 mb-3" />
               <p className="text-muted-foreground font-mono text-sm">[{project.architectureDiagramPlaceholder}]</p>
            </div>
          </section>

          <section id="implementation" className="scroll-mt-32 space-y-12">
            <H2 className="border-b border-border/30 pb-4">Implementation & Trade-offs</H2>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <GitCommitHorizontal size={18} className="text-accent" /> Technical Decisions
              </h3>
              <ul className="space-y-4">
                {project.documentation.technicalDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-border/30 bg-card/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    <Text className="text-[16px] text-muted-foreground leading-relaxed">{decision}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" /> Engineering Challenges
              </h3>
              <div className="relative border-l-2 border-border/30 pl-6 ml-2 space-y-6">
                {project.documentation.challenges.map((challenge, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-background border-2 border-amber-500/50" />
                    <Text className="text-[16px] text-muted-foreground leading-relaxed">{challenge}</Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Scale size={18} className="text-accent" /> Trade-offs
              </h3>
              <div className="space-y-4">
                {project.documentation.tradeOffs.map((tradeoff, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-accent/20 bg-accent/5">
                    <Text className="text-[16px] text-foreground/90 leading-relaxed italic">
                      &quot;{tradeoff}&quot;
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="results" className="scroll-mt-32 space-y-6">
            <H2 className="border-b border-border/30 pb-4">Results</H2>
            <ul className="space-y-4">
              {project.documentation.results.map((result, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <Text className="text-[17px] text-foreground font-medium">{result}</Text>
                </li>
              ))}
            </ul>
          </section>

          <section id="stack" className="scroll-mt-32 space-y-8">
            <H2 className="border-b border-border/30 pb-4">Technical Stack</H2>
            <div className="grid grid-cols-2 gap-8">
              {project.detailedTechStack.map((stack) => (
                <div key={stack.category} className="space-y-3">
                  <h4 className="text-[13px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                    {stack.category}
                  </h4>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="text-[16px] text-foreground font-medium flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {nextProject && (
            <div className="pt-16 border-t border-border/30 mt-24">
              <Link href={`/projects/${nextProject.slug}`} className="group block text-right hover:bg-card/20 p-6 rounded-2xl border border-transparent hover:border-border/40 transition-all">
                <span className="text-[12px] font-mono tracking-widest text-muted-foreground uppercase block mb-3 font-semibold">
                  Next Case Study
                </span>
                <span className="text-3xl font-bold text-foreground flex items-center justify-end gap-4 group-hover:text-accent transition-colors">
                  {nextProject.title}
                  <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            </div>
          )}

        </article>
      </Container>
    </div>
  );
}
