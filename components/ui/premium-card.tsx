import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function PremiumCard({ children, className, interactive = false }: PremiumCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm transition-all duration-500",
        interactive
          ? "hover:-translate-y-2 hover:bg-card/40 hover:border-accent/40 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.1)]"
          : "hover:bg-card/40 hover:border-border/80",
        className
      )}
    >
      {children}
    </div>
  );
}