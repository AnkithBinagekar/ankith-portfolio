import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-[11px] md:text-[12px] font-mono font-medium tracking-wider text-foreground/80 transition-all hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_10px_rgba(20,184,166,0.2)]", className)}>
      {children}
    </span>
  );
}