import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchIngredientsById } from "@utils/fetchers";
import Loader from "./Loader";

const RecipeInngredientsList = ({ ingredients, id }) => {
  const ingredientsIds = ingredients.map((ingredient) => ingredient.id);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ingredient-search"],
    queryFn: () => fetchIngredientsById(id, ingredientsIds),
    refetchOnMount: "always",
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-4 text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 tablet:border-spacing-y-6">
        <thead className="bg-primary-color text-xs text-primary-text-color dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="rounded-s-lg py-3 pl-3.5 pr-28 text-[10px] font-semibold tablet:py-5 tablet:pl-8 tablet:text-lg desktop:pl-10"
            >
              Ingredients
            </th>
            <th
              scope="col"
              className="py-3 text-center text-[10px] font-semibold tablet:py-5 tablet:text-lg"
            >
              Number
            </th>
            <th
              scope="col"
              className="rounded-e-lg py-3 pr-3.5 text-center text-[10px] font-semibold tablet:py-5 tablet:text-lg"
            >
              Add to list
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ing) => (
            <tr
              className="h-20 bg-light-primary-color dark:bg-gray-800 tablet:h-44 desktop:h-48"
              key={ing.ttl}
            >
              <th
                scope="row"
                className="whitespace-nowrap rounded-s-lg py-4 pl-2 text-xs font-medium text-gray-900 dark:text-white tablet:pl-6 tablet:text-2xl desktop:pl-10"
              >
                <div className="flex items-center gap-3 tablet:gap-6 desktop:gap-16">
                  <Image
                    src={ing.thb}
                    alt="image"
                    width={57}
                    height={57}
                    className="w-auto tablet:h-[112px]"
                  />
                  <p>{ing.ttl}</p>
                </div>
              </th>
              <td className="py-4 text-center text-[10px]">
                <p className="inline rounded bg-primary-color p-1 text-center font-semibold text-primary-text-color tablet:px-2 tablet:text-lg">
                  {ing.measure}
                </p>
              </td>
              <td className="rounded-e-lg py-4">
                <div className="flex items-center justify-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-light-primary-color text-primary-color focus:ring-2 focus:ring-primary-color dark:border-gray-600 dark:bg-gray-700  dark:ring-offset-gray-800 dark:focus:ring-primary-color dark:focus:ring-offset-gray-800 tablet:h-8 tablet:w-8"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeInngredientsList;
