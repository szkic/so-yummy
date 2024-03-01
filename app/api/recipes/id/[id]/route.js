import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await connectToDB();

    const recipeById = await Recipe.find({ _id: id });

    return new Response(JSON.stringify(recipeById), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
