import Ingredient from "@models/ingredient";

const { default: Recipe } = require("@models/recipe");
const { connectToDB } = require("@utils/database");

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const urlParam = (param) => searchParams.get(param);

  try {
    await connectToDB();

    if (searchParams.has("title")) {
      const recipesByTitle = await Recipe.find({
        title: { $regex: new RegExp(urlParam("title"), "i") },
      });

      return new Response(JSON.stringify(recipesByTitle), { status: 200 });
    }

    if (searchParams.has("ingredient")) {
      const searchIngredient = await Ingredient.find({
        ttl: { $regex: new RegExp(urlParam("ingredient"), "i") },
      });

      // search for ingredient IDs
      const targetIngredientIds = searchIngredient.map((id) =>
        id.id.toString(),
      );

      const recipesWithIngredient = await Recipe.find({
        "ingredients.id": { $in: targetIngredientIds },
      });

      const flatRecipesWithIngredient = recipesWithIngredient.flat();

      const uniqueValues = new Set();
      const uniqueArray = flatRecipesWithIngredient.filter((obj) => {
        const value = obj.id;

        if (uniqueValues.has(value)) return false;

        uniqueValues.add(value);
        return true;
      });

      return new Response(JSON.stringify(uniqueArray), { status: 200 });
    }
  } catch (error) {
    return new Response("Failed to find recipe", { status: 500 });
  }
};
