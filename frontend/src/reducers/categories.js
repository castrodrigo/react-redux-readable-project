import { GET_CATEGORIES } from "../actions/categories";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const categoriesObject = {};
      action.categories.map(
        category => (categoriesObject[category.path] = category)
      );
      return {
        ...state,
        ...categoriesObject
      };
    default:
      return state;
  }
};
