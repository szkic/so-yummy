"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMainPage } from "@utils/fetchers";
import React from "react";
import Loader from "./Loader";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";

const PreviewCategories = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["main-recipes"],
    queryFn: fetchMainPage,
    staleTime: 1000 * 60 * 10,
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

            <RecipeCard data={value} />

            <div className="flex justify-end">
              <Link href={`/categories/${key}`}>
                <button
                  className="rounded-md bg-primary-color px-6 py-2.5 text-sm text-primary-text-color"
                  aria-label="See all"
                >
                  See all
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* tutaj button Other categories */}
    </section>
  );
};

export default PreviewCategories;
