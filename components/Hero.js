import Image from "next/image";
import Header from "./Header";
import { Button } from "./ui/button";

export default function Hero({ scrollToSection }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <Image
        src="/hero.jpg"
        alt="food-on-plate-image-hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold">
          Discover Your Next Favourite Recipe
        </h1>
        <p className="mt-3 text-lg">
          Generate a personalized recipe in seconds
        </p>
        <Button
          className="mt-3 bg-amber-500 hover:bg-amber-600"
          size="lg"
          onClick={scrollToSection}
        >
          Generate Recipe
        </Button>
      </div>
    </div>
  );
}
