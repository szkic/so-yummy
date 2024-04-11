import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const newRecipe = await req.json();

  console.log("newRecipe", newRecipe);

  try {
    await connectToDB();

    const addRecipe = await Recipe.create(newRecipe);

    return new Response(JSON.stringify(addRecipe), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add recipe", { status: 500 });
  }
};
