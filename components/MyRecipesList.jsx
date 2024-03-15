"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFavorites } from "@utils/fetchers";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import axios from "axios";
import FavoriteRecipeItem from "./FavoriteRecipeItem";

const MyRecipesList = ({ theme }) => {
  const { data: session } = useSession();

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => fetchFavorites(session.user.email),
    refetchOnMount: "always",
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  const handleDeleteFromFavorites = async (id) => {
    try {
      const response = await axios.delete("/api/favorite", {
        data: { user: session.user.email, id },
      });

      refetch();

      console.log("Item deleted from favorites:", response.data);
    } catch (error) {
      console.error("Failed to delete item from favorites:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 tablet:gap-10 desktop:gap-12">
      {data.map((recipe) => (
        <FavoriteRecipeItem
          key={recipe._id}
          recipe={recipe}
          theme={theme}
          onDelete={handleDeleteFromFavorites}
        />
      ))}
    </div>
  );
};

export default MyRecipesList;
