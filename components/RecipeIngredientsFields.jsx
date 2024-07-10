import {
  Autocomplete,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { fetchIngredients } from "@utils/fetchers";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const MEASURES = ["tbs", "tsp", "kg", "g"];

const RecipeIngredientsFields = ({ theme, formik }) => {
  const [ingredients, setIngredients] = useState([
    {
      id: "",
      ingredient: "",
      quantity: "",
      measure: "",
    },
  ]);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [ingredientsTitleWithId, setIngredientsTitleWithId] = useState([]);
  const [openStates, setOpenStates] = useState(
    Array(ingredients.length).fill(false),
  );

  const formStyling = {
    "& .MuiInputBase-input": {
      color: theme === "dark" ? "white" : "inherit",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme === "dark" ? "white" : "black",
      opacity: "30%",
    },
    "& .MuiInputLabel-root": {
      color: theme === "dark" ? "white" : "inherit",
    },
    "& .MuiInput-root::before": {
      borderBottom:
        theme === "dark" ? "1px solid white" : "1px solid rgba(0, 0, 0, 0.42)",
      opacity: theme === "dark" ? "30%" : "inherit",
    },
    "& .MuiSvgIcon-root": {
      color: theme === "dark" ? "white" : "inherit",
    },
  };

  const loading = isOpen && options.length === 0;

  useEffect(() => {
    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetchIngredients();

      const ingredientsTitle = response.map((ingredient) => ingredient.ttl);

      if (isOpen) {
        setOptions([...ingredientsTitle]);
        setIngredientsTitleWithId(response);
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

  useEffect(() => {
    formik.setValues((prevValues) => ({
      ...prevValues,
      ingredients: ingredients,
    }));
  }, [ingredients]);

  const handleRemoveIngredient = (id) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
  };

  const handleRemoveLastIngredient = () => {
    const removeLastIngredient = ingredients.slice(0, -1);
    setIngredients(removeLastIngredient);
  };

  const findIngredientId = (ingredientTitle) => {
    const ingredientId = ingredientsTitleWithId.find(
      (ingredient) => ingredient.ttl === ingredientTitle,
    );
    return ingredientId?._id;
  };

  const ingredientsFormItem = ingredients.map((ingredient, index) => (
    <div className="mt-6 flex items-center justify-between" key={ingredient.id}>
      <div className="w-32 tablet:w-96" size="small">
        <Autocomplete
          id={`ingredients.${index}.ingredient`}
          name={`ingredients.${index}.ingredient`}
          size="small"
          value={ingredient.ingredient || ""}
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
          onChange={(_, newValue) => {
            setIngredients((prev) =>
              prev.map((item) => {
                if (item.id === ingredient.id) {
                  return {
                    ...item,
                    id: findIngredientId(newValue),
                    ingredient: newValue,
                  };
                }

                return item;
              }),
            );
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
              sx={formStyling}
              onBlur={formik.handleBlur}
              error={
                formik.touched.ingredients &&
                formik.touched.ingredients[index] &&
                Boolean(
                  formik.errors.ingredients &&
                    formik.errors.ingredients[index] &&
                    formik.errors.ingredients[index].ingredient,
                )
              }
              helperText={
                formik.touched.ingredients &&
                formik.touched.ingredients[index] &&
                formik.errors.ingredients &&
                formik.errors.ingredients[index] &&
                formik.errors.ingredients[index].ingredient
              }
            />
          )}
        />
      </div>
      <div className="w-16 tablet:w-28">
        <TextField
          id={`ingredients.${index}.quantity`}
          name={`ingredients.${index}.quantity`}
          value={ingredient.quantity || ""}
          label="Quantity"
          onChange={(e) => {
            const regex = /^[0-9]*(\.[0-9]{0,2})?$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setIngredients((prev) =>
                prev.map((item) => {
                  if (item.id === ingredient.id) {
                    return {
                      ...item,
                      quantity: e.target.value,
                    };
                  }
                  return item;
                }),
              );
            }
          }}
          size="small"
          sx={formStyling}
          onBlur={formik.handleBlur}
          error={
            formik.touched.ingredients &&
            formik.touched.ingredients[index] &&
            Boolean(
              formik.errors.ingredients &&
                formik.errors.ingredients[index] &&
                formik.errors.ingredients[index].quantity,
            )
          }
          helperText={
            formik.touched.ingredients &&
            formik.touched.ingredients[index] &&
            formik.errors.ingredients &&
            formik.errors.ingredients[index] &&
            formik.errors.ingredients[index].quantity
          }
        />
      </div>
      <div className="w-16 tablet:w-28" size="small">
        {/* <InputLabel
          id={`ingredients.${index}.measure`}
          name={`ingredients.${index}.measure`}
          onBlur={formik.handleBlur}
          error={
            formik.touched.ingredients &&
            formik.touched.ingredients[index] &&
            Boolean(
              formik.errors.ingredients &&
                formik.errors.ingredients[index] &&
                formik.errors.ingredients[index].measure,
            )
          }
          sx={{
            color: theme === "dark" ? "white" : "inherit", // Set color to white in dark mode
          }}
        >
          Measure
        </InputLabel> */}
        <TextField
          id={`ingredients.${index}.measure`}
          name={`ingredients.${index}.measure`}
          value={ingredient.measure || ""}
          label="Measure"
          size="small"
          select
          fullWidth
          onChange={(e) => {
            setIngredients((prev) =>
              prev.map((item) => {
                if (item.id === ingredient.id) {
                  return { ...item, measure: e.target.value };
                }
                return item;
              }),
            );
          }}
          sx={formStyling}
          onBlur={formik.handleBlur}
          error={
            formik.touched.ingredients &&
            formik.touched.ingredients[index] &&
            Boolean(
              formik.errors.ingredients &&
                formik.errors.ingredients[index] &&
                formik.errors.ingredients[index].measure,
            )
          }
          helperText={
            formik.touched.ingredients &&
            formik.touched.ingredients[index] &&
            formik.errors.ingredients &&
            formik.errors.ingredients[index] &&
            formik.errors.ingredients[index].measure
          }
        >
          {MEASURES.map((measure) => (
            <MenuItem key={measure} value={measure}>
              {measure}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <CloseIcon
        className="ml-2"
        fontSize="small"
        onClick={() => {
          handleRemoveIngredient(ingredient.id);
          setIngredientCount((prevCount) => prevCount - 1);
        }}
      />
    </div>
  ));

  return (
    <>
      <div className="mt-11 flex items-center justify-between tablet:mt-24">
        <h3 className="text-2xl font-semibold">Ingredients</h3>

        <div className="w-[92px] tablet:w-[110px]">
          <div className="relative flex max-w-[8rem] items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="flex h-7 items-center rounded-s-3xl border border-r-0 border-gray-300 p-3  focus:outline-none  dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
              onClick={() => {
                handleRemoveLastIngredient();
                setIngredientCount((prevCount) => prevCount - 1);
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
            <div className="flex h-7 w-full items-center justify-center border border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 tablet:h-8 tablet:text-base">
              {ingredientCount}
            </div>
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="flex h-7 items-center rounded-e-3xl border border-l-0 border-gray-300 p-3  focus:outline-none   dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 tablet:h-8"
              onClick={() => {
                handleAddIngredient();
                setIngredientCount((prevCount) => prevCount + 1);
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
        </div>
      </div>

      {ingredientsFormItem}
    </>
  );
};

RecipeIngredientsFields.propTypes = {
  theme: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};

export default RecipeIngredientsFields;
