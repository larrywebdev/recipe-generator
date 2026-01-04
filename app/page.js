"use client";
import FeaturesCard from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Recipe from "@/components/Recipe";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [recipe, setRecipe] = useState("");
  const [error, setError] = useState("");
  const sectionRef = useRef(null);

  const registerSection = (node) => {
    sectionRef.current = node;
  };

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <div className="flex gap-10 my-30 px-20">
        <div className="w-150">
          <h2 className="text-4xl font-semibold mt-4 mb-10">
            Recipe Buddy&apos;s Got You.
          </h2>
          <p>
            You open the fridge, see a bunch of ingredients, and somehow none of
            them turn into a meal. We&apos;ve all been there. That&apos;s
            exactly why this place exists. This is where random ingredients
            start making sense. Where &quot;I guess I&apos;ll order food
            again&quot; turns into &quot;wait, I can actually cook something
            good.&quot; No pressure, no fancy stuff - just ideas that work with
            what you already have and fit your mood today. Good food, fewer
            decisions, and a little help when your kitchen feels uncooperative.
          </p>
        </div>
        <div className="relative w-75 h-75">
          <Image
            src="/19744.jpg"
            alt="food-image"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <Form
        setError={setError}
        setRecipe={setRecipe}
        register={registerSection}
      />
      {error ? (
        <span className="text-lg font-medium">{error}</span>
      ) : (
        recipe && <Recipe recipe={recipe} />
      )}
      <Recipe />
      <FeaturesCard />
      <Footer />
    </>
  );
}
