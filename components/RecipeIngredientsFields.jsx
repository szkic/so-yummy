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
import { nanoid } from "nanoid";

const MEASURES = ["tbs", "tsp", "kg", "g"];

const RecipeIngredientsFields = ({ ingredients, setIngredients }) => {
  // const [number, setNumber] = useState(1);
  // const [quantity, setQuantity] = useState("");
  // const [measure, setMeasure] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [options, setOptions] = useState([]);
  const [openStates, setOpenStates] = useState(
    Array(ingredients.length).fill(false),
  );

  const loading = isOpen && options.length === 0;

  useEffect(() => {
    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetchIngredients();

      if (isOpen) {
        setOptions([...response]);
      }
    })();

    return () => {
      setIsOpen(false);
    };
  }, [isOpen]);

  const handleAddIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      {
        id: nanoid(),
        ingredient: "",
        quantity: "",
        measure: "",
      },
    ]);
  };

  const handleRemoveIngredient = (id) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
  };

  const handleRemoveLastIngredient = () => {
    const removeLastIngredient = ingredients.slice(0, -1);
    setIngredients(removeLastIngredient);
  };

  const ingredientsFormItem = ingredients.map((ingredient) => (
    <div className="mt-6 flex items-center justify-between" key={ingredient.id}>
      <FormControl className="w-40 tablet:w-96" size="small">
        <Autocomplete
          id={ingredient.id}
          size="small"
          // open={openStates[ingredient.id - 1]}
          onOpen={() => {
            const newOpenStates = [...openStates];
            newOpenStates[ingredient.id - 1] = true;
            setOpenStates(newOpenStates);
            setIsOpen(true);
          }}
          onClose={() => {
            const newOpenStates = [...openStates];
            newOpenStates[ingredient.id - 1] = false;
            setOpenStates(newOpenStates);
            setIsOpen(false);
          }}
          onChange={(e, newValue) =>
            setIngredients((prev) =>
              prev.map((item) => {
                if (item.id === ingredient.id) {
                  return { ...item, ingredient: newValue };
                }
                return item;
              }),
            )
          }
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
          value={ingredient.quantity || ""}
          label="Quantity"
          onChange={(e) => {
            // const regex = /^[0-9]*(\.[0-9]{0,2})?$/;
            // if (e.target.value === "" || regex.test(e.target.value)) {
            //   setQuantity(e.target.value);
            // }

            setIngredients((prev) =>
              prev.map((item) => {
                if (item.id === ingredient.id) {
                  return { ...item, quantity: e.target.value };
                }
                return item;
              }),
            );
          }}
          size="small"
        ></TextField>
      </FormControl>
      <FormControl className="w-16 tablet:w-28" size="small">
        <InputLabel id="measure">Measure</InputLabel>
        <Select
          labelId="measure"
          id="measure"
          value={ingredient.measure || ""}
          label="Measure"
          // onChange={(e) => setMeasure(e.target.value)}
          onChange={(e) =>
            setIngredients((prev) =>
              prev.map((item) => {
                if (item.id === ingredient.id) {
                  return { ...item, measure: e.target.value };
                }
                return item;
              }),
            )
          }
        >
          {MEASURES.map((measure) => (
            <MenuItem key={measure} value={measure}>
              {measure}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CloseIcon
        className="ml-2"
        fontSize="small"
        onClick={() => handleRemoveIngredient(ingredient.id)}
      />
    </div>
  ));

  return (
    <>
      <div className="mt-11 flex items-center justify-between tablet:mt-24">
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
                // if (number === 0) return;
                // setNumber((prev) => prev - 1);

                handleRemoveLastIngredient();
              }}
              aria-label="Decrement recipe ingredient"
            >
              <svg
                className="h-3 w-3 text-gray-300 dark:text-white tablet:h-4 tablet:w-4"
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
              defaultValue={ingredients.length}
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="flex h-7 items-center rounded-e-3xl border border-l-0 border-gray-300 p-3  focus:outline-none   dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
              onClick={() => {
                // setNumber((prev) => prev + 1);
                handleAddIngredient();
              }}
              aria-label="Increment recipe ingredient"
            >
              <svg
                className="h-3 w-3 text-gray-300 dark:text-white tablet:h-4 tablet:w-4"
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

      {ingredientsFormItem}
    </>
  );
};

export default RecipeIngredientsFields;
