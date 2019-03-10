import { showLoading, hideLoading } from "react-redux-loading";
import * as api from "../api";
import { generateUUID } from "../util/id";
import { generateTimestamp } from "../util/date";

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const VOTE_POST = "VOTE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const UPVOTE = "upVote";
export const DOWNVOTE = "downVote";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const getPost = post => ({
  type: GET_POST,
  post
});

export const handleGetPost = id => dispatch => {
  dispatch(showLoading());

  return api
    .getPost(id)
    .then(post => dispatch(getPost(post)))
    .then(() => dispatch(hideLoading()));
};

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

const votePost = post => ({
  type: VOTE_POST,
  post
});

export const handleVotePost = (id, vote) => dispatch => {
  dispatch(showLoading());

  return api
    .votePost(id, vote)
    .then(post => dispatch(votePost(post)))
    .then(() => dispatch(hideLoading()));
};

const removePost = id => ({
  type: REMOVE_POST,
  id
});

export const handleRemovePost = id => dispatch => {
  dispatch(showLoading());

  return api
    .removePost(id)
    .then(() => dispatch(removePost(id)))
    .then(() => dispatch(hideLoading()));
};
