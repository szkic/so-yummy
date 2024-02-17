"use client";

import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";

const AddRecipeForm = () => {
  const [recipeState, setRecipeState] = useState(null);

  return (
    <>
      <RecipeDescriptionFields />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
    </>
  );
};

export default AddRecipeForm;
