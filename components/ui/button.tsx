import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, cloneElement, forwardRef, isValidElement, type ReactElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, children, className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all",
      secondary: "bg-card text-foreground hover:bg-card/80 border border-border hover:border-accent/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all",
      outline: "border border-border text-foreground hover:bg-card hover:border-accent/50 transition-all",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-card transition-all",
    };
    const sizes = {
      sm: "h-8 px-3 text-[13px] font-medium",
      md: "h-10 px-4 py-2 text-[15px] font-medium",
      lg: "h-12 px-8 text-[17px] font-medium",
    };

    const buttonClassName = cn(
      "inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild) {
      if (!isValidElement(children)) {
        throw new Error("Button with asChild requires a single React element child.");
      }

      const child = children as ReactElement<{ className?: string }>;

      return cloneElement(child, {
        ...props,
        className: cn(buttonClassName, child.props.className),
        ref,
      } as never);
    }

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
