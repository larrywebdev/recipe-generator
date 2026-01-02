import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image src="/hero.jpg" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <h1 className="text-5xl font-bold">
          Discover Your Next Favorite Recipe
        </h1>
        <p className="mt-3 text-lg">
          Generate a personalized recipe in seconds
        </p>
        <Button className="mt-3 cursor-pointer">Generate Recipe</Button>
      </div>
    </div>
  );
}
