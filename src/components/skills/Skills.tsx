import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-screen pt-20 flex items-center justify-evenly flex-wrap p-10"
    >
      <FrontEnd />
      <BackEnd />
      <Tools />
    </section>
  );
}
