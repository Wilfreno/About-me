import Link from "next/link";

export default function Croom() {
  return (
    <div className="flex px-10 justify-between">
      <div className="space-y-10">
        <div className="space-y-10 flex flex-col">
          <div className="space-y-2 mx-auto flex flex-col items-center">
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
          <p>
            Croom is a real time chat web application where users can start a
            study session on their respective chat room.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-lg">Tech Used :</h2>
          <p className="font-semibold indent-4">Front-end: </p>
          <ul className="flex indent-8">
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>Tailwind-css</li>
            <li>React Redux</li>
          </ul>
          <p className="font-semibold indent-4">Back-end</p>
          <ul className="flex indent-8">
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>MongoDB</li>
            <li>Websocket</li>
          </ul>
        </div>
      </div>
      <div className="relative h-[65dvh] w-auto aspect-video hover:scale-105">
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
