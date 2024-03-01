import React from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme } = useTheme();

  return (
    <label
      className="relative inline-flex cursor-pointer items-center"
      onChange={(e) =>
        e.target.checked === true ? setTheme("dark") : setTheme("light")
      }
    >
      <input type="checkbox" value="" className="peer sr-only" />
      <div className="peer h-[27px] w-[61px] rounded-full bg-gray-200  shadow-[inset_-8px_24px_10px_-20px_rgba(66,68,90,0.3)] after:absolute after:start-[3px] after:top-[3px] after:h-[21px] after:w-[21px] after:rounded-full after:bg-white  after:drop-shadow-md after:transition-all after:content-[''] peer-checked:bg-primary-color peer-checked:shadow-[inset_-8px_24px_10px_-20px_rgba(66,68,90,0.3)] peer-checked:after:translate-x-[33px]  peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 "></span>
    </label>
  );
};

export default ThemeToggler;
