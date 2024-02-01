"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const active = "text-primary-color border-b-2 pb-5 px-1 border-primary-color";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();

  const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <section>
        <h2 className="text-3xl font-semibold">Categories</h2>
        <ul className=" mt-12 flex gap-7 overflow-x-auto overflow-y-hidden border-b-[1px] pb-5 tablet:gap-14 desktop:mt-24">
          {categories.map((category) => (
            <li
              key={category}
              className="px-5 text-sm text-inactive-text-light tablet:text-lg tablet:text-inactive-text"
            >
              <Link
                href={`/categories/${category.toLowerCase()}`}
                className={
                  pathname === `/categories/${category.toLowerCase()}`
                    ? active
                    : ""
                }
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CategoriesPage;
