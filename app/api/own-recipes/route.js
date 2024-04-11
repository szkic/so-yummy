import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const newRecipe = await req.json();
  const { ingredients } = newRecipe;

  const correctedIngredients = ingredients.map((ingredient) => {
    return {
      id: ingredient.id,
      measure: ingredient.quantity + " " + ingredient.measure,
    };
  });

  const correctedRecipe = {
    ...newRecipe,
    time: newRecipe.time.toString(),
    ingredients: correctedIngredients,
  };

  console.log("correctedRecipe", correctedRecipe);

  try {
    await connectToDB();

    const addRecipe = await Recipe.create(correctedRecipe);

    return new Response(JSON.stringify(addRecipe), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add recipe", { status: 500 });
  }
};
