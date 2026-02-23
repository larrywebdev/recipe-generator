"use client";
import FeaturesCard from "@/components/FeaturesCard";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Recipe from "@/components/Recipe";
import Sidebar from "@/components/Sidebar";
import SidebarToggle from "@/components/SidebarToggle";
import useRecipeStore from "@/store/useRecipeStore";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const recipe = useRecipeStore((state) => state.recipe);
  const sectionRef = useRef(null);

  const registerSection = (node) => {
    sectionRef.current = node;
  };

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ref = useRef(null);
  useEffect(() => {
    if (!recipe) return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [recipe]);

  return (
    <>
      <Sidebar />
      <SidebarToggle />
      <Hero scrollToSection={scrollToSection} />
      <div className="grid sm:flex sm:items-center gap-5 my-30 px-4 max-w-7xl mx-auto">
        <div className="max-w-200">
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
        <div className="relative w-65 h-65 mx-auto shrink-0">
          <Image
            src="/19744.jpg"
            alt="food-image"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <Form register={registerSection} />

      <div className="px-5">
        <div
          ref={ref}
          className={`relative ${
            recipe
              ? "h-150 w-full mt-35 mx-auto border rounded-md pb-5 max-w-7xl"
              : ""
          }`}
        >
          {/* Background */}
          {recipe && (
            <>
              <div className="absolute inset-0 bg-cover bg-center">
                <Image
                  src="/top-view-perfect-breakfast-setup_23-2148297977.jpg"
                  alt="food"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-white/75" />

              {/* Foreground */}
              <div className="relative z-1 h-full overflow-y-auto">
                <Recipe recipe={recipe} />
              </div>
            </>
          )}
        </div>
      </div>

      <FeaturesCard />
      <Footer />
    </>
  );
}
