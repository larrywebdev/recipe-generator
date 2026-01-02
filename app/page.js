"use client";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import PreparingRecipe from "@/components/PreparingRecipe";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [recipe, setRecipe] = useState("");
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);
  return (
    <>
      <Hero />
      <div className="p-5">
        <h2 className="flex items-center text-center text-2xl font-semibold">
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></span>
          <span className="px-3">Create Your Recipe</span>
          <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></span>
        </h2>
        <div className="flex flex-col gap-2">
          <Form
            setError={setError}
            setRecipe={setRecipe}
            setLoading={isLoading}
          />
          {loading ? (
            <PreparingRecipe />
          ) : error ? (
            <>
              <span className="text-lg font-medium">{error}</span>
            </>
          ) : (
            recipe && (
              <div>
                <ReactMarkdown>{recipe}</ReactMarkdown>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
