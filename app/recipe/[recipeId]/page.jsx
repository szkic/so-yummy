"use client";

import Loader from "@components/Loader";
import RecipeInngredientsList from "@components/RecipeInngredientsList";
import RecipePageHero from "@components/RecipePageHero";
import RecipePreparation from "@components/RecipePreparation";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeById } from "@utils/fetchers";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const pathnameId = pathname.split("/").pop();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["recipe-id"],
    queryFn: () => fetchRecipeById(pathnameId),
    refetchOnMount: "always",
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  const [
    { title, description, time, ingredients, instructions, thumb, preview },
  ] = data;

  return (
    <>
      <RecipePageHero title={title} description={description} time={time} />
      <RecipeInngredientsList ingredients={ingredients} />
      <RecipePreparation instructions={instructions} preview={preview} />
    </>
  );
};

export default page;
