import Link from "next/link";
import React from "react";

const categories = [
  "Beef",
  "Breakfast",
  "Chiken",
  "Desserts",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
];

const active = "font-semibold text-primary-color";

const CategoriesPage = () => {
  return (
    <>
      <section>
        <h2 className="text-3xl font-semibold">Categories</h2>
        <ul className="mt-12 flex gap-7 overflow-auto border-b-2 pb-5 tablet:gap-14 desktop:mt-24">
          {categories.map((category) => (
            <li
              key={category}
              className="text-inactive-text-light px-5 text-sm tablet:text-lg tablet:text-inactive-text"
            >
              <Link href={`/categories/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CategoriesPage;
