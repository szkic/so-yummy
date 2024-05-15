"use client";

import { use, useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import FollowUs from "./FollowUs";
import PopularRecipe from "./PopularRecipe";
import { useTheme } from "next-themes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  title: "",
  description: "",
  category: "",
  time: "",
  ingredients: [
    {
      id: "",
      ingredient: "",
      quantity: "",
      measure: "",
    },
  ],
  instructions: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  ingredients: Yup.array().of(
    Yup.object().shape({
      ingredient: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      measure: Yup.string().required("Required"),
    }),
  ),
  instructions: Yup.string().required("Required"),
});

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

  // console.log("recipeToAdd", recipeToAdd);

  // const handleAddRecipe = () => {
  //   return axios.post("/api/own-recipes", {
  //     recipe: recipeToAdd,
  //     user: session.user.email,
  //   });
  // };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:gap-32">
      <form
        className="tablet:max-w-[704px] desktop:max-w-[800px]"
        onSubmit={formik.handleSubmit}
      >
        <RecipeDescriptionFields
          setRecipeInfo={setRecipeInfo}
          theme={theme}
          formik={formik}
        />
        <RecipeIngredientsFields
          ingredients={ingredients}
          setIngredients={setIngredients}
          theme={theme}
          formik={formik}
        />
        <RecipePreparationFields
          instructions={instructions}
          setInstructions={setInstructions}
          theme={theme}
          formik={formik}
        />
        <button
          className="mt-4 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-secondary-color px-12 py-3 text-sm text-primary-text-color tablet:mt-8 tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-16 tablet:py-3.5 tablet:text-base desktop:mt-11"
          aria-label="Add recipe"
          type="submit"
          // onClick={handleAddRecipe}
        >
          Add
        </button>
      </form>
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
