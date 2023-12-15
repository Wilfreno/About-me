import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section className="h-screen w-screen pt-20 flex items-center justify-center flex-wrap">
      <FrontEnd />
      <BackEnd />
      <Tools />
    </section>
  );
}
