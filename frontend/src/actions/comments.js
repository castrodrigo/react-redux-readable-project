import { showLoading, hideLoading } from "react-redux-loading";
import * as api from "../api";
import { generateUUID } from "../util/id";
import { generateTimestamp } from "../util/date";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const UPVOTE = "upVote";
export const DOWNVOTE = "downVote";

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

const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment
});

export const handleVoteComment = (id, vote) => dispatch => {
  dispatch(showLoading());

  return api
    .voteComment(id, vote)
    .then(comment => dispatch(voteComment(comment)))
    .then(() => dispatch(hideLoading()));
};

const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const handleUpdateComment = (id, { body }) => dispatch => {
  dispatch(showLoading());

  return api
    .updateComment(id, {
      timestamp: generateTimestamp(),
      body
    })
    .then(comment => dispatch(updateComment(comment)))
    .then(() => dispatch(hideLoading()));
};

const removeComment = (id, postId) => ({
  type: REMOVE_COMMENT,
  id,
  postId
});

export const handleRemoveComment = (id, postId) => dispatch => {
  dispatch(showLoading());

  return api
    .removeComment(id)
    .then(() => dispatch(removeComment(id, postId)))
    .then(() => dispatch(hideLoading()));
};
