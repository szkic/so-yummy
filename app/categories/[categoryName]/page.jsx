"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategoriesPage } from "@utils/fetchers";
import { useParams } from "next/navigation";

const CategoryNamePage = () => {
  const params = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["categoriesPage"],
    queryFn: () => fetchCategoriesPage(category),
  });

  console.log(params);

  return <div>page</div>;
};

export default CategoryNamePage;
