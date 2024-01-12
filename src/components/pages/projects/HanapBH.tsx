import Link from "next/link";

export default function HanapBH() {
  return (
    <>
      <div className="space-y-10 w-[50%] flex flex-col">
        <h2 className="text-8xl font-semibold whitespace-nowrap italic self-center">
          Hanap - BH
        </h2>
        <p className="text-2xl">
          A complete <strong>Full-Stack </strong> Web Application that helps
          filipinos locate the nearest lodging / boarding house in thier
          vicinity
        </p>
        <ul className="list-disc text-lg text-justify">
          <li>
            Utilizes the <strong>Google Maps Javascript API</strong> to Have an{" "}
            <strong>Interactive Map</strong> to locate the nearest lodging /
            boarding houses
          </li>
          <li>
            Utilizes the <strong>Google Places API</strong> to provide reliable
            data
          </li>
          <li>
            Users can <strong>log-in</strong> to <strong>add</strong> or{" "}
            <strong>claim</strong> a new or existing lodging / boarding house
          </li>
          <li>
            Has a simple <strong>responsive UI</strong> for{" "}
            <strong>better user experience</strong>
          </li>
        </ul>
      </div>
      <div className="relative aspect-[9/16] h-[56vh] w-auto hover:scale-105 transform translate duration-300 ease-out">
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
    </>
  );
}
