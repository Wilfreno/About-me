"use client";
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
import dockerSvg from "../../../../public/docker-svgrepo-com.svg";
import gcpSvg from "../../../../public/gcp-svgrepo-com.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
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
  return (
    <section
      className="grid grid-rows-[auto_1fr] h-[100dvh] w-screen snap-center"
      id="skills"
    >
      <h2 className="justify-self-center mt-10 text-xl">Skills</h2>

      <div className="grid grid-cols-3 gap-8 p-10">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <CardTitle className="text-center">{skill.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 place-items-center h-full">
              <TooltipProvider>
                {skill.icons.map((icon) => (
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="relative overflow-hidden aspect-square h-12 w-auto">
                        <Image
                          src={icon.svg}
                          className="h-full w-full object-contain"
                          alt={icon.name}
                          priority
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{icon.name}</TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
