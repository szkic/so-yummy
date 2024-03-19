import Ingredient from "@models/ingredient";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { data } = await req.json();

  console.log(data);

  try {
    await connectToDB();

    const { shoppingList } = await User.findOne({ email: data.user });

    const ingredients = await Ingredient.find({ _id: { $in: shoppingList } });

    console.log("shoppingList", shoppingList);

    return new Response(JSON.stringify(ingredients), { status: 200 });
  } catch (error) {
    return new Response("Failed to retrieve shopping list", { status: 500 });
  }
};
// export const PUT = async (req, res) => {};
