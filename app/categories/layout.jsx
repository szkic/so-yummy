"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const active = "text-primary-color border-b-2 pb-5 px-1 border-primary-color";

const CategoriesLayout = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const pathname = usePathname();

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <section>
        <h2 className="text-3xl font-semibold">Categories</h2>
        {isLoading ? (
          <div className="mt-8 text-center">
            <PropagateLoader color="#8BAA36" />
          </div>
        ) : (
          <>
            <div>
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
            </div>
            {children}
          </>
        )}
      </section>
    </>
  );
};

export default CategoriesLayout;
