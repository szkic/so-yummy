import axios from "axios";
import RecipeItem from "./RecipeItem";

const FavoritesList = ({ data }) => {
  const handleDeleteFromFavorites = async (id) => {
    try {
      const response = await axios.delete("/api/favorite", {
        data: { user: session.user.email, id },
      });

      refetch();

      console.log("Item deleted from favorites:", response.data);
    } catch (error) {
      console.error("Failed to delete item from favorites:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 tablet:gap-10 desktop:gap-12">
      {data.map((recipe) => (
        <RecipeItem
          key={recipe._id}
          recipe={recipe}
          theme="favorites"
          onDelete={handleDeleteFromFavorites}
        />
      ))}
    </div>
  );
};

export default FavoritesList;
