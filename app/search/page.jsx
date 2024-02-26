"use client";

import MainTitle from "@components/MainTitle";
import Search from "@components/Search";
import SearchTypeSelector from "@components/SearchTypeSelector";
import SearchedRecipesList from "@components/SearchedRecipesList";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const SearchPage = () => {
  const [searchType, setSearchType] = useState("");
  const [data, setData] = useState([]);

  // const searchParams = useSearchParams();
  // const title = searchParams.get("title");
  // const ingredients = searchParams.get("ingredienrs");

  // const createQueryString = useCallback((name, value) => {
  //   const params = new URLSearchParams();

  //   params.set(name, value);

  //   return params.toString();
  // }, []);

  console.log(data.length);

  return (
    <section>
      <MainTitle name="Search" />
      <div className="flex flex-col items-center">
        <Search
          btnColor="green"
          searchType={searchType}
          // createQueryString={createQueryString}
          setData={setData}
        />
        <SearchTypeSelector
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <SearchedRecipesList data={data} />
      </div>
    </section>
  );
};

export default SearchPage;
