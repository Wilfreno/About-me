import cssSvg from "../../../public/icons8-css.svg";
import htmlSvg from "../../../public/icons8-html.svg";
import javascriptSvg from "../../../public/icons8-javascript.svg";
import nextjsSvg from "../../../public/icons8-nextjs.svg";
import reactSvg from "../../../public/icons8-react-js.svg";
import reduxSvg from "../../../public/icons8-redux.svg";
import tailwindSvg from "../../../public/icons8-tailwind-css.svg";
import typescriptSvg from "../../../public/icons8-typescript.svg";
import expressSvg from "../../../public/icons8-express-js.svg";
import nodejsSvg from "../../../public/icons8-nodejs.svg";
import mongodbSvg from "../../../public/mongodb-svgrepo-com.svg";
import mongooseSvg from "../../../public/Mongoose.js.svg";
import gitSvg from "../../../public/icons8-git.svg";
import githubSvg from "../../../public/icons8-github.svg";
import vscodeSvg from "../../../public/vscode-svgrepo-com.svg";
import Image from "next/image";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
export default function Skills() {
  const [skill_index, setIndex] = useState(0);
  const skills = [
    {
      name: "Front end",
      icons: [
        { name: "CSS3", svg: cssSvg },
        { name: "HTML5", svg: htmlSvg },
        { name: "Javascript", svg: javascriptSvg },
        { name: "Next.js 13 / 14", svg: nextjsSvg },
        { name: "React", svg: reactSvg },
        { name: "Redux", svg: reduxSvg },
        { name: "tailwind-css", svg: tailwindSvg },
        { name: "Typescript", svg: typescriptSvg },
      ],
    },
    {
      name: "Back end",
      icons: [
        { name: "Express.js", svg: expressSvg },
        { name: "Node.js", svg: nodejsSvg },
        { name: "mongoDB", svg: mongodbSvg },
        { name: "monogoose.js", svg: mongooseSvg },
      ],
    },
    {
      name: "Tools",
      icons: [
        { name: "git", svg: gitSvg },
        { name: "Github", svg: githubSvg },
        { name: "VScode", svg: vscodeSvg },
      ],
    },
  ];
  return (
    <>
      <h1 className="text:text-3xl lg:text-5xl font-bold mb-10">Skills</h1>
      <div className="flex flex-col items-center justify-evenly w-screen  md:flex-row">
        <h2 className="text-6xl mx-auto md:text-8xl lg:text-9xl font-semibold md:mx-0">
          {skills[skill_index].name}
        </h2>
        <ul className="grid grid-cols-3 gap-5 my-5 h-[50vh] ">
          {skills[skill_index].icons.map((icon, index) => (
            <li
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <div className="relative overflow-hidden aspect-square h-14 w-auto md:h-16 lg:h-20">
                <Image
                  src={icon.svg}
                  className="h-full w-full object-contain"
                  alt={icon.name}
                  priority
                />
              </div>
              <p>{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-8 space-x-2">
        {skills.map((_, index) => (
          <button
            key={index}
            className={`${
              index === skill_index ? "bg-primary" : "bg-secondary"
            } aspect-square h-5 w-auto rounded-full border border-primary dark:border-none`}
            onClick={() => setIndex(index)}
          ></button>
        ))}
      </div>
    </>
  );
}
