import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();

    const recipesByCategory = await Recipe.find({ category: "Beef" });

    return new Response(JSON.stringify(recipesByCategory), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
