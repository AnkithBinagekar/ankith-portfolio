import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-mono font-semibold text-muted-foreground transition-all hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_10px_rgba(20,184,166,0.2)]", className)}>
      {children}
    </span>
  );
}