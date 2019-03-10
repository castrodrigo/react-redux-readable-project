import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  VOTE_POST,
  REMOVE_POST
} from "../actions/posts";

export default (state = {}, action) => {
  const { post } = action;
  switch (action.type) {
    case GET_POSTS:
      const postsObject = {};
      action.posts.map(p => (postsObject[p.id] = p));
      return {
        ...state,
        ...postsObject
      };
    case ADD_POST:
    case UPDATE_POST:
    case VOTE_POST:
      return {
        ...state,
        [post.id]: post
      };
    case REMOVE_POST:
      return {
        ...state,
        [action.id]: undefined
      };
    default:
      return state;
  }
};
