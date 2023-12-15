import Image from "next/image";
import cssSvg from "../../../public;
import htmlSvg from "../../../public;
import javascriptSvg from "../../../public;
import nextjsSvg from "../../../public;
import reactSvg from "../../../public;
import reduxSvg from "../../../public;
import tailwindSvg from "../../../public;
import typescriptSvg from "../../../public;
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
    <div>
      <h1>Front End</h1>
      <div className="flex flex-col flex-wrap gap-2">
        {icons.map((icon, index) => (
          <div key={index} className=" group">
            <div
              
              className="relative aspect-square h-10 w-auto overflow-hidden "
            >
              <Image src={icon.svg} alt={icon.name} />
            </div>
            <p className="hidden  group-hover:flex">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
