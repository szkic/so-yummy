"use client";

import { useSession } from "next-auth/react";
import RecipeItem from "./RecipeItem";

const MyRecipesList = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4 tablet:gap-10 desktop:gap-12">
      {/* {data.map((recipe) => (
        <RecipeItem
          key={recipe._id}
          recipe={recipe}
          theme="my"
          onDelete={handleDeleteFromFavorites}
        />
      ))} */}
    </div>
  );
};

export default MyRecipesList;
