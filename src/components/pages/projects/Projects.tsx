import Croom from "./Croom";
import HanapBH from "./HanapBH";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section
      className="grid grid-rows-[auto_1fr] w-screen h-[100dvh] snap-center"
      id="projects"
    >
      <h1 className="flex text-3xl lg:text-5xl font-bold mx-auto my-5">
        Projects
      </h1>
      <div className="py-10">
        <Croom />
      </div>
    </section>
  );
}
