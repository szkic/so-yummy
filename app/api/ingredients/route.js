import Ingredient from "@models/ingredient";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { ingredientsIds } = await req.json();

  try {
    await connectToDB();

    const ingredients = await Promise.all(
      ingredientsIds.map(async (ing) => await Ingredient.find({ _id: ing })),
    );

    const combinedArray = []
      .concat(...ingredients)
      .map(({ _id, ttl }) => ({ _id, ttl }));

    return new Response(JSON.stringify(combinedArray), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch ingredients", { status: 500 });
  }
};
