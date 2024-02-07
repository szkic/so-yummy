"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMainPage } from "@utils/fetchers";
import React from "react";
import Loader from "./Loader";
import Link from "next/link";
import RecipeCard from "./RecipeCard";

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
                <div key={el.title}>
                  <RecipeCard el={el} index={index} />
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Link href={`/categories/${key}`}>
                <button className="rounded-md bg-primary-color px-6 py-2.5 text-sm text-primary-text-color">
                  See all
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviewCategories;
