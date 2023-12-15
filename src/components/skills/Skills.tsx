import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" min-h-screen pt-20 flex flex-col whitespace-nowrap snap-center"
    >
      <h1 className="text-5xl font-bold my-5 mx-auto bg-gradient-to-tr from-[#EEEEEE] to-[#FFD369] bg-clip-text text-transparent">
        Skills
      </h1>
      <div className="flex flex-col space-y-10 items-center justify-evenly xl:px-0 xl:space-y-0 xl:flex-row">
        <FrontEnd />
        <BackEnd />
        <Tools />
      </div>
    </section>
  );
}
