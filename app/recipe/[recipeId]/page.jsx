"use client";

import Loader from "@components/Loader";
import RecipeInngredientsList from "@components/RecipeInngredientsList";
import RecipePageHero from "@components/RecipePageHero";
import RecipePreparation from "@components/RecipePreparation";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipeById } from "@utils/fetchers";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const pathname = usePathname();
  const pathnameId = pathname.split("/").pop() || "";

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["recipe-id", pathnameId],
    queryFn: () => fetchRecipeById(pathnameId),
    refetchOnMount: "always",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending || !isLoaded) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const [
    { title, description, time, ingredients, instructions, preview, _id: id },
  ] = data;

  return (
    <>
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        id={id}
      />
      <RecipeInngredientsList ingredients={ingredients} id={id} />
      <RecipePreparation instructions={instructions} preview={preview} />
    </>
  );
};

export default page;
