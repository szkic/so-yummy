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

export const PUT = async (req, res) => {
  const { user } = await req.json();

  // console.log("user", user);

  try {
    await connectToDB();

    const getUser = await User.findOne({ email: user });
    const userRecipes = getUser.myRecipes;

    const getRecipes = await Recipe.find({ _id: { $in: userRecipes } });

    return new Response(JSON.stringify(getRecipes), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user recipes", { status: 500 });
  }
};

export const DELETE = async (req, res) => {
  const { recipeId, userEmail } = await req.json();

  try {
    await connectToDB();

    await Recipe.findByIdAndDelete(recipeId);
    await User.findOneAndUpdate(
      { email: userEmail },
      { $pull: { myRecipes: recipeId } },
      { new: true },
    );

    return new Response("Recipe deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete recipe", { status: 500 });
  }
};
