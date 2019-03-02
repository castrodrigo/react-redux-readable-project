import { GET_CATEGORIES } from "../actions/categories";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const categoryObject = {};
      action.categories.map(
        category => (categoryObject[category.path] = category)
      );
      return {
        ...state,
        ...categoryObject
      };
    default:
      return state;
  }
};
