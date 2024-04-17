"use client";

import NotFoundPage from "@app/not-found";
import Loader from "@components/Loader";
import RecipeCard from "@components/RecipeCard";
import { useQueries } from "@tanstack/react-query";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { fetchCategories, fetchCategoriesPage } from "@utils/fetchers";
import { useParams } from "next/navigation";

const CategoryNamePage = () => {
  const { categoryName } = useParams();

  const results = useQueries({
    queries: [
      {
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 1000 * 60,
      },
      {
        queryKey: ["categoriesPage"],
        queryFn: () => fetchCategoriesPage(categoryName),
        refetchOnMount: "always",
        staleTime: 1000 * 60,
      },
    ],
  });

  const categories = results[0].data;
  const { isPending, isError, data, error } = results[1];

  // console.log(data);

  if (!categories.includes(capitalizeFirstLetter(categoryName))) {
    return <NotFoundPage />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mt-8 tablet:mt-12">
      <RecipeCard data={data} displayAll={true} />
    </div>
  );
};

export default CategoryNamePage;
