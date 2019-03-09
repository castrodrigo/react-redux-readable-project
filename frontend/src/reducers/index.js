import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import posts from "./posts";
import comments from "./comments";
import categories from "./categories";
import dashboard from "./dashboard";

export default combineReducers({
  posts,
  comments,
  categories,
  dashboard,
  loadingBar: loadingBarReducer
});
