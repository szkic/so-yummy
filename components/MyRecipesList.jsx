"use client";

import { useSession } from "next-auth/react";
import RecipeItem from "./RecipeItem";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { fetchOwnRecipes } from "@utils/fetchers";

const MyRecipesList = () => {
  const { data: session } = useSession();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["own-recipes"],
    queryFn: () => fetchOwnRecipes(session.user.email),
  });

  console.log("data", data);

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-4 tablet:gap-10 desktop:gap-12">
      {data.map((recipe) => (
        <RecipeItem
          key={recipe._id}
          recipe={recipe}
          theme="my"
          // onDelete={handleDeleteFromFavorites}
        />
      ))}
    </div>
  );
};

export default MyRecipesList;
