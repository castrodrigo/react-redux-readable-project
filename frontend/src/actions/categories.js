import * as api from "../api";

export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const handleGetCategories = () => dispatch =>
  api.getCategories().then(categories => {
    dispatch(getCategories(categories));
  });
