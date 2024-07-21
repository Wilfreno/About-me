import Link from "next/link";

export default async function Croom() {
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 md:p-10 ">
      <div className="space-y-5 px-5">
        <div className="space-y-5 flex flex-col">
          <div className="space-y-2 mx-auto flex flex-col items-center text-wrap">
            <h1 className="font-bold text-5xl">Croom</h1>
            <div className="flex space-x-5">
              <Link
                href="https://github.com/Wilfreno/croom"
                as="https://github.com/Wilfreno/croom"
                target="_blank"
                className="text-blue-500"
              >{`(github repository)`}</Link>
              <Link
                href="https://croom-wing.vercel.app/"
                as="https://croom-wing.vercel.app/"
                target="_blank"
                className="text-blue-500"
              >{`(website)`}</Link>
            </div>
          </div>
          <p className="break-normal text-justify">
            Croom is a real time chat web application where users can start a
            study session on their respective chat room.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-base ">
            Tech Used :
          </h2>
          <div className="flex space-x-3">
            <p className="font-semibold md:indent-4 whitespace-nowrap">
              Front-end :
            </p>
            <ul className="flex flex-wrap space-x-3">
              <li>Reactjs</li>
              <li>Nextjs</li>
              <li>Tailwind-css</li>
              <li>React Redux</li>
            </ul>
          </div>
          <div className="flex space-x-3 ">
            <p className="font-semibold md:indent-4 whitespace-nowrap">
              Back-end :
            </p>
            <ul className="flex flex-wrap space-x-3">
              <li>Nodejs</li>
              <li>Expressjs</li>
              <li>MongoDB</li>
              <li>Websocket</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative h-auto w-[90vw] md:h-[65dvh] md:w-auto  aspect-video hover:scale-105 mx-auto">
        <Link
          href="https://croom-wing.vercel.app/"
          as="https://croom-wing.vercel.app/"
          target="_blank"
          className="absolute top-0 left-0 z-10 bg-transparent h-full w-full border rounded-lg"
        ></Link>
        <iframe
          src="https://croom-wing.vercel.app/"
          className="h-full w-full rounded-lg cursor-pointer shadow-lg border-none"
        ></iframe>
      </div>
    </div>
  );
}
