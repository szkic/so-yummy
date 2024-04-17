import User from "@models/user";
import { connectToDB } from "@utils/database";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body.values;
  console.log("body:", body);

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email, or password", {
      status: 400,
    });
  }

  await connectToDB();

  const userExists = await User.exists({ email });
  console.log("User exists:", userExists);

  if (userExists) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    // console.log("User created:", savedUser);

    return new NextResponse("User created successfully", { status: 200 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Error creating user", { status: 500 });
  }
}
