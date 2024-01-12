import dynamic from "next/dynamic";
import HanapBH from "./HanapBH";

export default function Projects() {
  return (
    <>
      <h1 className="text:text-3xl lg:text-5xl font-bold mb-10">Projects</h1>
      <div className="flex flex-col items-center justify-evenly lg:flex-row grow w-[95vw]">
        <HanapBH />
      </div>
    </>
  );
}
