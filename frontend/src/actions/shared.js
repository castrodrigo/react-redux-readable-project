import { showLoading, hideLoading } from "react-redux-loading";
import * as api from "../api";
import { getPosts } from "./posts";
import { getCategories } from "./categories";

export const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  return Promise.all([api.getPosts(), api.getCategories()]).then(
    ([posts, categories]) => {
      dispatch(getCategories(categories));
      dispatch(getPosts(posts));
      dispatch(hideLoading());
    }
  );
};
