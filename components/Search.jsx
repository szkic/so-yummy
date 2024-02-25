"use client";

import { useRouter } from "next/navigation";

const Search = ({ btnColor, searchType, createQueryString }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

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
        {/* <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"></div> */}
        <input
          type="search"
          id="search"
          className="block w-full rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 outline-none focus:border-[#23262a33] focus:ring-[#23262a33] dark:border-gray-600 "
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className={`absolute right-[0px] top-0 h-full rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] ${
            btnColor === "green" ? "bg-primary-color" : "bg-secondary-color"
          }  px-8 text-sm font-medium text-white hover:bg-secondary-light-color focus:outline-none focus:ring-4 focus:ring-secondary-light-color tablet:px-14`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
