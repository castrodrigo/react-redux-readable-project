import { showLoading, hideLoading } from "react-redux-loading";
import * as api from "../api";
import { generateUUID } from "../util/id";
import { generateTimestamp } from "../util/date";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const getComments = (comments, postId) => ({
  type: GET_COMMENTS,
  postId,
  comments
});

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const handleAddComment = (comment, postId) => dispatch => {
  dispatch(showLoading());

  return api
    .addComment({
      id: generateUUID(),
      ...comment,
      timestamp: generateTimestamp(),
      parentId: postId
    })
    .then(comment => dispatch(addComment(comment)))
    .then(() => dispatch(hideLoading()));
};
