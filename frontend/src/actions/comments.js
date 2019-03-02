export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const getComments = comments => ({
  type: GET_COMMENTS,
  comments
});
