import Recipe from "@models/recipe";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { user } = await req.json();

  if (!user) return new Response("User not found", { status: 404 });

  try {
    await connectToDB();

    const { favorites } = await User.findOne({ email: user });
    const recipes = await Recipe.find({ _id: favorites });

    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch favorites", { status: 500 });
  }
};

export const PUT = async (req, res) => {
  const { user, id } = await req.json();

  if (!user || !id)
    return new Response("User or recipe not found", { status: 404 });

  try {
    await connectToDB();

    const updateFavorites = await User.findOneAndUpdate(
      { email: user },
      { $addToSet: { favorites: id } },
      { new: true },
    );

    return new Response(JSON.stringify(updateFavorites), { status: 200 });
  } catch (error) {
    return new Response("Failed to add to favorites", { status: 500 });
  }
};

export const DELETE = async (req, res) => {
  const { user, id } = await req.json();

  try {
    await connectToDB();

    const deleteFavorite = await User.updateOne(
      { email: user },
      { $pull: { favorites: id } },
    );

    // console.log(deleteFavorite);

    return new Response(JSON.stringify(deleteFavorite), { status: 200 });
  } catch (error) {
    return new Response("Failed to delete from favorites", { status: 500 });
  }
};
