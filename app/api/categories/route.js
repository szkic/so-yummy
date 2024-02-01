import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();

    const recipe = await Recipe.find();

    const categoriesList = recipe.map((a) => a.category);
    const uniqueCategories = [...new Set(categoriesList)].sort();

    return new Response(JSON.stringify(uniqueCategories), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
