import Recipe from "@models/recipe";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const data = await req.json();
  const { ingredients } = data.recipe;
  const { user } = data;

  const correctedIngredients = ingredients.map((ingredient) => {
    return {
      id: ingredient.id,
      measure: ingredient.quantity + " " + ingredient.measure,
    };
  });

  const correctedRecipe = {
    ...data.recipe,
    time: data.recipe.time.toString(),
    ingredients: correctedIngredients,
  };

  // console.log("correctedRecipe", correctedRecipe);

  try {
    await connectToDB();

    const addRecipe = await Recipe.create(correctedRecipe);
    await User.findOneAndUpdate(
      { email: user },
      { $addToSet: { myRecipes: addRecipe._id } },
      { new: true },
    );

    return new Response("Recipe added", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add recipe", { status: 500 });
  }
};
