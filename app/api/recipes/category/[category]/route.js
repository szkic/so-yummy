import Recipe from "@models/recipe";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { category } = params;
  const capitalizeCategory = category[0].toUpperCase() + category.substring(1);

  const currentPage = req.nextUrl.searchParams.get("page");
  const page = parseInt(currentPage) || 1;
  const pageSize = 8;

  console.log("currentPage", currentPage);
  console.log("page", page);
  console.log("pageSize", pageSize);

  try {
    await connectToDB();

    const skip = (page - 1) * pageSize;

    const recipesByCategory = await Recipe.find({
      category: capitalizeCategory,
    })
      .skip(skip)
      .limit(pageSize);

    return new Response(JSON.stringify(recipesByCategory), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all recipes", { status: 500 });
  }
};
