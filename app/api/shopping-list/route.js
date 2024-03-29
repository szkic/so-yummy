import Ingredient from "@models/ingredient";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { data } = await req.json();

  if (!data) {
    return new Response("Invalid request data", { status: 400 });
  }

  try {
    await connectToDB();

    const user = await User.findOne({ email: data.user });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const ingredients = await Ingredient.find({
      _id: { $in: user.shoppingList },
    });

    const filter = { email: data.user };
    const update = {};

    // check if ingredient is already in the list
    const isIngredientInList = user.shoppingList.find(
      (item) => item._id.toString() === data.id,
    );

    if (data.action === "add" && !isIngredientInList) {
      update.$push = { shoppingList: { _id: data.id, measure: data.measure } };
    }

    if (data.action === "remove") {
      update.$pull = { shoppingList: { _id: data.id } };
    }

    await User.findOneAndUpdate(filter, update, { new: true });

    // add measure to ingredients
    const ingredientWithMeasure = ingredients.map((ingredient) => {
      const measure = user.shoppingList.find(
        (item) => item._id.toString() === ingredient._id.toString(),
      );
      return { ...ingredient.toObject(), measure: measure.measure };
    });

    // sort by title
    ingredientWithMeasure.sort((a, b) => {
      const titleA = a.ttl.toLowerCase();
      const titleB = b.ttl.toLowerCase();

      return titleA.localeCompare(titleB);
    });

    return new Response(JSON.stringify(ingredientWithMeasure), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to retrieve shopping list", { status: 500 });
  }
};

export const DELETE = async (req, res) => {
  const { user, id } = await req.json();

  if (!user || !id) {
    return new Response("User and ID is required", { status: 400 });
  }

  try {
    await connectToDB();

    const updatedUser = await User.findOneAndUpdate(
      { email: user },
      { $pull: { shoppingList: { _id: id } } },
      { new: true },
    );

    if (!updatedUser) {
      return new Response("User not found", { status: 404 });
    }

    return new Response("Ingredient removed", { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to remove ingredient", { status: 500 });
  }
};
