"use client"
import cssSvg from "../../../../public/icons8-css.svg";
import htmlSvg from "../../../../public/icons8-html.svg";
import javascriptSvg from "../../../../public/icons8-javascript.svg";
import nextjsSvg from "../../../../public/icons8-nextjs.svg";
import reactSvg from "../../../../public/icons8-react-js.svg";
import reduxSvg from "../../../../public/icons8-redux.svg";
import tailwindSvg from "../../../../public/icons8-tailwind-css.svg";
import typescriptSvg from "../../../../public/icons8-typescript.svg";
import expressSvg from "../../../../public/icons8-express-js.svg";
import nodejsSvg from "../../../../public/icons8-nodejs.svg";
import mongodbSvg from "../../../../public/mongodb-svgrepo-com.svg";
import mongooseSvg from "../../../../public/Mongoose.js.svg";
import gitSvg from "../../../../public/icons8-git.svg";
import githubSvg from "../../../../public/icons8-github.svg";
import dockerSvg from "../../../../public/docker-svgrepo-com.svg"
import gcpSvg from "../../../../public/gcp-svgrepo-com.svg"
import { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [skill_index, setIndex] = useState(0);
  const [hold, setHold] = useState(false);
  const div_Ref = useRef(null);
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
      name: "Dev Ops",
      icons: [
        { name: "git", svg: gitSvg },
        { name: "Github", svg: githubSvg },
        { name: "Docker", svg: dockerSvg },
        { name: "GCP", svg: gcpSvg },
      ],
    },
  ];
  useEffect(() => {
    let id: NodeJS.Timeout;
    if (div_Ref && !hold) {
      id = setInterval(() => setIndex((prev) => (prev + 1) % 3), 5000);
    }

    return () => clearInterval(id);
  }, [div_Ref, hold]);
  return (
    <section className="grid grid-rows-[auto_1fr_auto] h-[100dvh] w-screen snap-center" id="skills">
      <h1 className="flex text-3xl lg:text-5xl font-bold mx-auto my-5">
        Skills
      </h1>
      <SkillCard
        name={skills[skill_index].name}
        icons={skills[skill_index].icons}
        ref={div_Ref}
        setHold={setHold}
      />
      <div className="space-x-3 mx-auto self-end my-10">
        {skills.map((_, index) => (
          <button
            key={index}
            className={`${
              index === skill_index ? "bg-primary" : "bg-secondary"
            } aspect-square h-3 sm:h-5 w-auto rounded-full border border-primary dark:border-none`}
            onClick={() => setIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
