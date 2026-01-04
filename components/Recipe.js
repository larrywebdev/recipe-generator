import { HeartPlus, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import getRecipeTitle from "./getRecipeTitle";
const markdown = `
Here's a delicious and comforting recipe for a Spiced Carrot Rice Pilaf (also known as Carrot Pulao), perfect for lunch. It uses your main ingredients beautifully and adds a few pantry staples for fantastic flavor.

---

## Spiced Carrot Rice Pilaf (Carrot Pulao)

This flavorful pilaf features tender carrots, aromatic spices, and fluffy rice, making for a hearty and satisfying lunch.

**Prep time:** 15-20 minutes
**Cook time:** 25-30 minutes
**Total time:** 40-50 minutes
**Yields:** 2-3 servings

### Ingredients:

**Main Ingredients:**

- 1 cup Basmati rice (or any long-grain white rice)
- 2-3 medium carrots, peeled and finely diced or grated (about 1.5 cups)

**Aromatics & Spices:**

- 2 tablespoons olive oil or ghee
- 1 small onion, finely chopped
- 2 cloves garlic, minced
- 1 inch ginger, grated or finely minced
- **Whole Spices (optional, but highly recommended for authentic flavor):**
  - 1/2 teaspoon cumin seeds
  - 1 small bay leaf
  - 2-3 green cardamom pods, lightly crushed
  - 1 inch cinnamon stick
- **Ground Spices:**
  - 1/2 teaspoon turmeric powder
  - 1 teaspoon ground coriander
  - 1/2 teaspoon ground cumin
  - 1/4 teaspoon red chili powder (adjust to your spice preference)
  - 1/2 teaspoon Garam Masala
- 1 teaspoon salt (or to taste)
- Freshly ground black pepper to taste

**Liquid & Garnish:**

- 1 ¾ cups vegetable broth or water (adjust based on your rice type – usually 1.5 to 2 cups liquid per 1 cup rice)
- ¼ cup fresh cilantro, chopped (for garnish)

### Equipment:

- Medium pot with a tight-fitting lid
- Cutting board and knife
- Measuring cups and spoons

### Instructions:

1.  **Prepare the Rice:** Rinse the Basmati rice thoroughly under cold running water until the water runs clear. If you have time (and for fluffier rice), soak the rice in water for 15-20 minutes, then drain well before use.
2.  **Sauté Aromatics & Whole Spices:** Heat the olive oil or ghee in a medium pot over medium heat. Once hot, add the cumin seeds, bay leaf, cardamom pods, and cinnamon stick (if using). Sauté for 30-60 seconds until the cumin seeds start to splutter and the spices become fragrant.
3.  **Add Onion, Ginger, Garlic:** Add the chopped onion to the pot and sauté for 3-5 minutes until it becomes soft and translucent. Then, add the minced garlic and grated ginger. Sauté for another minute until fragrant, being careful not to burn the garlic.
4.  **Add Ground Spices & Carrots:** Reduce the heat to low. Add the turmeric powder, ground coriander, ground cumin, red chili powder, and black pepper. Stir constantly for about 30 seconds to toast the spices until fragrant. Immediately add the diced or grated carrots to the pot and sauté for 2-3 minutes, stirring occasionally, to lightly soften them and coat them in the spices.
5.  **Combine Rice & Liquid:** Add the drained rice to the pot. Gently stir for about a minute to coat the rice grains with the oil and spices. Pour in the vegetable broth or water and add the salt. Stir once to combine.
6.  **Simmer & Cook:** Increase the heat to high and bring the liquid to a rolling boil. Once boiling, reduce the heat to the lowest setting, cover the pot tightly with the lid, and cook for 15-18 minutes without lifting the lid.
7.  **Rest & Fluff:** After 15-18 minutes, turn off the heat. **Do not lift the lid.** Let the rice rest, still covered, for another 5-10 minutes. This step is crucial for perfectly cooked, fluffy rice.
8.  **Serve:** Remove the lid, add the Garam Masala, and gently fluff the rice with a fork. Garnish generously with fresh chopped cilantro. Serve hot.

### Tips & Variations:

- **Protein Boost:** To make it a more complete meal, you can add diced paneer, chickpeas, or pre-cooked chicken/shrimp along with the carrots.
- **Nutty Touch:** For extra texture and richness, toast a handful of cashews and/or raisins in a separate pan with a little ghee and sprinkle them over the pilaf before serving.
- **Vegetable Variety:** Feel free to add other quick-cooking vegetables like green peas (fresh or frozen), diced bell peppers, or corn kernels when you add the carrots.
- **Spice Level:** Adjust the red chili powder to your preferred level of heat. For less spice, you can omit it.
- **Lemon Freshness:** A squeeze of fresh lemon juice over the pilaf just before serving adds a bright, zesty note.
- **Yogurt Side:** This pilaf pairs wonderfully with a side of plain yogurt or Raita (cucumber yogurt dip).

Enjoy your flavorful and hearty Carrot Rice Pilaf for lunch!
`;
export default function Recipe({ recipe }) {
  const title = getRecipeTitle(markdown);

  return (
    <div className="mt-5 max-w-250 p-10 m-auto border-2 rounded-2xl">
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
        {markdown}
      </ReactMarkdown>
      <div className="flex gap-3 items-center justify-end mt-7.5">
        <div className="rounded-full text-white bg-amber-500 hover:bg-amber-400 p-2.5 ease-out delay-75 cursor-pointer">
          <HeartPlus className="size-5" />
        </div>
        <div className="rounded-full text-white bg-amber-500 hover:bg-amber-400 p-2.5 ease-out delay-75 cursor-pointer">
          <Share2 className="size-5" />
        </div>
      </div>
    </div>
  );
}
