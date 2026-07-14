import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all",
      secondary: "bg-card text-foreground hover:bg-card/80 border border-border hover:border-accent/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all",
      outline: "border border-border text-foreground hover:bg-card hover:border-accent/50 transition-all",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-card transition-all",
    };
    const sizes = {
      sm: "h-8 px-3 text-[13px] font-medium tracking-tight",
      md: "h-10 px-4 py-2 text-[15px] font-medium tracking-tight",
      lg: "h-12 px-8 text-[17px] font-semibold tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";