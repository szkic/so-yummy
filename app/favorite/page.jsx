import FavoritesList from "@components/FavoritesList";
import MainTitle from "@components/MainTitle";
import MyRecipesList from "@components/MyRecipesList";
import Paginator from "@components/Paginator";

const FavoritePage = () => {
  return (
    <section>
      <MainTitle name="Favorites" />
      <FavoritesList />
      <Paginator />
    </section>
  );
};

export default FavoritePage;
