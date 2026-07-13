import { cn } from "@/lib/utils";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-5xl px-6 md:px-8", className)}>{children}</div>
);

export const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-24 md:py-32", className)}>{children}</section>
);