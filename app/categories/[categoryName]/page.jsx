"use client";

import NotFoundPage from "@app/not-found";
import Loader from "@components/Loader";
import RecipeCard from "@components/RecipeCard";
import { keepPreviousData, useQueries } from "@tanstack/react-query";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { fetchCategories, fetchCategoriesPage } from "@utils/fetchers";
import { useParams } from "next/navigation";
import { useState } from "react";

const CategoryNamePage = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const results = useQueries({
    queries: [
      {
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 1000 * 60,
      },
      {
        queryKey: ["categoriesPage", categoryName, currentPage],
        queryFn: () => fetchCategoriesPage(categoryName, currentPage),
        placeholderData: keepPreviousData,
        refetchOnMount: "always",
        staleTime: 1000 * 60,
      },
    ],
  });

  const categories = results[0].data;
  const { isPending, isError, data, error, refetch } = results[1];

  console.log("currentPage", currentPage);

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
      <div className="mt-10 flex items-center justify-center">
        <button
          className="rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-primary-color px-4 py-1.5 text-[10px] text-white hover:bg-secondary-light-color focus:outline-none tablet:px-8 tablet:py-3 tablet:text-sm desktop:px-11 desktop:py-4 desktop:text-base"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default CategoryNamePage;
