
import Header from "@/components/Header";
import AboutMe from "@/components/pages/AboutMe";
import Contact from "@/components/pages/contact/Contact";
import Opening from "@/components/pages/opening/Opening";
import Projects from "@/components/pages/projects/Projects";
import Skills from "@/components/pages/skills/Skills";
export default function Home() {

  return (
    <main className="snap-y snap-mandatory scroll-smooth max-h-screen overflow-x-hidden">
      <Header />
      <Opening />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
