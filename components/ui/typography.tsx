import { cn } from "@/lib/utils";

export const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h1 className={cn("text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95] text-balance text-foreground font-sans", className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("text-3xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-tight leading-tight text-foreground font-sans", className)}>
    {children}
  </h2>
);

export const Text = ({ children, className, muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) => (
  <p className={cn("text-[17px] md:text-lg font-normal leading-relaxed font-sans", muted ? "text-muted-foreground" : "text-foreground", className)}>
    {children}
  </p>
);