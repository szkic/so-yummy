"use client";

import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import FollowUs from "./FollowUs";
import PopularRecipe from "./PopularRecipe";

const AddRecipeForm = () => {
  const [recipeState, setRecipeState] = useState(null);

  return (
    <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:gap-32">
      <div className="tablet:max-w-[704px] desktop:max-w-[800px]">
        <RecipeDescriptionFields />
        <RecipeIngredientsFields />
        <RecipePreparationFields />
        <button className="mt-4 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-secondary-color px-12 py-3 text-sm text-primary-text-color tablet:mt-8 tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-16 tablet:py-3.5 tablet:text-base desktop:mt-11">
          Add
        </button>
      </div>
      <div>
        <div className="hidden desktop:block">
          <h3 className="mb-10 text-2xl font-semibold">Follow us</h3>
          <FollowUs />
        </div>
        <div className="mt-20 tablet:mt-24">
          <PopularRecipe />
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
