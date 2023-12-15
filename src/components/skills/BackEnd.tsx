import Image from "next/image";
import expressSvg from "../../../public";
import nodejsSvg from "../../../public";
import mongodbSvg from "../../../public";
import mongooseSvg from "../../../public";

export default function BackEnd() {
  const icons = [
    { name: "Express.js", svg: expressSvg },
    { name: "Node.js", svg: nodejsSvg },
    { name: "mongoDB", svg: mongodbSvg },
    { name: "monogoose.js", svg: mongooseSvg },
  ];
  return (
    <div>
      <h1>Back - End</h1>
      <div>
        {icons.map((icon, index) => (
          <div key={index} className="group">
            <div>
              <Image src={icon.svg} alt={icon.svg} />
            </div>
            <p className="hidden group-hover:flex">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
