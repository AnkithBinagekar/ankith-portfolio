import { cn } from "@/lib/utils";

export const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h1 className={cn("text-4xl md:text-5xl font-semibold tracking-tight text-primary", className)}>{children}</h1>
);

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-2xl md:text-3xl font-medium tracking-tight text-primary", className)}>{children}</h2>
);

export const Text = ({ children, className, muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) => (
  <p className={cn("text-base leading-relaxed", muted ? "text-secondary" : "text-primary", className)}>{children}</p>
);