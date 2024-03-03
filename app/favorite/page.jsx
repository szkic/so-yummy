import MainTitle from "@components/MainTitle";
import MyRecipesList from "@components/MyRecipesList";
import Paginator from "@components/Paginator";
import React from "react";

const FavoritePage = () => {
  return (
    <section>
      <MainTitle name="Favorites" />
      <MyRecipesList theme="favorites" />
      <Paginator />
    </section>
  );
};

export default FavoritePage;
