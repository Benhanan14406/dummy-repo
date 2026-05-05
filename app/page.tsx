import Image from "next/image";
import Hero from "./hero";
import Why from "./why";
import Solution from "./solution";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-30 mt-40 mb-15">
      <Hero />
      <Why />
      <Solution />
    </div>
  );
}
