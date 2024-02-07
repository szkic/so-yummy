"use client";

import NotFoundPage from "@app/not-found";
import { useQueries } from "@tanstack/react-query";
import { fetchCategories, fetchCategoriesPage } from "@utils/fetchers";
import { useParams } from "next/navigation";

const CategoryNamePage = () => {
  const { categoryName } = useParams();

  const capitalizeCategoryName =
    categoryName[0].toUpperCase() + categoryName.substring(1);

  const results = useQueries({
    queries: [
      { queryKey: ["categories"], queryFn: fetchCategories },
      {
        queryKey: ["categoriesPage"],
        queryFn: () => fetchCategoriesPage(categoryName),
        refetchOnMount: "always",
      },
    ],
  });

  const categories = results[0].data;
  const { isPending, isError, data, error } = results[1];

  console.log(data);

  if (!categories.includes(capitalizeCategoryName)) {
    return <NotFoundPage />;
  }

  return <div>{capitalizeCategoryName}</div>;
};

export default CategoryNamePage;
