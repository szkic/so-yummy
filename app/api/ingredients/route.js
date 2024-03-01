import Ingredient from "@models/ingredient";
import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { id, ingredientsIds } = await req.json();

  try {
    await connectToDB();

    const ingredients = await Promise.all(
      ingredientsIds.map(async (ing) => await Ingredient.find({ _id: ing })),
    );

    const combinedArray = []
      .concat(...ingredients)
      .map(({ _id, ttl, thb }) => ({ _id, ttl, thb }));

    const recipe = await Recipe.find({ _id: id });
    const [{ ingredients: recipeIngredients }] = recipe;

    const mergedArray = [];

    recipeIngredients.map((recipeIngredient) => {
      const matchedIngredient = combinedArray.find((ingredient) =>
        ingredient._id.equals(recipeIngredient.id),
      );

      if (matchedIngredient) {
        const mergedData = {
          ...matchedIngredient,
          measure: recipeIngredient.measure,
        };

        mergedArray.push(mergedData);
      }
    });

    return new Response(JSON.stringify(mergedArray), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch ingredients", { status: 500 });
  }
};
