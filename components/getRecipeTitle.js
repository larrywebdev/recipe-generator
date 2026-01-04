import { unified } from "unified";
import remarkParse from "remark-parse";
export default function getRecipeTitle(markdown) {
  const tree = unified().use(remarkParse).parse(markdown);
  const h2 = tree.children.find(
    (node) => node.type === "heading" && node.depth === 2
  );
  if (!h2) return null;
  return h2.children
    .filter((n) => n.type === "text")
    .map((n) => n.value)
    .join("")
    .trim();
}
