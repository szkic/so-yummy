"use client";

import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import FollowUs from "./FollowUs";
import PopularRecipe from "./PopularRecipe";
import { useTheme } from "next-themes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
  const { theme } = useTheme();
  const { data: session } = useSession();
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (recipeToAdd) => {
      try {
        axios
          .post("/api/own-recipes", {
            recipe: recipeToAdd,
            user: session.user.email,
          })
          .then((response) => {
            if (response.status === 200) {
              router.push("/my");
            }
          });
      } catch (error) {
        toast.error("Failed to add recipe");
      }
    },
  });

  return (
    <div className="flex flex-col desktop:flex-row desktop:justify-between desktop:gap-32">
      <form
        className="tablet:max-w-[704px] desktop:max-w-[800px]"
        onSubmit={formik.handleSubmit}
      >
        <RecipeDescriptionFields theme={theme} formik={formik} />
        <RecipeIngredientsFields theme={theme} formik={formik} />
        <RecipePreparationFields theme={theme} formik={formik} />
        <button
          className="mt-4 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-secondary-color px-12 py-3 text-sm text-primary-text-color tablet:mt-8 tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-16 tablet:py-3.5 tablet:text-base desktop:mt-11"
          aria-label="Add recipe"
          type="submit"
          onClick={() => toast.success("Recipe added successfully")}
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
      <ToastContainer />
    </div>
  );
};

export default AddRecipeForm;
