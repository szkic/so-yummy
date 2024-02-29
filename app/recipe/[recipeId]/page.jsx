import RecipeInngredientsList from "@components/RecipeInngredientsList";
import RecipePageHero from "@components/RecipePageHero";

const page = () => {
  return (
    <>
      <RecipePageHero />
      <RecipeInngredientsList />
    </>
  );
};

export default page;
