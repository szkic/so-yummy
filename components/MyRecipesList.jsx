"use client";

import { useSession } from "next-auth/react";
import RecipeItem from "./RecipeItem";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { fetchOwnRecipes } from "@utils/fetchers";
import axios from "axios";

const MyRecipesList = () => {
  const { data: session } = useSession();

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["own-recipes"],
    queryFn: () => fetchOwnRecipes(session.user.email),
    refetchOnMount: "always",
  });

  console.log("data", data);

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  const handleDeleteFromMyRecipes = async (recipeId) => {
    await axios.delete("/api/own-recipes", {
      data: {
        userEmail: session.user.email,
        recipeId,
      },
    });

    refetch();
  };

  return (
    <div className="flex flex-col gap-4 tablet:gap-10 desktop:gap-12">
      {data.map((recipe) => (
        <RecipeItem
          key={recipe._id}
          recipe={recipe}
          theme="my"
          onDelete={handleDeleteFromMyRecipes}
        />
      ))}
    </div>
  );
};

export default MyRecipesList;
