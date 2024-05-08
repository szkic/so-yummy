"use client";

import NotFoundPage from "@app/not-found";
import Loader from "@components/Loader";
import RecipeCard from "@components/RecipeCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";
import { fetchCategories, fetchCategoriesPage } from "@utils/fetchers";
import { useParams } from "next/navigation";
import { useState } from "react";

const CategoryNamePage = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isPending: categoriesPending,
    isError: categoriesIsError,
    data: categoriesData,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60,
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
    status,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["categoriesPage"],
    queryFn: ({ pageParam = 1 }) =>
      fetchCategoriesPage(categoryName, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnMount: "always",
  });

  const categories = categoriesData || [];

  if (!categories.includes(capitalizeFirstLetter(categoryName))) {
    return <NotFoundPage />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  if (categoriesIsError) {
    return <p>Error: {categoriesError.message}</p>;
  }

  if (isPending || categoriesPending || status === "loading") {
    return <Loader />;
  }

  console.log("data", typeof data);

  return (
    <div className="mt-8 tablet:mt-12">
      <RecipeCard data={data} displayAll={true} pagination={true} />
      <div className="mt-10 flex items-center justify-center">
        {hasNextPage && (
          <button
            className="rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-primary-color px-4 py-1.5 text-[10px] text-white hover:bg-secondary-light-color focus:outline-none tablet:px-8 tablet:py-3 tablet:text-sm desktop:px-11 desktop:py-4 desktop:text-base"
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              fetchNextPage({ pageParam: currentPage + 1 });
            }}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
          </button>
        )}
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
};

export default CategoryNamePage;
