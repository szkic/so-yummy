import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const abc = await req.json();

  try {
    await connectToDB();

    const addRecipe = await Recipe.create(abc);
  } catch (error) {
    console.log(error);
  }
};
