"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMainPage } from "@utils/fetchers";
import Image from "next/image";
import React from "react";
import Loader from "./Loader";

const categories = ["Breakfast", "Miscellaneous", "Chicken", "Desserts"];

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const PreviewCategories = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["main-recipes"],
    queryFn: fetchMainPage,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (isPending) {
    return <Loader />;
  }

  const displayHideCategories = (index) => {
    if (index === 1) return "hidden tablet:flex";
    if (index > 1) return "hidden desktop:flex";
  };

  return (
    <section className="pt-16">
      <div className="flex flex-col items-start gap-8 tablet:gap-12 desktop:gap-24">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col gap-8 tablet:gap-10 desktop:gap-12"
          >
            <h2 className="text-3xl font-semibold">
              {capitalizeFirstLetter(key)}
            </h2>
            <div className="flex gap-8 desktop:gap-3.5">
              {value.map((el, index) => (
                <div
                  className={`relative flex justify-center ${displayHideCategories(
                    index,
                  )}`}
                  key={el.title}
                >
                  <Image
                    src={el.thumb}
                    width={343}
                    height={323}
                    alt={el.description}
                    className="h-auto rounded-lg tablet:w-[336px] desktop:w-[300px]"
                  />
                  <div className="absolute bottom-6 h-[52px] w-[300px] rounded-lg bg-primary-text-color p-4 font-medium leading-5 desktop:w-[268px]">
                    {el.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="rounded-md bg-primary-color px-6 py-2.5 text-sm text-primary-text-color">
                See all
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviewCategories;
