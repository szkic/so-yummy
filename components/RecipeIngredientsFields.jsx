"use client";

import { useState } from "react";

const RecipeIngredientsFields = () => {
  const [number, setNumber] = useState(0);
  const [hoverColorPlus, sethoverColorPlus] = useState(false);
  const [hoverColorMinus, sethoverColorMinus] = useState(false);

  return (
    <div className="mt-11">
      <h3>Ingredients</h3>

      <form className="mx-auto w-[92px] tablet:w-[110px]">
        <label
          htmlFor="quantity-input"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <div className="relative flex max-w-[8rem] items-center">
          <button
            type="button"
            id="decrement-button"
            value="-"
            data-input-counter-decrement="quantity-input"
            className="flex h-7 items-center rounded-s-3xl border border-r-0 border-gray-300 p-3  focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
            onClick={() => {
              if (number === 0) return;
              setNumber((prev) => prev - 1);
            }}
            onMouseEnter={() => sethoverColorMinus(true)}
            onMouseLeave={() => sethoverColorMinus(false)}
          >
            <svg
              className={`h-3 w-3 text-gray-300 dark:text-white tablet:h-4 tablet:w-4 ${
                hoverColorMinus && "text-primary-color"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="block h-7 w-full border border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 tablet:h-8 tablet:text-base"
            placeholder="999"
            required
            defaultValue={number}
          />
          <button
            type="button"
            id="increment-button"
            value="+"
            data-input-counter-increment="quantity-input"
            className="flex h-7 items-center rounded-e-3xl border border-l-0 border-gray-300 p-3  focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
            onClick={() => setNumber((prev) => prev + 1)}
            onMouseEnter={() => sethoverColorPlus(true)}
            onMouseLeave={() => sethoverColorPlus(false)}
          >
            <svg
              className={`h-3 w-3 text-gray-300 dark:text-white tablet:h-4 tablet:w-4 ${
                hoverColorPlus && "text-primary-color"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeIngredientsFields;
