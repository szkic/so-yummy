import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

const fetchRecipesByCategory = async (category) => {
  const recipes = await Recipe.find({ category });
  return recipes.slice(0, 4);
};

export const GET = async () => {
  try {
    await connectToDB();

    const categories = ["Breakfast", "Miscellaneous", "Chicken", "Desserts"];
    const recipesPromises = categories.map((category) =>
      fetchRecipesByCategory(category),
    );

    const [breakfast, miscellaneous, chicken, desserts] =
      await Promise.all(recipesPromises);

    const data = { breakfast, miscellaneous, chicken, desserts };

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
