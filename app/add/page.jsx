import AddRecipeForm from "@components/AddRecipeForm";
import MainTitle from "@components/MainTitle";
import React from "react";

const AddRecipesPage = () => {
  return (
    <section>
      <MainTitle name={"Add recipe"} />
      <AddRecipeForm />
    </section>
  );
};

export default AddRecipesPage;
