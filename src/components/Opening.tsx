export default function Opening() {
  return (
    <section
      id="opening"
      className="min-h-screen bg-slate-50 flex flex-col items-center justify-center drop-shadow-lg lg:flex-row lg:justify-evenly space-y-5 text-gray-900"
    >
      <div className="flex items-center justify-center flex-col space-y-5">
        <div className=" aspect-square h-auto w-80 bg-gray-900 "></div>
        <p className="text-2xl font-semibold">Wilfreno Gayongan</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-8">
        <p className="z-20 flex items-center  text-2xl sm:text-4xl lg:text-5xl font-bold whitespace-nowrap flex-wrap drop-shadow-xl">
          Full Stack Web Developer
        </p>
        <button className="border bg-gray-900 text-white text-lg lg:text-xl font-semibold p-2 rounded-lg drop-shadow-lg">
          Contact me
        </button>
      </div>
    </section>
  );
}
