import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="#opening"
      className="text-3xl lg:text-4xl font-['Poiret_One'] hover:bg-gradient-to-tr from-[#EEEEEE] to-[#FFD369] bg-clip-text hover:text-transparent"
    >
      W
    </Link>
  );
}
