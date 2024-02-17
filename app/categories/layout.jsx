"use client";

import Loader from "@components/Loader";
import MainTitle from "@components/MainTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@utils/fetchers";
import Link from "next/link";
import { usePathname } from "next/navigation";

const active = "text-primary-color border-b-2 pb-5 px-1 border-primary-color";

const CategoriesLayout = ({ children }) => {
  const pathname = usePathname();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <section>
        <MainTitle name={"Categories"} />
        {isPending ? (
          <Loader />
        ) : (
          <>
            <div>
              <ul className="flex gap-7 overflow-x-auto overflow-y-hidden border-b-[1px] pb-5 tablet:gap-14">
                {data.map((category) => (
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
