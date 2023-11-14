import Link from "next/link";

export default function AboutMe() {
  return (
    <section id="about-me" className="min-h-screen pt-20 flex ">
      <div className="flex flex-col items-center justify-center w-[40%] space-y-5">
        <h1 className="text-3xl font-bold px-10 whitespace-nowrap">About Me</h1>
        <div className="text-justify px-5 leading-8 text-lg">
          Hi! &#128075; I'm <strong>Wilfreno Gayongan</strong>. An enthusiastic,
          online games loving,
          <strong>Full Stack Web Developer</strong>.The moment I wrote my first
          "Hello world". I felt like I was a kid in a candy store.I didn't know
          what to do, I didn't know what to take,but I knew I would enjoy
          exploring every corner of it.As I dove deeper into programming,I
          decided to take the path on web development. Learning web development
          became my hobby, I actually spend more time now trying to learn web
          development than playing online games.As of now, I'm learning the full
          stack <strong className="italic">React.js</strong> framework{" "}
          <strong className="italic">Next.js</strong> with{" "}
          <strong className="italic">typescript</strong>,{" "}
          <strong className="italic">mongoDB</strong>,{" "}
          <strong className="italic">Google Places Api</strong>, and{" "}
          <strong className="italic">tailwind css</strong>. Go to my{" "}
          <Link href="#project">
            <u className="font-bold">Project</u>
          </Link>{" "}
          section to see what I've built with it &#128077; .
        </div>
      </div>
      <div className="w-[60%] bg-gray-700"></div>
    </section>
  );
}
