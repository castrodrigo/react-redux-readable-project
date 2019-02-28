import { showLoading, hideLoading } from "react-redux-loading";
import * as api from "../api";
import { getPosts } from "./posts";

export const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  return api.getPosts().then(posts => {
    dispatch(getPosts(posts));
    dispatch(hideLoading());
  });
};
