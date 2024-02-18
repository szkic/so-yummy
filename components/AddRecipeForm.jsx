"use client";

import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";

const AddRecipeForm = () => {
  const [recipeState, setRecipeState] = useState(null);

  return (
    <div className="tablet:max-w-[704px] desktop:max-w-[800px]">
      <RecipeDescriptionFields />
      <RecipeIngredientsFields />
      {/* <RecipePreparationFields /> */}
    </div>
  );
};

export default AddRecipeForm;
