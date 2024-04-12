"use client";

import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import FollowUs from "./FollowUs";
import PopularRecipe from "./PopularRecipe";
import { nanoid } from "nanoid";
import { useTheme } from "next-themes";
import axios from "axios";
import { useSession } from "next-auth/react";

const AddRecipeForm = () => {
  const [recipeInfo, setRecipeInfo] = useState({
    title: "",
    description: "",
    category: "",
    time: "",
  });
  const [ingredients, setIngredients] = useState([
    {
      id: "",
      ingredient: "",
      quantity: "",
      measure: "",
    },
  ]);
  const [instructions, setInstructions] = useState("");
  const { theme } = useTheme();
  const { data: session } = useSession();

  const recipeToAdd = {
    ...recipeInfo,
    ingredients,
    instructions,
  };

  const handleAddRecipe = () => {
    return axios.post("/api/own-recipes", {
      recipe: recipeToAdd,
      user: session.user.email,
    });
  };

  console.log("recipe", recipeToAdd);

  return (
    <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:gap-32">
      <div className="tablet:max-w-[704px] desktop:max-w-[800px]">
        <RecipeDescriptionFields setRecipeInfo={setRecipeInfo} theme={theme} />
        <RecipeIngredientsFields
          ingredients={ingredients}
          setIngredients={setIngredients}
          theme={theme}
        />
        <RecipePreparationFields
          instructions={instructions}
          setInstructions={setInstructions}
          theme={theme}
        />
        <button
          className="mt-4 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-secondary-color px-12 py-3 text-sm text-primary-text-color tablet:mt-8 tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-16 tablet:py-3.5 tablet:text-base desktop:mt-11"
          aria-label="Add recipe"
          onClick={handleAddRecipe}
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

// "title": "New York cheesecake", ✅
// "category": "Dessert", ✅
// "area": "American",
// "instructions":
// "description": "A classic dessert made with cream cheese and a graham cracker crust, creamy and indulgent.", ✅
// "thumb": "https://www.themealdb.com/images/media/meals/swttys15✅
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
//  "ingredients": [
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e372e"
//         },
//         "measure": "2"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e372c"
//         },
//         "measure": "1tbsp"
//       },
