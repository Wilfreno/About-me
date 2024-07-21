import Options from "@/components/options/Options";
import Opening from "@/components/pages/opening/Opening";
import Projects from "@/components/pages/projects/Projects";
import Skills from "@/components/pages/skills/Skills";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth max-h-screen overflow-x-hidden ">
      <Opening />
      <Projects />
      <Skills/>
    </main>
  );
}
