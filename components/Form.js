"use client";
import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateRecipe } from "@/lib/actions";
import { recipeSchema } from "@/lib/recipeSchema";
import { useForm } from "@tanstack/react-form";
export default function Form({ setRecipe, setError, setLoading }) {
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
      setLoading(true);
      const fd = new FormData();
      Object.entries(value).forEach(([key, value]) =>
        fd.append(key, String(value))
      );
      const result = await generateRecipe(fd);
      if (result?.success) {
        setRecipe(result.recipe);
        form.reset();
        setLoading(false);
      } else {
        setError(result?.error);
        setLoading(false);
      }
    },
  });

  return (
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
              <Label htmlFor={field.name}>What ingredients do you have?</Label>
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
                className="mt-5 cursor-pointer w-full"
                type="submit"
                disabled={isPristine || !canSubmit || isSubmitting}
              >
                Submit
              </Button>
            );
          }}
        </form.Subscribe>
      </form>
    </div>
  );
}
