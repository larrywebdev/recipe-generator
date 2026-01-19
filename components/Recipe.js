import { getSavedRecipes, onSave } from "@/lib/saveRecipe";
import { HeartPlus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default function Recipe({ recipe }) {
  const { recipeId, recipeMd } = recipe;
  const [isSaved, setIsSaved] = useState(() => {
    const saved = getSavedRecipes();
    return saved.some((r) => r.recipeId === recipeId);
  });

  function toggleSave() {
    const result = onSave(recipeId, recipeMd);
    setIsSaved(result.saved);
    toast.success(result.saved ? "Recipe saved" : "Recipe deleted");
  }

  return (
    <div className="mt-5 max-w-500 p-10 mx-3 border-2 border-black/40 rounded-2xl">
      <h2 className="flex items-center text-center text-2xl font-semibold mb-5">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></span>
        <span className="px-3">Ready</span>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></span>
      </h2>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
          ),
          p: ({ children }) => <p className="mt-4">{children}</p>,
          li: ({ children }) => (
            <li className="my-1 leading-relaxed list-disc">{children}</li>
          ),
          hr: () => <hr className="my-4" />,
        }}
      >
        {recipeMd}
      </ReactMarkdown>
      <div className="text-end">
        <button
          className={`rounded-full mt-7.5 ${
            !isSaved
              ? "bg-amber-500 hover:bg-amber-400 text-white"
              : "bg-white hover:bg-amber-50 text-amber-500"
          } p-2.5 ease-out delay-75 cursor-pointer`}
          onClick={toggleSave}
        >
          <HeartPlus className="size-5" />
        </button>
      </div>
    </div>
  );
}
