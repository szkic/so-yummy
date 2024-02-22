import MainTitle from "@components/MainTitle";
import Search from "@components/Search";
import SearchTypeSelector from "@components/SearchTypeSelector";
import SearchedRecipesList from "@components/SearchedRecipesList";
import React from "react";

const SearchPage = () => {
  return (
    <section>
      <MainTitle name="Search" />
      <div className="flex flex-col items-center">
        <Search btnColor="green" />
        <SearchTypeSelector />
        <SearchedRecipesList />
      </div>
    </section>
  );
};

export default SearchPage;
