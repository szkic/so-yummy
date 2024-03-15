import Recipe from "@models/recipe";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { user } = await req.json();

  try {
    await connectToDB();

    const { favorites } = await User.findOne({ email: user });
    const recipes = await Recipe.find({ _id: favorites });

    return new Response(JSON.stringify(recipes), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch favorites", { status: 500 });
  }
};

export const PUT = async (req, res) => {};

export const DELETE = async (req, res) => {};
