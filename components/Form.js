"use client";
import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { generateRecipe } from "@/lib/actions";
import { recipeSchema } from "@/lib/recipeSchema";
import { useForm } from "@tanstack/react-form";

export default function Form({ setRecipe, setError, register }) {
  const form = useForm({
    defaultValues: {
      ingredients: "",
      diet: "None",
      mealType: "",
      time: "",
      extra: false,
    },
    validators: {
      onSubmit: recipeSchema,
    },
    onSubmit: async ({ value }) => {
      const fd = new FormData();
      Object.entries(value).forEach(([key, value]) =>
        fd.append(key, String(value))
      );
      const result = await generateRecipe(fd);
      if (result?.success) {
        setRecipe(result.recipe);
        form.reset();
      } else {
        setError(result?.error);
      }
    },
  });

  return (
    <div
      className="py-10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
      ref={register}
    >
      <h2 className="flex items-center text-center text-2xl font-semibold">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300"></span>
        <span className="px-3">Create Your Recipe</span>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300"></span>
      </h2>
      <div className="m-auto w-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.Field name="ingredients">
            {(field) => (
              <div className="mt-5">
                <Label htmlFor={field.name}>
                  What ingredients do you have?
                </Label>
                <Textarea
                  className="resize-none mt-1"
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="e.g Egg, tomato, rice..."
                />
                {field.state.meta.errors?.map((err, index) => (
                  <p key={index} className="text-red-500 text-sm">
                    {err.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>

          <form.Field name="diet">
            {(field) => (
              <>
                <Dropdown
                  label="Dietary preference"
                  value={field.state.value}
                  onChange={field.handleChange}
                  items={[
                    "None",
                    "Vegetarian",
                    "Vegan",
                    "Pescatarian",
                    "Halal",
                    "Keto",
                    "Low-carb",
                  ]}
                />
                {field.state.meta.errors?.map((err, index) => (
                  <p key={index} className="text-red-500 text-sm">
                    {err.message}
                  </p>
                ))}
              </>
            )}
          </form.Field>

          <form.Field name="mealType">
            {(field) => (
              <>
                <Dropdown
                  label="Meal type"
                  placeholder="Select meal type"
                  value={field.state.value}
                  onChange={field.handleChange}
                  items={["Breakfast", "Lunch", "Dinner", "Snack"]}
                />
                {field.state.meta.errors?.map((err, index) => (
                  <p key={index} className="text-red-500 text-sm">
                    {err.message}
                  </p>
                ))}
              </>
            )}
          </form.Field>

          <form.Field name="time">
            {(field) => (
              <>
                <Dropdown
                  label="Time available"
                  placeholder="Select available time"
                  value={field.state.value}
                  onChange={field.handleChange}
                  items={["15 mins", "30 mins", "45 mins", "1 hour+"]}
                />
                {field.state.meta.errors?.map((err, index) => (
                  <p key={index} className="text-red-500 text-sm">
                    {err.message}
                  </p>
                ))}
              </>
            )}
          </form.Field>

          <form.Field name="extra">
            {(field) => (
              <div className="flex items-center gap-2 mt-5">
                <Checkbox
                  className="cursor-pointer"
                  id="extra"
                  checked={field.state.value}
                  onCheckedChange={field.handleChange}
                />
                <label className="text-[15px]" htmlFor="extra">
                  I&apos;m okay with a few extra ingredients
                </label>
              </div>
            )}
          </form.Field>

          <form.Subscribe
            selector={(state) => [
              state.canSubmit,
              state.isSubmitting,
              state.isPristine,
            ]}
          >
            {([canSubmit, isSubmitting, isPristine]) => {
              return (
                <Button
                  className="mt-5 w-full bg-amber-500 hover:bg-amber-600"
                  type="submit"
                  disabled={isPristine || !canSubmit || isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex gap-2 items-center">
                      <Spinner className="size-6" />
                      <span>Preparing recipe</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              );
            }}
          </form.Subscribe>
        </form>
      </div>
    </div>
  );
}
