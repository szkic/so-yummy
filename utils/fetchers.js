import axios from "axios";

export const fetchCategories = async () => {
  try {
    const response = await axios.get("/api/recipes/category-list");
    const categories = response.data;

    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMainPage = async () => {
  try {
    const response = await axios.get("/api/recipes/main-page");
    const categories = response.data;

    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchCategoriesPage = async (categoryName) => {
  try {
    const response = await axios.get(`/api/recipes/category/${categoryName}`);
    const category = response.data;

    return category;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
