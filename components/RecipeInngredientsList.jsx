import React from "react";

const RecipeInngredientsList = () => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full border-separate border-spacing-y-4 text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead class="bg-primary-color text-xs text-primary-text-color dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="rounded-s-lg px-6 py-3 text-[10px] font-semibold"
            >
              Ingredients
            </th>
            <th scope="col" class="px-6 py-3 text-[10px] font-semibold">
              Number
            </th>
            <th
              scope="col"
              class="rounded-e-lg px-6 py-3 text-[10px] font-semibold"
            >
              Add to list
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-20 bg-light-primary-color dark:bg-gray-800">
            <th
              scope="row"
              class="whitespace-nowrap rounded-s-lg px-6 py-4 text-xs font-medium text-gray-900 dark:text-white"
            >
              Salmonbh
            </th>
            <td class="px-6 py-4 text-[10px]">
              <p className="bg-primary-color text-center font-semibold text-primary-text-color">
                2 chopped
              </p>
            </td>
            <td class="rounded-e-lg px-6 py-4">
              <div class="flex items-center justify-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-light-primary-color text-primary-color focus:ring-2  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
                <div class="me-4 flex items-center">
                  <input
                    checked
                    id="green-checkbox"
                    type="checkbox"
                    value=""
                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 !text-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-green-600"
                  />
                  <label
                    for="green-checkbox"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Green
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr class="h-20 bg-light-primary-color dark:bg-gray-800">
            <th
              scope="row"
              class="whitespace-nowrap rounded-s-lg px-6 py-4 text-xs font-medium text-gray-900 dark:text-white"
            >
              Salmonbh
            </th>
            <td class="px-6 py-4 text-[10px]">
              <p className="bg-primary-color text-center font-semibold text-primary-text-color">
                2 chopped
              </p>
            </td>
            <td class="rounded-e-lg px-6 py-4">
              <div class="flex items-center justify-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
          </tr>
          <tr class="h-20 bg-light-primary-color dark:bg-gray-800">
            <th
              scope="row"
              class="whitespace-nowrap rounded-s-lg px-6 py-4 text-xs font-medium text-gray-900 dark:text-white"
            >
              Salmonbh
            </th>
            <td class="px-6 py-4 text-[10px]">
              <p className="bg-primary-color text-center font-semibold text-primary-text-color">
                2 chopped
              </p>
            </td>
            <td class="rounded-e-lg px-6 py-4">
              <div class="flex items-center justify-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipeInngredientsList;
