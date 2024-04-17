import Image from "next/image";
import vegetables from "../public/assets/images/vegetables.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { fetchFavorites } from "@utils/fetchers";
import { useEffect, useState } from "react";

const RecipePageHero = ({ title, description, time, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { data: session } = useSession();

  const favorite = useQuery({
    queryKey: ["favorites"],
    queryFn: () => fetchFavorites(session.user.email),
    refetchOnMount: "always",
  });

  useEffect(() => {
    const checkIfFavoriteData = favorite.data?.find(
      (recipe) => recipe._id === id,
    );
    setIsFavorite(checkIfFavoriteData !== undefined);
  }, [favorite.data, id]);

  const handleAddToFavorites = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/favorite", {
        user: session.user.email,
        id,
      });

      toast.success("Recipe added to favorites");
      setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromFavorites = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("/api/favorite", {
        data: {
          user: session.user.email,
          id,
        },
      });

      toast.success("Recipe removed from favorites");
      setIsFavorite(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <Image
          src={vegetables}
          alt="vegetables"
          className="absolute left-0 top-0 -z-10 h-[455px] w-full object-cover tablet:h-[495px]"
        />

        <div className="flex max-w-[300px] flex-col items-center pb-24 pt-8 tablet:max-w-[516px] tablet:pt-7 desktop:max-w-[656px] desktop:pt-12">
          <h2 className="text-center text-2xl font-semibold text-primary-color tablet:text-[44px] tablet:leading-[50px]">
            {title}
          </h2>
          <p className="mt-4 text-center text-xs leading-4 tablet:mt-6 tablet:text-lg tablet:leading-6">
            {description}
          </p>
          {!isFavorite ? (
            <button
              className="mt-6 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] border-2 border-primary-color px-5 py-2.5 text-[10px] tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-11 tablet:py-5 tablet:text-base"
              aria-label="Add to favorite"
              onClick={handleAddToFavorites}
            >
              Add to favorite recipes
            </button>
          ) : (
            <button
              className="mt-6 rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] border-2 border-primary-color px-5 py-2.5 text-[10px] tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-11 tablet:py-5 tablet:text-base"
              aria-label="Add to favorite"
              onClick={handleRemoveFromFavorites}
            >
              Remove from favorite recipes
            </button>
          )}
          <p className="mt-10 flex items-center justify-center gap-2 text-[10px] font-medium tablet:text-sm">
            <AccessTimeIcon fontSize="small" /> {time} min
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipePageHero;
