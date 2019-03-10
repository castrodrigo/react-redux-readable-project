import { showLoading, hideLoading } from "react-redux-loading";
import * as api from "../api";
import { generateUUID } from "../util/id";
import { generateTimestamp } from "../util/date";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const VOTE_POST = "VOTE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

const addPost = post => ({
  type: ADD_POST,
  post
});

export const handleAddPost = data => dispatch => {
  dispatch(showLoading());

  return api
    .addPost({
      id: generateUUID(),
      ...data,
      timestamp: generateTimestamp()
    })
    .then(post => dispatch(addPost(post)))
    .then(() => dispatch(hideLoading()));
};

const updatePost = post => ({
  type: UPDATE_POST,
  post
});

export const handleUpdatePost = (id, { title, body }) => dispatch => {
  dispatch(showLoading());

  return api
    .updatePost(id, {
      title,
      body
    })
    .then(post => dispatch(updatePost(post)))
    .then(() => dispatch(hideLoading()));
};
