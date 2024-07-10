import User from "@models/user";
import { connectToDB } from "@utils/database";

export const PUT = async (req, res) => {
  const { user, newName } = await req.json();

  try {
    await connectToDB();

    const updateUser = await User.findOneAndUpdate(
      { email: user },
      { name: newName },
      { new: true },
    );

    return new Response(JSON.stringify(updateUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to update user", { status: 500 });
  }
};
