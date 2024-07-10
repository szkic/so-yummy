"use client";

import NotFoundPage from "@app/not-found";
import Loader from "@components/Loader";
import Paginator from "@components/Paginator";
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
    isFetchingNextPage,
    status,
    isFetching,
    isPending,
  } = useInfiniteQuery({
    queryKey: ["categoriesPage", categoryName],
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

  console.log("data", data);

  return (
    <div className="mt-8 tablet:mt-12">
      <RecipeCard data={data} displayAll={true} pagination={true} />
      <div className="mt-10 flex items-center justify-center">
        {hasNextPage && (
          <Paginator
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            fetchNextPage={fetchNextPage}
          />
        )}

        <div>{isFetching && !isFetchingNextPage ? <Loader /> : null}</div>
      </div>
    </div>
  );
};

export default CategoryNamePage;
