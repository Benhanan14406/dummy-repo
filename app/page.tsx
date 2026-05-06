import Image from "next/image";
import Hero from "../sections/landing/hero";
import Why from "../sections/landing/why";
import Solution from "../sections/landing/solution";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-30 mt-40 mb-15">
      <Hero />
      <Why />
      <Solution />
    </div>
  );
}
