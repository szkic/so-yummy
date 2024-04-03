"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchShoppingList } from "@utils/fetchers";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IngredientsShoppingList = () => {
  const { data: session } = useSession();

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["shopping-list"],
    queryFn: () => fetchShoppingList({ user: session.user.email }),
    refetchOnMount: "always",
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  console.log("data", data);

  const handleDeleteIngredient = async (id) => {
    console.log("id", id);

    try {
      const response = await axios.delete("/api/shopping-list", {
        data: {
          user: session.user.email,
          id,
        },
      });

      toast.success("Ingredient removed successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error while removing ingredient!");
    } finally {
      refetch();
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full  border-spacing-y-4 text-left text-sm text-gray-500 rtl:text-right  tablet:border-spacing-y-6">
          <thead className="bg-primary-color text-xs text-primary-text-color">
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
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ing) => (
              <tr className="h-20 tablet:h-44 desktop:h-48 " key={ing.ttl}>
                <th
                  scope="row"
                  className="whitespace-nowrap border-b-2 border-inactive-text-light py-4 pl-2 text-xs font-medium text-gray-900 dark:border-opacity-30 dark:text-white tablet:pl-6 tablet:text-2xl desktop:pl-10"
                >
                  <div className="flex items-center gap-3 tablet:gap-6 desktop:gap-16 ">
                    <Image
                      src={ing.thb}
                      alt="image"
                      width={57}
                      height={57}
                      className="w-auto rounded-lg bg-light-primary-color p-2 tablet:h-[112px]"
                    />
                    <p>{ing.ttl}</p>
                  </div>
                </th>
                <td className="border-b-2 border-inactive-text-light py-4 text-center text-[10px] dark:border-opacity-30">
                  <p className="inline rounded bg-primary-color p-1 text-center font-semibold text-primary-text-color tablet:px-2 tablet:text-lg">
                    {ing.measure}
                  </p>
                </td>
                <td className="border-b-2 border-inactive-text-light py-4 dark:border-opacity-30">
                  <div className="flex items-center justify-center">
                    <CloseIcon
                      className="hover:cursor-pointer"
                      onClick={() => handleDeleteIngredient(ing._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};

export default IngredientsShoppingList;
