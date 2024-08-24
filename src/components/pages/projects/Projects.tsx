import HanapBH from "./HanapBH";
export default function Projects() {
  return (
    <section
      className="grid grid-rows-[auto_1fr] w-screen h-[100dvh] max-h-screen snap-center"
      id="projects"
    >
      <h2 className="justify-self-center mt-10 text-xl">Projects</h2>

      <div className="grid grid-cols-4 p-10">
        <HanapBH />
      </div>
    </section>
  );
}
