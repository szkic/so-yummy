import MainTitle from "@components/MainTitle";
import MyRecipesList from "@components/MyRecipesList";
import Paginator from "@components/Paginator";

const MyRecipesPage = () => {
  return (
    <section>
      <MainTitle name="My recipes" />
      <MyRecipesList theme="my" />
      <Paginator />
    </section>
  );
};

export default MyRecipesPage;
