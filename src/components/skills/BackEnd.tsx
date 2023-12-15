import Image from "next/image";
import expressSvg from "../../../public/icons8-express-js.svg";
import nodejsSvg from "../../../public/icons8-nodejs.svg";
import mongodbSvg from "../../../public/mongodb-svgrepo-com.svg";
import mongooseSvg from "../../../public/Mongoose.js.svg";

export default function BackEnd() {
  const icons = [
    { name: "Express.js", svg: expressSvg },
    { name: "Node.js", svg: nodejsSvg },
    { name: "mongoDB", svg: mongodbSvg },
    { name: "monogoose.js", svg: mongooseSvg },
  ];
  return (
    <div className="flex flex-col w-[23rem] px-5 lg:px-0 ">
      <h2 className="text-4xl font-bold my-3 mx-auto bg-gradient-to-tr to-[#EEEEEE] from-[#FFD369] bg-clip-text text-transparent">
        Back - End
      </h2>
      <div className="grid grid-cols-2 grid-rows-2  flex-wrap border-[5px] border-[#FFD369] rounded-lg p-5 h-[60vh] w-full">
        {icons.map((icon, index) => (
          <div
            key={index}
            className=" group flex flex-col items-center justify-center m-5 hover:scale-110 transform translate duration-300 ease-out"
          >
            <div className="relative h-[8vh] w-auto overflow-hidden ">
              <Image
                src={icon.svg}
                alt={icon.svg}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-sm font-semibold my-3 text-[rgba(0,0,0,0)]  group-hover:text-[#FFD369]">
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
