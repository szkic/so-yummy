"use client";

import Loader from "@components/Loader";
import MainTitle from "@components/MainTitle";
import Search from "@components/Search";
import SearchTypeSelector from "@components/SearchTypeSelector";
import SearchedRecipesList from "@components/SearchedRecipesList";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "@utils/fetchers";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [searchType, setSearchType] = useState("");
  const searchParams = useSearchParams();

  const searchParamsKeys = searchParams.keys();
  const queryKeys = Array.from(searchParamsKeys).toString();

  const searchParamsValues = searchParams.values();
  const queryValues = Array.from(searchParamsValues).toString();

  const { isFetching, isError, data, error, refetch } = useQuery({
    queryKey: ["search", queryKeys, queryValues],
    queryFn: () => fetchSearch(queryKeys, queryValues),
    enabled: false,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  useEffect(() => {
    if (queryKeys !== "" && queryValues !== "") {
      refetch();
    }
  }, [queryKeys, queryValues, refetch]);

  return (
    <section>
      <MainTitle name="Search" />
      <div className="flex flex-col items-center">
        <Search btnColor="green" searchType={searchType} />
        <SearchTypeSelector
          searchType={searchType}
          setSearchType={setSearchType}
        />
        {isFetching && <Loader />}
        {data && <SearchedRecipesList data={data} />}
      </div>
    </section>
  );
};

export default SearchPage;
