"use client";

import FavoritesList from "@components/FavoritesList";
import Loader from "@components/Loader";
import MainTitle from "@components/MainTitle";
import Paginator from "@components/Paginator";
import { useQuery } from "@tanstack/react-query";
import { fetchFavorites } from "@utils/fetchers";
import { useSession } from "next-auth/react";

const FavoritePage = () => {
  const { data: session } = useSession();

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => fetchFavorites(session.user.email),
    refetchOnMount: "always",
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <section>
      <MainTitle name="Favorites" />
      {data.length === 0 ? (
        <p className="flex items-center justify-center text-center text-2xl">
          Please add recipes to see them here
        </p>
      ) : (
        <div>
          <FavoritesList data={data} refetch={refetch} />
        </div>
      )}
      <Paginator />
    </section>
  );
};

export default FavoritePage;
