import Image from "next/image";
import cssSvg from "../../../public/icons8-css.svg";
import htmlSvg from "../../../public/icons8-html.svg";
import javascriptSvg from "../../../public/icons8-javascript.svg";
import nextjsSvg from "../../../public/icons8-nextjs.svg";
import reactSvg from "../../../public/icons8-react-js.svg";
import reduxSvg from "../../../public/icons8-redux.svg";
import tailwindSvg from "../../../public/icons8-tailwind-css.svg";
import typescriptSvg from "../../../public/icons8-typescript.svg";
export default function FrontEnd() {
  const icons = [
    { name: "CSS3", svg: cssSvg },
    { name: "HTML5", svg: htmlSvg },
    { name: "Javascript", svg: javascriptSvg },
    { name: "Next.js 13 / 14", svg: nextjsSvg },
    { name: "React", svg: reactSvg },
    { name: "Redux", svg: reduxSvg },
    { name: "tailwind-css", svg: tailwindSvg },
    { name: "Typescript", svg: typescriptSvg },
  ];
  return (
    <div className="flex flex-col items-center w-[23rem] px-5 lg:px-0">
      <h2 className="text-4xl font-bold my-3 mx-auto bg-gradient-to-tr to-[#EEEEEE] from-[#FFD369] bg-clip-text text-transparent">
        Front End
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 border-[5px] border-[#FFD369] rounded-lg p-5 h-[60vh] w-full">
        {icons.map((icon, index) => (
          <div
            key={index}
            className=" group flex flex-col items-center justify-center hover:scale-110 transform translate duration-300 ease-out"
          >
            <div className="relative h-[8vh] w-auto overflow-hidden ">
              <Image
                src={icon.svg}
                alt={icon.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm font-semibold my-3 text-[rgba(0,0,0,0)]  group-hover:text-[#FFD369] whitespace-nowrap">
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
