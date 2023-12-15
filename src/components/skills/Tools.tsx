import Image from "next/image";
import gitSvg from "../../../public";
import githubSvg from "../../../public";
import vscodeSvg from "../../../public";
export default function Tools() {
  const icons = [
    { name: "git", svg: gitSvg },
    { name: "Github", svg: githubSvg },
    { name: "VScode", svg: vscodeSvg },
  ];
  return (
    <div>
      <h1>Tools</h1>
      <div>
        {icons.map((icon, index) => (
          <div key={index} className="group">
            <div>
              <Image src={icon.svg} alt={icon.name} />
            </div>
            <p className="hidden group-hover:flex">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
