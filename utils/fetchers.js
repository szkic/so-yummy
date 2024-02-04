import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get("/api/recipes/category-list");
  const categories = response.data;

  return categories;
};

export const fetchMainPage = async () => {
  const response = await axios.get("/api/recipes/main-page");
  const categories = response.data;

  return categories;
};
