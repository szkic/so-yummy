"use client";

import {
  Autocomplete,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { fetchIngredients } from "@utils/fetchers";

const RecipeIngredientsFields = () => {
  const [number, setNumber] = useState(0);
  // const [ingredient, setIngredient] = useState(""); - PRZYDA SIĘ DO ZBIERANIA STANU?
  const [quantity, setQuantity] = useState("");
  const [measure, setMeasure] = useState("");
  const [hoverColorPlus, sethoverColorPlus] = useState(false);
  const [hoverColorMinus, sethoverColorMinus] = useState(false);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetchIngredients();

      if (active) {
        setOptions([...response]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <>
      <div className="mt-11 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Ingredients</h3>

        <form className="w-[92px] tablet:w-[110px]">
          <label
            htmlFor="quantity-input"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <div className="relative flex max-w-[8rem] items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="flex h-7 items-center rounded-s-3xl border border-r-0 border-gray-300 p-3  focus:outline-none  dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
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
              data-input-counter-increment="quantity-input"
              className="flex h-7 items-center rounded-e-3xl border border-l-0 border-gray-300 p-3  focus:outline-none   dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
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

      <div className="mt-6 flex items-center justify-between">
        <FormControl className="w-40 tablet:w-96" size="small">
          <Autocomplete
            id="ingredient"
            size="small"
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option === value}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Ingredient"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        <FormControl className="w-16 tablet:w-28">
          <TextField
            id="quantity"
            value={quantity}
            label="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
            size="small"
          ></TextField>
        </FormControl>
        <FormControl className="w-16 tablet:w-28" size="small">
          <InputLabel id="measure">Measure</InputLabel>
          <Select
            labelId="measure"
            id="measure"
            value={measure}
            label="Measure"
            onChange={(e) => setMeasure(e.target.value)}
          >
            <MenuItem value="tbs">tbs</MenuItem>
            <MenuItem value="tsp">tsp</MenuItem>
            <MenuItem value="kg">kg</MenuItem>
            <MenuItem value="g">g</MenuItem>
          </Select>
        </FormControl>
        <CloseIcon className="ml-2" fontSize="small" />
      </div>
    </>
  );
};

export default RecipeIngredientsFields;
