import RecipeInngredientsList from "@components/RecipeInngredientsList";
import RecipePageHero from "@components/RecipePageHero";
import RecipePreparation from "@components/RecipePreparation";

const page = () => {
  return (
    <>
      <RecipePageHero />
      <RecipeInngredientsList />
      <RecipePreparation />
    </>
  );
};

export default page;
