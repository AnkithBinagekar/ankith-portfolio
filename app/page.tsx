// src/app/page.tsx (Preview of assembly)
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> - To be built in Phase 5 */}
    </>
  );
}