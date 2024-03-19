import IngredientsShoppingList from "@components/IngredientsShoppingList";
import MainTitle from "@components/MainTitle";
import React from "react";

const ShoppingListPage = () => {
  return (
    <section>
      <MainTitle name={"Shopping list"} />
      <IngredientsShoppingList />
    </section>
  );
};

export default ShoppingListPage;
