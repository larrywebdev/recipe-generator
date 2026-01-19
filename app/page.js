"use client";
import FeaturesCard from "@/components/FeaturesCard";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Recipe from "@/components/Recipe";
import Sidebar from "@/components/Sidebar";
import SidebarToggle from "@/components/SidebarToggle";
import useRecipeStore from "@/store/useRecipeStore";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <>
      <Sidebar />
      <SidebarToggle />
      <Hero scrollToSection={scrollToSection} />
      <div className="grid gap-5 my-30">
        <div className="w-full px-4">
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
        <div className="relative w-65 h-65 mx-auto">
          <Image
            src="/19744.jpg"
            alt="food-image"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <Form register={registerSection} />
      <div
        ref={ref}
        className={`relative ${
          recipe ? "h-[300vh] mt-35 pt-10" : ""
        } overflow-hidden`}
      >
        {/* Background */}
        {recipe && (
          <>
            <motion.div style={{ y: backgroundY }} className="absolute inset-0">
              <Image
                src="/top-view-perfect-breakfast-setup_23-2148297977.jpg"
                alt="food"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-white/50" />

            {/* Foreground */}
            <motion.div style={{ y: textY }} className="relative z-1">
              <Recipe recipe={recipe} />
            </motion.div>
          </>
        )}
      </div>

      <FeaturesCard />
      <Footer />
    </>
  );
}
