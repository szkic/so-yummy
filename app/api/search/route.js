const { default: Recipe } = require("@models/recipe");
const { connectToDB } = require("@utils/database");

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const ingredient = searchParams.get("ingredient");

  try {
    await connectToDB();

    if (searchParams.has("title")) {
      const recipesByTitle = await Recipe.find({
        title: { $regex: new RegExp(title, "i") },
      });

      return new Response(JSON.stringify(recipesByTitle), { status: 200 });
    }

    if (searchParams.has("ingredient")) {
    }
  } catch (error) {
    return new Response("Failed to find recipe", { status: 500 });
  }
};
