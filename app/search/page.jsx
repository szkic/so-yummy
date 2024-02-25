"use client";

import MainTitle from "@components/MainTitle";
import Search from "@components/Search";
import SearchTypeSelector from "@components/SearchTypeSelector";
import SearchedRecipesList from "@components/SearchedRecipesList";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const SearchPage = () => {
  const [searchType, setSearchType] = useState("");

  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const ingredients = searchParams.get("ingredienrs");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <section>
      <MainTitle name="Search" />
      <div className="flex flex-col items-center">
        <Search
          btnColor="green"
          searchType={searchType}
          createQueryString={createQueryString}
        />
        <SearchTypeSelector
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <SearchedRecipesList />
      </div>
    </section>
  );
};

export default SearchPage;
