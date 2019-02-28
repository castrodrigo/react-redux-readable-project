export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const VOTE_POST = "VOTE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});
