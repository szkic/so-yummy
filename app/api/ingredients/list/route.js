import Ingredient from "@models/ingredient";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();

    const ingredients = await Ingredient.find();
    const ingredientsList = ingredients
      .map(({ _id, ttl }) => ({ _id, ttl }))
      .sort();

    // console.log(ingredientsList);

    return new Response(JSON.stringify(ingredientsList), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch ingredients", { status: 500 });
  }
};
