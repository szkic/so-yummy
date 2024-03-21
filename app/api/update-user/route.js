import User from "@models/user";
import { connectToDB } from "@utils/database";

export const PUT = async (req, res) => {
  const { user, newName, image } = await req.json();

  if (!user) {
    return res.status(400).json({ message: "Invalid request" });
  }

  if (!newName || !image) {
    return res
      .status(400)
      .json({ message: "You must provide username or image" });
  }

  try {
    await connectToDB();

    await User.findOneAndUpdate(
      { email: user },
      { name: newName },
      { new: true },
    );

    return new Response("User updated successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user", { status: 500 });
  }
};
