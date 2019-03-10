import { GET_POSTS, ADD_POST, UPDATE_POST } from "../actions/posts";

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
      return {
        ...state,
        [post.id]: post
      };
    default:
      return state;
  }
};
