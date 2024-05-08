import MainTitle from "@components/MainTitle";
import MyRecipesList from "@components/MyRecipesList";
// import Paginator from "@components/Paginator";

const MyRecipesPage = () => {
  return (
    <section>
      <MainTitle name="My recipes" />
      <MyRecipesList />
      {/* <Paginator /> */}
    </section>
  );
};

export default MyRecipesPage;
