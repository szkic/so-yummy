import axios from "axios";
import RecipeItem from "./RecipeItem";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

const FavoritesList = ({ data, refetch }) => {
  const { data: session } = useSession();

  const mutation = useMutation({
    mutationFn: (id) =>
      axios.delete("/api/favorite", {
        data: { user: session.user.email, id },
      }),
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteFromFavorites = async (id) => {
    try {
      mutation.mutateAsync(id);
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
