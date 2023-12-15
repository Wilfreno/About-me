import Image from "next/image";
import gitSvg from "../../../public/icons8-git.svg";
import githubSvg from "../../../public/icons8-github.svg";
import vscodeSvg from "../../../public/vscode-svgrepo-com.svg";
export default function Tools() {
  const icons = [
    { name: "git", svg: gitSvg },
    { name: "Github", svg: githubSvg },
    { name: "VScode", svg: vscodeSvg },
  ];
  return (
    <div className="flex flex-col w-[25vw]">
      <h1 className="text-5xl font-bold my-3 mx-auto bg-gradient-to-tr from-[#EEEEEE] to-[#FFD369] bg-clip-text text-transparent">
        Tools
      </h1>
      <div className="grid grid-cols-2 grid-rows-2  flex-wrap border-[5px] border-[#FFD369] rounded-lg p-5 h-[70vh]">
        {icons.map((icon, index) => (
          <div
            key={index}
            className=" group flex flex-col items-center justify-center m-5 hover:scale-110 transform translate duration-300 ease-out"
          >
            <div className="relative h-[10vh] w-auto overflow-hidden ">
              <Image
                src={icon.svg}
                alt={icon.name}
                className="object-contain w-auto h-full"
              />
            </div>
            <p className="text-xl font-semibold my-3 text-[rgba(0,0,0,0)]  group-hover:text-[#FFD369]">
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
