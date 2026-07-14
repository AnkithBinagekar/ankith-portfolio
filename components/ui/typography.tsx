import { cn } from "@/lib/utils";

export const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h1 className={cn("text-4xl md:text-5xl font-semibold tracking-tight text-foreground", className)}>{children}</h1>
);

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-2xl md:text-3xl font-medium tracking-tight text-foreground", className)}>{children}</h2>
);

export const Text = ({ children, className, muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) => (
  // Body text explicitly defaults to text-muted-foreground as requested
  <p className={cn("text-base leading-relaxed", muted ? "text-muted-foreground" : "text-muted-foreground", className)}>{children}</p>
);