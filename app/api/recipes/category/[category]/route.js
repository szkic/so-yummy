import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { category } = params;
  const capitalizeCategory = category[0].toUpperCase() + category.substring(1);

  try {
    await connectToDB();

    const recipesByCategory = await Recipe.find({
      category: capitalizeCategory,
    });

    return new Response(JSON.stringify(recipesByCategory), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
