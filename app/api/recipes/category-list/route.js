import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();

    const categories = await Category.find();

    const categoriesList = categories.map(({ title }) => title);
    const uniqueCategories = [...new Set(categoriesList)].sort();

    return new Response(JSON.stringify(uniqueCategories), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
