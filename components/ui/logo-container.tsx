import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoContainerProps {
  src: string;
  alt: string;
  className?: string;
}

export function LogoContainer({ src, alt, className }: LogoContainerProps) {
  return (
    <div
      className={cn(
        "shrink-0 h-12 w-12 md:h-[52px] md:w-[52px] bg-background/50 border border-border/50 rounded-xl flex items-center justify-center p-2 shadow-sm overflow-hidden group transition-all",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={52}
        height={52}
        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}