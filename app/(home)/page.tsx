import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
    </main>
  );
}
