"use client";

import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import FollowUs from "./FollowUs";
import PopularRecipe from "./PopularRecipe";

const AddRecipeForm = () => {
  const [recipeInfo, setRecipeInfo] = useState({
    title: "",
    description: "",
    category: "",
    time: "",
  });
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      ingredient: "",
      quantity: "",
      measure: "",
    },
  ]);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:gap-32">
      <div className="tablet:max-w-[704px] desktop:max-w-[800px]">
        <RecipeDescriptionFields setRecipeInfo={setRecipeInfo} />
        <RecipeIngredientsFields
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        <RecipePreparationFields
          instructions={instructions}
          setInstructions={setInstructions}
        />
        <button
          className="mt-4 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-secondary-color px-12 py-3 text-sm text-primary-text-color tablet:mt-8 tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-16 tablet:py-3.5 tablet:text-base desktop:mt-11"
          aria-label="Add recipe"
        >
          Add
        </button>
      </div>
      <div>
        <div className="hidden desktop:block">
          <h3 className="mb-10 text-2xl font-semibold">Follow us</h3>
          <FollowUs />
        </div>
        <div className="mt-20 max-w-xs tablet:mt-24 tablet:max-w-[704px]">
          <PopularRecipe />
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;

// "title": "New York cheesecake",
// "category": "Dessert",
// "area": "American",
// "instructions":
// "description": "A classic dessert made with cream cheese and a graham cracker crust, creamy and indulgent.",
// "thumb": "https://www.themealdb.com/images/media/meals/swttys1511385853.jpg",
// "preview": "https://ftp.goit.study/img/so-yummy/preview/New%20York%20cheesecake.jpg",
// "time": "195",
// "favorites": [],
// "youtube": "https://www.youtube.com/watch?v=tspdJ6hxqnc",
// "tags": [
//   "Desert",
//   "Dairy",
//   "Pudding",
//   "Cake",
//   "Breakfast"
// ],
// "createdAt": {
//   "$date": {
//     "$numberLong": "1678562733242"
//   }
// },
// "updatedAt": {
//   "$date": {
//     "$numberLong": "1679514447710"
//   }
// },
// "ingredients": [
