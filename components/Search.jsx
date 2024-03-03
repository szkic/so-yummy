"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const Search = ({ btnColor, searchType, queryValues }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams();

    params.set(name, value);

    return params.toString();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue !== "" && searchType !== "") {
      router.push(
        `?${createQueryString(searchType.toLowerCase(), searchValue)}`,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative w-[295px] tablet:w-[362px] desktop:w-[510px]">
        <input
          type="search"
          id="search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={queryValues || searchValue}
          className="block w-full rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 outline-none focus:border-[#23262a33] focus:ring-[#23262a33] dark:border-gray-600 "
          placeholder="Search"
          required
        />
        {pathname === "/" ? (
          <Link href={`/search?title=${searchValue}`}>
            <button
              type="submit"
              className={`absolute right-[0px] top-0 h-full rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] ${
                btnColor === "green" ? "bg-primary-color" : "bg-secondary-color"
              }  px-8 text-sm font-medium text-white hover:bg-secondary-light-color focus:outline-none focus:ring-4 focus:ring-secondary-light-color tablet:px-14`}
              aria-label="Search"
            >
              Search
            </button>
          </Link>
        ) : (
          <button
            type="submit"
            className={`absolute right-[0px] top-0 h-full rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] ${
              btnColor === "green" ? "bg-primary-color" : "bg-secondary-color"
            }  px-8 text-sm font-medium text-white hover:bg-secondary-light-color focus:outline-none focus:ring-4 focus:ring-secondary-light-color tablet:px-14`}
            aria-label="Search"
          >
            Search
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
