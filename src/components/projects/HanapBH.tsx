import Link from "next/link";

export default function HanapBH() {
  return (
    <>
      <div className="flex flex-col items-center my-10 lg:flex-row">
        <div className="relative aspect-video h-auto w-[80vw] mx-10 hover:scale-105 transform translate duration-300 ease-out lg:w-[50vw]">
          <Link
            href="https://hanap-bh.vercel.app/"
            target="_blank"
            className="absolute z-10 bg-transparent h-full w-full border border-[#222831] rounded-lg"
          ></Link>
          <iframe
            src="https://hanap-bh.vercel.app/"
            className=" h-full w-full rounded-lg cursor-pointer shadow-lg border-none"
          ></iframe>
        </div>
        <div className="flex flex-col grow my-10">
          <h2 className="text-4xl font-bold italic text-[#EEEEEE] mx-auto self-start">
            Hanap - BH
          </h2>
          <p>To be Written Description</p>
        </div>
      </div>
    </>
  );
}
