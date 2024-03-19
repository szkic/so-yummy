import axios from "axios";

const fetcher = async (url) => {
  try {
    const response = await axios.get(url);
    const categories = response.data;

    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchCategories = async () =>
  fetcher("/api/recipes/category-list");

export const fetchMainPage = async () => fetcher("/api/recipes/main-page");

export const fetchCategoriesPage = async (categoryName) =>
  fetcher(`/api/recipes/category/${categoryName}`);

export const fetchIngredients = async () => fetcher("/api/ingredients/list");

export const fetchSearch = async (name, value) =>
  fetcher(`/api/search?${name}=${value}`);

export const fetchRecipeById = async (id) => fetcher(`/api/recipes/id/${id}`);

export const fetchIngredientsById = async (id, ingredients) => {
  try {
    const response = await axios.post("/api/ingredients", {
      id,
      ingredientsIds: ingredients,
    });
    const categories = response.data;

    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchFavorites = async (user) => {
  try {
    const response = await axios.post("/api/favorite", { user });
    const favorites = response.data;

    return favorites;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchShoppingList = async (data) => {
  try {
    const response = await axios.post("/api/shopping-list", { data });
    const shoppingList = response.data;

    return shoppingList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
